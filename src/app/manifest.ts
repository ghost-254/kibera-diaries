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
        src: "/images/favicon.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/images/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
