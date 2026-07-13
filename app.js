const playables = [
  {
    title: "Case Study 1: Idle Breaker Playable",
    role: "Role: Solo developer (Cocos gameplay systems, scene architecture, UI feedback, playable ad flow)",
    demoUrl: "https://maksnikulnikov.github.io/idle-breaker-playable/",
    codeUrl: "https://github.com/MaksNikulnikov/idle-breaker-playable",
    desktopMedia: ["./assets/idle-breaker-desktop-01.png", "./assets/idle-breaker-desktop-02.png"],
    mobileMedia: "./assets/idle-breaker-mobile-01.png",
    stack: "Cocos Creator 3.8.6, TypeScript, Vitest, ESLint, Prettier",
    constraints:
      "Playable ad loop with three melee weapon levels, two resource kinds, upgrade station progression, a destructible exit gate, desktop/mobile controls, and final store/MRAID action.",
    solutions:
      "The strongest Cocos case in this portfolio: gameplay progression is modeled in a tested domain state machine while Cocos components own scene contracts, colliders, prefab feedback, HUD, target hints, and completion flow. Domain and application layers are kept free of Cocos imports through lint rules.",
  },
  {
    title: "Case Study 2: Tower Balance",
    role: "Role: Solo developer (hypercasual game loop, PixiJS presentation, physics collapse, Yandex Games integration)",
    demoUrl: "https://maksnikulnikov.github.io/tower-balance/",
    codeUrl: "https://github.com/MaksNikulnikov/tower-balance",
    desktopMedia: ["./assets/tower-balance-desktop-01.png", "./assets/tower-balance-desktop-02.png"],
    mobileMedia: "./assets/tower-balance-mobile-01.png",
    stack: "TypeScript, PixiJS 8, Matter.js, Vite, Playwright, Yandex Games SDK adapter",
    constraints:
      "A full hypercasual game rather than a short playable: responsive canvas, height-based difficulty, collapse presentation, audio/settings persistence, localization, ads-only release flow, and leaderboard support for Yandex Games.",
    solutions:
      "Platform behavior is isolated behind browser/Yandex adapters with local mock ads, auth, leaderboards, and pause/resume handling. Release work is automated through build, screenshot/video capture, packaging, audit scripts, and Playwright visual coverage.",
  },
  {
    title: "Case Study 3: Blast Puzzle Prototype",
    role: "Role: Solo developer (game architecture, core mechanics, PixiJS presentation, QA)",
    demoUrl: "https://maksnikulnikov.github.io/blast/",
    codeUrl: "https://github.com/MaksNikulnikov/blast",
    desktopMedia: ["./assets/blast-desktop-01.png", "./assets/blast-desktop-02.png"],
    mobileMedia: "./assets/blast-mobile-01.png",
    stack: "TypeScript, PixiJS 8, Vite, Vitest, Playwright, ESLint",
    constraints:
      "Blast puzzle prototype with portrait/landscape layouts, boosters, super-tiles, stable canvas rendering, and testable gameplay rules.",
    solutions:
      "Renderer-agnostic core mechanics are separated from the presentation layer and Pixi adapter, with data-driven animation plans, an explicit composition root, unit-tested game rules, and smoke tests for runtime behavior.",
  },
  {
    title: "Case Study 4: Slot Game",
    role: "Role: Solo developer (slot game model, PixiJS rendering, GSAP reels, asset pipeline, audio)",
    demoUrl: "https://maksnikulnikov.github.io/slot-game/",
    codeUrl: "https://github.com/MaksNikulnikov/slot-game",
    desktopMedia: ["./assets/slot-game-desktop-01.png", "./assets/slot-game-desktop-02.png"],
    mobileMedia: "./assets/slot-game-mobile-01.png",
    stack: "TypeScript, PixiJS 8, GSAP, Spine, Webpack, Vitest, ESLint",
    constraints:
      "Playable slot flow with real loading progress, responsive Pixi scene, masked reel strips, audio, Spine character states, and server-authoritative spin results.",
    solutions:
      "Core slot rules, state machine, and mock server contracts stay independent from Pixi, Spine, DOM, GSAP, and audio APIs. The app layer talks to renderer/audio/session interfaces, while presentation adapters handle Pixi views, GSAP reel animation, generated atlases, and Web Audio.",
  },
  {
    title: "Case Study 5: Fortress Demo",
    role: "Role: Solo developer (gameplay flow, UI adaptation, build/deployment polish)",
    demoUrl: "https://maksnikulnikov.github.io/fortress_demo/",
    codeUrl: "https://github.com/MaksNikulnikov/fortress_demo",
    desktopMedia: ["./assets/playable3_01.png", "./assets/playable3_02.png"],
    stack: "Cocos Creator 3.8.8, TypeScript",
    constraints:
      "Landscape-only presentation, responsive HUD on mobile widths, and a published web build under 5 MB.",
    solutions:
      "Gameplay flow is config-driven and tuned for short tutorialized sessions; HUD adaptation was implemented without moving battlefield elements relative to the background.",
  },
  {
    title: "Case Study 6: Garden Designer",
    role: "Role: Solo developer (gameplay systems, onboarding UX, performance tuning)",
    demoUrl: "https://maksnikulnikov.github.io/GardenDesigner/",
    debugUrl: "https://maksnikulnikov.github.io/GardenDesigner/?debug=1",
    codeUrl: "https://github.com/MaksNikulnikov/GardenDesigner",
    desktopMedia: ["./assets/playable1-01.png", "./assets/playable1-03.png"],
    mobileMedia: "./assets/playable1-02.png",
    stack: "Three.js, GSAP, Vite, Vanilla JS",
    constraints:
      "Fast first paint, stable frame pacing on mobile, and clear onboarding for short playable sessions.",
    solutions:
      "Client-provided sound/3D asset pack integrated into a custom pipeline; all UI visuals and gameplay effects were designed and implemented independently.",
  },
  {
    title: "Case Study 7: Playable Dice",
    role: "Role: Solo developer (procedural systems, simulation loop, 3D UX)",
    demoUrl: "https://maksnikulnikov.github.io/playable-dice/",
    debugUrl: "https://maksnikulnikov.github.io/playable-dice/?debug=1",
    codeUrl: "https://github.com/MaksNikulnikov/playable-dice",
    desktopMedia: ["./assets/playable2-01.png", "./assets/playable2-03.png"],
    mobileMedia: "./assets/playable2-02.png",
    stack: "Three.js, Vite, Vanilla JS",
    constraints:
      "Compact payload, responsive controls on desktop/mobile, and a readable reward loop in very short sessions.",
    solutions:
      "Project goal was to demonstrate procedural generation in Three.js: all models are generated in code, with no external physics engine and a custom lightweight native-JS physics approximation.",
  },
];

