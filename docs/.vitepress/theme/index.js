import DefaultTheme from "vitepress/theme";
import "./style.css";

const wireUseCaseLibrary = () => {
  const input = document.querySelector("#uc-search-input");
  const count = document.querySelector("#uc-visible-count");
  const empty = document.querySelector("#uc-empty");
  const rows = Array.from(document.querySelectorAll(".uc-results .uc-row"));
  const filters = Array.from(document.querySelectorAll("[data-uc-filter]"));
  const favorites = Array.from(document.querySelectorAll("[data-uc-favorite]"));
  if (!input || !count || rows.length === 0 || input.dataset.ready === "true") return;
  input.dataset.ready = "true";

  let activeFilter = "all";
  const storageKey = "hermes-workshop:use-case-favorites";
  const loadFavorites = () => {
    try { return new Set(JSON.parse(window.localStorage.getItem(storageKey) || "[]")); }
    catch { return new Set(); }
  };
  const saveFavorites = (items) => {
    try { window.localStorage.setItem(storageKey, JSON.stringify(Array.from(items))); }
    catch {}
  };
  const favoriteItems = loadFavorites();

  favorites.forEach((checkbox) => {
    checkbox.checked = favoriteItems.has(checkbox.dataset.ucFavorite);
    checkbox.closest(".uc-row")?.classList.toggle("uc-row--favorite", checkbox.checked);
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) favoriteItems.add(checkbox.dataset.ucFavorite);
      else favoriteItems.delete(checkbox.dataset.ucFavorite);
      checkbox.closest(".uc-row")?.classList.toggle("uc-row--favorite", checkbox.checked);
      saveFavorites(favoriteItems);
    });
  });

  const apply = () => {
    const query = input.value.trim().toLowerCase();
    let visible = 0;
    rows.forEach((row) => {
      const haystack = [row.textContent, row.dataset.guide, row.dataset.audience, row.dataset.tags].join(" ").toLowerCase();
      const matchesQuery = query === "" || haystack.includes(query);
      const matchesFilter = activeFilter === "all" || haystack.includes(activeFilter);
      const match = matchesQuery && matchesFilter;
      row.hidden = !match;
      if (match) visible += 1;
    });
    count.textContent = String(visible);
    if (empty) empty.hidden = visible !== 0;
    filters.forEach((button) => {
      button.classList.toggle("uc-filter-active", button.dataset.ucFilter === activeFilter);
    });
  };

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.ucFilter || "all";
      apply();
    });
  });
  input.addEventListener("input", apply);
  apply();
};

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp?.(ctx);
    if (typeof window !== "undefined") {
      window.addEventListener("vitepress:page-load", wireUseCaseLibrary);
      setTimeout(wireUseCaseLibrary, 0);
    }
  }
};
