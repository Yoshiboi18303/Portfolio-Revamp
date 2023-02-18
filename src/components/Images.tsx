import { createSignal, For, JSX, Setter } from "solid-js";
import ValueError from "../typescript/errors/ValueError";
import * as fs from "fs";
import * as path from "path";

interface Props {
  alt?: string;
  width?: number | string | undefined;
  height?: number | string | undefined;

  /**
   * Where the images should be arranged; `oneof` [center, left, right]
   *
   * **Default:** `center`
   */
  position?: string;

  /**
   * The directory where the images are located.
   *
   * **WARNING:** The directory **MUST** exist within `public`
   *
   * **Note:** Use `/` **OR** `\\` to separate the path.
   *
   * **Default:** `images`
   */
  dir?: string;

  /**
   * Extra classes for the images, not required.
   */
  classes?: string;

  onMouseEnter?: (event: MouseEvent) => void | JSX.Element;
  setIndex?: Setter<number>;
}

export default function Images(props: Props) {
  let { alt, width, height, position, dir, classes, onMouseEnter, setIndex } =
    props;
  const allowedPositions = ["center", "left", "right"];

  if (
    !allowedPositions.find((pos) => pos === position) &&
    position !== undefined
  )
    throw new ValueError(
      `Invalid image position.\n\nAllowed: ${allowedPositions}\nGiven: ${position}`,
      false
    );

  if (!width) width = 20;
  if (!height) height = 20;
  if (!position) position = "center";
  if (!dir) dir = "images";
  else dir = `images/${dir}`;

  if (typeof width === "string") width = parseInt(width);
  if (typeof height === "string") height = parseInt(height);

  // console.log(width, height);

  if (isNaN(width))
    throw new ValueError(
      'Width must be a number or a string with a number value\n\nExample: "50"',
      false
    );
  if (isNaN(height))
    throw new ValueError(
      'Height must be a number or a string with a number value\n\nExample: "50"',
      false
    );

  const imagesPath = path.join(process.cwd(), "public", dir);
  const [images] = createSignal<string[]>(
    fs.readdirSync(imagesPath).filter((file) => file.endsWith(".png"))
  );

  // console.log(images());

  return (
    <div>
      <For each={images()}>
        {(path, index) => {
          if (setIndex) setIndex(index);
          return (
            <div class="inline-block">
              <img
                src={dir === "images" ? `/images/${path}` : `/${dir}/${path}`}
                alt={alt ? alt : `Image #${index() + 1}`}
                class={
                  `w-${width} h-${height} ${
                    position === "center"
                      ? "p-auto m-auto"
                      : position === "left"
                      ? "float-left"
                      : "float-right"
                  }` + classes
                    ? classes
                    : ""
                }
                onMouseEnter={onMouseEnter}
              />
            </div>
          );
        }}
      </For>
    </div>
  );
}
