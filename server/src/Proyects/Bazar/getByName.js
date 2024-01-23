const products = require('../../products.json');

const getByName = async ({ name }) => {
  try {
    const allProducts = products.products;

    const theProducts = allProducts.filter((product) => {
      return product.title.toLowerCase().includes(name.toLowerCase());
    });

    if (theProducts.length === 0) {
      throw new Error('No se encontraron productos con ese nombre');
    }

    return theProducts;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = getByName;