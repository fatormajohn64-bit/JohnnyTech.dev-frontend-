// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- Render social icons from config.js ----------
const SOCIAL_ICONS = {
  github: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5 3.3 9.3 7.9 10.8.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5Z"/></svg>`,
  tiktok: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16.7.5c.4 2.5 2 4.2 4.6 4.4v3a7.6 7.6 0 0 1-4.6-1.5v7.3a6.8 6.8 0 1 1-5.9-6.8v3.1a3.7 3.7 0 1 0 2.9 3.6V.5h3Z"/></svg>`,
  instagram: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>`,
  facebook: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.6 1.7-1.6h1.6V3.2A21 21 0 0 0 14 3c-2.4 0-4 1.5-4 4.1v2.7H7.3V13H10v8h3.5Z"/></svg>`,
  whatsapp: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20Zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1s-.6.8-.8.9c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-1.9-1.2 7 7 0 0 1-1.3-1.6c-.1-.2 0-.4.1-.5l.4-.4.2-.4v-.4c0-.1-.5-1.3-.7-1.8-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3 1 2.5c.1.1 1.7 2.6 4.1 3.6.6.2 1 .4 1.4.5.6.2 1.1.1 1.5.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1l-.4-.2Z"/></svg>`,
  phone: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 4.2 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.9 9.6a16 16 0 0 0 5.5 5.5l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z"/></svg>`,
  email: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7 10-7"/></svg>`,
};

function buildSocialLinks() {
  const row = document.getElementById("social-row");
  const s = SITE_CONFIG.social;
  const links = [];

  if (s.github.url) links.push([s.github.url, SOCIAL_ICONS.github, s.github.label]);
  if (s.tiktok.url) links.push([s.tiktok.url, SOCIAL_ICONS.tiktok, s.tiktok.label]);
  if (s.instagram.url) links.push([s.instagram.url, SOCIAL_ICONS.instagram, s.instagram.label]);
  if (s.facebook.url) links.push([s.facebook.url, SOCIAL_ICONS.facebook, s.facebook.label]);
  if (s.whatsapp.number) links.push([`https://wa.me/${s.whatsapp.number}`, SOCIAL_ICONS.whatsapp, s.whatsapp.label]);
  if (s.phone.number) links.push([`tel:${s.phone.number}`, SOCIAL_ICONS.phone, s.phone.label]);
  if (s.email.address) links.push([`mailto:${s.email.address}`, SOCIAL_ICONS.email, s.email.label]);

  row.innerHTML = links
    .map(([href, icon, label]) => `<li><a href="${href}" target="_blank" rel="noopener" aria-label="${label}">${icon}</a></li>`)
    .join("");
}

// ---------- Render project cards from config.js ----------
function buildProjectCards() {
  const grid = document.getElementById("project-grid");

  grid.innerHTML = PROJECTS.map((p) => `
    <article class="project-card">
      <div class="card-top">
        <span class="card-icon">${p.icon}</span>
        <span class="card-tag">${p.tag}</span>
      </div>
      <h3>${p.title}</h3>
      <p class="desc">${p.desc}</p>
      <div class="tech-tags">${p.tech.map((t) => `<span>${t}</span>`).join("")}</div>
      <div class="card-actions">
        ${p.live ? `<a class="live" href="${p.live}" target="_blank" rel="noopener">View Live</a>` : `<a class="live" style="opacity:.4;pointer-events:none;">View Live</a>`}
        ${p.code ? `<a class="code" href="${p.code}" target="_blank" rel="noopener">Code</a>` : `<a class="code" style="opacity:.4;pointer-events:none;">Code</a>`}
      </div>
    </article>
  `).join("");
}

// ---------- Animated network graphic (hero) ----------
function buildNetwork() {
  const svg = document.getElementById("network");
  const ns = "http://www.w3.org/2000/svg";

  const nodes = [
    { x: 250, y: 250, r: 55 }, // center
    { x: 120, y: 150, r: 22 },
    { x: 380, y: 120, r: 30 },
    { x: 420, y: 300, r: 24 },
    { x: 300, y: 400, r: 20 },
    { x: 90, y: 330, r: 16 },
  ];

  const edges = [[0,1],[0,2],[0,3],[0,4],[0,5],[1,2],[3,4]];

  edges.forEach(([a, b]) => {
    const line = document.createElementNS(ns, "line");
    line.setAttribute("x1", nodes[a].x);
    line.setAttribute("y1", nodes[a].y);
    line.setAttribute("x2", nodes[b].x);
    line.setAttribute("y2", nodes[b].y);
    line.setAttribute("stroke", "var(--cyan-dim)");
    line.setAttribute("stroke-width", "1");
    line.setAttribute("opacity", "0.6");
    svg.appendChild(line);
  });

  nodes.forEach((n, i) => {
    const circle = document.createElementNS(ns, "circle");
    circle.setAttribute("cx", n.x);
    circle.setAttribute("cy", n.y);
    circle.setAttribute("r", n.r);
    circle.setAttribute("fill", i === 0 ? "rgba(56,224,240,0.15)" : "rgba(56,224,240,0.08)");
    circle.setAttribute("stroke", "var(--cyan)");
    circle.setAttribute("stroke-width", i === 0 ? "1.5" : "1");
    circle.style.transformOrigin = `${n.x}px ${n.y}px`;
    circle.style.animation = `pulse 3.5s ease-in-out ${i * 0.3}s infinite`;
    svg.appendChild(circle);
  });

  const style = document.createElementNS(ns, "style");
  style.textContent = `
    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.06); opacity: 0.85; }
    }
  `;
  svg.appendChild(style);
}

buildSocialLinks();
buildProjectCards();
buildNetwork();
