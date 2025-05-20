import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm' // For GitHub Flavored Markdown support

const markdownContent = `
# EverSince – Privacy Policy

**Effective Date:** May 20, 2025

**App Name:** EverSince

**Developer:** 2pp Studio

**Contact:** eversince.support@2pp.app

---

### 1. Information We Collect

EverSince is designed to prioritize your privacy. We collect minimal data to enhance app functionality:

- **Usage Data**: We use Google Analytics to collect anonymized data about how you interact with the app (e.g., button clicks, event creation). This may include device identifiers (e.g., anonymized device ID) and general location data (e.g., country or region). This data is not linked to your personal identity.
- **App Tracking Transparency**: Before collecting usage data via Google Analytics, we will request your permission through Apple’s App Tracking Transparency framework. You can opt out of tracking at any time via your device settings.
- **No Personal Information**: We do **not collect, store, or share** personal information such as your name, email, or specific event details unless you explicitly provide it (e.g., through support inquiries).

We do **not require you to create an account** to use EverSince.

---

### 2. Data Stored on Device

All your events, reminders, and tags are stored **locally on your device** in a secure manner. EverSince does **not upload** this data to any servers.

You have full control over your data. If you delete the app, all locally stored information will be removed from your device.

---

### 3. Notifications

If you enable reminders, EverSince will request permission to send notifications. These are processed **entirely on-device** and are not shared with any external services.

---

### 4. In-App Purchases

EverSince offers optional in-app purchases to unlock premium features. These transactions are handled securely through Apple’s App Store infrastructure. We do **not process or store** any payment information ourselves.

---

### 5. Third-Party Services

EverSince uses **Google Analytics**, a service provided by Google, Inc., to collect anonymized usage data. We have enabled IP anonymization to further protect your privacy. Google Analytics may use cookies or device identifiers to track app interactions, but this data is not linked to your personal identity. For more details, please review [Google’s Privacy Policy](https://policies.google.com/privacy).

You can opt out of Google Analytics tracking via your device’s settings or by contacting us.

We do **not use** any other third-party analytics, advertising, or tracking services.

---

### 6. Data Security

We implement industry-standard measures to protect the limited data we collect (via Google Analytics) and the data stored locally on your device. However, no method of transmission or storage is completely secure, and we encourage you to use strong device-level security practices.

---

### 7. Your Privacy Rights

Depending on your region, you may have rights under privacy laws (e.g., GDPR, CCPA), including:
- **Access**: Request a copy of the data we collect about you (limited to anonymized usage data).
- **Deletion**: Request deletion of your data (note: local data is deleted when you uninstall the app).
- **Opt-Out**: Opt out of tracking via Google Analytics through your device settings or by contacting us.

To exercise these rights, contact us at eversince.support@2pp.app.

---

### 8. Changes to This Policy

We may update this Privacy Policy to reflect changes in our practices or legal requirements. Significant changes will be communicated via the App Store update notes or in-app notifications. We encourage you to review this policy periodically.

---

### 9. Contact

If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:

📧 **eversince.support@2pp.app**
`

const PrivacyPolicy = () => {
  return (
    <div
      className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 prose prose-lg max-w-none 
                   prose-headings:font-bold prose-headings:text-gray-900 
                   prose-p:text-gray-700 prose-strong:text-gray-900 
                   prose-a:text-blue-600 prose-a:hover:text-blue-800
                   prose-ul:list-disc prose-ul:pl-6
                   prose-ol:list-decimal prose-ol:pl-6"
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
    </div>
  )
}

export default PrivacyPolicy
