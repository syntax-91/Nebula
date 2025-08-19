import { Router } from "express";
import { userdataService } from "../service/user/userdata.js";
import {
  changeAvaService,
  changeBioService,
  changeDisplayNameService,
  changePswService,
  changeUsernameService,
} from "../service/user/userChangeService.js";
import { UploadToImgService } from "../service/uploadToImg.js";

export const UserRouter = Router();

// user/data
UserRouter.get("data/:username", (req, res) => {
  const { username } = req.params;
  console.log("запрос на userdata");

  userdataService(username).then((e) => {
    res.json({
      success: e.success,
      res: e.res,
    });
  });
});

// user/changePsw
UserRouter.post("/changePsw/:username/:oldPsw/:newPsw", (req, res) => {
  const { username, oldPsw, newPsw } = req.params;
  console.log("запрос на changePsw");

  changePswService(username, oldPsw, newPsw).then((e) => {
    res.json({
      success: e.success,
      msg: e.msg,
    });
  });
});

// user/changeDisplayName
UserRouter.post("/changeDisplayName/:username/:displayName", (req, res) => {
  const { username, displayName } = req.params;
  console.log("запрос на changePsw");

  changeDisplayNameService(username, displayName).then((e) => {
    res.json({
      success: e.success,
      msg: e.msg,
    });
  });
});

// user/changeUsername
UserRouter.post("/changeUsername/:username/:newUsername", (req, res) => {
  const { username, newUsername } = req.params;
  console.log("запрос на changeUsername");

  changeUsernameService(username, newUsername).then((e) => {
    res.json({
      success: e.success,
      msg: e.msg,
    });
  });
});

// user/changeBio
UserRouter.post("/changeBio/:username/:newBio", (req, res) => {
  const { username, newBio } = req.params;
  console.log("запрос на changeBio");

  changeBioService(username, newBio).then((e) => {
    res.json({
      success: e.success,
      msg: e.msg,
    });
  });
});

// user/changeAva
UserRouter.post("/changeAva/:username", async (req, res) => {
  const { username } = req.params;
  const file = req.body;
  let url = await UploadToImgService(file.path);

  console.log("запрос на changeAva");

  changeAvaService(username, url).then((e) => {
    res.json({
      success: e.success,
      msg: e.msg,
      url: e.url || "0",
    });
  });
});
