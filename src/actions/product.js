export const PRODUCT_GET_LIST = 'PRODUCT_GET_LIST';
export const PRODUCT_CREATE = 'PRODUCT_CREATE';

/**
 * obtem a listagem de produtos
 */
export const list = () => ({
  type: PRODUCT_GET_LIST,
});

/**
 * realiza a criação de um produto
 * @param {Object} product dados do produto
 */
export const create = product => ({
  type: PRODUCT_CREATE,
  payload: { ...product },
});
