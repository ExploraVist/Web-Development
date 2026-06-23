import React from 'react';
import '../../styles/privacy/Privacy.css';

const Table = ({ headers, rows }) => (
  <div className="privacy-table-wrap">
    <table className="privacy-table">
      <thead>
        <tr>
          {headers.map((h) => (
            <th key={h} scope="col">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const PrivacyContent = () => (
  <section className="privacy" role="region" aria-label="ExploraVist Privacy Policy">
    <div className="privacy-shell">
      <header>
        <span className="privacy-eyebrow">Legal</span>
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-meta">Version 1.0 &middot; Last Updated: June 23, 2026</p>
      </header>

      {/* PLAIN-LANGUAGE SUMMARY */}
      <div className="privacy-section">
        <h2 className="privacy-h2">Plain-Language Summary</h2>
        <p>
          ExploraVist builds assistive technology — including a wearable device and a companion
          iOS app — for people who are blind or visually impaired. This Privacy Policy applies to
          the ExploraVist iOS app. Here is what you need to know about your privacy:
        </p>
        <ul className="privacy-list">
          <li>
            <strong>Your photos, face data, and notes stay on your device.</strong> The AI
            models that describe scenes, recognize faces, and process depth run entirely on
            your iPhone. This data is never uploaded unless you choose otherwise.
          </li>
          <li>
            <strong>You control cloud features.</strong> Scene description can optionally be
            processed in the cloud. This is on by default and can be disabled at any time in
            Settings → Cloud Descriptions.
          </li>
          <li>
            <strong>We do not sell your data.</strong> We do not advertise to you. We do not
            share your data with data brokers.
          </li>
          <li>
            <strong>We store analytics and crash reporting.</strong> Our cloud services
            receive usage events and crash reports to help us improve the app.
          </li>
          <li>
            <strong>Your face recognition data never leaves your device.</strong> Face
            embeddings and the names you assign to people are stored only on your device.
          </li>
        </ul>
        <p>
          Full details are in the sections below. If you have questions, contact us at{' '}
          <a href="mailto:exploravist@exploravist.net">exploravist@exploravist.net</a>.
        </p>
      </div>

      {/* 1. WHO WE ARE */}
      <div className="privacy-section" id="who-we-are">
        <h2 className="privacy-h2">1. Who We Are</h2>
        <p>
          ExploraVist Inc ("we," "our," or "us"), located at 2261 Market Street STE 85134, builds
          assistive technology for people who are blind or visually impaired, including a wearable
          device and a companion iOS app.
        </p>
        <p>
          The ExploraVist iOS app helps users understand their surroundings through on-device
          artificial intelligence, scene description, face recognition, and voice-driven
          interaction.
        </p>
        <p>
          <strong>Scope of this policy.</strong> This Privacy Policy describes how we handle
          information in connection with the ExploraVist iOS app. A separate privacy policy
          governing our wearable device will be published as that product matures; until then,
          this policy does not cover the wearable.
        </p>
        <p>
          Data controller for GDPR purposes: ExploraVist Inc., 2261 Market Street STE 85134, San
          Francisco, CA. EU representative (if required under GDPR Article 27): Not applicable.
        </p>
        <p>
          For all privacy questions, requests, or complaints, email{' '}
          <a href="mailto:privacy@exploravist.net">privacy@exploravist.net</a>. We will respond
          to privacy requests within 30 days of receipt.
        </p>
      </div>

      {/* 2. PRINCIPLES */}
      <div className="privacy-section" id="principles">
        <h2 className="privacy-h2">2. Our Privacy Principles</h2>
        <p>
          ExploraVist is built on an on-device-first architecture as a deliberate
          privacy-protective design choice. The five machine learning models at the core of the
          app — scene description, depth estimation, face recognition, object recognition, and
          semantic search — run entirely on your device without sending data to any server. This
          means your most sensitive data (your face recognition database, your photos, your
          notes) never leaves your iPhone.
        </p>
        <p>
          Cloud features are optional enhancements, not requirements. You can use all core
          features of ExploraVist fully offline.
        </p>
        <p>
          We do not sell your data. We do not use your data for advertising. We do not share your
          data with data brokers.
        </p>
      </div>

      {/* 3. INFORMATION WE COLLECT */}
      <div className="privacy-section" id="information-we-collect">
        <h2 className="privacy-h2">3. Information We Collect</h2>

        <h3 className="privacy-h3">3.1 Account Information</h3>
        <p className="privacy-source">Source: Directly from you at sign-in.</p>
        <p>When you create an account or sign in, we collect:</p>
        <ul className="privacy-list">
          <li>Name — provided via Apple Sign-In, Google Sign-In, or entered directly</li>
          <li>
            Email address — used to identify your account and for account-related communications
            such as password reset emails
          </li>
        </ul>
        <p>
          You may use ExploraVist in guest mode without creating an account. In guest mode, no
          account information is collected. Usage analytics (Section 3.4) still run in guest mode
          but without a linked identity.
        </p>

        <h3 className="privacy-h3">3.2 Device and Account Identifiers</h3>
        <p className="privacy-source">Source: Generated automatically when you first sign in.</p>
        <ul className="privacy-list">
          <li>
            Firebase User ID — a unique identifier assigned by Firebase Authentication to your
            account, used to authenticate your session
          </li>
          <li>
            Device name and device ID — your device's name (e.g. "James's iPhone") and a
            generated HMAC credential sent to our servers when you first sign in, solely to
            authenticate your device for API access
          </li>
        </ul>

        <h3 className="privacy-h3">3.3 Location</h3>
        <p className="privacy-source">
          Source: Directly from you, only when you choose to attach location to a note.
        </p>
        <p>When you create a note and opt to include your location, we collect:</p>
        <ul className="privacy-list">
          <li>GPS coordinates (latitude and longitude)</li>
          <li>A human-readable address derived by reverse-geocoding those coordinates</li>
        </ul>
        <p>
          Location data is stored only on your device in the app's private database. Coordinates
          are never transmitted to our servers or to any third party. We request location access
          only while the app is in use ("When In Use" authorization). Location is never collected
          automatically or in the background.
        </p>

        <h3 className="privacy-h3">3.4 Usage Data</h3>
        <p className="privacy-source">Source: Collected automatically while you use the app.</p>
        <p>
          We use Firebase Analytics (operated by Google LLC) to collect information about how you
          use the app, including:
        </p>
        <ul className="privacy-list">
          <li>Screens viewed</li>
          <li>
            Features used (scene description, voice search, face enrollment, note creation, photo
            saving)
          </li>
          <li>Whether features succeed or fail, and how long they take</li>
          <li>Whether cloud enhancement is enabled and which AI model is active</li>
          <li>Whether VoiceOver is running</li>
          <li>Whether camera, microphone, and location permissions were granted or denied</li>
        </ul>
        <p>
          This data is linked to your Firebase installation ID, which is tied to your account if
          you are signed in. In guest mode, events are logged without an account identifier.
        </p>

        <h3 className="privacy-h3">3.5 Diagnostic Data</h3>
        <p className="privacy-source">
          Source: Collected automatically when the app crashes or encounters an error.
        </p>
        <p>
          We use Firebase Crashlytics and Firebase Performance Monitoring (both operated by Google
          LLC) to detect and fix crashes and performance problems. This includes:
        </p>
        <ul className="privacy-list">
          <li>Crash reports and stack traces</li>
          <li>Non-fatal errors</li>
          <li>App performance measurements (e.g. how long scene description takes)</li>
          <li>
            Contextual information at the time of a crash: the last screen visited, camera and
            microphone permission states, whether VoiceOver was running, and which AI model was
            active
          </li>
        </ul>

        <h3 className="privacy-h3">3.6 Camera and Photos</h3>
        <p className="privacy-source">Source: Directly from you via the device camera.</p>
        <p>
          The camera is used continuously while the Explore feature is active to provide
          real-time scene description. Camera frames are processed on-device by our AI models.
          Frames are not stored or transmitted unless you explicitly save a photo or have cloud
          enhancement enabled.
        </p>
        <p>
          <strong>In-app gallery:</strong> Photos you save are stored in the app's private
          on-device database. They are not saved to your iPhone's Photos library and are not
          accessible to other apps.
        </p>
        <p>
          <strong>Cloud enhancement (on by default, can be disabled):</strong> When cloud
          enhancement is enabled, images are uploaded to our servers over an encrypted connection
          and processed by Google's Gemini AI model to generate a richer description. Images are
          not retained by our servers beyond the duration of the request. You can disable cloud
          enhancement at any time in Settings → Cloud Descriptions.
        </p>
        <p>
          <strong>Description editing:</strong> When you use your voice to edit a photo
          description, the current description text and your edit request are sent as a text
          prompt to our servers, which use Gemini to produce the updated description. No image is
          transmitted during this step — only text.
        </p>
        <p>
          <strong>Recognition integration:</strong> When face recognition or object recognition
          results are available, the names of recognized people and detected objects may be
          included in a text prompt sent to our servers to produce a more natural description.
          This means names from your on-device face recognition database may be transmitted to our
          servers when this feature is used.
        </p>

        <h3 className="privacy-h3">3.7 Voice and Microphone</h3>
        <p className="privacy-source">Source: Directly from you when you use voice features.</p>
        <p>The microphone is used for:</p>
        <ul className="privacy-list">
          <li>Voice search — to find photos in your gallery by spoken description</li>
          <li>Note dictation — to create notes by speaking</li>
        </ul>
        <p>
          Speech recognition is performed entirely on your device using Apple's on-device speech
          recognition engine (requiresOnDeviceRecognition is set to true). Audio is never sent to
          Apple's servers or to our servers. Only the resulting text transcript is stored or acted
          on. Raw audio is never saved to disk by the app.
        </p>

        <h3 className="privacy-h3">3.8 Notes</h3>
        <p className="privacy-source">Source: Directly from you via voice dictation.</p>
        <p>
          Notes you create are stored as text in the app's private on-device database, optionally
          with an attached location (see Section 3.3). Note content is never transmitted to our
          servers or to any third party.
        </p>

        <h3 className="privacy-h3">3.9 Face Recognition Data</h3>
        <p className="privacy-source">
          Source: Directly from you when you choose to enroll a person.
        </p>
        <p>
          ExploraVist can learn to recognize people you enroll. When you enroll a person:
        </p>
        <ul className="privacy-list">
          <li>The app captures photos of their face using your camera</li>
          <li>
            Mathematical representations of facial features (embeddings) are computed on your
            device by an on-device AI model
          </li>
          <li>
            The embeddings and the name you assign are stored only in the app's private on-device
            database
          </li>
        </ul>
        <p>
          Face embeddings and enrollment photos never leave your device. They are not uploaded to
          our servers and not shared with any third party.
        </p>
        <p>
          As noted in Section 3.6, the names you assign to enrolled people may be included in text
          prompts sent to our servers for description enhancement or recognition integration
          purposes.
        </p>
        <p>
          We send limited metadata to Firebase Analytics when you save a photo: whether any faces
          were detected and whether a face embedding was generated (true/false values only). The
          actual biometric data is never transmitted.
        </p>

        <h3 className="privacy-h3">3.10 Bystander Privacy</h3>
        <p>
          When you use ExploraVist's camera-based features in public or shared spaces, the camera
          may capture images of people who have not consented to being photographed. We have
          designed ExploraVist to minimize privacy risks to bystanders:
        </p>
        <ul className="privacy-list">
          <li>
            Camera frames are processed on-device and discarded immediately — they are not stored
            unless you explicitly save a photo
          </li>
          <li>
            When cloud enhancement is enabled, images uploaded to our servers are processed to
            generate a description and are not retained afterward
          </li>
          <li>
            We do not attempt to identify bystanders using face recognition — the face recognition
            feature only matches against people you have explicitly enrolled
          </li>
          <li>
            We do not transmit bystander images to any third party for identification or profiling
            purposes
          </li>
        </ul>
        <p>
          Users are responsible for using ExploraVist in a manner consistent with applicable laws
          and reasonable expectations of privacy in their jurisdiction.
        </p>
      </div>

      {/* 4. HOW WE USE */}
      <div className="privacy-section" id="how-we-use">
        <h2 className="privacy-h2">4. How We Use Your Information</h2>
        <Table
          headers={['Data', 'Purpose']}
          rows={[
            ['Name, Email', 'Account authentication; account-related communications'],
            ['User ID, Device ID', 'Authenticating your device to our API'],
            ['Usage analytics', 'Understanding feature usage; planning product improvements'],
            ['Crash and performance data', 'Detecting and fixing crashes; improving app stability'],
            ['Location', 'Attaching location context to notes you create'],
            ['Camera frames / Photos', 'On-device scene description; in-app gallery; cloud AI enhancement (when enabled)'],
            ['Voice / Audio', 'On-device voice search; on-device note dictation'],
            ['Description text, people names', 'Cloud-based description editing and recognition integration via Gemini'],
            ['Notes text', 'Storing notes you create'],
            ['Face embeddings, enrolled names', 'On-device identification of enrolled people in your camera view'],
          ]}
        />
        <p>
          We do not use any of your data for advertising, marketing targeting, or cross-app
          tracking.
        </p>
      </div>

      {/* 5. AI MODEL TRAINING */}
      <div className="privacy-section" id="ai-training">
        <h2 className="privacy-h2">5. AI Model Training</h2>
        <p>
          We do not use images, audio, voice queries, notes, descriptions, or any other
          user-generated content submitted through ExploraVist to train, fine-tune, or otherwise
          improve our AI models or any third-party AI models.
        </p>
        <p>
          When cloud enhancement is enabled, images and text prompts are processed by Google's
          Gemini API. Under Google's Gemini API terms, data submitted through the API is not used
          to train Google's generative AI models by default. For more information, see Google's{' '}
          <a href="https://ai.google.dev/gemini-api/terms" target="_blank" rel="noopener noreferrer">
            Gemini API Additional Terms of Service
          </a>
          .
        </p>
      </div>

      {/* 6. HOW WE SHARE */}
      <div className="privacy-section" id="how-we-share">
        <h2 className="privacy-h2">6. How We Share Your Information</h2>
        <p>
          We do not sell your personal data. We share data only as described below.
        </p>

        <h3 className="privacy-h3">6.1 Google / Firebase</h3>
        <p>We use the following Firebase services, all operated by Google LLC:</p>
        <ul className="privacy-list">
          <li>Firebase Authentication — manages your account credentials</li>
          <li>Firebase Analytics — receives usage events linked to your Firebase installation ID</li>
          <li>Firebase Crashlytics — receives crash reports and diagnostic context</li>
          <li>Firebase Performance Monitoring — receives performance measurements</li>
        </ul>
        <p>
          Google's privacy policy:{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            policies.google.com/privacy
          </a>
          . Firebase data processing terms:{' '}
          <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">
            firebase.google.com/support/privacy
          </a>
          .
        </p>

        <h3 className="privacy-h3">6.2 Google Sign-In</h3>
        <p>
          If you sign in with Google, Google shares your name and email address with us per
          Google's privacy policy.
        </p>

        <h3 className="privacy-h3">6.3 Apple Sign-In</h3>
        <p>
          If you sign in with Apple, Apple shares your name and (optionally) email with us. Apple
          may provide a private relay email address at your discretion.
        </p>

        <h3 className="privacy-h3">6.4 Google Gemini API (via our servers)</h3>
        <p>
          When cloud enhancement or description editing features are used, images and/or text
          prompts are sent to our servers, which call Google's Gemini API to generate
          descriptions. Our server acts as an intermediary — Gemini processes the content and
          returns a response. Images are not stored by our servers after processing.
        </p>

        <h3 className="privacy-h3">6.5 Legal Compliance and Public Safety</h3>
        <p>
          We may disclose information we possess if required to do so by a legally binding order,
          court warrant, subpoena, or applicable statutory law. We may also disclose limited
          information in good faith where we deem it strictly necessary to:
        </p>
        <ul className="privacy-list">
          <li>
            Protect the personal safety, rights, or property of our users, the public, or
            ExploraVist;
          </li>
          <li>
            Detect, prevent, or otherwise address fraud, security, or technical vulnerabilities.
          </li>
        </ul>
        <p>
          <strong>Note on technical limitations:</strong> Because ExploraVist is engineered with a
          privacy-first, on-device architecture, the vast majority of your data — including your
          local photo gallery, note text, precise location tags, and facial recognition profiles —
          resides exclusively on your device. ExploraVist does not possess, and therefore cannot
          provide law enforcement or government entities with, data that is stored solely on your
          iPhone.
        </p>

        <h3 className="privacy-h3">6.6 Business Transfers</h3>
        <p>
          If we are involved in a merger, acquisition, or sale of assets, your information may be
          transferred as part of that transaction. We will provide notice before your information
          is transferred and becomes subject to a different privacy policy.
        </p>
      </div>

      {/* 7. DATA RETENTION */}
      <div className="privacy-section" id="data-retention">
        <h2 className="privacy-h2">7. Data Retention</h2>
        <Table
          headers={['Data', 'Where stored', 'Retention / Deletion trigger']}
          rows={[
            ['Account (name, email)', 'Firebase Auth (Google)', 'Until you delete your account'],
            ['Usage events', 'Firebase Analytics', '14 months (Google default), then auto-deleted'],
            ['Crash reports', 'Firebase Crashlytics', '90 days, then auto-deleted'],
            ['Performance data', 'Firebase Performance', '30 days, then auto-deleted'],
            ['Photos, notes, face data', 'On your device only', 'Until you delete them or uninstall the app'],
            ['Location (in notes)', 'On your device only', 'Until you delete the note or uninstall the app'],
            ['Device credentials', 'Our servers', 'Until you sign out or revoke the device'],
            ['Cloud-processed images', 'Our servers (transit)', 'Not retained — deleted after processing'],
          ]}
        />
      </div>

      {/* 8. YOUR RIGHTS */}
      <div className="privacy-section" id="your-rights">
        <h2 className="privacy-h2">8. Your Rights and Choices</h2>

        <h3 className="privacy-h3">8.1 Account Deletion</h3>
        <p>
          You may delete your account at any time from Settings → Account → Delete Account.
          Deleting your account:
        </p>
        <ul className="privacy-list">
          <li>Removes your Firebase Auth record and associated account data</li>
          <li>Removes your device credentials from our servers</li>
          <li>
            On-device data (photos, notes, face recognition data) is permanently deleted when you
            uninstall the app, or can be cleared individually from within the app
          </li>
        </ul>

        <h3 className="privacy-h3">8.2 Location</h3>
        <p>
          Location is never collected automatically. It is requested only when you choose to attach
          location to a note. You can revoke location permission at any time in iOS Settings →
          Privacy &amp; Security → Location Services → ExploraVist.
        </p>

        <h3 className="privacy-h3">8.3 Cloud Enhancement</h3>
        <p>
          Cloud enhancement is enabled by default. You can disable it at any time from Settings →
          Cloud Descriptions. When disabled, all scene description, description editing, and
          recognition integration runs entirely on your device and no data is sent to our servers.
        </p>

        <h3 className="privacy-h3">8.4 Face Data</h3>
        <p>
          You can delete any enrolled person and all associated face data at any time from the
          People screen. Deletion is immediate and permanent.
        </p>

        <h3 className="privacy-h3">8.5 California Residents (CCPA/CPRA)</h3>
        <p>California residents have the following rights:</p>
        <ul className="privacy-list">
          <li>
            <strong>Know</strong> — request disclosure of the categories and specific pieces of
            personal information we have collected, used, or shared in the prior 12 months
          </li>
          <li>
            <strong>Delete</strong> — request deletion of personal information we hold about you,
            subject to certain exceptions
          </li>
          <li><strong>Correct</strong> — request correction of inaccurate personal information</li>
          <li>
            <strong>Opt out of sale or sharing</strong> — we do not sell or share personal
            information for cross-context behavioral advertising. If this changes, we will provide
            a "Do Not Sell or Share My Personal Information" link.
          </li>
          <li>
            <strong>Non-discrimination</strong> — we will not discriminate against you for
            exercising your rights
          </li>
        </ul>
        <p>
          Categories of personal information collected in the prior 12 months: identifiers (name,
          email, user ID, device ID); commercial information (none); internet/network activity
          (usage events, crash logs); geolocation data (coarse/precise location if attached to
          notes); audio information (microphone used for on-device processing only); inferences
          drawn from usage data (none).
        </p>
        <p>
          To exercise your rights, contact us at{' '}
          <a href="mailto:privacy@exploravist.net">privacy@exploravist.net</a>. We will respond
          within 45 days (extendable by a further 45 days with notice).
        </p>

        <h3 className="privacy-h3">8.6 European and UK Residents (GDPR / UK GDPR)</h3>
        <p>
          If you are located in the EEA, the United Kingdom, or Switzerland, you have the following
          rights:
        </p>
        <ul className="privacy-list">
          <li><strong>Access</strong> — obtain a copy of personal data we hold about you</li>
          <li><strong>Rectification</strong> — correct inaccurate data</li>
          <li><strong>Erasure</strong> — request deletion of your personal data</li>
          <li><strong>Restriction</strong> — limit how we use your data</li>
          <li><strong>Portability</strong> — receive your data in a structured, machine-readable format</li>
          <li><strong>Objection</strong> — object to processing based on legitimate interests</li>
          <li><strong>Withdraw consent</strong> — where processing is based on your consent</li>
        </ul>
        <p>Legal basis table:</p>
        <Table
          headers={['Processing activity', 'Legal basis']}
          rows={[
            ['Account authentication', 'Contract (necessary to provide the service)'],
            ['Device registration and API auth', 'Contract (necessary to provide the service)'],
            ['Usage analytics (Firebase)', 'Legitimate interests (product improvement)'],
            ['Crash and performance reporting', 'Legitimate interests (stability and quality)'],
            ['Cloud scene description (Gemini)', 'Consent (you enable this feature)'],
            ['Location tagging on notes', 'Consent (you initiate this at point of use)'],
            ['Face enrollment', 'Consent (you initiate enrollment explicitly)'],
            ['Description editing via Gemini', 'Consent (you trigger this action)'],
          ]}
        />
        <p>
          To exercise your rights, contact us at{' '}
          <a href="mailto:privacy@exploravist.net">privacy@exploravist.net</a>. We will respond
          within 30 days. You also have the right to lodge a complaint with your local supervisory
          authority. In the UK, this is the{' '}
          <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">Information Commissioner's Office</a>.
          In Ireland, this is the{' '}
          <a href="https://dataprotection.ie" target="_blank" rel="noopener noreferrer">Data Protection Commission</a>.
          For other EU member states, find your authority at{' '}
          <a href="https://edpb.europa.eu/about-edpb/about-edpb/members" target="_blank" rel="noopener noreferrer">
            edpb.europa.eu
          </a>
          .
        </p>
        <p>
          <strong>Data transfers:</strong> Firebase services are operated by Google LLC in the
          United States. Transfers of personal data from the EEA/UK to the US are governed by
          Google's Standard Contractual Clauses. Our own API servers are located in the United
          States (Google Cloud Platform, us-central1 region). Because our servers are outside the
          EEA/UK, transfers of personal data from the EEA/UK to the US are covered by Standard
          Contractual Clauses.
        </p>

        <h3 className="privacy-h3">8.7 US State Privacy Rights (Virginia, Colorado, Connecticut, Utah, Texas, and others)</h3>
        <p>
          Residents of Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), Utah (UCPA), Texas
          (TDPSA), and other US states with applicable privacy laws have the right to:
        </p>
        <ul className="privacy-list">
          <li>Access personal data we hold about you</li>
          <li>Correct inaccurate personal data</li>
          <li>Delete personal data you have provided or we have collected</li>
          <li>Obtain a portable copy of your data</li>
          <li>
            Opt out of the processing of personal data for targeted advertising (we do not conduct
            targeted advertising)
          </li>
          <li>Opt out of the sale of personal data (we do not sell personal data)</li>
          <li>Appeal a denial of a privacy rights request</li>
        </ul>
        <p>
          To exercise these rights, contact us at{' '}
          <a href="mailto:privacy@exploravist.net">privacy@exploravist.net</a>. We will respond
          within 45 days (extendable by a further 45 days with notice for complex requests). To
          appeal a decision, reply to our response email with "Privacy Rights Appeal" in the
          subject line.
        </p>

        <h3 className="privacy-h3">8.8 Canadian Residents (PIPEDA / Quebec Law 25)</h3>
        <p>
          Canadian residents have the right to access and request correction of personal
          information we hold about you. Quebec residents have additional rights under Law 25,
          including the right to data portability and the right to be forgotten. To exercise these
          rights, contact us at{' '}
          <a href="mailto:privacy@exploravist.net">privacy@exploravist.net</a>.
        </p>
      </div>

      {/* 9. CHILDREN */}
      <div className="privacy-section" id="children">
        <h2 className="privacy-h2">9. Children's Privacy</h2>
        <p>
          ExploraVist is not directed to children under 13 in the United States (or under 16 in the
          EEA/UK). We do not knowingly collect personal information from children below these age
          thresholds.
        </p>
        <p>
          In compliance with the Children's Online Privacy Protection Act (COPPA), we do not
          knowingly collect, use, or disclose personal information from children under 13 without
          verifiable parental consent. If you are a parent or guardian and believe your child has
          provided us with personal information, please contact us at{' '}
          <a href="mailto:privacy@exploravist.net">privacy@exploravist.net</a>. We will delete the
          information within 30 days of verified notification.
        </p>
        <p>
          The app is rated 4+ on the App Store. Age-appropriate access is enforced at the platform
          level by Apple's parental controls and App Store age rating system. The app does not
          independently verify user age at sign-up, and is not directed at children.
        </p>
      </div>

      {/* 10. SECURITY */}
      <div className="privacy-section" id="security">
        <h2 className="privacy-h2">10. Security</h2>
        <p>We use industry-standard security measures including:</p>
        <ul className="privacy-list">
          <li>HTTPS/TLS encryption for all data in transit between the app and our servers</li>
          <li>HMAC-SHA256 request authentication to prevent unauthorized API access</li>
          <li>
            On-device storage in the app's private sandboxed container, inaccessible to other apps
          </li>
          <li>Account credentials and device secrets stored in the iOS Keychain</li>
        </ul>
        <p>
          No method of transmission or storage is completely secure. We cannot guarantee absolute
          security but are committed to protecting your data using measures appropriate to its
          sensitivity.
        </p>
      </div>

      {/* 11. THIRD-PARTY LINKS */}
      <div className="privacy-section" id="third-party">
        <h2 className="privacy-h2">11. Third-Party Links and Services</h2>
        <p>
          ExploraVist does not display advertising or contain links to third-party websites. The
          only third-party services that receive data from the app are those listed in Section 6.
        </p>
      </div>

      {/* 13. CONTACT */}
      <div className="privacy-section" id="contact">
        <h2 className="privacy-h2">12. Contact and Accountability</h2>
        <p>For all privacy questions, requests, or complaints:</p>
        <p>
          ExploraVist Inc<br />
          2261 Market Street STE 85134, San Francisco, CA<br />
          Email: <a href="mailto:privacy@exploravist.net">privacy@exploravist.net</a><br />
          Website: <a href="https://exploravist.net" target="_blank" rel="noopener noreferrer">https://exploravist.net</a>
        </p>
        <p>
          We will acknowledge your request within 5 business days and respond fully within 30 days
          (45 days for CCPA/US state requests).
        </p>
        <p>
          If you are an EU/UK resident and are not satisfied with our response, you have the right
          to lodge a complaint with your local data protection supervisory authority (see Section
          8.6 for links).
        </p>
      </div>
    </div>
  </section>
);

export default PrivacyContent;
