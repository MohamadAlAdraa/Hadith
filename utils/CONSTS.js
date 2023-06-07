import Toast from "react-native-toast-message";

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

export const showToast = (type, text1) => {
  Toast.show({
    type: type,
    text1: text1,
  });
};

export function removeTextBeforeBlankLines(text) {
  const lines = text.split("\n");
  let startIndex = -1;

  for (let i = 0; i < lines.length - 2; i++) {
    if (
      lines[i].trim() === "" &&
      lines[i + 1].trim() === "" &&
      lines[i + 2].trim() === ""
    ) {
      startIndex = i + 3;
      break;
    }
  }

  if (startIndex !== -1) {
    const result = lines.slice(startIndex).join("\n");
    return result;
  } else {
    return text;
  }
}
