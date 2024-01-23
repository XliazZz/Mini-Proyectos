const { products } = require('../../products.json');

const getDetail = ({ id }) => {
  try {
    const theProduct = products.find((product) => { 
      return product.id.toString() === id;
    });

    if (!theProduct) {
      throw new Error('No se encontró el producto');
    }

    return theProduct;

  } catch (error) {
    throw new Error(error);
  }
};


module.exports = getDetail;