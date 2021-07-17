export const fetchData = async <T>(path: string): Promise<T | null> => {
    try {
        const ssr = typeof window === "undefined";
        const baseUrl = ssr ? _appBaseUrl() : "";
        const res = await fetch(`${baseUrl}/api/${path}`);
        if (!res.ok) return null;
        const data = await res.json();
        return Object.keys(data).length > 0 ? data : null;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const _appBaseUrl = () => {
    const baseUrl = process.env.APP_BASE_URL;

    if (!baseUrl) {
        throw new Error("APP_BASE_URL environment variable not set");
    }

    return baseUrl;
};
