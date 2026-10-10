import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lure — Personal OS",
    short_name: "Lure",
    description: "Your calm command centre for tasks, time, memory and goals.",
    start_url: "/",
    display: "standalone",
    background_color: "#eef1ec",
    theme_color: "#202b3a",
    orientation: "portrait-primary",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "maskable" }],
  };
}
