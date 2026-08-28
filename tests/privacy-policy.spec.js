const { test, expect } = require('@playwright/test');

test.describe('Privacy Policy Page E2E', () => {
  test('should render privacy policy content correctly on successful fetch', async ({ page }) => {
    await page.goto('/privacy-policy.html');

    const mdContent = page.locator('#md-content');
    await expect(mdContent).not.toHaveText('Loading Privacy Policy...');

    await expect(page.locator('#md-content h1')).toContainText('Privacy Policy');

    const cards = page.locator('#md-content .toy-section-card');
    await expect(cards.first()).toBeVisible();
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);

    await expect(page.locator('footer')).toContainText('Multi-Minigames');
  });

  test('should navigate back to home page when clicking Back to Home', async ({ page }) => {
    await page.goto('/privacy-policy.html');
    const backBtn = page.locator('a.back-btn');
    await expect(backBtn).toHaveAttribute('href', 'index.html');
  });

  test('should handle fetch success with mocked markdown content', async ({ page }) => {
    const mockMarkdown = `# Test Privacy Policy\n---\n## Section 1: Intro\nThis is section 1 details.\n---\n## Section 2: Data Usage\nThis is section 2 details.\n`;

    await page.route('**/PRIVACY_POLICY.md*', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'text/markdown',
        body: mockMarkdown,
      });
    });

    await page.goto('/privacy-policy.html');

    const mdContent = page.locator('#md-content');
    await expect(mdContent).toBeVisible();

    await expect(page.locator('#md-content h1')).toHaveText('Test Privacy Policy');

    const cards = page.locator('#md-content .toy-section-card');
    await expect(cards).toHaveCount(2);
    await expect(cards.nth(0)).toContainText('Section 1: Intro');
    await expect(cards.nth(1)).toContainText('Section 2: Data Usage');
  });

  test('should display error message when markdown fetch returns 404', async ({ page }) => {
    await page.route('**/PRIVACY_POLICY.md*', async (route) => {
      await route.fulfill({
        status: 404,
        body: 'Not Found',
      });
    });

    await page.goto('/privacy-policy.html');

    const mdContent = page.locator('#md-content');
    await expect(mdContent).toHaveText('Error loading Privacy Policy. Please refresh the page.');
  });

  test('should display error message when markdown fetch request is aborted', async ({ page }) => {
    await page.route('**/PRIVACY_POLICY.md*', async (route) => {
      await route.abort('failed');
    });

    await page.goto('/privacy-policy.html');

    const mdContent = page.locator('#md-content');
    await expect(mdContent).toHaveText('Error loading Privacy Policy. Please refresh the page.');
  });
});
