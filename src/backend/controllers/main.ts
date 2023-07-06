import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { appendFileSync, readFileSync, writeFileSync } from "fs";
import { parse } from "csv-parse/sync";
import { z } from "zod";
import { stringify } from "csv-stringify";

import { User } from "../middleware/validate";

type User = z.infer<typeof User> & { id: string };

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
  try {
    const data = readFileSync("./data/data.csv", "utf-8");
    const parsedData = parse(data, { columns: true, skip_empty_lines: true });

    return res.status(200).json({
      users: parsedData
    });
  } catch (err) {
    return res.status(409).json({
      status: "Failed",
      err
    });
  }
};

const getUser = async (req: Request, res: Response) => {
  const {
    params: { id: userId }
  } = req;

  try {
    const data = readFileSync("./data/data.csv", "utf-8");
    const parsedData: User[] = parse(data, {
      columns: true,
      skip_empty_lines: true
    });
    const user = parsedData.filter((u) => u.id === userId);

    if (user.length === 0)
      return res.status(409).json({
        status: "Failed",
        err: "No User with Given ID."
      });

    return res.status(200).json({
      user
    });
  } catch (err) {
    return res.status(409).json({
      status: "Failed",
      err
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  const {
    params: { id: userId }
  } = req;

  try {
    const data = readFileSync("./data/data.csv", "utf-8");
    const parsedData: User[] = parse(data, {
      columns: true,
      skip_empty_lines: true
    });
    const user = parsedData.filter((u) => u.id === userId);

    if (user.length === 0)
      return res.status(409).json({
        status: "Failed",
        err: "No User with Given ID."
      });

    return res.status(200).json({
      user
    });
  } catch (err) {
    return res.status(409).json({
      status: "Failed",
      err
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const {
    params: { id: userId }
  } = req;

  try {
    const data = readFileSync("./data/data.csv", "utf-8");
    const parsedData: User[] = parse(data, {
      columns: true,
      skip_empty_lines: true
    });
    const users = parsedData.filter((u) => u.id !== userId);
    console.log(users);

    stringify(
      users,
      {
        header: true
      },
      (err, output) => {
        writeFileSync("./data/data.csv", output);
      }
    );

    return res.status(200).json({
      users
    });
  } catch (err) {
    return res.status(409).json({
      status: "Failed",
      err
    });
  }
};

export { createUser, getUsers, getUser, updateUser, deleteUser };
