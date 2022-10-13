import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../../utils/trpc";
import Layout from "../../components/UI/Layout/Main";
import Inner from "../../components/UI/Layout/Multi";
import Main from "../../components/UI/Layout/Main";
import Multi from "../../components/UI/Layout/Multi";

const Form: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Clrty Edit Form</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Multi>dashboards</Multi>
      </Main>
    </>
  );
};

export default Form;
