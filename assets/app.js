/**
 * Portfolio app — theme, i18n (ES/EN), nav, carousels, a11y
 * Single source of truth for all UI strings.
 */
const BIRTH_DATE = { year: 2003, month: 0, day: 13 };

const translations = {
  es: {
    name: "Carlos Herbey Gámez Gaxiola",
    name_short: "Herbey Gámez",
    monogram: "HG",
    role: "Ingeniero en Software · Junior",
    tagline: "Recién egresado · Fullstack · Mobile · IA",
    availability: "Busco rol Junior",
    location_short: "Tijuana, BC · Remoto / híbrido",
    location_full: "Tijuana, Baja California, México",
    hero_stats: {
      projects: "Proyectos",
      fullstack: "Fullstack",
      mobile_ai: "Mobile + IA",
      graduate: "Egresado 2026",
    },
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      skills: "Habilidades",
      projects: "Proyectos",
      education: "Educación",
      contact: "Contacto",
      resume: "CV",
      home: "Inicio",
    },
    sections: {
      about: "Sobre mí",
      about_num: "01",
      experience: "Experiencia",
      experience_num: "02",
      skills: "Habilidades",
      skills_num: "03",
      projects: "Proyectos destacados",
      projects_num: "04",
      education: "Educación",
      education_num: "05",
      contact: "Contacto",
      contact_num: "06",
      resume: "Currículum",
    },
    cta: {
      projects: "Ver proyectos",
      resume: "Ver CV",
      contact: "Contactar",
      email: "Enviar email",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    bio:
      "Ingeniero en Software y Tecnologías Emergentes recién egresado de la UABC (FCQI). Busco mi primer rol Junior para aportar en equipos de producto. Experiencia en prácticas remotas en IAMIA (Careflow): QA de bots conversacionales multitenant, automatización por WhatsApp, Supabase y optimización de prompts/IA. Base sólida en fullstack (React/Node.js), mobile, Docker y AWS. Motivado por aprender rápido, medir resultados y entregar con calidad.",
    bio_cv:
      "Ingeniero en Software recién egresado (UABC). Busco rol Junior. Prácticas remotas en IAMIA/Careflow: QA de bots multitenant, WhatsApp, Supabase y prompts/IA. Fullstack (React/Node.js), mobile, Docker y AWS.",
    experience: {
      iamia_role: "Practicante — Automatizaciones & QA",
      iamia_company: "IAMIA · Careflow",
      iamia_mode: "Remoto",
      iamia_dates: "Ene 2026 — Jun 2026",
      iamia_program: "PVVC · Proyecto de automatizaciones",
      iamia_1:
        "QA estructurado de bots conversacionales multitenant en Careflow (consultorios médicos): validación de knowledge base y flujos de agendamiento (crear, cancelar, reagendar) vía WhatsApp Business.",
      iamia_2:
        "Detecté y documenté bugs por severidad (horarios, precios, reglas de cliente); implementé correcciones en prompts y knowledge base y verifiqué estabilidad con pruebas de regresión en producción.",
      iamia_3:
        "Investigación de limitación técnica en GoHighLevel (mensajes en ráfaga de WhatsApp): ticket de soporte con propuesta de solución, delays y lógica de concatenación en workflows.",
      iamia_4:
        "Análisis de métricas de automatización y minería de conversaciones en Supabase (SQL): tasas de resolución autónoma vs. derivación a humano y optimización de criterios de escalamiento.",
      iamia_5:
        "Estandaricé la metodología de QA en guías reutilizables (knowledge + agendamiento) aplicadas a nuevos tenants en pre-entrega y producción. Stack: GHL, Supabase, Slack, Claude AI, WhatsApp API.",
      /* CV print: top 3 achievements only */
      cv_1:
        "QA de bots multitenant en Careflow: knowledge base y agendamiento automatizado (crear/cancelar/reagendar) vía WhatsApp Business.",
      cv_2:
        "Documenté e implementé correcciones en prompts y knowledge base; regresión post-despliegue en producción.",
      cv_3:
        "Estandaricé metodología QA reutilizable y analizé métricas en Supabase (SQL). Stack: GHL, Supabase, Claude AI, WhatsApp API.",
    },
    about_highlights: {
      h1_title: "Fullstack",
      h1_desc: "APIs, bases de datos y frontends modernos",
      h2_title: "Mobile & IA",
      h2_desc: "React Native, voz y modelos generativos",
      h3_title: "Cloud & DevOps",
      h3_desc: "AWS, Docker y flujos de entrega",
    },
    skills: {
      frontend: "Frontend",
      backend: "Backend & datos",
      cloud: "Cloud & DevOps",
      ai: "IA & emergentes",
      languages: "Lenguajes",
      testing: "Testing",
    },
    projects: {
      sgca: {
        title: "Sistema de Gestión de Comisiones Académicas",
        subtitle: "UABC · Fullstack",
        desc: "Automatización de solicitudes de comisiones para profesores y directivos de la Facultad de Ingeniería. Autenticación JWT y arquitectura con Docker Compose.",
      },
      ecogestor: {
        title: "EcoGestor",
        subtitle: "IoT · Web",
        desc: "Plataforma de gestión ambiental con sensores ESP32: monitoreo de residuos, gateway de comunicación y participación ciudadana.",
      },
      memoria: {
        title: "Memor.IA",
        subtitle: "Mobile · IA",
        desc: "App Android para adultos mayores: entrevistador virtual con IA que captura historias familiares por voz y preserva el legado emocional.",
      },
      playlist: {
        title: "Playlist Royale",
        subtitle: "Web · Social",
        desc: "Experiencia de música social con playlists interactivas, propinas a creadores y recompensas, integrada con Spotify y YouTube.",
      },
    },
    labels: {
      live: "Demo",
      code: "Código",
      in_progress: "En desarrollo",
      private: "Privado",
      featured: "Destacado",
    },
    education: {
      degree: "Ingeniería de Software y Tecnologías Emergentes",
      school: "Universidad Autónoma de Baja California — FCQI",
      dates: "2021 — 2026",
      status: "Graduado · Mayo 2026",
      hs_school: "CBTIS No. 116",
      hs_dates: "2018 — 2021",
      hs_specialty: "Mantenimiento Industrial",
    },
    contact: {
      title: "¿Trabajamos juntos?",
      lead: "Recién egresado buscando mi primer rol Junior (desarrollo de software). Abierto a remoto, híbrido o presencial en Tijuana / BC.",
      email_primary: "Email principal",
      email_secondary: "Email alternativo",
      copy: "Copiar",
      copy_ok: "Email copiado",
      copy_fail: "No se pudo copiar",
      open_mail: "Abrir correo",
    },
    footer: {
      built: "Diseñado y desarrollado por",
      rights: "Todos los derechos reservados",
    },
    ui: {
      back_top: "Volver arriba",
      scroll_progress: "Progreso de lectura",
    },
    a11y: {
      skip: "Saltar al contenido",
      open_menu: "Abrir menú",
      close_menu: "Cerrar menú",
      lang_to_en: "Cambiar a inglés",
      lang_to_es: "Cambiar a español",
      theme_to_light: "Cambiar a tema claro",
      theme_to_dark: "Cambiar a tema oscuro",
      carousel_prev: "Imagen anterior",
      carousel_next: "Imagen siguiente",
      main_nav: "Navegación principal",
      social: "Redes sociales",
      back_top: "Volver arriba",
    },
    resume: {
      page_title: "CV",
      download: "Descargar PDF",
      back: "Volver al portafolio",
      summary: "Perfil profesional",
      personal: "Datos personales",
      experience: "Experiencia",
      education: "Educación",
      skills: "Habilidades técnicas",
      projects: "Proyectos seleccionados",
      certifications: "Certificaciones y cursos",
      languages: "Idiomas",
      residence_label: "Residencia",
      birthplace_label: "Lugar de nacimiento",
      age_label: "Edad",
      dob_label: "Fecha de nacimiento",
      residence: "Tijuana, Baja California, México",
      birthplace: "Tijuana, Baja California, México",
      dob: "13 de enero de 2003",
      age_suffix: "años",
      skill_languages: "Lenguajes",
      skill_frontend: "Frontend",
      skill_backend: "Backend & DB",
      skill_cloud: "Cloud & DevOps",
      skill_ai: "IA & Emergentes",
      skill_testing: "Testing",
      list_languages: "JavaScript (ES6+), TypeScript, Java, Python, C, Kotlin, R, SQL, JSX",
      list_frontend: "React 18, React Native (Expo), Tailwind CSS, React Context API",
      list_backend: "Node.js (Express), Prisma ORM, PostgreSQL, MySQL, REST API",
      list_cloud: "AWS (Amplify, AppSync, Lambda, S3), Docker & Docker Compose, Git",
      list_ai:
        "OpenAI API, Claude AI, Google Speech-to-Text, bots conversacionales, modelado de datos",
      list_testing: "Vitest, Testing Library, QA de bots, pruebas de regresión, guías reutilizables",
      list_automation:
        "GoHighLevel (GHL), Supabase, WhatsApp Business API, Slack, automatización multitenant",
      skill_automation: "Automatización & CRM",
      list_skills_compact:
        "JavaScript/TypeScript, React, React Native, Node.js, PostgreSQL, Prisma, Docker, AWS, Supabase, GoHighLevel, WhatsApp API, Claude/OpenAI, SQL, QA",
      sgca_context: "Facultad de Ingeniería · UABC",
      sgca_1:
        "Automatización del proceso de solicitudes de comisiones para profesores y directivos.",
      sgca_2:
        "Stack React, Node.js, PostgreSQL, Prisma, Docker. Autenticación JWT y orquestación con Docker Compose.",
      eco_1: "Gestión ambiental con sensores IoT (ESP32).",
      eco_2: "Monitoreo de residuos, gateway y app ciudadana.",
      mem_context: "Android · adultos mayores y conexión familiar",
      mem_1:
        "Entrevistador virtual con IA por voz. React Native (Expo), AWS Amplify/Lambda, OpenAI. Speech-to-Text en serverless.",
      play_1: "Música social con propinas y recompensas; Spotify y YouTube APIs.",
      cert_mendix: "Mendix Rapid Developer · Certificación académica UABC",
      cert_mooc: "Desarrollo de Habilidades Socioemocionales (MOOC)",
      cert_doc: "Taller de Documentación de Software",
      lang_spanish: "Español — Nativo",
      lang_english: "Inglés — B2 (lectura técnica y comunicación intermedia)",
    },
  },
  en: {
    name: "Carlos Herbey Gámez Gaxiola",
    name_short: "Herbey Gámez",
    monogram: "HG",
    role: "Software Engineer · Junior",
    tagline: "Recent graduate · Fullstack · Mobile · AI",
    availability: "Seeking Junior role",
    location_short: "Tijuana, BC · Remote / hybrid",
    location_full: "Tijuana, Baja California, Mexico",
    hero_stats: {
      projects: "Projects",
      fullstack: "Fullstack",
      mobile_ai: "Mobile + AI",
      graduate: "Class of 2026",
    },
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
      resume: "Resume",
      home: "Home",
    },
    sections: {
      about: "About",
      about_num: "01",
      experience: "Experience",
      experience_num: "02",
      skills: "Skills",
      skills_num: "03",
      projects: "Featured projects",
      projects_num: "04",
      education: "Education",
      education_num: "05",
      contact: "Contact",
      contact_num: "06",
      resume: "Resume",
    },
    cta: {
      projects: "View projects",
      resume: "View resume",
      contact: "Get in touch",
      email: "Send email",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    bio:
      "Software Engineer & Emerging Technologies recent graduate from UABC (FCQI). Seeking my first Junior role on a product team. Remote internship at IAMIA (Careflow): QA for multitenant conversational bots, WhatsApp automation, Supabase, and prompt/AI optimization. Strong foundation in fullstack (React/Node.js), mobile, Docker, and AWS. Eager to learn fast, measure outcomes, and ship quality work.",
    bio_cv:
      "Recent Software Engineering graduate (UABC). Seeking a Junior role. Remote internship at IAMIA/Careflow: multitenant bot QA, WhatsApp, Supabase, and prompt/AI work. Fullstack (React/Node.js), mobile, Docker, and AWS.",
    experience: {
      iamia_role: "Intern — Automations & QA",
      iamia_company: "IAMIA · Careflow",
      iamia_mode: "Remote",
      iamia_dates: "Jan 2026 — Jun 2026",
      iamia_program: "PVVC · Automations project",
      iamia_1:
        "Structured QA of multitenant conversational bots in Careflow (medical clinics): knowledge-base validation and automated scheduling flows (book, cancel, reschedule) via WhatsApp Business.",
      iamia_2:
        "Found and documented severity-ranked bugs (hours, pricing, client rules); fixed prompts and knowledge bases and verified stability with post-deploy regression tests in production.",
      iamia_3:
        "Investigated a GoHighLevel limitation with WhatsApp burst messages: formal support ticket with a proposed fix, workflow delays, and message-concatenation logic.",
      iamia_4:
        "Automation metrics and conversation mining in Supabase (SQL): autonomous resolution vs. human handoff rates and improved escalation criteria across tenants.",
      iamia_5:
        "Standardized QA into reusable guides (knowledge + scheduling) for new tenants in pre-release and production. Stack: GHL, Supabase, Slack, Claude AI, WhatsApp API.",
      cv_1:
        "Multitenant bot QA in Careflow: knowledge base and automated scheduling (book/cancel/reschedule) via WhatsApp Business.",
      cv_2:
        "Documented and shipped prompt/knowledge-base fixes; post-deploy regression checks in production.",
      cv_3:
        "Standardized reusable QA guides and analyzed metrics in Supabase (SQL). Stack: GHL, Supabase, Claude AI, WhatsApp API.",
    },
    about_highlights: {
      h1_title: "Fullstack",
      h1_desc: "APIs, databases, and modern frontends",
      h2_title: "Mobile & AI",
      h2_desc: "React Native, voice, and generative models",
      h3_title: "Cloud & DevOps",
      h3_desc: "AWS, Docker, and delivery workflows",
    },
    skills: {
      frontend: "Frontend",
      backend: "Backend & data",
      cloud: "Cloud & DevOps",
      ai: "AI & emerging",
      languages: "Languages",
      testing: "Testing",
    },
    projects: {
      sgca: {
        title: "Academic Commissions Management System",
        subtitle: "UABC · Fullstack",
        desc: "Automated commission requests for faculty and directors at the Engineering school. JWT auth and Docker Compose architecture.",
      },
      ecogestor: {
        title: "EcoGestor",
        subtitle: "IoT · Web",
        desc: "Environmental management platform with ESP32 sensors: waste monitoring, communication gateway, and citizen participation.",
      },
      memoria: {
        title: "Memor.IA",
        subtitle: "Mobile · AI",
        desc: "Android app for older adults: an AI interviewer that captures family stories by voice and preserves emotional legacy.",
      },
      playlist: {
        title: "Playlist Royale",
        subtitle: "Web · Social",
        desc: "Social music experience with interactive playlists, creator tips and rewards, integrated with Spotify and YouTube.",
      },
    },
    labels: {
      live: "Demo",
      code: "Code",
      in_progress: "In progress",
      private: "Private",
      featured: "Featured",
    },
    education: {
      degree: "Software Engineering and Emerging Technologies",
      school: "Autonomous University of Baja California — FCQI",
      dates: "2021 — 2026",
      status: "Graduated · May 2026",
      hs_school: "CBTIS No. 116",
      hs_dates: "2018 — 2021",
      hs_specialty: "Industrial Maintenance",
    },
    contact: {
      title: "Let's work together",
      lead: "Recent graduate seeking my first Junior software role. Open to remote, hybrid, or on-site in Tijuana / BC.",
      email_primary: "Primary email",
      email_secondary: "Alternate email",
      copy: "Copy",
      copy_ok: "Email copied",
      copy_fail: "Could not copy",
      open_mail: "Open mail",
    },
    footer: {
      built: "Designed & built by",
      rights: "All rights reserved",
    },
    ui: {
      back_top: "Back to top",
      scroll_progress: "Reading progress",
    },
    a11y: {
      skip: "Skip to content",
      open_menu: "Open menu",
      close_menu: "Close menu",
      lang_to_en: "Switch to English",
      lang_to_es: "Switch to Spanish",
      theme_to_light: "Switch to light theme",
      theme_to_dark: "Switch to dark theme",
      carousel_prev: "Previous image",
      carousel_next: "Next image",
      main_nav: "Main navigation",
      social: "Social links",
      back_top: "Back to top",
    },
    resume: {
      page_title: "Resume",
      download: "Download PDF",
      back: "Back to portfolio",
      summary: "Professional profile",
      personal: "Personal details",
      experience: "Experience",
      education: "Education",
      skills: "Technical skills",
      projects: "Selected projects",
      certifications: "Certifications & courses",
      languages: "Languages",
      residence_label: "Residence",
      birthplace_label: "Place of birth",
      age_label: "Age",
      dob_label: "Date of birth",
      residence: "Tijuana, Baja California, Mexico",
      birthplace: "Tijuana, Baja California, Mexico",
      dob: "January 13, 2003",
      age_suffix: "",
      skill_languages: "Languages",
      skill_frontend: "Frontend",
      skill_backend: "Backend & DB",
      skill_cloud: "Cloud & DevOps",
      skill_ai: "AI & Emerging",
      skill_testing: "Testing",
      list_languages: "JavaScript (ES6+), TypeScript, Java, Python, C, Kotlin, R, SQL, JSX",
      list_frontend: "React 18, React Native (Expo), Tailwind CSS, React Context API",
      list_backend: "Node.js (Express), Prisma ORM, PostgreSQL, MySQL, REST API",
      list_cloud: "AWS (Amplify, AppSync, Lambda, S3), Docker & Docker Compose, Git",
      list_ai:
        "OpenAI API, Claude AI, Google Speech-to-Text, conversational bots, data modeling",
      list_testing: "Vitest, Testing Library, bot QA, regression testing, reusable test guides",
      list_automation:
        "GoHighLevel (GHL), Supabase, WhatsApp Business API, Slack, multitenant automation",
      skill_automation: "Automation & CRM",
      list_skills_compact:
        "JavaScript/TypeScript, React, React Native, Node.js, PostgreSQL, Prisma, Docker, AWS, Supabase, GoHighLevel, WhatsApp API, Claude/OpenAI, SQL, QA",
      sgca_context: "Engineering Faculty · UABC",
      sgca_1: "Automated commission request workflow for faculty and directors.",
      sgca_2:
        "Stack React, Node.js, PostgreSQL, Prisma, Docker. JWT auth and Docker Compose orchestration.",
      eco_1: "Environmental management with IoT sensors (ESP32).",
      eco_2: "Waste monitoring, gateway, and citizen app.",
      mem_context: "Android · older adults and family connection",
      mem_1:
        "AI virtual interviewer via voice. React Native (Expo), AWS Amplify/Lambda, OpenAI. Speech-to-Text in serverless.",
      play_1: "Social music with tips and rewards; Spotify and YouTube APIs.",
      cert_mendix: "Mendix Rapid Developer · Academic certification UABC",
      cert_mooc: "Socioemotional Skills Development (MOOC)",
      cert_doc: "Software Documentation Workshop",
      lang_spanish: "Spanish — Native",
      lang_english: "English — B2 (technical reading and intermediate communication)",
    },
  },
};

