import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
  appId: "1526010",
  key: "7c2021ff71c620b1bd8f",
  secret: "9fd2d1bf9cd116ff8f26",
  cluster: "ap1",
  useTLS: true,
});

export const clientPusher = new ClientPusher("7c2021ff71c620b1bd8f", {
  cluster: "ap1",
  forceTLS: true,
});
