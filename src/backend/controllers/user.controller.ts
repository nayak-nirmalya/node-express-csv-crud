import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { appendFileSync, readFileSync, writeFileSync } from "fs";
import { parse } from "csv-parse/sync";
import { z } from "zod";
import { stringify } from "csv-stringify";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

import { User } from "../middlewares/validate";

type User = z.infer<typeof User> & { id: string };

const createUser = async (req: Request, res: Response) => {
  if (!req.body)
    return res.status(StatusCodes.NO_CONTENT).send({
      error: ReasonPhrases.NO_CONTENT
    });

  const { first_name, last_name, email, mob_no, address } = req.body;

  const id = uuidv4();

  const csv = `${id},${first_name},${last_name},${email},${mob_no},${address}\n`;

  try {
    appendFileSync("./data/data.csv", csv);
  } catch (error) {
    return res.status(StatusCodes.NOT_FOUND).send({
      error
    });
  }

  res
    .status(StatusCodes.CREATED)
    .json({ id, first_name, last_name, email, mob_no, address });
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const data = readFileSync("./data/data.csv", "utf-8");
    const parsedData = parse(data, { columns: true, skip_empty_lines: true });

    return res.status(StatusCodes.OK).json({
      users: parsedData
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).send({
      error
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
      return res.status(StatusCodes.NOT_FOUND).json({
        error: "No User Found with Given ID."
      });

    return res.status(StatusCodes.OK).json({
      user
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).send({
      error
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  const {
    params: { id: userId }
  } = req;
  const { first_name, last_name, email, mob_no, address } = req.body;

  const user: User = {
    id: userId,
    first_name,
    last_name,
    email,
    mob_no,
    address
  };

  try {
    const data = readFileSync("./data/data.csv", "utf-8");

    const parsedData: User[] = parse(data, {
      columns: true,
      skip_empty_lines: true
    });

    const users = parsedData.filter((u) => u.id !== userId);

    const updatedUsers = users.concat(user);

    stringify(
      updatedUsers,
      {
        header: true
      },
      (error, output) => {
        if (error)
          return res.status(StatusCodes.BAD_REQUEST).send({
            error
          });

        writeFileSync("./data/data.csv", output);
      }
    );

    return res.status(StatusCodes.OK).json({
      user
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).send({
      error
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

    stringify(
      users,
      {
        header: true
      },
      (error, output) => {
        if (error)
          return res.status(StatusCodes.BAD_REQUEST).send({
            error
          });

        writeFileSync("./data/data.csv", output);
      }
    );

    return res.status(StatusCodes.OK).json({
      users
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).send({
      error
    });
  }
};

export { createUser, getUsers, getUser, updateUser, deleteUser };
