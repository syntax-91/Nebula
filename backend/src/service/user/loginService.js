import { compare } from "bcryptjs";
import { db } from "../db.js";

export async function loginService(data) {
  try {
    const res = await db.user.findFirst({
      where: {
        username: data.username,
      },
    });

    if (res?.username !== data.username) {
      console.log("пользователь не найдено");

      return {
        success: false,
        msg: "пользователь не найдено",
      };
    }

    const isValidPSW = await compare(data.password, res.password);

    if (isValidPSW) {
      console.log("добро пожаловать!");

      return {
        success: true,
        msg: "добро пожаловать!",
        publicHash: res.publicHash,

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
    };
  } catch (err) {
    console.log("ERROR - loginService - func loginService >> ", err);
  }
}
