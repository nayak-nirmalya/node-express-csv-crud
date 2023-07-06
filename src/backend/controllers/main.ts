import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { appendFileSync, readFileSync } from "fs";

const createUser = async (req: Request, res: Response) => {
  if (!req.body) return res.status(400).json({ msg: "Not Enough Data!" });

  const { first_name, last_name, email, mob_no, address } = req.body;

  const id = uuidv4();

  const csv = `${id},${first_name},${last_name},${email},${mob_no},${address}\n`;

  try {
    appendFileSync("./data/data.csv", csv);
  } catch (err) {
    return res.status(409).json({
      status: "Failed",
      err
    });
  }

  res.status(200).json({
    msg: "User Created!",
    id
  });
};

const getUsers = async (req: Request, res: Response) => {
  const { first_name, last_name, email, mob_no, address } = req.body;

  try {
    const data = readFileSync("./data/data.csv", "utf-8");
    console.log(data);
  } catch (err) {
    return res.status(409).json({
      status: "Failed",
      err
    });
  }

  res.status(200).json({
    msg: "User Created!"
  });
};

export { createUser, getUsers };
