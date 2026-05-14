"use client";

import dynamic from "next/dynamic";

const KiberaScene = dynamic(() => import("@/components/kibera-scene").then((module) => module.KiberaScene), {
  ssr: false,
});

export function HeroScene() {
  return <KiberaScene />;
}
