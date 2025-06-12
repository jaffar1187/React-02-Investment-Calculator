const InputGroup = ({ labelPlaceHolderArr, userInputData }) => {
  return (
    <div className="input-group">
      {labelPlaceHolderArr.map((item, index) => {
        return (
          <p key={index}>
            <label>{item}</label>
            <input
              type="number"
              required
              defaultValue={
                userInputData[
                  item.split(" ")[1]
                    ? item.split(" ")[0].toLowerCase() + item.split(" ")[1]
                    : item.toLowerCase()
                ]
              }
            />
          </p>
        );
      })}
    </div>
  );
};

export default InputGroup;
