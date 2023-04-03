import "../styles/globals.css";
import type { AppProps } from "next/app";
import type { Session } from "next-auth";
import { Montserrat } from "@next/font/google";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import store from "../store";
//TEST
const montserrat = Montserrat({
  subsets: ["latin"],

  style: ["normal"],
  variable: "--font-montserrat",
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <ThemeProvider attribute="class">
      <SessionProvider session={session}>
        <Provider store={store}>
          <main className={`${montserrat.variable} font-sans`}>
            <Component {...pageProps} />
          </main>
        </Provider>
      </SessionProvider>
    </ThemeProvider>
  );
}
