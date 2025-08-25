import { addPostService } from "../post/addPostService.js";

export async function Socket(io) {
  try {
    io.on("connection", (socket) => {
      console.log("socket - юзер подключён");

      socket.on("createPost", (data) => {
        console.log("рассылка..");

        addPostService(data).then((d) => {
          data.id = d.postId;
          io.emit("new-post", data);
        });
      });
    });
  } catch (err) {
    console.log("ERROR - socketService, err >> ", err);
  }
}
