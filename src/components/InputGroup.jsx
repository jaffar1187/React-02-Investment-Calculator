import debounce from "../util/debounce-input";

const InputGroup = ({
  labelPlaceHolderArr,
  userInputData,
  setUserInputData,
}) => {
  function handleChange(identifier, newValue) {
    console.log("rendered");
    setUserInputData((prevValue) => {
      const updatedValue = { ...prevValue };
      updatedValue[identifier] = Number(newValue);
      return updatedValue;
    });
  }

  return (
    <div className="input-group">
      {labelPlaceHolderArr.map((item, index) => {
        let identifier =
          userInputData[
            item.split(" ")[1]
              ? item.split(" ")[0].toLowerCase() + item.split(" ")[1]
              : item.toLowerCase()
          ];

        return (
          <p key={index}>
            <label>{item}</label>
            <input
              type="number"
              required
              onChange={(e) =>
                debounce(handleChange, identifier, e.target.value)
              }
              defaultValue={identifier}
            />
          </p>
        );
      })}
    </div>
  );
};

export default InputGroup;
