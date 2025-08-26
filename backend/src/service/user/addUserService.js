import { db } from "../db.js";
import { hash } from "bcryptjs";
import { v4 } from "uuid";

export async function addUserService(data) {
  try {
    const res = await db.user.findFirst({
      where: {
        username: data.username,
      },
    });

    if (res?.username === data.username) {
      return {
        success: false,
        msg: "уже существует..",
        sHash: "*",
      };
    }

    const PSW_HASH = await hash(data.password, 12);
    const rand_UUID = v4();

    const sHash = await hash(rand_UUID, 12);

    await db.user.create({
      data: {
        displayName: data.displayName,
        username: data.username,
        password: PSW_HASH,
        ava: "",
        sHash: sHash,
      },
    });

    return {
      success: true,
      sHash: sHash,
      msg: "успешно",

      additionalData: {
        displayName: res.displayName,
        username: res.username,
        bio: res.bio,
      },
    };
  } catch (err) {
    console.log("ERROR - register - func loginService >> ", err);
  }
}
