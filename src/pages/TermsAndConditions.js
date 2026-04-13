import React from 'react';
import './Legal.css';

const TermsAndConditions = () => {
  return (
    <main className="legal-page">
      <div className="container">
        <h1>Terms and Conditions for Fragment Business</h1>
        <p className="legal-meta">Last Updated: 07 Feb 2024</p>

        <ol>
          <li>
            <h2>Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using Fragment Business, you agree to be bound by these terms and
              conditions (&quot;Terms&quot;). If you do not agree to these Terms, please refrain from using the App.
            </p>
          </li>
          <li>
            <h2>License</h2>
            <p>
              Fragment Business grants you a non-exclusive, non-transferable, revocable license to use the App for
              personal, non-commercial purposes on your device, in accordance with these Terms.
            </p>
          </li>
          <li>
            <h2>User Accounts</h2>
            <p>
              You would be required to create a user account to access certain features of the App. You are responsible
              for maintaining the confidentiality of your account information and for all activities that occur under
              your account.
            </p>
          </li>
          <li>
            <h2>Privacy Policy</h2>
            <p>
              Your use of the App is also governed by our Privacy Policy, which can be found at{' '}
              <a href="/privacy-policy">Privacy Policy</a>. By using the App, you consent to the terms outlined in the
              Privacy Policy.
            </p>
          </li>
          <li>
            <h2>Prohibited Activities</h2>
            <p>You agree not to engage in any of the following activities:</p>
            <ul>
              <li>Violating any applicable laws or regulations</li>
              <li>Attempting to interfere with the proper functioning of the App</li>
              <li>Transmitting any malicious software or code</li>
              <li>Accessing or using the App in an unauthorized manner</li>
            </ul>
          </li>
          <li>
            <h2>Intellectual Property</h2>
            <p>
              All intellectual property rights in the App, including but not limited to copyrights, trademarks, and
              trade secrets, belong to Fragment Business. You agree not to reproduce, distribute, or create derivative
              works based on the App without prior written consent.
            </p>
          </li>
          <li>
            <h2>Disclaimer of Warranty</h2>
            <p>
              The App is provided &quot;as is&quot; without any warranties, express or implied. Fragment Business does
              not guarantee the accuracy, reliability, or availability of the App.
            </p>
          </li>
          <li>
            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Fragment Business shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising out of or in connection with the use or
              inability to use the App.
            </p>
          </li>
          <li>
            <h2>Changes to Terms</h2>
            <p>
              Fragment Business reserves the right to modify or update these Terms at any time. Your continued use of
              the App after any changes signifies your acceptance of the revised Terms.
            </p>
          </li>
          <li>
            <h2>Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of India. Any disputes arising
              under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in
              India.
            </p>
          </li>
        </ol>
      </div>
    </main>
  );
};

export default TermsAndConditions;

