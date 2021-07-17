import React, { useEffect, useState } from "react";
import { SessionContext } from "./SessionContext";
import { fetchData } from "../util/fetch";

interface SessionProviderProps {
    initialSession?: Auth.Session;
}

export const SessionProvider: React.FC<SessionProviderProps> = ({ initialSession, children }) => {
    const [session, setSession] = useState<Auth.Session | null>(initialSession || null);
    const [loading, setLoading] = useState<boolean>(!initialSession);

    useEffect(() => {
        if (initialSession) {
            return;
        }

        fetchData<Auth.Session>("session").then(res => {
            setSession(res);
            setLoading(false);
        });
    }, [initialSession]);

    return (
        <SessionContext.Provider value={{ session, loading }}>{children}</SessionContext.Provider>
    );
};
