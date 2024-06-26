import { ReactNode } from "react";
import Providers from "./providers";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./globals.css";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* TODO: find out why we cannot use this in Next.js and what is the alternative. */}
      {/* <!DOCTYPE html> */}
      <html
        lang="en"
        suppressHydrationWarning
        // style={{
        //   scrollPaddingTop: "84px",
        // }}
      >
        <head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="Portfolio website of Atharva Upadhye"
          />
          {/* https://www.youtube.com/watch?v=HqfsuSmiVOY */}
          <link
            rel="shortcut icon"
            href="favicon.svg"
            type="image/svg"
            media="(prefers-color-scheme: light)"
          />
          <link
            rel="shortcut icon"
            href="favicon-dark.svg"
            type="image/svg"
            media="(prefers-color-scheme: dark)"
          />
          <link
            rel="shortcut icon"
            href="favicon-dark.svg"
            type="image/svg"
            media="(prefers-color-scheme: no-preference)"
          />
          <title>Portfolio - Atharva Upadhye</title>
        </head>
        <body className=" bg-slate-300 dark:bg-slate-800">
          <Providers>
            <Navbar />
            {children}
            {/* <Footer /> */}
          </Providers>
        </body>
      </html>
    </>
  );
}
