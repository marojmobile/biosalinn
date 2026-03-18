export type NavItem = {
  label: string;
  href: string;
};

export const mainNavigation: NavItem[] = [
  { label: "Quiénes somos", href: "/quienes-somos" },
  { label: "Productos", href: "/productos" },
  { label: "Recetas", href: "/recetas" },
  {
    label: "Sostenibilidad e innovación",
    href: "/sostenibilidad-e-innovacion",
  },
  { label: "Noticias", href: "/noticias" },
  { label: "Puntos de venta", href: "/puntos-de-venta" },
  { label: "Contacto", href: "/contacto" },
];
