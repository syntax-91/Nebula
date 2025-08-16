import { io } from "socket.io-client";
import { serverUrl } from "../shared/serverUrl";

const URL = `${serverUrl}`;

export const socket = io(URL);
