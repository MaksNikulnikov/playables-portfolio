const playables = [
  {
    title: "Playable 1",
    role: "Role: Gameplay/Frontend Engineer",
    demoUrl: "https://example-1.github.io/",
    media: [
      "./assets/playable1-01.png",
      "./assets/playable1-02.png",
      "./assets/playable1-03.png",
    ],
    stack: "Three.js, GSAP, Vanilla JS, Vite",
    constraints: "Fast initial load, mobile-friendly controls, lightweight runtime memory usage.",
    solutions:
      "Asset caching, responsive camera limits, guided onboarding with spotlight, e2e coverage for core flow.",
  },
  {
    title: "Playable 2",
    role: "Role: Technical Artist / Frontend Engineer",
    demoUrl: "https://example-2.github.io/",
    media: [
      "./assets/playable2-01.png",
      "./assets/playable2-02.png",
      "./assets/playable2-03.png",
    ],
    stack: "Pixi/Phaser/Three (укажи финальный стек)",
    constraints: "Payload size limit, animation smoothness on low-end devices, touch UX.",
    solutions:
      "Resize strategy per aspect ratio, structured asset pipeline, render-loop optimizations and interaction tuning.",
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
