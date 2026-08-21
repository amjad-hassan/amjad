// types out the sidebar name/role on load, like a terminal echoing a command
const nameEl = document.querySelector(".identity h1");
const roleEl = document.querySelector(".identity .role");

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (nameEl && roleEl && !prefersReducedMotion) {
  const fullName = nameEl.textContent;
  const fullRole = roleEl.textContent;

  nameEl.textContent = "";
  roleEl.textContent = "";

  function typeInto(el, text, speed, onDone) {
    el.classList.add("typing-cursor");
    let i = 0;
    (function step() {
      el.textContent = text.slice(0, i);
      if (i < text.length) {
        i++;
        setTimeout(step, speed);
      } else {
        el.classList.remove("typing-cursor");
        if (onDone) onDone();
      }
    })();
  }

  typeInto(nameEl, fullName, 55, () => {
    typeInto(roleEl, fullRole, 30);
  });
}
