# Privacy Policy for Multi-Minigames: 1v1 Offline Battles

**Last Updated:** August 27, 2026

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
    *   *Storage & Processing:* Connection information and player names are shared locally between matching devices only. This data is handled in memory on-device and is never transmitted to us or stored externally.

#### B. Voluntary In-App Feedback & Bug Reports (Google Cloud Firestore)
The App includes an in-app feedback and bug reporting tool located in the Settings menu.
*   **Voluntary Submission:** Feedback submission is entirely optional. When you choose to submit a report, the App transmits your user-entered title and description to our secure Google Cloud Firestore database (`feedback` collection).
*   **Optional Diagnostic Logs:** If you choose to keep the "Attach device diagnostics" option enabled, the report will also include general device technical metadata (device model, Android OS version, app version code, total memory) and the last several application event log breadcrumbs (e.g., UI screen navigation, match start/end events, error tags).
*   **No Personal Identifiers:** We do not request or store your name, email address, phone number, contacts, or passwords in feedback submissions.
*   **Purpose:** This data is used exclusively to diagnose technical issues, fix software bugs, and improve gameplay features.

#### C. Data Processed by Third-Party Services (Advertising, Analytics & Crash Reporting)
To support the ongoing development, performance optimization, and monetization of the App, we integrate secure third-party services provided by Google:
*   **Google AdMob:** AdMob may collect and process device-level identifiers (such as the Android Advertising ID), cookies, IP addresses, and interaction history with ads for analytics and targeting.
*   **Google Firebase & Cloud Firestore:** To monitor and improve App stability, performance, and user engagement, we utilize the Google Firebase SDK:
    *   *Firebase Crashlytics:* Automatically collects anonymous crash reports, stack traces, and device telemetry (such as device model, OS version, RAM capacity, and battery level) whenever the App crashes in the wild.
    *   *Firebase Analytics:* Collects anonymous, aggregated usage statistics (such as screen transitions, active game sessions, and feature engagement metrics). This data contains no personally identifiable information (PII).
    *   *Cloud Firestore:* Securely stores user-submitted bug reports and feedback as described in Section 2.B. All transmissions are encrypted in transit via HTTPS/TLS.
*   **Consent Management (UMP SDK):** For users residing in the European Economic Area (EEA), the United Kingdom, and other regulated regions, we implement the Google User Messaging Platform (UMP) SDK. Upon the first launch of the App, you will be presented with an interactive consent panel allowing you to choose whether to accept personalized advertising.

To learn more about how Google handles and protects your data, please review: [Google's Privacy & Terms](https://policies.google.com/technologies/partner-sites).

---

### 3. Legal Bases for Processing (GDPR Compliance)
If you reside in the European Economic Area (EEA) or the United Kingdom, we process any personal data under the following legal bases of the General Data Protection Regulation (GDPR):
*   **Consent (Art. 6(1)(a) GDPR):** For the serving of personalized advertisements through Google AdMob, where you have explicitly opted in via our consent dialog. You have the right to withdraw this consent at any time.
*   **Performance of a Contract (Art. 6(1)(b) GDPR):** For establishing and maintaining local P2P matches (e.g., audio and device connection transmissions) that you request when initiating a local game.
*   **Legitimate Interests (Art. 6(1)(f) GDPR):** For rendering basic, non-personalized ads, analyzing anonymized usage diagnostics, and preventing fraudulent billing practices.

---

### 4. California Privacy Rights (CCPA / CPRA Compliance)
If you are a California resident, the California Consumer Privacy Act (CCPA), as amended by the CPRA, grants you specific rights:
*   **Categories of Information Collected:** In the preceding 12 months, third-party services integrated within the App (Google AdMob) may have collected identifiers (e.g., IP address, device ad ID) and internet/electronic network activity.
*   **Sale or Sharing of Personal Information:** We do not directly sell your personal data. However, sharing device identifiers with advertising networks for personalized advertising may be classified as a "sale" or "sharing" under California law. 
*   **Opt-Out Right:** You can opt-out of personalized tracking at any time by accessing the in-app privacy settings form, or by utilizing device-level privacy settings (such as enabling "Opt out of Ads Personalization" or "Delete Advertising ID" on your Android device).

---

### 5. Your Rights as a Data Subject
Depending on your geographical location (e.g., GDPR/CCPA jurisdictions), you hold the following rights:
*   **Right of Access & Portability:** Request details about the data we or our partners collect.
*   **Right to Rectification:** Request corrections to inaccurate information.
*   **Right to Erasure ("Right to be Forgotten"):** Request deletion of data. (Note: Because we do not store your personal data on any servers, we hold no active user accounts or data files to delete).
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