/* ---------- helpers ---------- */
function getLang() {
  const stored = localStorage.getItem("lang");
  return stored === "en" ? "en" : "es";
}

function getTheme() {
  const stored = localStorage.getItem("theme");
  return stored === "light" ? "light" : "dark";
}

function t(key, lang = getLang()) {
  const parts = key.split(".");
  let cur = translations[lang];
  for (const p of parts) {
    if (cur == null) return undefined;
    cur = cur[p];
  }
  return typeof cur === "string" ? cur : undefined;
}

function computeAge(ref = new Date()) {
  let age = ref.getFullYear() - BIRTH_DATE.year;
  if (
    ref.getMonth() < BIRTH_DATE.month ||
    (ref.getMonth() === BIRTH_DATE.month && ref.getDate() < BIRTH_DATE.day)
  ) {
    age -= 1;
  }
  return Math.max(0, age);
}

function ageLabel(lang = getLang()) {
  const age = computeAge();
  const suffix = t("resume.age_suffix", lang);
  return suffix ? `${age} ${suffix}` : String(age);
}

function isResumePage() {
  return /cv\.html$/i.test(location.pathname) || /cv\.html$/i.test(location.href.split("?")[0]);
}

function homeHref(hash = "") {
  return isResumePage() ? `index.html${hash}` : hash || "#";
}

