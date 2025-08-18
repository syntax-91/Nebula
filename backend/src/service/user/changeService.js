import { db } from "../db.js";
import { compare, hash } from "bcryptjs";

export async function changePswService(username, oldPsw, newPsw) {
  try {
    const res = await db.user.findFirst({
      where: { username: username },
      select: { password: true },
    });

    const isValidPsw = await compare(oldPsw, res.password);

    if (isValidPsw == true) {
      const newPswHash = await hash(newPsw, 12);

      await db.user.update({
        where: { username: username },
        data: { password: newPswHash },
      });

      return {
        success: true,
        msg: "успешно :)",
      };
    }

    return {
      success: false,
      msg: "что-то пошло не так(",
    };
  } catch (err) {
    console.log(`changeService - psw >> ${err}}`);
  }
}
