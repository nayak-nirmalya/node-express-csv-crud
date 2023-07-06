import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

const createUser = async (req: Request, res: Response) => {
  if (!req.body) {
    return res.status(400).json({ msg: "Not Enough Data!" });
  }

  const { first_name, last_name, email, mob_no, address } = req.body;

  if (!first_name || !last_name || !email || !mob_no || !address) {
    return res.status(400).json({ msg: "Fields Can Not Be Empty!" });
  }

  const id = uuidv4();

  res.status(200).json({
    msg: "User Created!",
    id
  });
};

export { createUser };
