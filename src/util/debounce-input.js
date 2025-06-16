let timer;

const debounce = (handleChange, { ...inputs }) => {
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    handleChange(inputs.identifierKey, inputs.newValue);
  }, 750);
};

export default debounce;
