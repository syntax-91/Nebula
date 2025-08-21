import { db } from "../db.js";

export async function userdataService(username) {
  try {
    const res = await db.user.findFirst({
      where: {
        username: username,
      },
      select: {
        username: true,
        bio: true,
        displayName: true,
        ava: true,
      },
    });

    if (res?.username !== username) {
      console.log("пользователь не найдено");
      console.log(username);
      console.log(res);

      return {
        success: false,
        res: null,
      };
    }

    console.log("пользователь найдено");

    return {
      success: true,
      res: res,
    };
  } catch (err) {
    console.log("ERROR - userdataService >> ", err);
  }
}
