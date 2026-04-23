"use client"
import { useState, useRef, useEffect, memo } from "react";
import {
  HiChevronDown,
  HiCodeBracket,
  HiOutlineGlobeAlt,
  HiOutlineShieldCheck,
} from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import Heading from "../_components/Heading";
import { HiOutlineDatabase } from "react-icons/hi";

// Data: keep static config separate for clarity
const EXPERTISE_AREAS = [
  {
    id: "development",
    title: "Web Development",
    icon: HiCodeBracket,
    content: [
      "Full-stack web development",
      "React & Next.js applications",
      "Database design & optimization",
      "E-commerce platforms",
      "CRM (Customer Relationship Management) systems",
    ],
  },
  {
    id: "database",
    title: "Backend & Database",
    icon: HiOutlineDatabase,
    content: [
      "Supabase & PostgreSQL setup",
      "Authentication with Auth.js",
      "Database design & optimization",
      "Secure RESTful APIs",
      "Real-time features & data sync",
    ],
  },
  {
    id: "security",
    title: "Authentication & Security",
    icon: HiOutlineShieldCheck,
    content: [
      "Auth.js & custom authentication flows",
      "Role-based access control (RBAC)",
      "Secure session & token management",
      "Best practices for web security",
      "User privacy & data protection",
    ],
  },
  {
    id: "seo",
    title: "SEO & Social Media Ads",
    icon: HiOutlineGlobeAlt, 
    content: [
      "Search engine optimization (SEO)",
      "Keyword research & content strategy",
      "Meta Ads management",
      "Performance analytics & tracking",
      "Improving site visibility & conversions",
    ],
  },
];


// Accordion item component
const AccordionItem = memo(({ area, isExpanded, onToggle }) => {
  const IconComponent = area.icon;

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <button
        type="button"
        onClick={onToggle}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
        aria-expanded={isExpanded}
        aria-controls={`${area.id}-content`}
      >
        <div className="flex items-center gap-4">
          <div className="p-3 bg-brand-dark text-brand-light rounded-full"> {/* Icon on navbar */}
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-2xl font-semibold text-gray-900">
            {area.title}
          </span>
        </div>
        <HiChevronDown
          className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            id={`${area.id}-content`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pl-16">
              <ul className="space-y-4">
                {area.content.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 text-gray-600 text-xl" // service lists points
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-brand-dark rounded-full mt-2 flex-shrink-0"></div> {/* green bullet point */}
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

AccordionItem.displayName = "AccordionItem";

// Main component
const Services = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const containerRef = useRef(null);

  const toggleSection = (sectionId) => {
    setExpandedSection((prev) => (prev === sectionId ? null : sectionId));
  };

  // Close accordion when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setExpandedSection(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="max-w-[130rem] m-auto py-[9.6rem] px-[2rem] sm:px-[4.6rem]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Heading h="My Services" p="Delivering Complete Web & Digital Solutions" hClass="text-brand-dark" pClass="text-brand-dark" />
        {/* Accordion full width */}
        <div ref={containerRef} className="space-y-6">
          {EXPERTISE_AREAS.map((area) => (
            <AccordionItem
              key={area.id}
              area={area}
              isExpanded={expandedSection === area.id}
              onToggle={() => toggleSection(area.id)}
            />
          ))}
        </div>
        <video 
          src="/services-video.mp4" 
          controls
          poster="/service-vid-poster.jpg"
          preload="none"
          className='rounded-xl shadow-lg aspect-video mt-20' 
        />
      </div>
    </section>
  );
};

export default Services;
