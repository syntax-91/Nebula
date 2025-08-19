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

// changeDisplayName

export async function changeDisplayNameService(username, newDisplayName) {
  try {
    const res = await db.user.update({
      where: { username: username },
      data: { displayName: newDisplayName },
    });

    return {
      success: true,
      msg: "чётко)",
    };
  } catch (err) {
    console.log(`changeService - psw >> ${err}}`);
  }
}

// changeUsername

export async function changeUsernameService(username, newUsername) {
  try {
    const res = await db.user.findFirst({
      where: { username: newUsername },
    });

    if (res == true) {
      console.log("уже занято");
      return {
        success: false,
        msg: "ну это..уже занято",
      };
    }

    const update = await db.user.update({
      where: { username: username },
      data: { username: newUsername },
    });

    console.log("newUsername", newUsername, update.username);

    return {
      success: true,
      msg: "йес успешно, нах :)",
    };
  } catch (err) {
    console.log(`changeService - username >> ${err}}`);
    return { success: false, msg: "что-то пошло не так.." };
  }
}

// changeBio

export async function changeBioService(username, newBio) {
  try {
    await db.user.update({
      where: { username: username },
      data: { bio: newBio },
    });

    return {
      success: true,
      msg: "успешно :)",
    };
  } catch (err) {
    console.log(`changeService - username >> ${err}}`);
    return { success: false, msg: "что-то пошло не так.." };
  }
}

// changeAva

export async function changeAvaService(username, url) {
  try {
    const res = await db.user.update({
      where: { username: username },
      data: { ava: url },
    });

    console.log("changeAvaService");

    return {
      success: true,
      msg: "успешно :)",
      url: url,
    };
  } catch (err) {
    console.log(`changeService - ava >> ${err}}`);
    return { success: false, msg: "что-то пошло не так.." };
  }
}
