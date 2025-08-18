import { Router } from "express";
import { userdataService } from "../service/user/userdata.js";
import { changePswService } from "../service/user/changeService.js";

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
