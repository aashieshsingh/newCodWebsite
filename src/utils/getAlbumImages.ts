export function getAlbumImages(albumSlug: string) {
  // STATIC GLOB — required for Vite
  const modules = import.meta.glob("/src/content/albums/**/*.{jpg,jpeg,png,webp,avif}", {
    eager: true,
    as: "url",
  });

  // filter images for just this album
  return Object.keys(modules)
    .filter((path) => path.includes(`/src/content/albums/${albumSlug}/`))
    .map((path) => ({
      filename: path.split("/").pop(),
      url: modules[path] as string,
    }));
}
