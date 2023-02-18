import type { JSX } from "solid-js";
import Images from "./Images";

export default function Languages(): JSX.Element {
  return (
    <div>
      <h1 class="p-15 font-ubuntu text-xl">What I use</h1>
      <div class="p-auto m-auto w-550 rounded-2xl border-gray-800 bg-gray-800">
        <br />
        <Images
          dir="/languages"
          classes="w-50 h-50 m-auto p-auto m-4"
          position="center"
        />
        <br />
      </div>
    </div>
  );
}
