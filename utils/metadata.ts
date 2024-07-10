import type { Metadata } from "next";

export function generateMetaObj(data: {
  title?: string;
  description?: string;
  image?: string;
}): Metadata {
  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: data.image,
    },
    twitter: {
      title: data.title,
      description: data.description,
      images: data.image,
    },
  };
}
