import { compare } from "bcryptjs";
import { db } from "../db.js";

export async function sessionService(privateHash) {
  try {
    const res = await db.user.findFirst({
      where: {
        privateHash: privateHash,
      },
    });

    if (!res?.privateHash) {
      console.log("пользователь не найдено");

      return {
        success: false,
        msg: "пользователь не найдено",
        additionalData: "",
      };
    }
    //const isValidPSW = await compare(password, res.password);
    return {
      success: true,
      msg: "добро пожаловать!",

      additionalData: {
        displayName: res.displayName,
        username: res.username,
        bio: res.bio,
      },
    };
  } catch (err) {
    console.log("ERROR - sessionService - func loginService >> ", err);
  }
}
