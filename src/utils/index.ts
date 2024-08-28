export const buildErrorMessage = (code: string, description: string) => {
  return { error_code: code, error_description: description };
};
