import { createContext, useContext } from "react";

interface SessionContextData {
    session: Auth.Session | null;
    loading: boolean;
}

export const SessionContext = createContext<SessionContextData>({} as SessionContextData);

export const useSession = () => useContext(SessionContext);
