import { z } from "zod";
import { Request, Response, NextFunction } from "express";

export const User = z.object({
  first_name: z
    .string({
      required_error: "First Name is Required."
    })
    .nonempty(),
  last_name: z
    .string({
      required_error: "Last Name is Required."
    })
    .nonempty(),
  email: z
    .string({
      required_error: "E-Mail is Required."
    })
    .email("Not a Valid E-Mail.")
    .nonempty(),
  mob_no: z
    .string({
      required_error: "Mobile Number is Required."
    })
    .regex(new RegExp(/^\d{10}$/)),
  address: z
    .string({
      required_error: "Address is Required."
    })
    .nonempty()
    .min(4)
});

export const validate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await User.parseAsync(req.body);
    next();
  } catch (error) {
    return res.status(409).json({
      status: "Failed",
      error
    });
  }
};
