import { Part } from '@google/generative-ai';

export function createImageParts(image: string) {
  const mimeType = image.split(';')[0].split(':')[1];

  const imageParts: Part = {
    inlineData: {
      data: image.split(',')[1],
      mimeType,
    },
  };

  return imageParts;
}
