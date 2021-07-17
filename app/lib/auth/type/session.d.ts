declare module Auth {
    interface User {
        name: string;
        email: string;
        image: string;
    }

    interface Session {
        user?: User;
        token: string;
        expires: string;
    }
}
