import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

type ContactSectionProps = {
  isDarkMode: boolean;
};

export const ContactSection = ( { isDarkMode } : ContactSectionProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, PUBLIC_KEY)
      .then(() => {
        alert("Message sent!");
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error("Failed to send:", error);
        alert("Failed to send message.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-center ${isDarkMode ? "text-white":"text-black"}`}>
          Get In <span className="text-orange-500"> Touch</span>
        </h2>

        <p className={`text-center mb-12 max-w-2xl mx-auto ${isDarkMode ? "text-white":"text-black"}`}>
          Open to new projects and collaborations — let’s build something great
          together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className={`text-2xl text-center font-semibold mb-6 ${isDarkMode ? "text-white":"text-black"}`}>
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-orange-200">
                  <Mail className="h-6 w-6 text-orange-500" />{" "}
                </div>
                <div>
                  <h4 className={`font-medium ${isDarkMode ? "text-white":"text-black"}`}> Email</h4>
                  <a
                    href="mailto:nguyenducson2915@gmail.com"
                    className={`hover:text-orange-500 transition-colors duration-300 ${isDarkMode ? "text-white":"text-black"}`}
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
                  <h4 className={`font-medium ${isDarkMode ? "text-white":"text-black"}`}> Phone</h4>
                  <a
                    href="tel:+84975470522"
                    className={`hover:text-orange-500 duration-300 transition-colors ${isDarkMode ? "text-white":"text-black"}`}
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
                  <h4 className={`font-medium ${isDarkMode ? "text-white":"text-black"}`}> Location</h4>
                  <a className={`hover:text-orange-500 transition-colors duration-300 ${isDarkMode ? "text-white":"text-black"}`}>
                    Binh Thanh, HCM, VN
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className={`font-medium text-center mb-4 ${isDarkMode ? "text-white":"text-black"}`}> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/nducson/">
                  <Linkedin className={`hover:text-orange-500 duration-300 ${isDarkMode ? "text-white":"text-black"}`} />
                </a>
                <a href="https://www.facebook.com/ucson.885171" target="_blank">
                  <Facebook className={`hover:text-orange-500 duration-300 ${isDarkMode ? "text-white":"text-black"}`} />
                </a>
                <a href="https://www.instagram.com/ducson_279/" target="_blank">
                  <Instagram className={`hover:text-orange-500 duration-300 ${isDarkMode ? "text-white":"text-black"}`} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs bg-white">
            <h3 className={`text-2xl text-center font-semibold mb-6 text-black`}>
              {" "}
              Send a Message
            </h3>

            <form className="space-y-6" ref={formRef} onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2 text-black`}
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
                  className={`block text-sm font-medium mb-2 text-black`}
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
                  className={`block text-sm font-medium mb-2 text-black`}
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
