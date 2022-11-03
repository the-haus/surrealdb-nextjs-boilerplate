import "assets/less/index.less";
import Head from "next/head";
import MainLayout from "components/layouts/MainLayout";
import TodoSection from "components/sections/TodoSection";
import { ReactNode } from "react";

function Home() {
    return (
        <>
            <Head>
                <title>Surreal + GraphQL + NextJS TS Boilerplate</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TodoSection />
        </>
    );
}

Home.layout = (children: ReactNode) => <MainLayout>{children}</MainLayout>;

export default Home;