/* ---------- theme ---------- */
function setTheme(theme) {
  const next = theme === "light" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", next === "dark" ? "#0f1419" : "#ffffff");

  document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
    const isDark = next === "dark";
    btn.setAttribute("aria-pressed", isDark ? "true" : "false");
    btn.setAttribute("aria-label", isDark ? t("a11y.theme_to_light") : t("a11y.theme_to_dark"));
    const icon = btn.querySelector("[data-theme-icon]");
    if (icon) icon.textContent = isDark ? "☾" : "☀";
  });
}

/* ---------- i18n ---------- */
function applyI18n(lang = getLang()) {
  const resolved = lang === "en" ? "en" : "es";
  localStorage.setItem("lang", resolved);
  document.documentElement.lang = resolved;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    let value = t(key, resolved);
    if (key === "resume.age_value") value = ageLabel(resolved);
    if (typeof value === "string") el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    const value = t(key, resolved);
    if (typeof value === "string") el.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.getAttribute("data-i18n-title");
    const value = t(key, resolved);
    if (typeof value === "string") el.setAttribute("title", value);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const value = t(key, resolved);
    if (typeof value === "string") el.setAttribute("placeholder", value);
  });

  // Lang toggles
  document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
    btn.textContent = resolved.toUpperCase();
    btn.setAttribute(
      "aria-label",
      resolved === "es" ? t("a11y.lang_to_en", resolved) : t("a11y.lang_to_es", resolved)
    );
  });

  // Document title
  if (isResumePage()) {
    document.title = `${t("resume.page_title", resolved)} — ${t("name", resolved)}`;
  } else {
    document.title = `${t("name", resolved)} | ${resolved === "es" ? "Portafolio" : "Portfolio"}`;
  }

  // Nav aria
  document.querySelectorAll("[data-nav-label]").forEach((el) => {
    el.setAttribute("aria-label", t("a11y.main_nav", resolved));
  });

  // Refresh theme aria (depends on lang)
  setTheme(getTheme());
  updateMenuToggleLabel();
}

