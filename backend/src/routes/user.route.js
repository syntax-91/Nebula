import { Router } from "express";
import { userdataService } from "../service/user/userdata.js";
import { userHashPswService } from "../service/user/userHashPsw.js";

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

UserRouter.get("/hashPsw/:username", (req, res) => {
  const { username } = req.params;

  userHashPswService(username).then((e) => {
    res.json({
      success: e.success,
      hashPsw: e.hashPsw,
    });
  });
});
