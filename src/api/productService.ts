export const getProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  return res.json();
};

export const getProduct = async (productId: number) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
