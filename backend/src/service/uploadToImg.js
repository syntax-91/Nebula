import axios from "axios";
import fs from "fs";
import FormData from "form-data";
import { error } from "console";

export async function UploadToImgService(file) {
  try {
    const imgBB_apiKey = "7087e9dd84ce69c62eb5bd4c3b9a4975";

    if (!file || !file.buffer) {
      console.log("Файл не передан или пустой");
      return null;
    }

    const form = new FormData();
    form.append("image", file.buffer.toString("base64"));
    form.append("name", file.originalname || "qr3h7y");
    form.append("key", imgBB_apiKey);

    const res = await axios.post("https://api.imgbb.com/1/upload", form, {
      headers: form.getHeaders(),
    });

    const url = res.data.data.url;

    console.log("url >>  ", url);
    return res.data.success ? res.data.link : null;
  } catch (err) {
    console.log("uploadToImgService - ", err);
    return null;
  }
}
