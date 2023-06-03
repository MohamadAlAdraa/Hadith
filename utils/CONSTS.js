export const APIS = {
  baseURL: "https://dorar-hadith-api.cyclic.app",
  searchAPI: "/v1/site/hadith/search?value=",
};

export const VALIDATION_STATE = {
  EMPTY: "EMPTY",
  RANGE: "RANGE",
  LANGUAGE: "LANGUAGE",
  VALID: "VALID",
};

export const ARABIC_REGEX = /[\u0600-\u06FF]/;

export const MESSAGE_TYPE = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  INFO: "INFO",
};

export function generateUniqueKey(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let key = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    key += characters.charAt(randomIndex);
  }

  return key;
}
