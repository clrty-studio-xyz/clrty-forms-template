// src/pages/_app.tsx
import "../styles/globals.css";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";
import { SessionProvider } from "next-auth/react";
import Main from "../components/UI/Layout/Main";

const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Main>
        <Component {...pageProps} />
      </Main>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
