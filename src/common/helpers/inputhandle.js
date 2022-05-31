export const inputHandle = (name, value, setForm) => {
  setForm((prev) => ({
    ...prev,
    [name]: { value: value, error: false },
  }));
};
