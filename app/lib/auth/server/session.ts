import { NextApiRequest, NextApiResponse } from "next";

const AuthSession = async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies.jwt;
    const secret = process.env.APP_JWT_SECRET;

    if (!secret) {
        const error = "APP_JWT_SECRET environment variable not set";
        console.log(error);
        return res.status(500).end(`Error: ${error}`);
    }

    if (!token) {
        return res.status(401).end("Unauthorized");
    }

    // @Todo:
    // 1. Decode jwt
    // 2. Update max age
    // 3. Encode jwt
    // 4. Overwrite cookie with new max age
    // 5. Send payload
    //
    // Error: Destroy cookie

    return res.json({ test: "1234" });
};

export default AuthSession;
