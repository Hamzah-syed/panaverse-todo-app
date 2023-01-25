import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismaClient";

type Res = {
  message: string | Error;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Res>
) {
  const { task } = JSON.parse(req.body);
  try {
    if (req.method === "POST") {
      await prisma.todo.create({
        data: {
          task,
          // sort_number,
        },
      });
      res.status(200).json({ message: "Todo created" });
    } else {
      throw new Error("Invalid Method");
    }
    // CREATE
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ message: new Error((error as { message: string }).message) });
  }
}
