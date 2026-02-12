const playables = [
  {
    title: "Playable 1: Garden Designer",
    role: "Role: Solo developer (gameplay logic, UI flow, performance tuning)",
    demoUrl: "https://maksnikulnikov.github.io/GardenDesigner/",
    media: [
      "./assets/playable1-01.png",
      "./assets/playable1-02.png",
      "./assets/playable1-03.png",
    ],
    stack: "Three.js, GSAP, Vite, Vanilla JS",
    constraints:
      "Fast first paint, stable frame pacing on mobile, clear onboarding for short playable sessions.",
    solutions:
      "Onboarding spotlight with camera assist, GLTF asset cache + preload, dynamic interaction snapping, e2e coverage for core flow and mobile UX.",
  },
  {
    title: "Playable 2: Playable Dice",
    role: "Role: Solo developer (game systems, balancing, 3D feedback loop)",
    demoUrl: "https://maksnikulnikov.github.io/playable-dice/",
    media: [
      "./assets/playable2-01.png",
      "./assets/playable2-02.png",
      "./assets/playable2-03.png",
    ],
    stack: "Three.js, Vite, Vanilla JS",
    constraints:
      "Compact payload, responsive controls for desktop/mobile, readable reward loop in very short sessions.",
    solutions:
      "Config-driven balancing profile, deterministic run-state orchestration, optimized reward VFX pipeline, runtime perf overlay and CI checks.",
  },
];

const root = document.getElementById("playables");

for (const item of playables) {
  const card = document.createElement("article");
  card.className = "card";

  const mediaMarkup = item.media
    .map(
      (src, idx) => `
      <a href="${src}" target="_blank" rel="noreferrer" aria-label="${item.title} media ${idx + 1}">
        <img src="${src}" alt="${item.title} media ${idx + 1}" loading="lazy" />
      </a>`
    )
    .join("");

  card.innerHTML = `
    <div class="card-head">
      <div>
        <h2 class="card-title">${item.title}</h2>
        <p class="card-role">${item.role}</p>
      </div>
      <a class="demo-link" href="${item.demoUrl}" target="_blank" rel="noreferrer">Play demo</a>
    </div>
    <div class="media-grid">${mediaMarkup}</div>
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
        <h3>Interesting Solutions</h3>
        <p>${item.solutions}</p>
      </div>
    </section>
  `;

  root.appendChild(card);
}
