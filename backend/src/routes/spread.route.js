import { Router } from "express";
import { ReportABugService } from "../service/spread/reportABugService.js";

export const SpreadRouter = Router();

SpreadRouter.post("/reportABug/:username/:text", (req, res) => {
  const { username, text } = req.params;

  ReportABugService(username, text).then((e) => {
    res.json({
      success: e.success,
      msg: e.msg,
    });
  });
});
