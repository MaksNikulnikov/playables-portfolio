const projects = [
  {
    title: "Idle Breaker Playable",
    type: "Cocos interactive web build",
    engine: "Cocos",
    featured: true,
    demoUrl: "https://maksnikulnikov.github.io/idle-breaker-playable/",
    codeUrl: "https://github.com/MaksNikulnikov/idle-breaker-playable",
    desktopMedia: ["./media/idle-breaker-desktop-01.png", "./media/idle-breaker-desktop-02.png"],
    mobileMedia: "./media/idle-breaker-mobile-01.png",
    stack: ["Cocos Creator 3.8.6", "TypeScript", "Vitest", "ESLint"],
    summary:
      "A production-minded interactive web build with resource collection, weapon upgrades, destructible gates, Cocos scene contracts, and final MRAID/store flow.",
    highlights: [
      "Tested domain state machine separated from scene-facing Cocos components.",
      "Prefab-driven resources, hit feedback, HUD, target hints, and completion flow.",
      "Desktop and mobile controls with a small build-oriented architecture.",
    ],
  },
  {
    title: "Tower Balance",
    type: "Physics-based web app",
    engine: "PixiJS",
    demoUrl: "https://maksnikulnikov.github.io/tower-balance/",
    codeUrl: "https://github.com/MaksNikulnikov/tower-balance",
    desktopMedia: ["./media/tower-balance-desktop-01.png", "./media/tower-balance-desktop-02.png"],
    mobileMedia: "./media/tower-balance-mobile-01.png",
    stack: ["TypeScript", "PixiJS 8", "Matter.js", "Vite", "Playwright", "Yandex Games"],
    summary:
      "A full interactive web app with responsive canvas rendering, height progression, physics collapse, localization, ads, and leaderboard adapters.",
    highlights: [
      "Browser and Yandex platform adapters isolate ads, auth, leaderboards, language, and pause/resume.",
      "Release scripts cover screenshots, video capture, packaging, and Yandex build audit.",
      "Playwright visual coverage keeps layout and runtime behavior reviewable.",
    ],
  },
  {
    title: "Blast Puzzle Prototype",
    type: "Puzzle prototype",
    engine: "PixiJS",
    demoUrl: "https://maksnikulnikov.github.io/blast/",
    codeUrl: "https://github.com/MaksNikulnikov/blast",
    desktopMedia: ["./media/blast-desktop-01.png", "./media/blast-desktop-02.png"],
    mobileMedia: "./media/blast-mobile-01.png",
    stack: ["TypeScript", "PixiJS 8", "Vite", "Vitest", "Playwright"],
    summary:
      "A blast puzzle prototype with boosters, super-tiles, responsive layouts, testable rules, and stable canvas presentation.",
    highlights: [
      "Renderer-agnostic core mechanics are separated from the Pixi presentation layer.",
      "Animation plans are data-driven and composed through an explicit app boundary.",
      "Unit and smoke tests focus on interaction rules and runtime behavior.",
    ],
  },
  {
    title: "Slot Game",
    type: "Slot interface prototype",
    engine: "PixiJS",
    demoUrl: "https://maksnikulnikov.github.io/slot-game/",
    codeUrl: "https://github.com/MaksNikulnikov/slot-game",
    desktopMedia: ["./media/slot-game-desktop-01.png", "./media/slot-game-desktop-02.png"],
    mobileMedia: "./media/slot-game-mobile-01.png",
    stack: ["TypeScript", "PixiJS 8", "GSAP", "Spine", "Webpack", "Vitest"],
    summary:
      "A Pixi slot interface with real loading progress, masked reels, server-authoritative spin results, audio, and Spine character states.",
    highlights: [
      "Core slot model and state machine avoid Pixi, GSAP, Spine, DOM, and audio imports.",
      "Renderer, audio, and session interfaces keep application orchestration testable.",
      "Manifest-driven atlas generation turns source PNGs into runtime Pixi spritesheets.",
    ],
  },
  {
    title: "Fortress Demo",
    type: "Cocos web build",
    engine: "Cocos",
    demoUrl: "https://maksnikulnikov.github.io/fortress_demo/",
    codeUrl: "https://github.com/MaksNikulnikov/fortress_demo",
    desktopMedia: ["./media/playable3_01.png", "./media/playable3_02.png"],
    stack: ["Cocos Creator 3.8.8", "TypeScript"],
    summary:
      "A compact landscape-only Cocos web build focused on tutorialized interaction flow, HUD adaptation, and published build polish.",
    highlights: [
      "Config-driven interaction flow tuned for short sessions.",
      "Responsive HUD adaptation without shifting battlefield composition.",
      "Published web build kept under a tight payload budget.",
    ],
  },
  {
    title: "Garden Designer",
    type: "3D interactive web prototype",
    engine: "Three.js",
    demoUrl: "https://maksnikulnikov.github.io/GardenDesigner/",
    debugUrl: "https://maksnikulnikov.github.io/GardenDesigner/?debug=1",
    codeUrl: "https://github.com/MaksNikulnikov/GardenDesigner",
    desktopMedia: ["./media/playable1-01.png", "./media/playable1-03.png"],
    mobileMedia: "./media/playable1-02.png",
    stack: ["Three.js", "GSAP", "Vite", "Vanilla JS"],
    summary:
      "A 3D garden design web prototype with onboarding, asset integration, mobile frame pacing, and custom UI feedback.",
    highlights: [
      "Client asset pack integrated into a custom web pipeline.",
      "Onboarding and effects are built for short interactive sessions.",
      "Debug mode keeps tuning and review accessible in the browser.",
    ],
  },
  {
    title: "Playable Dice",
    type: "Procedural 3D web prototype",
    engine: "Three.js",
    demoUrl: "https://maksnikulnikov.github.io/playable-dice/",
    debugUrl: "https://maksnikulnikov.github.io/playable-dice/?debug=1",
    codeUrl: "https://github.com/MaksNikulnikov/playable-dice",
    desktopMedia: ["./media/playable2-01.png", "./media/playable2-03.png"],
    mobileMedia: "./media/playable2-02.png",
    stack: ["Three.js", "Vite", "Vanilla JS"],
    summary:
      "A procedural Three.js web prototype with generated models, responsive controls, and a compact reward loop for short sessions.",
    highlights: [
      "All models are generated in code with no external physics engine.",
      "Custom lightweight physics approximation keeps the runtime small.",
      "Debug mode helps inspect tuning and gameplay state.",
    ],
  },
];

