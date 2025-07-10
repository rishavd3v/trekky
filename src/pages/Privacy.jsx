import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <div className="mx-30 space-y-6">
      <section className="text-4xl font-bold mt-26 mb-2">Privacy Policy</section>

      <section className="mb-8">
        <Body>
          At <span className="font-semibold">TrekMate</span>, we are committed to safeguarding consumer privacy.
          We value your trust and want to assure you that we handle your personal information with the utmost care.
          This privacy policy outlines the information we collect, how we use it, and the measures we take to protect it.
        </Body>
      </section>

      <section className="space-y-3">
        <Title>IP Addresses & Cookies</Title>
        <Body>
          To enhance our website’s functionality and user experience, we may collect and use visitors’ IP addresses.
          This helps us optimize search engine performance and diagnose server issues. We also use Google Analytics
          to gather data on how visitors navigate our site.
        </Body>
        <Body>
          Cookies are used to collect aggregated data like web traffic sources, visitor counts, operating systems,
          browser types, and more. This data is not personally identifiable. You may disable cookies in your browser settings.
        </Body>
      </section>

      <section className="space-y-3">
        <Title>Bookings & Payments</Title>
        <Body>
          When booking a tour, we collect your name, email, and possibly your address or phone number to communicate with you.
          In rare cases, we may share your contact details with the guide responsible for your tour.
        </Body>
        <Body>
          We never sell or share your data with third parties. Payment information such as card or bank details is collected
          only during booking and handled securely.
        </Body>
      </section>

      <section className="space-y-3">
        <Title>Online Security</Title>
        <Body>
          Our site uses industry-standard security protocols. All transactions are securely processed by Razorpay over HTTPS using TLS.
          We also implement AES-128-bit encryption to protect your data.
        </Body>
      </section>

      <section className="space-y-3">
        <Title>All Rights Reserved</Title>
        <Body>
          All website content is the property of <span className="font-semibold">Trek Mate </span>
          and may not be reproduced or used commercially without permission.
        </Body>
        <Body>
          We reserve the right to amend this privacy policy at any time. Updates will be posted on our website.
        </Body>
      </section>

      <section className="space-y-3">
        <Title>Contact Us</Title>
        <Body>
          Your privacy is important to us. If you have any questions or concerns regarding our policy,
          please reach out via our{" "}
          <Link to="/contact" className="font-semibold text-blue-700 underline">
            contact page
          </Link>.
        </Body>
        <Body>
          Thank you for choosing <span className="font-semibold">Trek Mate</span> for your travel experience.
        </Body>
      </section>
    </div>
  );
}

function Title({ children }) {
  return <p className="font-bold text-lg">{children}</p>;
}

function Body({ children }) {
  return <p className="text-sm text-accent">{children}</p>;
}
