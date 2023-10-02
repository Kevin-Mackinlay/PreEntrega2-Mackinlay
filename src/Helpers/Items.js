export const items = [
  {
    title: "Zapatillas Adidas",
    precio: 30000,

    descripcion: "Comodidad y estilo a tus rutinas diarias con las Zapatillas Puma.",
    id: 1,
  },
  {
    title: "Zapatillas Nike",
    precio: 40000,
    descripcion: "Nike Revolution 6 Next Nature Se están pensadas para que los más chicos cuenten con un calzado perfecto que los acompañe en todo momento.",
    id: 2,
  },
  {
    title: "Zapatillas Puma ",
    precio: 20000,
    descripcion: "Ideal para los más chicos del hogar, Las Zapatillas Puma Comet 2 Alt están confeccionadas con materiales livianos para un mejor uso.",
    id: 3,
  },
  {
    title: "Zapatillas Atomic",
    precio: 22000,
    descripcion: "Las Zapatillas Atomik Jogger S para Niños tienen todo lo que necesitan tus hijos cada día: comodidad, color, durabilidad y diversión.",
    id: 4,
  },
  {
    title: "Zapatillas Fila",
    precio: 50000,
    descripcion: "Las Zapatillas Fila Recovery Niña son un calzado moderno y lleno de vitalidad para las más chicas de la casa.",
    id: 5,
  },
  {
    title: "Zapatillas Comet",
    precio: 29000,
    descripcion: "Para que lo más pequeños de la casa luzcan cómodos y con estilo",
    id: 6,
  },
];

export function getItemById(id) {
  return items.find((item) => item.id == id);
}
