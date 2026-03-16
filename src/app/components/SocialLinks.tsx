import { Github, Mail, Instagram } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/gyuwonlee1",
    label: "GitHub",
    gradient: "from-gray-700 to-gray-900",
  },
  {
    icon: Mail,
    href: "mailto:gyuwon218@gmail.com",
    label: "Email",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/gyyuuu____?igsh=bWlheW1sc29ydDJ4&utm_source=qr",
    label: "Instagram",
    gradient: "from-purple-500 via-pink-500 to-orange-500",
  },
];

export function SocialLinks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer ref={ref} className="py-12 px-4 border-t border-gray-200 dark:border-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h3 className="text-xl mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
          Connect With Me
        </h3>
        <div className="flex justify-center gap-6 mb-6">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 bg-gradient-to-br ${link.gradient} rounded-xl shadow-lg transition-all duration-300 text-white hover:shadow-2xl hover:scale-110 group`}
                aria-label={link.label}
              >
                <Icon className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              </a>
            );
          })}
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} 이규원. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}