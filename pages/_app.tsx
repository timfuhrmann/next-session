import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../app/css/theme";
import { GlobalStyle } from "../app/css/GlobalStyle";
import { SessionProvider } from "../app/lib/auth/client/SessionProvider";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <SessionProvider initialSession={pageProps.session}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </SessionProvider>
    );
};

export default App;
