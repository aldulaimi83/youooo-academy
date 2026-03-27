const academyLinks = {
  python: "https://YOUR-USERNAME.github.io/youooo-python/",
  chess: "https://YOUR-USERNAME.github.io/chess/",
  linux: "https://YOUR-USERNAME.github.io/Interactive-Terminal-Simulato/"
};

function applyLinks() {
  const pythonLink = document.getElementById("pythonLink");
  const chessLink = document.getElementById("chessLink");
  const linuxLink = document.getElementById("linuxLink");

  if (pythonLink) pythonLink.href = academyLinks.python;
  if (chessLink) chessLink.href = academyLinks.chess;
  if (linuxLink) linuxLink.href = academyLinks.linux;
}

function smoothNav() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
}

function init() {
  applyLinks();
  smoothNav();
}

init();
