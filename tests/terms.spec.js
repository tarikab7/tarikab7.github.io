const { test, expect } = require('@playwright/test');

test.describe('Terms of Use Page E2E', () => {
  test('renders markdown content correctly on fetch success', async ({ page }) => {
    const mockMarkdown = `# Terms of Use\n\nWelcome to Multi-Minigames terms.\n\n## 1. Acceptance of Terms\n\nBy downloading or using the app, these terms will automatically apply to you.\n\n## 2. User Conduct\n\nDo not misuse the software.`;

    await page.route('**/TERMS_AND_CONDITIONS.md*', route => {
      route.fulfill({
        status: 200,
        contentType: 'text/markdown',
        body: mockMarkdown,
      });
    });

    await page.goto('/terms.html');

    // Title verify
    await expect(page).toHaveTitle('Terms of Use - Multi-Minigames');

    // Container content verify
    const mdContent = page.locator('#md-content');
    await expect(mdContent).not.toContainText('Loading Terms of Use...');
    await expect(mdContent.locator('h1')).toHaveText('Terms of Use');

    // Verify sections rendered into .toy-section-card
    const cards = mdContent.locator('.toy-section-card');
    await expect(cards).toHaveCount(2);
    await expect(cards.nth(0)).toContainText('1. Acceptance of Terms');
    await expect(cards.nth(1)).toContainText('2. User Conduct');

    // Verify footer
    await expect(page.locator('footer')).toContainText('Seyhan Tarik Akgöz');
  });

  test('displays error message when markdown fetch returns error HTTP status', async ({ page }) => {
    await page.route('**/TERMS_AND_CONDITIONS.md*', route => {
      route.fulfill({
        status: 404,
        body: 'Not Found',
      });
    });

    await page.goto('/terms.html');

    const mdContent = page.locator('#md-content');
    await expect(mdContent).toContainText('Error loading Terms of Use. Please refresh the page.');
  });

  test('displays error message when markdown fetch request is aborted due to network failure', async ({ page }) => {
    await page.route('**/TERMS_AND_CONDITIONS.md*', route => {
      route.abort('failed');
    });

    await page.goto('/terms.html');

    const mdContent = page.locator('#md-content');
    await expect(mdContent).toContainText('Error loading Terms of Use. Please refresh the page.');
  });

  test('navigates back to home page when clicking back button', async ({ page }) => {
    await page.route('**/TERMS_AND_CONDITIONS.md*', route => {
      route.fulfill({
        status: 200,
        contentType: 'text/markdown',
        body: '# Terms of Use\n\n## Test Section\nTest content',
      });
    });

    await page.goto('/terms.html');

    const backButton = page.locator('a.back-btn');
    await expect(backButton).toHaveAttribute('href', 'index.html');

    await backButton.click();
    await expect(page).toHaveURL(/.*index\.html$/);
  });
});
