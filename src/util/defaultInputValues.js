const defaultInputValues = (labelPlaceHolderArr, userInputData) => {
  let result = labelPlaceHolderArr.map((item) => {
    return userInputData[
      item.split(" ")[1]
        ? item.split(" ")[0].toLowerCase() + item.split(" ")[1]
        : item.toLowerCase()
    ];
  });

  return {
    initialFirstInputValue: result[0],
    initialSecondInputValue: result[1],
  };
};

export default defaultInputValues;
