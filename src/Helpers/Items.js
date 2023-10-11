import { useEffect, useState } from "react";


export const items = [
  {
    title: "Zapatillas Adidas",
    precio: 30000,
    img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwbc86729a/products/PU195647-07/PU195647-07-1.JPG",
    descripcion: "Comodidad y estilo a tus rutinas diarias con las Zapatillas Puma.",
    id: 1,
    stock: 6,
  },
  {
    title: "Zapatillas Nike",
    precio: 40000,
    img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf4cbb5d9/products/NI_DD1104-013/NI_DD1104-013-1.JPG",
    descripcion: "Nike Revolution 6 Next Nature Se están pensadas para que los más chicos cuenten con un calzado perfecto que los acompañe en todo momento.",
    id: 2,
    stock: 5,
  },
  {
    title: "Zapatillas Puma ",
    precio: 20000,
    img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwfe0a4da5/products/PU_195647-01/PU_195647-01-1.JPG",
    descripcion: "Ideal para los más chicos del hogar, Las Zapatillas Puma Comet 2 están confeccionadas con materiales livianos para un mejor uso.",
    id: 3,
    stock: 10,
  },
  {
    title: "Zapatillas Atomic",
    precio: 22000,
    img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw9d108f2b/products/AM1113083105/AM1113083105-1.JPG",
    descripcion: "Las Zapatillas Atomic Jogger S para Niños tienen todo lo que necesitan tus hijos cada día: comodidad, color, durabilidad y diversión.",
    id: 4,
    stock: 4,
  },
  {
    title: "Zapatillas Fila",
    precio: 50000,
    img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwfae025d4/products/FIF01R00070-2124/FIF01R00070-2124-1.JPG",
    descripcion: "Las Zapatillas Fila Recovery Niña son un calzado moderno y lleno de vitalidad para las más chicas de la casa.",
    id: 5,
    stock: 7,
  },
  {
    title: "Zapatillas Comet",
    precio: 29000,
    img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw7cf05cef/products/PU_195648-01/PU_195648-01-1.JPG",
    descripcion: "Para que lo más pequeños de la casa luzcan cómodos y con estilo",
    id: 6,
    stock: 10,
  },
];

export function getItemById(id) {
  return items.find((item) => item.id == id);
 
}
