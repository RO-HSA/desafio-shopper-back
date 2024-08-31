import { Blob } from 'buffer';

export const buildErrorMessage = (code: string, description: string) => {
  return { error_code: code, error_description: description };
};

export const base64ImageToBlob = (image: string): Blob => {
  const byteString = atob(image);
  const mimeType = 'image/jpeg';

  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);

  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ab], { type: mimeType });
};
