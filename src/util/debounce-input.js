let timer;

const debounce = (cb, { ...inputs }) => {
  const updatedInputs = {};
  //Making deep copy of object in one level down.
  for (const [key, value] of Object.entries(inputs)) {
    if (typeof value === "object") {
      updatedInputs[key] = { ...value };
    } else updatedInputs[key] = value;
  }
  // updatedInputs["test"]["name"] = "max";
  // console.log("inputs", inputs);
  // console.log("updatedInputs", updatedInputs);

  // if (timer) clearTimeout(timer);
  // timer = setTimeout(() => {
  //   if (updatedInputs.identifierKey && updatedInputs.newValue)
  //     cb(updatedInputs.identifierKey, updatedInputs.newValue);
  // }, updatedInputs.timeMs);
  cb(updatedInputs.identifierKey, updatedInputs.newValue);
};

export default debounce;