/* ---------- header height ---------- */
function setHeaderHeight() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const h = Math.ceil(header.getBoundingClientRect().height);
  document.documentElement.style.setProperty("--header-h", `${h}px`);
}

/* ---------- mobile nav ---------- */
function updateMenuToggleLabel() {
  const toggle = document.getElementById("nav-toggle");
  const panel = document.getElementById("nav-panel");
  if (!toggle || !panel) return;
  const open = panel.classList.contains("is-open");
  toggle.setAttribute("aria-expanded", open ? "true" : "false");
  toggle.setAttribute("aria-label", open ? t("a11y.close_menu") : t("a11y.open_menu"));
  const icon = toggle.querySelector("[data-menu-icon]");
  if (icon) icon.textContent = open ? "✕" : "☰";
}

function closeMenu() {
  const panel = document.getElementById("nav-panel");
  const backdrop = document.getElementById("nav-backdrop");
  if (panel) panel.classList.remove("is-open");
  if (backdrop) {
    backdrop.classList.remove("is-open");
    backdrop.setAttribute("aria-hidden", "true");
  }
  document.body.classList.remove("nav-open");
  updateMenuToggleLabel();
}

function openMenu() {
  const panel = document.getElementById("nav-panel");
  const backdrop = document.getElementById("nav-backdrop");
  if (panel) panel.classList.add("is-open");
  if (backdrop) {
    backdrop.classList.add("is-open");
    backdrop.setAttribute("aria-hidden", "false");
  }
  document.body.classList.add("nav-open");
  updateMenuToggleLabel();
}

function initMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const panel = document.getElementById("nav-panel");
  let backdrop = document.getElementById("nav-backdrop");
  if (!toggle || !panel) return;

  // Portal backdrop to <body> so position:fixed covers the viewport
  // and never stacks under/over header controls due to filter/sticky contexts.
  if (backdrop && backdrop.parentElement !== document.body) {
    document.body.appendChild(backdrop);
  }
  backdrop = document.getElementById("nav-backdrop");

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    if (panel.classList.contains("is-open")) closeMenu();
    else openMenu();
  });

  if (backdrop) backdrop.addEventListener("click", closeMenu);

  panel.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => closeMenu());
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) closeMenu();
    setHeaderHeight();
  });
}

/* ---------- active section nav (scroll-spy) ---------- */
/** Exposed so smooth-scroll clicks can highlight immediately */
let setNavActiveId = null;

function initActiveNav() {
  if (isResumePage()) return;
  const links = Array.from(document.querySelectorAll(".nav-links a[href^='#']"));
  if (!links.length) return;

  const sections = links
    .map((a) => {
      const id = (a.getAttribute("href") || "").replace(/^#/, "");
      if (!id) return null;
      const el = document.getElementById(id);
      return el ? { id, el, link: a } : null;
    })
    .filter(Boolean);

  if (!sections.length) return;

  const setActive = (id) => {
    links.forEach((a) => {
      const href = a.getAttribute("href") || "";
      const on = id != null && href === `#${id}`;
      a.classList.toggle("is-active", on);
      if (on) a.setAttribute("aria-current", "location");
      else a.removeAttribute("aria-current");
    });
  };

  setNavActiveId = setActive;

  const updateFromScroll = () => {
    const headerH =
      parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-h"), 10) ||
      72;

    // Near top of page: no section highlighted (hero)
    if (window.scrollY < 72) {
      setActive(null);
      return;
    }

    // Probe line just below sticky header — last section whose top is above it wins.
    // Works for tall sections (e.g. #projects) where IntersectionObserver ratios fail.
    const probe = window.scrollY + headerH + 24;
    let current = sections[0].id;

    for (let i = 0; i < sections.length; i++) {
      const top = sections[i].el.getBoundingClientRect().top + window.scrollY;
      if (top <= probe) current = sections[i].id;
    }

    // Near bottom of page: force last section
    const doc = document.documentElement;
    const atBottom = window.scrollY + window.innerHeight >= doc.scrollHeight - 8;
    if (atBottom) current = sections[sections.length - 1].id;

    setActive(current);
  };

  window.addEventListener("scroll", updateFromScroll, { passive: true });
  window.addEventListener("resize", updateFromScroll);
  // After layout / images settle
  requestAnimationFrame(updateFromScroll);
  window.addEventListener("load", updateFromScroll);
}

/* ---------- smooth anchors ---------- */
function initSmoothAnchors() {
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[href^='#']");
    if (!a) return;
    const href = a.getAttribute("href");
    if (!href || href === "#") {
      e.preventDefault();
      if (typeof setNavActiveId === "function") setNavActiveId(null);
      smoothScrollTo(0);
      return;
    }
    // Only same-page hashes (not index.html#…)
    if (!href.startsWith("#")) return;

    const id = href.slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const headerH =
      parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-h"), 10) ||
      72;
    const y = el.getBoundingClientRect().top + window.scrollY - headerH - 12;

    // Highlight immediately (projects is tall; don't wait for scroll end)
    if (typeof setNavActiveId === "function") setNavActiveId(id);

    smoothScrollTo(y);
    history.pushState(null, "", href);
  });
}

