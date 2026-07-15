import React from "react";

const contactInfo = [
  {
    icon: "📍",
    title: "Visit our kitchen",
    text: "12, Green Avenue Street, Downtown, Mumbai",
  },
  {
    icon: "📞",
    title: "Call anytime",
    text: "+91 98765 43210",
  },
  {
    icon: "✉️",
    title: "Email us",
    text: "hello@flavordash.com",
  },
  {
    icon: "🕒",
    title: "Open hours",
    text: "Mon-Sun • 11:00 AM to 11:00 PM",
  },
];

const supportPoints = [
  {
    title: "Fast delivery",
    text: "Hot meals delivered in under 35 mins.",
  },
  {
    title: "Chef support",
    text: "Need help with your order? We are here for you.",
  },
  {
    title: "Premium service",
    text: "Friendly & polished support for every guest.",
  },
];

const faqs = [
  {
    question: "Do you offer catering for events?",
    answer:
      "Yes, we provide curated catering for private parties and corporate events.",
  },
  {
    question: "Can I customize my order?",
    answer:
      "Absolutely. You can request add-ons, spice levels, or dietary adjustments.",
  },
  {
    question: "Is pickup available?",
    answer:
      "Yes, order pickup is available at all locations with a 10-minute ready window.",
  },
];

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero__content">
          <p className="contact-kicker">Contact us</p>
          <h1>We would love to serve you better.</h1>
          <p>
            Reach out for reservations, catering, or anything delicious. Our
            team is ready to make your experience unforgettable.
          </p>
          <a href="#contact-form" className="contact-btn contact-btn--primary">
            Start a conversation
          </a>
        </div>
      </section>

      <section className="contact-info-grid">
        {contactInfo.map((item) => (
          <article key={item.title} className="contact-card">
            <div className="contact-card__icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="contact-main-grid">
        <div className="contact-form-card" id="contact-form">
          <div className="contact-section-heading">
            <p className="contact-kicker">Send a message</p>
            <h2>Tell us about your plans</h2>
          </div>
          <form className="contact-form">
            <div className="contact-form__row">
              <label>
                First name
                <input type="text" placeholder="peter" />
              </label>
              <label>
                Last name
                <input type="text" placeholder="parker" />
              </label>
            </div>
            <div className="contact-form__row">
              <label>
                Email
                <input type="email" placeholder="you@example.com" />
              </label>
              <label>
                Phone
                <input type="tel" placeholder="+91 98765 43210" />
              </label>
            </div>
            <label>
              Subject
              <input type="text" placeholder="Reservation request" />
            </label>
            <label>
              Message
              <textarea
                rows="5"
                placeholder="Tell us how we can help..."
              ></textarea>
            </label>
            <button className="contact-btn contact-btn--primary" type="submit">
              Send message
            </button>
          </form>
        </div>

        <div className="contact-support-card">
          <div className="contact-section-heading">
            <p className="contact-kicker">Support</p>
            <h2>Why guests love us</h2>
          </div>
          <div className="contact-support-list">
            {supportPoints.map((item) => (
              <div key={item.title} className="contact-support-item">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-faq-section">
        <div className="contact-section-heading">
          <p className="contact-kicker">FAQ</p>
          <h2>Common questions</h2>
        </div>
        <div className="contact-faq-list">
          {faqs.map((faq) => (
            <article key={faq.question} className="contact-faq-card">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-map-card">
        <div className="contact-section-heading">
          <p className="contact-kicker">Find us</p>
          <h2>Visit our flagship location</h2>
        </div>
        <div className="contact-map-placeholder">
          <div>
            <span>🗺️</span>
            <p>Map preview will appear here</p>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <h2>Ready for a premium dining experience?</h2>
        <p>
          Reserve your table or place your order today and enjoy the best of
          FlavorDash.
        </p>
        <a href="#contact-form" className="contact-btn contact-btn--primary">
          Book now
        </a>
      </section>
    </div>
  );
};

export default Contact;
