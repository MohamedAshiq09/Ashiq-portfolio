"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  CheckCircle,
  XCircle,
  Loader2,
  MessageCircle,
  User,
  Clock,
  DollarSign,
  Sparkles,
  ArrowRight,
  Calendar,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mohamedashiq782@gmail.com",
    href: "mailto:mohamedashiq782@gmail.com",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7200542734",
    href: "tel:+917200542734",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chennai, India",
    href: "https://maps.google.com/?q=Chennai,India",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/MohamedAshiq09",
    icon: Github,
    color: "from-gray-500 to-gray-700",
    bgColor: "bg-gray-500/10",
    description: "View my repositories",
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: Linkedin,
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-500/10",
    description: "Connect professionally",
  },
  {
    name: "Twitter",
    href: "https://x.com/Ash__05_",
    icon: Twitter,
    color: "from-sky-500 to-blue-500",
    bgColor: "bg-sky-500/10",
    description: "Follow for updates",
  },
];

type FormStatus = "idle" | "loading" | "success" | "error";

// Changed from default export to named export
export function Contact() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    budget: "",
    timeline: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        budget: "",
        timeline: "",
      });

      // Reset status after 3 seconds
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 2000);
  };

  const isFormValid =
    formData.name && formData.email && formData.subject && formData.message;

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm font-medium backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let&apos;s Create Something Amazing
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Get In
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into reality? Let&apos;s discuss your next project 
            and create something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mr-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Send a Message</h2>
                  <p className="text-gray-400">I&apos;ll get back to you within 24 hours</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300 flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300 flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-300 flex items-center">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Subject *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What&apos;s your project about?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium text-gray-300 flex items-center">
                      <DollarSign className="w-4 h-4 mr-2" />
                      Budget Range
                    </label>
                    <input
                      id="budget"
                      name="budget"
                      type="text"
                      placeholder="$5,000 - $25,000"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="timeline" className="text-sm font-medium text-gray-300 flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Timeline
                    </label>
                    <input
                      id="timeline"
                      name="timeline"
                      type="text"
                      placeholder="2-3 months"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300 flex items-center">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project goals, requirements, and how I can help bring your vision to life..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid || formStatus === "loading"}
                  className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center">
                    {formStatus === "loading" ? (
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    ) : formStatus === "success" ? (
                      <CheckCircle className="w-5 h-5 mr-2" />
                    ) : formStatus === "error" ? (
                      <XCircle className="w-5 h-5 mr-2" />
                    ) : (
                      <Send className="w-5 h-5 mr-2" />
                    )}
                    <span>
                      {formStatus === "loading" && "Sending Message..."}
                      {formStatus === "success" && "Message Sent Successfully!"}
                      {formStatus === "error" && "Failed to Send - Try Again"}
                      {formStatus === "idle" && "Send Message"}
                    </span>
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Information */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Phone className="w-5 h-5 mr-2 text-purple-400" />
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 group border border-white/5 hover:border-white/20"
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${info.color} ${info.bgColor}`}>
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 font-medium">{info.label}</p>
                      <p className="text-white font-semibold group-hover:text-purple-400 transition-colors">
                        {info.value}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-purple-400" />
                Follow Me
              </h3>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 group border border-white/5 hover:border-white/20"
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${social.color} ${social.bgColor}`}>
                      <social.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-semibold group-hover:text-purple-400 transition-colors">
                        {social.name}
                      </p>
                      <p className="text-sm text-gray-400">{social.description}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-green-500/20 rounded-3xl p-6 shadow-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-bold text-lg">Available for Projects</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Currently accepting new client work and exciting collaboration opportunities. 
                Let&apos;s build something amazing together!
              </p>
            </div>

            {/* Quick Call CTA */}
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-6 shadow-2xl">
              <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-purple-400" />
                Prefer a Quick Call?
              </h4>
              <p className="text-gray-300 mb-4 text-sm">
                Schedule a 15-minute discovery call to discuss your project
              </p>
              <div className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg text-center cursor-pointer">
                📅 Schedule Call
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">24hrs</div>
            <div className="text-gray-400">Response Time</div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">100+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">5⭐</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
}