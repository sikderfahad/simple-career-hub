const getFromLS = () => {
  const cart = localStorage.getItem("job-cart");
  if (cart) {
    return JSON.parse(cart);
  }
  return [];
};

const saveToLS = (id) => {
  const exCart = getFromLS();
  const isHave = exCart.includes(id);
  if (!isHave) {
    exCart.push(id);
    localStorage.setItem("job-cart", JSON.stringify(exCart));
  }
};

export { getFromLS, saveToLS };
