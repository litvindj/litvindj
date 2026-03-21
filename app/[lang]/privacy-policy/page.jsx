'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function PolitykaPrywatnosci() {
  const params = useParams();
  const lang = params?.lang || 'en';

  return (
    <div className="bg-dark text-white min-h-screen">
      <div className="border-b border-white/5 py-6 px-6 md:px-12">
        <Link href={`/${lang}`} className="font-header text-beige uppercase tracking-widest text-xs hover:text-white transition-colors duration-300">
          ← Back
        </Link>
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-24">

        <p className="font-header text-beige uppercase tracking-[0.3em] text-xs mb-6">
          — Dokument prawny —
        </p>
        <h1 className="font-header text-white uppercase text-4xl md:text-6xl leading-none mb-4">
          Privacy Policy<br />& Cookies
        </h1>
        <div className="w-16 h-px bg-beige/40 mb-4" />
        <p className="text-grey/50 text-xs mb-12">Published: March 2026</p>

        <div className="space-y-10 text-grey leading-relaxed text-sm md:text-base">

          <section>
            <h2 className="font-header text-white uppercase text-lg md:text-xl mb-4 tracking-wide">
              1. Privacy Policy
            </h2>
            <p>
              Blerfis sp. z o.o., a company incorporated under Polish law with registered offices at 
              ul. Ks. Teofila Boguckiego 4/52, 01-502 Warszawa, Poland, NIP: 5242822814, KRS: 0000664663 
              (hereinafter, <span className="text-white">DJ Litvin</span>) — in compliance with the requirements 
              in Regulation (EU) 2016/679 of the European Parliament and Council of April 27, 2016 
              (General Data Protection Regulation, hereinafter GDPR) and Polish data protection law — 
              respects and protects the privacy of users of the site referred to as the litvindj.com domain, 
              putting in place every possible and proportionate effort not to harm the rights of its users.
            </p>
            <p className="mt-3">
              The purpose of this privacy policy is to help users understand the procedures that DJ Litvin 
              uses in the area of privacy, including what personal data is collected, why it is collected, 
              how it is used, how it is protected, and which individual rights users possess.
            </p>
            <p className="mt-3">
              This privacy policy does not apply to, and excludes our responsibility, in terms of privacy, 
              information, or other practices of third parties, including third parties who manage websites 
              or services to which the litvindj.com site refers.
            </p>
            <p className="mt-3">
              This privacy policy applies to all personal data that DJ Litvin acquires or processes when 
              users interact with the litvindj.com website — including submitting booking inquiries, 
              responding to marketing communications, and contacting us directly.
            </p>
          </section>

          <section>
            <h2 className="font-header text-white uppercase text-lg md:text-xl mb-4 tracking-wide">
              2. General Information on Data Processing
            </h2>
            <p>
              In this privacy policy, the term "personal data" signifies information that refers to users. 
              It allows us to identify users, directly or in combination with other information in our possession.
            </p>
            <p className="mt-3">
              DJ Litvin processes user data based on consent. By using or consulting litvindj.com, users 
              explicitly agree to this privacy policy and consent to the processing of their personal data 
              in relation to the purposes and methods described below, including any disclosure to third 
              parties, if necessary, for the provision of service. The provision of data and, consequently, 
              the consent to the gathering and processing of data is optional. The user can deny consent 
              and may revoke consent at any time. However, denying consent may make it impossible to 
              provide certain services.
            </p>
            <p className="mt-3">
              All personal data submitted via the contact form (name, e-mail, message content) is processed 
              exclusively for the purpose of responding to booking inquiries and is subject to the strictest 
              confidentiality in accordance with Article 6 of the GDPR.
            </p>
          </section>

          <section>
            <h2 className="font-header text-white uppercase text-lg md:text-xl mb-4 tracking-wide">
              3. Automatically Collected Information
            </h2>
            <p>As with all websites, this site makes use of log files in which information from user visits is automatically collected and stored. The information collected could include:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                'Internet Protocol (IP) Address',
                'Type of browser and device parameters used to connect to the site',
                'Name of the Internet Service Provider (ISP)',
                'Date and time of visit/request',
                'Number of clicks, where applicable',
                'Other parameters related to the operating system and the user\'s IT environment',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-beige shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              This data is used for the sole purpose of obtaining anonymous statistical information on 
              the use of the website and to check its correct functioning. Data used for security purposes 
              is kept for seven days.
            </p>
          </section>

          <section>
            <h2 className="font-header text-white uppercase text-lg md:text-xl mb-4 tracking-wide">
              4. Use of Cookies
            </h2>
            <p className="font-semibold text-white/80 mb-2">Definition of Cookies</p>
            <p>
              A cookie is a small text file sent to the browser by the visited website and then stored 
              on the hard disk of the user's computer. Cookies can be used to recognize a user's device, 
              monitor sessions, and store specific information about users.
            </p>
            <p className="font-semibold text-white/80 mt-4 mb-2">Types of Cookies</p>
            <ul className="space-y-2 list-none">
              {[
                'Technical Cookies – necessary for the website to function properly',
                'Functional Cookies – used to store selected settings and provide customized features',
                'Analytical Cookies – Google Analytics (G-DC83QX8CKF) – used to collect information on usage habits and visited pages',
                'Marketing Cookies – Google Ads (AW-17986003521), Facebook Pixel (338195376809937) – used to display personalized advertisements',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-beige shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              By using the site, the visitor expressly consents to the use of cookies. Cookies can be 
              disabled at any time directly from the browser. Disabling cookies may prevent the proper 
              use of some features on the site.
            </p>
          </section>

          <section>
            <h2 className="font-header text-white uppercase text-lg md:text-xl mb-4 tracking-wide">
              5. Third-Party Cookies and Services
            </h2>
            <p>This site uses the following third-party services which may set their own cookies:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                'Google LLC – Google Analytics, Google Ads, Google Tag Manager',
                'Meta Platforms Ireland Ltd – Facebook Pixel',
                'FormSubmit.co – contact form processing service',
                'Netlify Inc. – website hosting',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-beige shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              This site has no control over third-party cookies — they are entirely managed by third parties 
              in accordance with their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="font-header text-white uppercase text-lg md:text-xl mb-4 tracking-wide">
              6. Data Processing Location
            </h2>
            <p>
              The data collected by this site is processed at the headquarters of the Data Controller 
              and at the web hosting data center. The web hosting provider, Netlify Inc., handles data 
              on behalf of the Data Controller in accordance with European standards and GDPR requirements.
            </p>
          </section>

          <section>
            <h2 className="font-header text-white uppercase text-lg md:text-xl mb-4 tracking-wide">
              7. Transfer of Data to Non-EU Countries
            </h2>
            <p>
              This site may share some of the collected data with services located outside the European 
              Union, in particular with Google LLC and Meta Platforms Ireland Ltd through analytics and 
              advertising tools. The transfer is authorized on the basis of standard contractual clauses 
              approved by the European Commission, ensuring an adequate level of data protection.
            </p>
          </section>

          <section>
            <h2 className="font-header text-white uppercase text-lg md:text-xl mb-4 tracking-wide">
              8. Safety Measures
            </h2>
            <p>
              This site processes the data of users in a lawful and proper manner, adopting appropriate 
              security measures to prevent unauthorized access, disclosure, modification, or unauthorized 
              destruction of data. However, no data transmission and no storage system can be guaranteed 
              as 100% secure. Users who have reason to believe that their interactions with us are no 
              longer secure are asked to report the issue immediately to{' '}
              <a href="mailto:booking@litvindj.com" className="text-beige hover:text-white transition-colors">
                booking@litvindj.com
              </a>.
            </p>
            <p className="mt-3">
              Personal data shall be kept for as long as necessary for the purposes for which it was 
              collected, or as required by applicable law — no longer than 3 years from the last contact.
            </p>
          </section>

          <section>
            <h2 className="font-header text-white uppercase text-lg md:text-xl mb-4 tracking-wide">
              9. Rights of the User
            </h2>
            <p>Pursuant to the GDPR and Polish data protection regulations, users have the following rights:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                'Right of access to personal data',
                'Right to rectification (correction) of data',
                'Right to erasure ("right to be forgotten")',
                'Right to restriction of processing',
                'Right to data portability',
                'Right to object to processing',
                'Right to withdraw consent at any time',
                'Right to lodge a complaint with the supervisory authority – Prezes Urzędu Ochrony Danych Osobowych (UODO), ul. Stawki 2, 00-193 Warszawa',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-beige shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              To exercise any of the above rights, please contact us at{' '}
              <a href="mailto:booking@litvindj.com" className="text-beige hover:text-white transition-colors">
                booking@litvindj.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-header text-white uppercase text-lg md:text-xl mb-4 tracking-wide">
              10. Special Information for Minors
            </h2>
            <p>
              The litvindj.com site is not intended for children under the age of 16. We do not knowingly 
              collect personal information from minors. If a parent or guardian becomes aware that a minor 
              has provided us with personal data without consent, please contact us immediately at{' '}
              <a href="mailto:booking@litvindj.com" className="text-beige hover:text-white transition-colors">
                booking@litvindj.com
              </a>. 
              We will promptly remove such data from our records.
            </p>
          </section>

          <section>
            <h2 className="font-header text-white uppercase text-lg md:text-xl mb-4 tracking-wide">
              11. Data Controller
            </h2>
            <p>
              The Data Controller — in accordance with the GDPR and Polish data protection laws — is:
            </p>
            <div className="mt-3 p-4 border border-white/10 text-white/80 text-sm space-y-1">
              <p className="text-white font-semibold">Blerfis sp. z o.o.</p>
              <p>ul. Ks. Teofila Boguckiego 4/52, 01-502 Warszawa, Poland</p>
              <p>NIP: 5242822814 | KRS: 0000664663</p>
              <p>
                E-mail:{' '}
                <a href="mailto:booking@litvindj.com" className="text-beige hover:text-white transition-colors">
                  booking@litvindj.com
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-header text-white uppercase text-lg md:text-xl mb-4 tracking-wide">
              12. Updates
            </h2>
            <p>
              This privacy policy may be updated periodically to reflect changes in our practices or 
              applicable law. We encourage users to review this page regularly.
            </p>
          </section>

          <div className="border-t border-white/10 pt-8 text-xs text-grey/50">
            <p>Last updated: March 2026</p>
            <p className="mt-1">Blerfis sp. z o.o. | NIP: 5242822814 | KRS: 0000664663</p>
          </div>

        </div>
      </div>
    </div>
  );
}
