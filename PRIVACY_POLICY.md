# Privacy Policy for Multi-Minigames: 1v1 Offline Battles

**Last Updated:** November 22, 2026

This Privacy Policy describes how we collect, use, process, and protect your information when you download, install, and use the mobile application "Multi-Minigames: 1v1 Offline Battles" ("the App").

### 1. Data Controller
The Data Controller responsible for the processing of your personal information in connection with the App is:
*   **Developer:** Seyhan Tarik Akgöz
*   **Contact Email:** studio@tarikakgoz.com

---

### 2. Information Collection and Processing

The App is designed primarily as a local, offline peer-to-peer (P2P) multiplayer gaming hub. We are committed to minimizing data collection to respect your privacy.

#### A. Data Processed Locally (P2P Offline Infrastructure)
To facilitate real-time multiplayer functionality without internet dependency, the App utilizes local hardware capabilities.
*   **Local Microphone (RECORD_AUDIO):** The App uses your device's microphone to allow recording and sending voice messages to your opponent during local P2P matches. 
    *   *Storage & Processing:* Audio recordings are encoded, processed locally on-device, and transmitted directly to the other player via P2P. We **do not** store, listen to, or transmit your voice data to any external developer-owned or third-party servers.
*   **Nearby Connections API:** To discover and connect to nearby devices, the App uses Google's Nearby Connections API. This requires local device permissions for Bluetooth, Wi-Fi, and Location (which is required by the Android operating system to perform local radio scans).
    *   *Shared with the players you connect to:* your player name, your profile picture (if you set one), a premium flag and a pseudonymous player ID (see section B). This data goes directly to the other device and is never transmitted to us.
*   **Match History on Your Device:** The App stores the names, profile pictures and player IDs of the opponents you have played, and your match history with them (game, result, score, date), in the App's private storage on your device, so it can show your history and statistics. This data stays on your device and is deleted when you uninstall the App.
*   **Game Statistics & Install Date:** Your match results, high scores and the date the App was first installed are stored only on your device. The install date is used to show no banner ads during your first days with the App.
*   **Ad Frequency Tuning:** When ads are shown, the App stores on your device a running average of the estimated revenue those ads generated (as reported by the AdMob SDK). Where this feature is enabled, the average may be used to show interstitial ads slightly more or less often. It only affects how often ads appear — never gameplay, difficulty or results — and it is never sent to us.

