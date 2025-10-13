import { decode } from "blurhash";

export function blurhashToBase64(blurhash: string, width = 32, height = 32): string {
  const pixels = decode(blurhash, width, height);

  // Create canvas
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d");
  if (!ctx) return "";

  // Create ImageData from decoded pixels
  const imageData = ctx.createImageData(width, height);
  imageData.data.set(pixels);
  ctx.putImageData(imageData, 0, 0);

  // Convert to base64
  return canvas.toDataURL("image/jpeg", 0.5);
}
