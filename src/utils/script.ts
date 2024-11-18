export function scriptFn() {
  const isDefaultDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const bodyContainsDark = document.documentElement.classList.contains("dark");
  const theme = localStorage.getItem("theme");

  const setThemeLight = () => {
    if (bodyContainsDark) {
      document.documentElement.classList.remove("dark");
      // document.documentElement.style.colorScheme = "light";
    }
  };

  const setThemeDark = () => {
    if (!bodyContainsDark) {
      document.documentElement.classList.add("dark");
      // document.documentElement.style.colorScheme = "dark";
    }
  };

  if (theme === "light") {
    setThemeLight();
  } else if (theme === "dark") {
    setThemeDark();
  } else {
    if (isDefaultDark) setThemeDark();
    else setThemeLight();
  }
}
