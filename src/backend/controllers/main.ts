import { Request, Response } from "express";

const create = async (req: Request, res: Response) => {
  // const { username, password } = req.body;

  // if (!username || !password) {
  //   throw new BadRequestError("Please Provide E-Mail & Password!");
  // }

  const id = new Date().getSeconds();

  res.status(200).json({
    msg: "User Created!",
    id
  });
};

export { create };
