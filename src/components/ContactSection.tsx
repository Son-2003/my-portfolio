import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Simulate sending
    setTimeout(() => {
      console.log("Message sent:", { name, email, message });

      // Optional: reset form
      e.currentTarget.reset();
      setIsSubmitting(false);

      // TODO: Replace this with a toast notification
      alert("Message sent!");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-orange-500"> Touch</span>
        </h2>

        <p className="text-center mb-12 max-w-2xl mx-auto">
          Open to new projects and collaborations — let’s build something great
          together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl text-center font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-orange-200">
                  <Mail className="h-6 w-6 text-orange-500" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:nguyenducson2915@gmail.com"
                    className="hover:text-orange-500 transition-colors duration-300"
                  >
                    nguyenducson2915@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-orange-200">
                  <Phone className="h-6 w-6 text-orange-500" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+84975470522"
                    className="hover:text-orange-500 duration-300 transition-colors"
                  >
                    +84 (975) 470-522
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-orange-200">
                  <MapPin className="h-6 w-6 text-orange-500" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="hover:text-orange-500 transition-colors duration-300">
                    Binh Thanh, HCM, VN
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium text-center mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/nducson/">
                  <Linkedin className="hover:text-orange-500 duration-300" />
                </a>
                <a href="https://www.facebook.com/ucson.885171" target="_blank">
                  <Facebook className="hover:text-orange-500 duration-300" />
                </a>
                <a href="https://www.instagram.com/ducson_279/" target="_blank">
                  <Instagram className="hover:text-orange-500 duration-300" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl text-center font-semibold mb-6">
              {" "}
              Send a Message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-200 bg-gray-100 focus:outline-hidden"
                  placeholder="Duc Son..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-200 bg-gray-100 focus:outline-hidden"
                  placeholder="nguyenducson2915@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-200 bg-gray-100 focus:outline-hidden resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={
                  "w-full flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-orange-500 text-white font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95"
                }
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
