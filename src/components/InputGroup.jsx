import defaultInputValues from "../util/defaultInputValues";

const InputGroup = ({ labelPlaceHolderArr, userInputData }) => {
  let { initialFirstInputValue, initialSecondInputValue } = defaultInputValues(
    labelPlaceHolderArr,
    userInputData
  );

  return (
    <div className="input-group">
      <p>
        <label htmlFor="">{labelPlaceHolderArr[0]}</label>
        <input type="number" required value={initialFirstInputValue} />
      </p>
      <p>
        <label htmlFor="">{labelPlaceHolderArr[1]}</label>
        <input type="number" required value={initialSecondInputValue} />
      </p>
    </div>
  );
};

export default InputGroup;
