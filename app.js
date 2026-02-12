const playables = [
  {
    title: "Playable 1: Garden Designer",
    role: "Role: Solo developer (gameplay systems, onboarding UX, performance tuning)",
    demoUrl: "https://maksnikulnikov.github.io/GardenDesigner/",
    debugUrl: "https://maksnikulnikov.github.io/GardenDesigner/?debug=1",
    desktopMedia: ["./assets/playable1-01.png", "./assets/playable1-03.png"],
    mobileMedia: "./assets/playable1-02.png",
    stack: "Three.js, GSAP, Vite, Vanilla JS",
    constraints:
      "Fast first paint, stable frame pacing on mobile, and clear onboarding for short playable sessions.",
    solutions:
      "Client-provided sound/3D asset pack integrated into a custom pipeline; all UI visuals and gameplay effects were designed and implemented independently.",
  },
  {
    title: "Playable 2: Playable Dice",
    role: "Role: Solo developer (procedural systems, simulation loop, 3D UX)",
    demoUrl: "https://maksnikulnikov.github.io/playable-dice/",
    debugUrl: "https://maksnikulnikov.github.io/playable-dice/?debug=1",
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
        <a class="demo-link demo-link-secondary" href="${item.debugUrl}" target="_blank" rel="noreferrer">Play demo + Debug</a>
      </div>
    </div>

    <section class="media-layout">
      <div class="media-grid">${desktopMediaMarkup}</div>
      <div class="mobile-shot-wrap">
        <p class="media-label">Mobile shot</p>
        <a class="mobile-shot" href="${item.mobileMedia}" target="_blank" rel="noreferrer" aria-label="${item.title} mobile screenshot">
          <img src="${item.mobileMedia}" alt="${item.title} mobile screenshot" loading="lazy" />
        </a>
      </div>
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
