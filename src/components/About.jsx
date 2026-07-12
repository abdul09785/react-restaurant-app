import React from "react";

const features = [
  {
    icon: "🍽️",
    title: "Crafted Meals",
    text: "Every plate is made fresh with premium ingredients and rich local flavors.",
  },
  {
    icon: "⚡",
    title: "Fast Delivery",
    text: "Enjoy hot food at your doorstep with our efficient delivery service.",
  },
  {
    icon: "🌿",
    title: "Clean & Fresh",
    text: "We focus on wholesome cooking that feels light, vibrant, and satisfying.",
  },
  {
    icon: "💚",
    title: "Premium Experience",
    text: "Elegant presentation, seamless service, and memorable taste in every bite.",
  },
];

const stats = [
  { value: "4.9/5", label: "Average rating" },
  { value: "25k+", label: "Happy customers" },
  { value: "15 min", label: "Average prep" },
  { value: "24/7", label: "Support ready" },
];

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero__content">
          <p className="about-section-tag">About FlavorDash</p>
          <h1>Elevated food experiences, crafted for modern cravings.</h1>
          <p className="about-hero__text">
            FlavorDash brings together comfort, innovation, and premium
            hospitality to create meals that delight every moment.
          </p>
          <div className="about-hero__actions">
            <a href="/" className="about-btn about-btn--primary">
              Explore menu
            </a>
            <a href="/contact" className="about-btn about-btn--secondary">
              Contact us
            </a>
          </div>
        </div>
        <div className="about-hero__media">
          <div className="about-hero__card">
            <div className="about-hero__badge">Fresh • Fast • Flavorful</div>
            <h3>From kitchen to table in style.</h3>
            <p>
              We blend restaurant-class quality with the convenience of digital
              dining.
            </p>
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story__content">
          <p className="about-section-tag">Our story</p>
          <h2>Born from a love for delicious comfort.</h2>
          <p>
            What started as a small food passion project grew into a modern
            restaurant experience focused on unforgettable taste and thoughtful
            service.
          </p>
          <p>
            Today, FlavorDash continues to evolve with fresh culinary ideas,
            warm hospitality, and a design that feels as premium as the food
            itself.
          </p>
        </div>
        <div className="about-story__visual">
          <div className="about-story__card">
            <h3>Crafted with care</h3>
            <p>
              Every dish is prepared with precision, passion, and premium
              ingredients.
            </p>
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="about-mission__grid">
          <article className="about-card about-card--accent">
            <p className="about-section-tag">Mission</p>
            <h3>Deliver joyful dining experiences.</h3>
            <p>
              We aim to make every meal feel exciting, reliable, and beautifully
              served from the first bite to the last.
            </p>
          </article>
          <article className="about-card">
            <p className="about-section-tag">Vision</p>
            <h3>Set a new standard for modern food delivery.</h3>
            <p>
              We envision a future where great taste, speed, and design come
              together seamlessly for every customer.
            </p>
          </article>
        </div>
      </section>

      <section className="about-features">
        <div className="about-section-heading">
          <p className="about-section-tag">Why choose us</p>
          <h2>Everything you need for a premium food experience.</h2>
        </div>
        <div className="about-features__grid">
          {features.map((feature) => (
            <article key={feature.title} className="about-feature-card">
              <div className="about-feature-card__icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-stats">
        <div className="about-section-heading">
          <p className="about-section-tag">Numbers that speak</p>
          <h2>Trusted by food lovers everywhere.</h2>
        </div>
        <div className="about-stats__grid">
          {stats.map((stat) => (
            <article key={stat.label} className="about-stat-card">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-team">
        <div className="about-section-heading">
          <p className="about-section-tag">Meet the developer</p>
          <h2>Abdul Noman</h2>
        </div>
        <div className="about-team__grid">
          <article className="about-profile-card">
            <h3>Frontend React Developer</h3>
            <p>
              Passionate about creating elegant, responsive, and
              high-performance web experiences with a love for clean UI.
            </p>
          </article>
        </div>
      </section>

      <section className="about-cta">
        <h2>Ready to taste the difference?</h2>
        <p>
          Discover the perfect blend of comfort, quality, and modern hospitality
          at FlavorDash.
        </p>
        <a href="/contact" className="about-btn about-btn--primary">
          Get in touch
        </a>
      </section>
    </div>
  );
};

export default About;
