import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

const create = async (req: Request, res: Response) => {
  // const { username, password } = req.body;

  // if (!username || !password) {
  //   throw new BadRequestError("Please Provide E-Mail & Password!");
  // }

  const id = uuidv4();

  res.status(200).json({
    msg: "User Created!",
    id
  });
};

export { create };