#### B. Friends Leaderboard
The App shows how you rank among the players your phone knows about. It works without any server:
*   **What is shared:** a "leaderboard card" with your player name, a small version of your profile picture (if you set one), your pseudonymous player ID, and your game statistics: wins, losses and draws against real players, win streaks, best scores, biggest win margins (including the opponent's name and player ID at the time), game ratings, and when the card was last updated.
*   **How it spreads:** when your phone connects to another phone running the App, the two exchange leaderboard cards in the background. Phones also pass on cards they received earlier, so your card can reach any phone in that chain, including players you have never met. Each card is signed on your device so other phones can check that it has not been altered.
*   **Player ID:** the ID is derived from a cryptographic key created on your device. It stays the same when you reinstall the App on the same device, and when you restore an Android backup on a new device. It does not contain your device's hardware identifiers, and your Android device ID never leaves your device.
*   **Storage:** each phone keeps up to 5,000 cards in the App's private storage. Cards are not sent to us or to any server, and we cannot access them. Your key and your own card are included in Android's backup (your Google account backup), if you have backup turned on, so your ID and statistics can be restored.
*   **Your choices:** you can turn off "Share on friends leaderboard" in Settings at any time. Your phone then publishes a signed removal notice that replaces your card as it spreads. Copies already passed to other phones cannot be recalled or deleted by us, and a phone that never connects again keeps the copy it has. Cards that have not been updated for 180 days are no longer shown in rankings. You can also hide any player on your own phone.

#### C. Data Processed by Third-Party Services (Advertising, Analytics & Crash Reporting)
To support the ongoing development, performance optimization, and monetization of the App, we integrate secure third-party services provided by Google:
*   **Google AdMob:** AdMob may collect and process device-level identifiers (such as the Android Advertising ID), cookies, IP addresses, and interaction history with ads for analytics and targeting.
*   **Google Firebase:** To monitor and improve App stability, performance, and user engagement, we utilize the Google Firebase SDK:
    *   *Firebase Crashlytics:* Automatically collects anonymous crash reports, stack traces, and device telemetry (such as device model, OS version, RAM capacity, and battery level) whenever the App crashes in the wild.
    *   *Firebase Analytics:* Collects pseudonymous usage statistics (such as screen transitions, active game sessions, feature engagement and ad impressions), linked to a random app-instance identifier rather than your name or contact details.
    *   *Firebase Remote Config & A/B Testing:* The App downloads ad-pacing settings (such as how often interstitial ads may appear and how long new players see no banner ads) from Google. To deliver these settings, Google uses a random Firebase installation identifier. Different players may receive different settings as part of experiments that measure which settings work best. These settings are limited to safe ranges and never change gameplay.
*   **Consent Management (UMP SDK):** For users residing in the European Economic Area (EEA), the United Kingdom, and other regulated regions, we implement the Google User Messaging Platform (UMP) SDK. Upon the first launch of the App, you will be presented with an interactive consent panel allowing you to choose whether to accept personalized advertising.

To learn more about how Google handles and protects your data, please review: [Google's Privacy & Terms](https://policies.google.com/technologies/partner-sites).

---

### 3. Legal Bases for Processing (GDPR Compliance)
If you reside in the European Economic Area (EEA) or the United Kingdom, we process any personal data under the following legal bases of the General Data Protection Regulation (GDPR):
*   **Consent (Art. 6(1)(a) GDPR):** For the serving of personalized advertisements through Google AdMob, where you have explicitly opted in via our consent dialog. You have the right to withdraw this consent at any time.
*   **Performance of a Contract (Art. 6(1)(b) GDPR):** For establishing and maintaining local P2P matches (e.g., audio and device connection transmissions) that you request when initiating a local game.
*   **Legitimate Interests (Art. 6(1)(f) GDPR):** For rendering basic, non-personalized ads, analyzing pseudonymous usage diagnostics, testing ad-pacing settings, tuning ad frequency on your device, and preventing fraudulent billing practices, and for the friends leaderboard, which you can turn off at any time in Settings. You may object to the ad testing and tuning at any time by contacting us.

---

### 4. California Privacy Rights (CCPA / CPRA Compliance)
If you are a California resident, the California Consumer Privacy Act (CCPA), as amended by the CPRA, grants you specific rights:
*   **Categories of Information Collected:** In the preceding 12 months, third-party services integrated within the App (Google AdMob and Google Firebase) may have collected identifiers (e.g., IP address, device ad ID, app-instance and Firebase installation IDs) and internet/electronic network activity.
*   **Leaderboard:** your player name, profile picture, player ID and game statistics are shared with other players' devices to provide the friends leaderboard (see section 2B). We do not receive or sell this data.
*   **Sale or Sharing of Personal Information:** We do not directly sell your personal data. However, sharing device identifiers with advertising networks for personalized advertising may be classified as a "sale" or "sharing" under California law. 
*   **Opt-Out Right:** You can opt-out of personalized tracking at any time by accessing the in-app privacy settings form, or by utilizing device-level privacy settings (such as enabling "Opt out of Ads Personalization" or "Delete Advertising ID" on your Android device).

---

### 5. Your Rights as a Data Subject
Depending on your geographical location (e.g., GDPR/CCPA jurisdictions), you hold the following rights:
*   **Right of Access & Portability:** Request details about the data we or our partners collect.
*   **Right to Rectification:** Request corrections to inaccurate information.
*   **Right to Erasure ("Right to be Forgotten"):** Request deletion of data. (Note: Because we do not store your personal data on any servers, we hold no active user accounts or data files to delete. Leaderboard cards live on other players' phones, which we cannot access; use the "Share on friends leaderboard" switch to publish a removal notice. Data kept on your device, including the ad-revenue average, is removed when you clear the App's data or uninstall it).
*   **Right to Withdraw Consent:** Revoke your ad-tracking consent at any time via the UMP consent form in the App settings.
*   **Right to Lodge a Complaint:** You have the right to contact or lodge a complaint with your local Data Protection Authority.

---

### 6. Children's Privacy (COPPA & Play Store Families Policy)
The App is not directed at children under the age of 13 (or the legal age of consent in your jurisdiction). We do not knowingly collect personal data from children. 
*   If we discover that a child under 13 has provided us with personal information (though none is collected directly by our servers), we will immediately take steps to ensure compliance.
*   In full compliance with Google Play Developer policies, the advertising SDK is configured to restrict personalized data collection for users known to be under the age of consent.

---

### 7. Changes to This Privacy Policy
We may update this Privacy Policy from time to time to reflect operational or regulatory changes. We will notify you of any modifications by updating the "Last Updated" date at the top of this policy. You are encouraged to review this page periodically.

---

### 8. Contact Us
If you have any questions, concerns, or requests regarding your privacy, please reach out to us at:
*   **Email:** studio@tarikakgoz.com