const root = document.getElementById("playables");

for (const item of playables) {
  const card = document.createElement("article");
  card.className = "card";
  const hasMobileShot = Boolean(item.mobileMedia);
  const hasDebugLink = Boolean(item.debugUrl);

  const desktopMediaMarkup = item.desktopMedia
    .map(
      (src, idx) => `
      <a href="${src}" target="_blank" rel="noreferrer" aria-label="${item.title} desktop media ${idx + 1}">
        <img src="${src}" alt="${item.title} desktop media ${idx + 1}" loading="lazy" />
      </a>`
    )
    .join("");

  card.innerHTML = `
    <div class="card-head">
      <div>
        <h2 class="card-title">${item.title}</h2>
        <p class="card-role">${item.role}</p>
      </div>
      <div class="demo-actions">
        <a class="demo-link" href="${item.demoUrl}" target="_blank" rel="noreferrer">Play demo</a>
        ${
          hasDebugLink
            ? `<a class="demo-link demo-link-secondary" href="${item.debugUrl}" target="_blank" rel="noreferrer">Play demo + Debug</a>`
            : ""
        }
        ${
          item.codeUrl
            ? `<a class="demo-link demo-link-tertiary" href="${item.codeUrl}" target="_blank" rel="noreferrer">View code</a>`
            : ""
        }
      </div>
    </div>

    <section class="media-layout${hasMobileShot ? "" : " media-layout-wide"}">
      <div class="media-grid">${desktopMediaMarkup}</div>
      ${
        hasMobileShot
          ? `<div class="mobile-shot-wrap">
        <p class="media-label">Mobile shot</p>
        <a class="mobile-shot" href="${item.mobileMedia}" target="_blank" rel="noreferrer" aria-label="${item.title} mobile screenshot">
          <img src="${item.mobileMedia}" alt="${item.title} mobile screenshot" loading="lazy" />
        </a>
      </div>`
          : `<div class="mobile-shot-wrap mobile-shot-wrap-note">
        <p class="media-label">Presentation</p>
        <p class="orientation-note">Landscape-only playable</p>
      </div>`
      }
    </section>

    <section class="meta">
      <div class="meta-block">
        <h3>Stack</h3>
        <p>${item.stack}</p>
      </div>
      <div class="meta-block">
        <h3>Constraints</h3>
        <p>${item.constraints}</p>
      </div>
      <div class="meta-block">
        <h3>Interesting solutions</h3>
        <p>${item.solutions}</p>
      </div>
    </section>
  `;

  root.appendChild(card);
}
