import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHead } from '@unhead/react'
import "./Contact.css";

export default function Contact() {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xkovpdqj", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        e.target.reset();
        setSuccess(true);
        setShowToast(true);

        // Hide toast after 3s
        setTimeout(() => setShowToast(false), 3000);

        // Redirect home after 1.5s
        setTimeout(() => navigate("/"), 1500);
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useHead({
    title: 'Mike | Frontend Developer',
    meta: [
      { name: 'description', content: "Hi, I'm Mike — a passionate frontend developer specializing in React." },
      { name: 'keywords', content: 'Mike, frontend developer, React developer, portfolio, web developer' },
      // Open Graph
      { property: 'og:title', content: 'Mike | Frontend Developer' },
      { property: 'og:description', content: 'Frontend developer specializing in React.' },
      { property: 'og:url', content: 'https://youngmike.dev/' },
      { property: 'og:type', content: 'website' },
    ],
    link: [
      { rel: 'canonical', href: 'https://youngmike.dev/' },
    ],
  })

  return (
    <>
      {/* ✅ Toast Popup */}
      {showToast && (
        <div className="toast toast-success">
          ✅ Submitted successfully!
        </div>
      )}

      <section id="contact" className="contact-section">
        <div className="contact-glass">
          <h2>Get In Touch</h2>

          {!success && (
            <>
              <p>
                Reach out and let’s connect. Whether you have a project in mind,
                want to collaborate, or just want to say hi, I’d love to hear from you!
              </p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  required
                ></textarea>

                <button type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </>
  );
}