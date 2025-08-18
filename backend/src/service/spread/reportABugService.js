import { db } from "../db.js";

export async function ReportABugService(username, text) {
  try {
    const res = await db.bug.create({
      data: {
        ownerUsername: username,
        text: text,
      },
    });

    if (res.ownerUsername !== username) {
      return {
        success: false,
        msg: "кажется что-то пошло не так..",
      };
    }

    return {
      success: true,
      msg: "спасибо что помогаете проекту, мы вам бесконечно благодарны :)",
    };
  } catch (err) {
    console.log("ERROR - func QueryService >> ", err);
  }
}
