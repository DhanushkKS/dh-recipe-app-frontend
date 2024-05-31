export const useLocalStorage = () => {
  const setItem = (key, value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  };

  const getItem = (key) => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    } catch (e) {
      console.log(e);
    }
  };

  const removeItem = (key) => {
    try {
      window.localStorage.removeItem(key);
    } catch (e) {
      console.log(e);
    }
  };
  return { setItem, getItem, removeItem };
};