const filters = ["All", "PixiJS", "Cocos", "Three.js"];

const caseGrid = document.getElementById("case-grid");
const filterRoot = document.getElementById("case-filters");
const showreelVideo = document.getElementById("hero-showreel");
const showreelToggle = document.querySelector("[data-showreel-toggle]");
const mediaVersion = "20260713-8";

const createStackMarkup = (stack) =>
  stack.map((item) => `<span class="chip">${item}</span>`).join("");

const createHighlightMarkup = (highlights) =>
  highlights.map((item) => `<li>${item}</li>`).join("");

const createActionMarkup = (project) => `
  <div class="case-actions">
    <a class="button button-primary" href="${project.demoUrl}" target="_blank" rel="noreferrer">Play demo</a>
    ${
      project.debugUrl
        ? `<a class="button button-secondary" href="${project.debugUrl}" target="_blank" rel="noreferrer">Debug</a>`
        : ""
    }
    ${
      project.codeUrl
        ? `<a class="button button-secondary" href="${project.codeUrl}" target="_blank" rel="noreferrer">Source</a>`
        : ""
    }
  </div>`;

const createMediaMarkup = (project) => {
  const [primaryMedia, secondaryMedia] = project.desktopMedia;
  const mobileMedia = project.mobileMedia;
  const versionMediaUrl = (url) => `${url}?v=${mediaVersion}`;
  const primaryMediaUrl = versionMediaUrl(primaryMedia);
  const secondaryMediaUrl = secondaryMedia ? versionMediaUrl(secondaryMedia) : null;
  const mobileMediaUrl = mobileMedia ? versionMediaUrl(mobileMedia) : null;

  return `
    <div class="case-media">
      <a class="media-link media-primary" href="${primaryMediaUrl}" target="_blank" rel="noreferrer">
        <img src="${primaryMediaUrl}" alt="${project.title} desktop screenshot" loading="lazy" />
      </a>
      ${
        secondaryMedia
          ? `<a class="media-link media-secondary" href="${secondaryMediaUrl}" target="_blank" rel="noreferrer">
        <img src="${secondaryMediaUrl}" alt="${project.title} additional desktop screenshot" loading="lazy" />
      </a>`
          : ""
      }
      ${
        mobileMedia
          ? `<a class="phone-preview" href="${mobileMediaUrl}" target="_blank" rel="noreferrer">
        <img src="${mobileMediaUrl}" alt="${project.title} mobile screenshot" loading="lazy" />
      </a>`
          : `<div class="orientation-note">Landscape web build</div>`
      }
    </div>`;
};

const createProjectCard = (project, index) => {
  const article = document.createElement("article");
  article.className = `case-card${project.featured ? " case-card-featured" : ""}`;
  article.dataset.engine = project.engine;
  article.style.setProperty("--case-index", String(index));

  article.innerHTML = `
    ${createMediaMarkup(project)}
    <div class="case-copy">
      <div class="case-kicker">
        <span>${project.engine}</span>
        <span>${project.type}</span>
      </div>
      <h3>${project.title}</h3>
      <p>${project.summary}</p>
      <div class="chip-list">${createStackMarkup(project.stack)}</div>
      <ul class="case-highlights">${createHighlightMarkup(project.highlights)}</ul>
      ${createActionMarkup(project)}
    </div>
  `;

  return article;
};

const renderProjects = () => {
  caseGrid.replaceChildren(...projects.map(createProjectCard));
};

const setActiveFilter = (filter) => {
  const cards = [...caseGrid.querySelectorAll(".case-card")];
  const buttons = [...filterRoot.querySelectorAll("button")];

  for (const button of buttons) {
    const active = button.dataset.filter === filter;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  }

  for (const card of cards) {
    const visible = filter === "All" || card.dataset.engine === filter;
    card.hidden = !visible;
  }
};

const renderFilters = () => {
  filterRoot.replaceChildren(
    ...filters.map((filter) => {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.filter = filter;
      button.textContent = filter;
      button.setAttribute("aria-pressed", "false");
      button.addEventListener("click", () => setActiveFilter(filter));
      return button;
    }),
  );
};

renderFilters();
renderProjects();
setActiveFilter("All");

showreelToggle?.addEventListener("click", () => {
  showreelVideo.controls = true;
  showreelVideo.loop = false;
  showreelVideo.muted = false;
  showreelVideo.currentTime = 0;
  showreelToggle.classList.add("is-hidden");
  showreelVideo.play().catch(() => {
    showreelVideo.controls = true;
  });
});
