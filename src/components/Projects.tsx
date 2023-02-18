import { For } from "solid-js";
import { readFileSync } from "fs";
import { join } from "path";

interface Link {
  url: string;
  text: string;
  openInNewTab: boolean;
}

interface Project {
  name: string;
  description: string;
  imageURL: string;
  links?: Link[];
}

export default function Projects() {
  const projects = JSON.parse(
    readFileSync(join(process.cwd(), "src", "data", "projects.json")).toString()
  ) as Project[];

  return (
    <div class="p-auto m-auto">
      <h1 class="pb-10 font-ubuntu text-xl">My Projects</h1>
      <For
        each={projects}
        fallback={
          <span class="inline">
            <h1 class="font-raleway text-xl">No projects (yet).</h1>
            <img
              src="/images/crying.png"
              alt="Crying"
              class="p-auto m-auto h-30 w-30"
            />
          </span>
        }
      >
        {(project) => {
          return (
            <div class="p-10">
              <img
                src={project.imageURL}
                alt="Project Icon"
                class="p-auto m-auto h-200 w-200 rounded-3xl border-white pb-10"
              />
              <h1 class="pb-10 pt-10 font-anton text-3xl">{project.name}</h1>
              <p class="pt-10 pb-10 font-raleway">{project.description}</p>
              <For each={project.links}>
                {(link) => {
                  return (
                    <a
                      href={link.url}
                      class="m-10 text-green-700 duration-1000 hover:text-white"
                      target={link.openInNewTab ? "_blank" : "_self"}
                    >
                      {link.text}
                    </a>
                  );
                }}
              </For>
            </div>
          );
        }}
      </For>
    </div>
  );
}
