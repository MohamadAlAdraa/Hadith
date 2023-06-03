import { VALIDATION_STATE, ARABIC_REGEX } from "./CONSTS";

export function validate(inputData) {
  if (inputData.length == 0 || inputData.trim().length == 0)
    return VALIDATION_STATE.EMPTY;
  else if (!ARABIC_REGEX.test(inputData)) return VALIDATION_STATE.LANGUAGE;
  else if (inputData.split(" ").length < 2) return VALIDATION_STATE.RANGE;
  else return VALIDATION_STATE.VALID;
}
