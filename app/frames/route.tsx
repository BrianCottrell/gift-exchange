import { Button } from "frames.js/next";
import { frames } from "./frames";

const handleRequest = frames(async (ctx) => {
  return {
    image: (
      <div tw="bg-purple-800 text-white w-full h-full justify-center items-center flex text-[48px]">
        The current time is {new Date().toLocaleString()}
      </div>
    ),
    imageOptions: {
      dynamic: true,
    },
    textInput: "Type something here",
    buttons: [
      <Button
        action="link"
        target={
          "https://github.com/builders-garden/open-frames-starter-framesjs"
        }
      >
        Link
      </Button>,
      <Button action="post" target={"/post"}>
        Post
      </Button>,
      <Button action="tx" target={"/tx"} post_url={"/tx/success"}>
        Tx
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
