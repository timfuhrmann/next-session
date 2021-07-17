import React from "react";
import { GetServerSideProps } from "next";
import { getSession } from "../app/lib/auth";
import { useSession } from "../app/lib/auth/client/SessionContext";

const Home: React.FC = () => {
    const { session, loading } = useSession();

    if (!session && loading) return <div>Loading...</div>;

    if (!session) return <div>Unauthenticated!</div>;

    return <div>Authenticated!</div>;
};

export const getServerSideProps: GetServerSideProps = async () => {
    const session = await getSession();

    return {
        props: { session },
    };
};

export default Home;
