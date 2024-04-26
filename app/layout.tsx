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
      <html lang="en">
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
          <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
          <title>Portfolio - Atharva Upadhye</title>
        </head>
        <body>
          <Providers>
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </body>
      </html>
    </>
  );
}
