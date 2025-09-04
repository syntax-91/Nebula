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
UserRouter.get("/data/:username", (req, res) => {
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
UserRouter.post("/changePsw/:privateHash/:oldPsw/:newPsw", (req, res) => {
  const { privateHash, oldPsw, newPsw } = req.params;
  console.log("запрос на changePsw");

  changePswService(privateHash, oldPsw, newPsw).then((e) => {
    res.json({
      success: e.success,
      msg: e.msg,
    });
  });
});

// user/changeDisplayName
UserRouter.post("/changeDisplayName/:privateHash/:displayName", (req, res) => {
  const { privateHash, displayName } = req.params;
  console.log("запрос на changePsw");

  changeDisplayNameService(privateHash, displayName).then((e) => {
    res.json({
      success: e.success,
      msg: e.msg,
    });
  });
});

// user/changeUsername
UserRouter.post("/changeUsername/:privateHash/:newUsername", (req, res) => {
  const { privateHash, newUsername } = req.params;
  console.log("запрос на changeUsername");

  changeUsernameService(privateHash, newUsername).then((e) => {
    res.json({
      success: e.success,
      msg: e.msg,
    });
  });
});

// user/changeBio
UserRouter.post("/changeBio/:privateHash/:newBio", (req, res) => {
  const { privateHash, newBio } = req.params;
  console.log("запрос на changeBio");

  changeBioService(privateHash, newBio).then((e) => {
    res.json({
      success: e.success,
      msg: e.msg,
    });
  });
});

// user/changeAva
UserRouter.post("/changeAva/:privateHash", async (req, res) => {
  const { username } = req.params;
  const file = req.body;
  let url = await UploadToImgService(file.path);

  console.log("запрос на changeAva");

  changeAvaService(privateHash, url).then((e) => {
    res.json({
      //
      success: e.success,
      msg: e.msg,
      url: e.url || "0",
    });
  });
});
