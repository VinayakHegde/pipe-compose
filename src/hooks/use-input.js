import { useState } from "react";
import * as utils from "../utils";

const reverse = utils.pipe(utils.getInitials, utils.uppercase, utils.reverse);

const DEFAULT_REVERSED_VALUE = "Please type something!"
export const useInput = () => {
  const [reversedValue, setReversedValue] = useState(DEFAULT_REVERSED_VALUE);

  const onChange = (evt) => {
    setReversedValue(reverse(evt.target.value) || DEFAULT_REVERSED_VALUE);
  };

  return {
    reversedValue,
    onChange
  };
};
