import "./style.css";
import { getVideo, drawVideo } from "./src/camera.js";
// import javascriptLogo from "./javascript.svg";
// import viteLogo from "/vite.svg";
// import { setupCounter } from "./src/counter.js";

// document.querySelector("#app").innerHTML = `
// `;

(async function run() {
  const video = await getVideo();
  const canvas = document.querySelector("canvas");
  const button = document.getElementById("camera");

  button.addEventListener("click", () => {
    drawVideo(video, canvas);
  });
})();
