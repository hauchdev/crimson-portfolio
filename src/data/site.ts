export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type StatItem = {
  value: string;
  label: string;
};

export type Project = {
  title: string;
  category: string;
  description: string;
  image?: string;
  accent?: string;
  tags: string[];
  links: {
    label: string;
    href: string;
  }[];
  featured?: boolean;
};

export type TechItem = {
  name: string;
  category: string;
  level: string;
  color?: string;
};

export type TimelineItem = {
  year: string;
  role: string;
  company?: string;
  description: string;
  tags: string[];
};

export type Repository = {
  name: string;
  description: string;
  language: string;
  stars: string;
  forks: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  icon: string;
  href?: string;
};

export const site = {
  name: "Example",
  shortName: "E.",
  role: "Software Developer",
  availability: "Available for selected projects",
  url: "https://example.dev",
  location: "Example, Example",
  email: "hello@example.dev",
  description:
    "Developer focused on software, game technology, infrastructure and digital products.",
  ogImage: "/images/og.png",

  // Change these to control the entire navigation.
  navItems: [
    { label: "Work", href: "#work" },
    { label: "Stack", href: "#stack" },
    { label: "Experience", href: "#experience" },
    { label: "Open Source", href: "#opensource" },
    { label: "Contact", href: "#contact" }
  ] satisfies NavItem[],

  hero: {
    eyebrow: "Software · Games · Infrastructure",
    title: "BUILDING DIGITAL",
    highlightedTitle: "WORLDS.",
    description:
      "I design and build software where product, performance and engineering meet — from game systems and developer tools to infrastructure and web experiences.",
    primaryCta: { label: "View selected work", href: "#work" },
    secondaryCta: { label: "GitHub", href: "https://github.com/" },
    terminal: {
      title: "system.log",
      lines: [
        "$ whoami",
        "example@dev:~$ build --production",
        "✓ architecture ready",
        "✓ systems online",
        "✓ deployment complete"
      ]
    }
  },

  stats: [
    { value: "5+", label: "Years building & learning" },
    { value: "40+", label: "Projects shipped" },
    { value: "18", label: "Open-source releases" },
    { value: "120K+", label: "Combined project reach" }
  ] satisfies StatItem[],

  buildHighlights: [
    {
      title: "High-concurrency systems",
      description: "Services designed around predictable latency, observability and graceful failure.",
      meta: "BACKEND / SYSTEMS"
    },
    {
      title: "Memory-efficient tooling",
      description: "Developer tools that keep resource usage intentional without sacrificing ergonomics.",
      meta: "TOOLS / PERFORMANCE"
    },
    {
      title: "Gameplay mechanics",
      description: "Network-aware game systems, progression, events and modular server architecture.",
      meta: "GAME DEVELOPMENT"
    },
    {
      title: "Distributed infrastructure",
      description: "Deployment, monitoring and service architecture for projects that need to scale.",
      meta: "INFRA / DEVOPS"
    }
  ],

  projects: [
    {
      title: "Minecraft Client",
      category: "GAME DEVELOPMENT",
      description:
        "A modular client ecosystem focused on performance, UX and reusable game technology.",
      image: "/images/projects/minecraft-client.webp",
      tags: ["Java", "Fabric", "Networking"],
      links: [
        { label: "Case study", href: "#" },
        { label: "Repository", href: "https://github.com/" }
      ],
      featured: true
    },
    {
      title: "HOrigin Network",
      category: "NETWORK / INFRA",
      description:
        "A network architecture combining game services, APIs, administration and deployment tooling.",
      image: "/images/projects/network.webp",
      tags: ["Java", "Linux", "Docker"],
      links: [
        { label: "Case study", href: "#" },
        { label: "Repository", href: "https://github.com/" }
      ],
      featured: true
    },
    {
      title: "Restartly Core",
      category: "DEVELOPER TOOL",
      description:
        "A configurable server lifecycle and restart system built around predictable automation.",
      image: "/images/projects/restartly.webp",
      tags: ["Java", "Fabric", "Automation"],
      links: [
        { label: "Docs", href: "#" },
        { label: "Repository", href: "https://github.com/" }
      ]
    },
    {
      title: "Netheria: Chaos Shift",
      category: "GAME SYSTEM",
      description:
        "A procedural gameplay experiment combining events, world rules and unpredictable progression.",
      image: "/images/projects/chaos-shift.webp",
      tags: ["Java", "Procedural", "Gameplay"],
      links: [
        { label: "Overview", href: "#" },
        { label: "Repository", href: "https://github.com/" }
      ]
    }
  ] satisfies Project[],

  technologies: [
    { name: "Java", category: "Languages", level: "Advanced" },
    { name: "C#", category: "Languages", level: "Advanced" },
    { name: "TypeScript", category: "Languages", level: "Advanced" },
    { name: "JavaScript", category: "Languages", level: "Advanced" },
    { name: "C", category: "Languages", level: "Intermediate" },
    { name: "HTML / CSS", category: "Web", level: "Advanced" },
    { name: "Astro", category: "Web", level: "Advanced" },
    { name: "Tailwind", category: "Web", level: "Advanced" },
    { name: "Unity", category: "Game", level: "Advanced" },
    { name: "Unreal Engine", category: "Game", level: "Intermediate" },
    { name: "Fabric", category: "Minecraft", level: "Advanced" },
    { name: "Git", category: "Tooling", level: "Advanced" },
    { name: "Linux", category: "Infrastructure", level: "Advanced" },
    { name: "Docker", category: "Infrastructure", level: "Intermediate" },
    { name: "Cloudflare", category: "Infrastructure", level: "Intermediate" }
  ] satisfies TechItem[],

  timeline: [
    {
      year: "2026",
      role: "Independent Developer",
      company: "Example.dev",
      description:
        "Building open-source software, Minecraft technology, web products and infrastructure experiments.",
      tags: ["Open Source", "Architecture", "DevOps"]
    },
    {
      year: "2025",
      role: "Game & Systems Developer",
      company: "Independent",
      description:
        "Expanded into modular game systems, server architecture, automation and developer tooling.",
      tags: ["Java", "Fabric", "Systems"]
    },
    {
      year: "2023",
      role: "Software Developer",
      company: "Independent",
      description:
        "Started shipping increasingly complex projects and learning through production-oriented experiments.",
      tags: ["Web", "Java", "Linux"]
    }
  ] satisfies TimelineItem[],

  repositories: [
    {
      name: "restartly",
      description: "Automatic server lifecycle and restart toolkit.",
      language: "Java",
      stars: "—",
      forks: "—",
      href: "https://github.com/"
    },
    {
      name: "hchat",
      description: "Modular Minecraft chat infrastructure.",
      language: "Java",
      stars: "—",
      forks: "—",
      href: "https://github.com/"
    },
    {
      name: "hostly",
      description: "Modern multiplayer world hosting concept.",
      language: "Java",
      stars: "—",
      forks: "—",
      href: "https://github.com/"
    }
  ] satisfies Repository[],

  codeShowcase: {
    eyebrow: "SELECTED IMPLEMENTATION",
    title: "BUILT FROM CODE",
    description:
      "Keep one technical implementation here. It is intentionally data-driven so you can replace it without touching the component.",
    filename: "ServerBootstrap.java",
    language: "java",
    code: `public final class ServerBootstrap {

    private final ServiceRegistry services;
    private final Metrics metrics;

    public void start() {
        services.register(new WorldService());
        services.register(new PlayerService());
        services.register(new EventService());

        metrics.record("server.start");
        services.startAll();
    }
}`
  },

  services: [
    {
      title: "Custom Software",
      description: "Architecture, implementation and maintenance for focused products.",
      icon: "</>"
    },
    {
      title: "Game Systems",
      description: "Gameplay systems, networking, plugins, mods and server infrastructure.",
      icon: "◈"
    },
    {
      title: "Developer Tooling",
      description: "Internal tools, automation and workflows that remove repetitive work.",
      icon: "⌘"
    }
  ] satisfies Service[],

  cta: {
    eyebrow: "HAVE AN IDEA?",
    title: "LET'S TURN IT INTO SOMETHING REAL.",
    description:
      "Tell me what you're building, what is blocking you and what a successful result looks like.",
    button: "Start a conversation",
    href: "mailto:hello@example.dev"
  },

  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "Discord", href: "#" },
    { label: "LinkedIn", href: "https://linkedin.com/" }
  ],

  footer: {
    copyright: "© 2026 Example. Built with Astro.",
    links: [
      { label: "GitHub", href: "https://github.com/" },
      { label: "Source", href: "https://github.com/" }
    ]
  }
} as const;