function smoothScrollTo(targetY, duration = 450) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo(0, targetY);
    return;
  }
  const startY = window.scrollY || window.pageYOffset;
  const diff = targetY - startY;
  const start = performance.now();
  const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

  function step(now) {
    const t = Math.min(1, (now - start) / duration);
    window.scrollTo(0, startY + diff * ease(t));
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* ---------- carousels ---------- */
function initCarousels() {
  document.querySelectorAll("[data-carousel]").forEach((root) => {
    let list = [];
    try {
      list = JSON.parse(root.getAttribute("data-images") || "[]");
    } catch (_) {
      list = [];
    }
    if (!Array.isArray(list) || !list.length) return;

    const alt = root.getAttribute("data-alt") || "Project";
    let index = 0;

    const img = document.createElement("img");
    img.className = "media-img";
    img.decoding = "async";
    img.loading = "lazy";
    root.appendChild(img);

    let prev;
    let next;
    if (list.length > 1) {
      prev = document.createElement("button");
      prev.type = "button";
      prev.className = "media-nav media-prev";
      prev.setAttribute("aria-label", t("a11y.carousel_prev"));
      prev.innerHTML = "‹";
      next = document.createElement("button");
      next.type = "button";
      next.className = "media-nav media-next";
      next.setAttribute("aria-label", t("a11y.carousel_next"));
      next.innerHTML = "›";
      root.appendChild(prev);
      root.appendChild(next);

      const dots = document.createElement("div");
      dots.className = "media-dots";
      dots.setAttribute("role", "tablist");
      list.forEach((_, i) => {
        const d = document.createElement("button");
        d.type = "button";
        d.className = "media-dot";
        d.setAttribute("aria-label", `${i + 1}/${list.length}`);
        d.addEventListener("click", () => show(i));
        dots.appendChild(d);
      });
      root.appendChild(dots);
    }

    function show(i) {
      index = ((i % list.length) + list.length) % list.length;
      img.style.opacity = "0";
      const onload = () => {
        requestAnimationFrame(() => {
          img.style.opacity = "1";
        });
        img.removeEventListener("load", onload);
      };
      img.addEventListener("load", onload);
      img.src = list[index];
      img.alt = `${alt} (${index + 1}/${list.length})`;
      root.querySelectorAll(".media-dot").forEach((d, di) => {
        d.classList.toggle("is-active", di === index);
      });
    }

    let timer = null;
    const interval = parseInt(root.getAttribute("data-interval") || "4500", 10);
    const clear = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };
    const start = () => {
      if (list.length > 1 && !timer) timer = setInterval(() => show(index + 1), interval);
    };

    if (prev) prev.addEventListener("click", (e) => { e.stopPropagation(); show(index - 1); clear(); start(); });
    if (next) next.addEventListener("click", (e) => { e.stopPropagation(); show(index + 1); clear(); start(); });

    root.tabIndex = 0;
    root.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") show(index - 1);
      if (e.key === "ArrowRight") show(index + 1);
    });
    root.addEventListener("mouseenter", clear);
    root.addEventListener("mouseleave", start);
    root.addEventListener("focusin", clear);
    root.addEventListener("focusout", start);

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => entries.forEach((en) => (en.isIntersecting ? start() : clear())),
        { threshold: 0.2 }
      );
      io.observe(root);
    } else {
      start();
    }

    show(0);
    if (img.complete) img.style.opacity = "1";
  });
}

