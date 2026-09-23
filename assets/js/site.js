/* Les partages restent des liens HTML utilisables sans JavaScript. */
"use strict";
(() => {
  const canonical = document.querySelector('link[rel="canonical"]').href;
  const button = document.getElementById("copy-link");
  const status = document.getElementById("copy-status");
  const fallback = document.getElementById("copy-fallback");
  const field = document.getElementById("canonical-link");
  field.value = canonical;
  button.hidden = false;
  button.addEventListener("click", async () => {
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error("manual-copy");
      await navigator.clipboard.writeText(canonical);
      fallback.hidden = true;
      status.textContent = "Lien copié.";
    } catch {
      fallback.hidden = false;
      field.focus();
      field.select();
      status.textContent = "Copie automatique indisponible. Copiez le lien sélectionné avec le raccourci de votre appareil.";
    }
  });
})();
