import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeSwitcher } from "@/components/theme-switcher/theme-switcher";
import ScrollToTop from "@/components/scroll-to-top";
import { LayoutProps } from "@/../.next/types/app/layout";
import { cn } from "@/utils/tailwind";
import { ThemeProvider } from "next-themes";
import { Axe } from "@/components/axe";
// import { scriptFn as initScript } from "@/utils/script";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Portfolio - Atharva Upadhye",
	description:
		"Atharva Upadhye | Full Stack Developer proficient in MERN(MongoDb, Express, React, Node) stack, Typescript and other technologies.",
};

export default function RootLayout({
	children,
	projects,
	timeline,
	social,
	skills,
	blogs,
}: LayoutProps) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(geistSans.variable, geistMono.variable, "antialiased")}
			>
				<a id="skip-to-content" href="#content">
					Skip to Content
				</a>
				<Axe />
				{/* <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: `(${initScript.toString()})()` }}
        /> */}
				<ThemeProvider enableSystem attribute={"class"}>
					<ThemeSwitcher />
					<ScrollToTop />
					<main
						id="content"
						className="m-auto max-w-4xl p-8 flex flex-col gap-4"
					>
						{children}
						{projects}
						{skills}
						{social}
						{/* {certifications} */}
						{blogs}
						{timeline}
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
