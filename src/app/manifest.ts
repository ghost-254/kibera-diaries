import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kibera Diaries",
    short_name: "Kibera Diaries",
    description:
      "Ethical Kibera walking tours, cultural experiences, photography tours, and community-led travel in Nairobi, Kenya.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbfaf7",
    theme_color: "#102f2b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "256x256",
        type: "image/x-icon",
      },
      {
        src: "/images/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
