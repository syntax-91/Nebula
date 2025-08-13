import { io } from "socket.io-client";

const URL = "http://192.168.100.108:3000";

export const socket = io(URL);
