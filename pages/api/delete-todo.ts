import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismaClient";

type Res = {
    [message: string]: string | Error;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Res>
) {
    const { id } = JSON.parse(req.body);
    try {
        if (req.method === "DELETE") {
            await prisma.todo.delete({
                where: {
                    id
                }

            });
            res.status(200).json({ message: "Todo deleted" });
        } else {
            throw new Error("Invalid Method");
        }
        // CREATE
    } catch (error) {

        console.log(error)
        res
            .status(400)
            .json({ error: error as Error });
    }
}
