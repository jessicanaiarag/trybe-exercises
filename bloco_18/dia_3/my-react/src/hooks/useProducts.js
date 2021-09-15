import { useEffect, useState } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  /**carrega quando clica numa categoria should Update */
  useEffect(() => {
    const getProducts = async () => {
      const endpoint = `http://api.mercadolibre.com/sites/MBL/search?category=${selectedCategory}`;
      const { results } = await fetch(endpoint).then((response) => response.json());
      setProducts(results);
    };
    getProducts();
  }, [selectedCategory]);

  return [products, setSelectedCategory];
};

export default useProducts;