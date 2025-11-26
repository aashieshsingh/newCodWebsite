export function getAlbumImages(album: string, subalbum: string) {
  // Grab ALL images inside /src/content/albums
  const modules = import.meta.glob(
    "/src/content/albums/**/*.{jpg,jpeg,png,webp,avif}",
    {
      eager: true,
      as: "url",
    }
  );

  // Filter only images of current sub-album
  const images = Object.keys(modules)
    .filter((path) =>
      path.includes(`/src/content/albums/${album}/${subalbum}/`)
    )
    .map((path) => ({
      filename: path.split("/").pop() as string,
      url: modules[path] as string,
    }));

  // Optional: sort images by filename
  images.sort((a, b) => a.filename.localeCompare(b.filename));

  return images;
}
