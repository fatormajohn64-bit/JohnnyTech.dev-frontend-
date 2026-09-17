// config.js
// Edit everything here — name, bio, social links, and projects.
// Later, PROJECTS can be replaced by a fetch() call to the backend/Supabase
// so the dashboard can update this list live.

const SITE_CONFIG = {
  siteName: "JohnnyTech.dev",
  displayName: "Johnny Fatorma",
  tagline: "Driven by curiosity.",
  bio: "I'm a self-taught developer with a passion for technology, problem solving, and building useful things. I'm currently learning Python, AI, Machine Learning, and modern web development. Every day is a new opportunity to grow, explore, and turn ideas into real projects.",

  social: {
    github: { url: "", label: "GitHub" },
    tiktok: { url: "", label: "TikTok" },
    instagram: { url: "", label: "Instagram" },
    facebook: { url: "", label: "Facebook" },
    whatsapp: { number: "", label: "WhatsApp" }, // digits only, e.g. "15551234567"
    phone: { number: "", label: "Call" },        // e.g. "+15551234567"
    email: { address: "", label: "Email" },
  },
};

// Fill in real "live" and "code" links as you get them.
// icon: any short label/emoji for now — swap for real SVG icons later if you want exact brand marks.
const PROJECTS = [
  {
    icon: "🎬",
    tag: "Web App",
    title: "Movie Streaming App",
    desc: "A modern movie streaming platform with a clean UI, search, and watch online feature.",
    tech: ["HTML", "CSS", "JavaScript", "TMDB API", "Python"],
    live: "",
    code: "",
  },
  {
    icon: "🧠",
    tag: "AI Project",
    title: "AI Companion",
    desc: "A personal AI assistant with chat, voice and memory features. Powered by Gemini API.",
    tech: ["Python", "Streamlit", "Gemini API", "TTS", "SQLite"],
    live: "",
    code: "",
  },
  {
    icon: "</>",
    tag: "Web App",
    title: "Invincible 911 Hub",
    desc: "A personal portfolio website with terminal, projects and interactive UI.",
    tech: ["HTML", "CSS", "JavaScript", "JSON", "GitHub Pages"],
    live: "",
    code: "",
  },
];
