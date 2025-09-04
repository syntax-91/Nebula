import { db } from "../db.js";
import { compare, hash } from "bcryptjs";

export async function changePswService(privateHash, oldPsw, newPsw) {
  try {
    const res = await db.user.findFirst({
      where: { privateHash: privateHash },
      select: { password: true },
    });

    const isValidPsw = await compare(oldPsw, res.password);

    if (isValidPsw == true) {
      const newPswHash = await hash(newPsw, 12);

      await db.user.update({
        where: { privateHash: privateHash },
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

export async function changeDisplayNameService(privateHash, newDisplayName) {
  try {
    const res = await db.user.update({
      where: { privateHash: privateHash },
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

export async function changeUsernameService(privateHash, newUsername) {
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

    const resUpdate = await db.user.update({
      where: { privateHash: privateHash },
      data: { username: newUsername },
    });

    if (resUpdate != true) {
      return {
        success: false,
        msg: "не удалось обновить :)",
      };
    }

    return {
      success: true,
      msg: "йес успешно :)",
    };
  } catch (err) {
    console.log(`changeService - username >> ${err}}`);
    return { success: false, msg: "что-то пошло не так.." };
  }
}

// changeBio

export async function changeBioService(privateHash, newBio) {
  try {
    await db.user.update({
      where: { privateHash: privateHash },
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

export async function changeAvaService(privateHash, url) {
  try {
    const res = await db.user.update({
      where: { privateHash: privateHash },
      data: { ava: url },
    });

    console.log("changeAvaService");

    if (res != true) {
      return {
        success: false,
        msg: "эхх, что-то пошло не так(",
        url: "*",
      };
    }

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
