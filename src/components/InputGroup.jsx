import debounce from "../util/debounce-input";

const InputGroup = ({
  labelPlaceHolderArr,
  userInputData,
  setUserInputData,
}) => {
  function handleChange(identifier, newValue) {
    setUserInputData((prevValue) => {
      const updatedValue = { ...prevValue };
      updatedValue[identifier] = Number(newValue);
      return updatedValue;
    });
  }

  return (
    <div className="input-group">
      {labelPlaceHolderArr.map((item, index) => {
        let identifierKey = item.split(" ")[1]
          ? item.split(" ")[0].toLowerCase() + item.split(" ")[1]
          : item.toLowerCase();
        let identifierDefaultValue = userInputData[identifierKey];

        return (
          <p key={index}>
            <label>{item}</label>
            <input
              type="number"
              required
              onChange={(e) =>
                debounce(handleChange, {
                  identifierKey,
                  newValue: e.target.value,
                })
              }
              defaultValue={identifierDefaultValue}
            />
          </p>
        );
      })}
    </div>
  );
};

export default InputGroup;
