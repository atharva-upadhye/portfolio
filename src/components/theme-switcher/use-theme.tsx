"use client";
import { useCallback, useEffect, useState } from "react";

export function useTheme() {
	const [theme, setThemeState] = useState<"system" | "dark" | "light">(
		"system"
	);

	const setTheme = useCallback((theme: "system" | "dark" | "light") => {
		window.localStorage.setItem("theme", theme);
		window.dispatchEvent(new Event("storage"));
	}, []);
	const [isSystemThemeDark, setIsSystemThemeDark] = useState(false);
	useEffect(() => {
		const prefersColorSchemeDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		);

		const listener = (event: MediaQueryListEvent) => {
			setIsSystemThemeDark(event.matches);
		};
		const setThemeStateListener = () => {
			setThemeState(
				(window.localStorage.getItem("theme") as
					| "system"
					| "dark"
					| "light"
					| null) || "system"
			);
		};

		window.addEventListener("storage", setThemeStateListener);
		prefersColorSchemeDark.addEventListener("change", listener);

		setIsSystemThemeDark(prefersColorSchemeDark.matches);
		setThemeState(
			(window.localStorage.getItem("theme") as
				| "system"
				| "dark"
				| "light"
				| null) || "system"
		);

		return () => {
			window.removeEventListener("storage", setThemeStateListener);
			prefersColorSchemeDark.removeEventListener("change", listener);
		};
	}, []);

	useEffect(() => {
		const isDark =
			(theme === "system" && isSystemThemeDark) || theme === "dark";
		const bodyContainsDark =
			document.documentElement.classList.contains("dark");
		if (isDark && !bodyContainsDark) {
			document.documentElement.classList.add("dark");
		} else if (!isDark && bodyContainsDark) {
			document.documentElement.classList.remove("dark");
		}
	}, [theme, isSystemThemeDark]);
	return {
		theme,
		setTheme,
	};
}
