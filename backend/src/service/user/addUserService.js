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
        publicHash: "*",
      };
    }

    const PSW_HASH = await hash(data.password, 12);
    const rand_UUID = v4();

    const publicHash = await hash(rand_UUID, 12);

    await db.user.create({
      data: {
        displayName: data.displayName,
        username: data.username,
        password: PSW_HASH,
        ava: "",
        publicHash: publicHash,
      },
    });

    return {
      success: true,
      publicHash: publicHash,
      msg: "успешно",
    };
  } catch (err) {
    console.log("ERROR - register - func addUserService >> ", err);
  }
}
