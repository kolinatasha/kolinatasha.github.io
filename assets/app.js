(function(){
  const root = document.documentElement;
  const STORAGE_KEY = "natasha_portfolio_theme";
  const buttons = document.querySelectorAll("[data-theme-btn]");
  const setTheme = (t) => {
    root.setAttribute("data-theme", t);
    localStorage.setItem(STORAGE_KEY, t);
    buttons.forEach(b => b.setAttribute("aria-pressed", String(b.dataset.themeBtn === t)));
  };
  const init = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const theme = saved || root.getAttribute("data-theme") || "day";
    setTheme(theme);
  };
  buttons.forEach(b => b.addEventListener("click", () => setTheme(b.dataset.themeBtn)));
  init();

  const search = document.querySelector("[data-search]");
  const items = document.querySelectorAll("[data-filter-item]");
  if(search){
    search.addEventListener("input", () => {
      const q = search.value.trim().toLowerCase();
      items.forEach(el => {
        const hay = (el.getAttribute("data-haystack") || "").toLowerCase();
        el.style.display = hay.includes(q) ? "" : "none";
      });
    });
  }
})();
