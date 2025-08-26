import { compare } from "bcryptjs";
import { db } from "../db.js";

export async function sessionService(sHash, password) {
  try {
    const res = await db.user.findFirst({
      where: {
        sHash: sHash,
      },
    });

    if (!res?.sHash) {
      console.log("пользователь не найдено");

      return {
        success: false,
        msg: "пользователь не найдено",
        additionalData: "",
      };
    }

    const isValidPSW = await compare(password, res.password);

    if (isValidPSW) {
      console.log("добро пожаловать!");

      return {
        success: true,
        msg: "добро пожаловать!",

        additionalData: {
          displayName: res.displayName,
          username: res.username,
          bio: res.bio,
        },
      };
    }

    return {
      success: false,
      msg: "неправильные данные",
      additionalData: "",
    };
  } catch (err) {
    console.log("ERROR - sessionService - func loginService >> ", err);
  }
}
