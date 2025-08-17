import { db } from "../db.js";

export async function userHashPswService(username) {
  try {
    const res = await db.user.findFirst({
      where: { username: username },
      select: { password },
    });

    return {
      success: true,
      hashPsw: res,
    };
  } catch (err) {
    console.log(`userHashPswService >> ${err}}`);
  }
}