/* ---------- year ---------- */
function initYear() {
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
}

/* ---------- print CV ---------- */
function initPrint() {
  const btn = document.getElementById("cv-download");
  if (!btn) return;
  btn.addEventListener("click", () => window.print());
}

/* ---------- scroll progress + header state ---------- */
function initScrollChrome() {
  const bar = document.getElementById("scroll-progress");
  const header = document.querySelector(".site-header");
  const topBtn = document.getElementById("back-to-top");

  const update = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const doc = document.documentElement;
    const max = Math.max(1, doc.scrollHeight - window.innerHeight);
    const pct = Math.min(100, Math.max(0, (scrollTop / max) * 100));
    if (bar) bar.style.width = pct + "%";
    if (header) header.classList.toggle("is-scrolled", scrollTop > 12);
    if (topBtn) topBtn.classList.toggle("is-visible", scrollTop > 420);
  };

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();

  if (topBtn) {
    topBtn.addEventListener("click", () => {
      if (typeof setNavActiveId === "function") setNavActiveId(null);
      smoothScrollTo(0);
      history.pushState(null, "", location.pathname + location.search);
    });
  }
}

/* ---------- reveal on scroll ---------- */
function initReveal() {
  const els = document.querySelectorAll("[data-reveal]");
  if (!els.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    els.forEach((el) => el.classList.add("is-revealed"));
    return;
  }

  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-revealed"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );

  els.forEach((el, i) => {
    const delay = el.getAttribute("data-reveal-delay");
    if (delay != null) el.style.setProperty("--reveal-delay", `${delay}ms`);
    else el.style.setProperty("--reveal-delay", `${Math.min(i * 40, 200)}ms`);
    io.observe(el);
  });
}

