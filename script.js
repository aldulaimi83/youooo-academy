const academyLinks = {
  python: "https://aldulaimi83.github.io/youooo-python/",
  chess: "https://aldulaimi83.github.io/chess/",
  linux: "https://aldulaimi83.github.io/Interactive-Terminal-Simulato/",
  git: "https://aldulaimi83.github.io/youooo-git/"
};

function applyLinks() {
  const pythonLink = document.getElementById("pythonLink");
  const pythonLink2 = document.getElementById("pythonLink2");
  const chessLink = document.getElementById("chessLink");
  const linuxLink = document.getElementById("linuxLink");
  const gitLink = document.getElementById("gitLink");

  if (pythonLink) pythonLink.href = academyLinks.python;
  if (pythonLink2) pythonLink2.href = academyLinks.python;
  if (chessLink) chessLink.href = academyLinks.chess;
  if (linuxLink) linuxLink.href = academyLinks.linux;
  if (gitLink) gitLink.href = academyLinks.git;
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
