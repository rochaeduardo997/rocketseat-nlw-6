import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const token = request.headers.authorization;

  if (!token) {
    return response.status(401).json({
      status: false,
      msg: "Unauthorized"
    });
  }

  const parts = token.split(" ");

  try {
    const { sub } = verify(parts[1], "thisisasecret") as IPayload;

    request.user_id = sub;
  } catch (error) {
    return response.status(401).json({
      status: false,
      msg: "Unauthorized"
    });
  }

  return next();
}