/* ---------- toast ---------- */
let toastTimer = null;
function showToast(message) {
  let el = document.getElementById("app-toast");
  if (!el) {
    el = document.createElement("div");
    el.id = "app-toast";
    el.className = "app-toast";
    el.setAttribute("role", "status");
    el.setAttribute("aria-live", "polite");
    document.body.appendChild(el);
  }
  el.textContent = message;
  el.classList.add("is-visible");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("is-visible"), 2200);
}

/* ---------- copy email ---------- */
function initCopyEmail() {
  document.querySelectorAll("[data-copy-email]").forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      e.preventDefault();
      e.stopPropagation();
      const email = btn.getAttribute("data-copy-email");
      if (!email) return;
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(email);
        } else {
          const ta = document.createElement("textarea");
          ta.value = email;
          ta.setAttribute("readonly", "");
          ta.style.position = "fixed";
          ta.style.left = "-9999px";
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
        }
        showToast(t("contact.copy_ok"));
      } catch (_) {
        showToast(t("contact.copy_fail"));
      }
    });
  });
}

/* ---------- boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  setTheme(getTheme());
  applyI18n(getLang());
  setHeaderHeight();
  initYear();
  initMobileNav();
  initSmoothAnchors();
  initActiveNav();
  initCarousels();
  initPrint();
  initScrollChrome();
  initReveal();
  initCopyEmail();

  document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      setTheme(getTheme() === "dark" ? "light" : "dark");
      requestAnimationFrame(setHeaderHeight);
    });
  });

  document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyI18n(getLang() === "es" ? "en" : "es");
      document.querySelectorAll(".media-prev").forEach((b) => {
        b.setAttribute("aria-label", t("a11y.carousel_prev"));
      });
      document.querySelectorAll(".media-next").forEach((b) => {
        b.setAttribute("aria-label", t("a11y.carousel_next"));
      });
      // Update floating chrome labels
      const topBtn = document.getElementById("back-to-top");
      if (topBtn) topBtn.setAttribute("aria-label", t("a11y.back_top"));
      const bar = document.getElementById("scroll-progress");
      if (bar) bar.setAttribute("aria-label", t("ui.scroll_progress"));
      requestAnimationFrame(setHeaderHeight);
    });
  });

  window.addEventListener("resize", () => requestAnimationFrame(setHeaderHeight));
});
