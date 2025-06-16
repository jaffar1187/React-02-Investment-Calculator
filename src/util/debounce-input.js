let timer;

const debounce = (handleChange, identifier, newValue) => {
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    handleChange(identifier, newValue);
  }, 750);
};

export default debounce;
