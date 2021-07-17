import { fetchData } from "./util/fetch";

export const getSession = async () => {
    return await fetchData("session");
};
