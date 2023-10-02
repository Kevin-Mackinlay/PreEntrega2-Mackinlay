import { useEffect, useState } from "react";
//HOOK PARA PODER RECUPERAR LOS ITEMS DE LA API
export const useItems = () => {
  const [items, setItems] = useState([]);
  const fetchItems = () => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((json) => setItems(json))
      .catch((error) => console.log(error))
      .finally(() => console.log("Finalizado"));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return items;
};
