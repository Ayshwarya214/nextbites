export type Recipe = {
  id: string;
  title: string;
  minutes: number;
  cuisine: string;
  summary: string;
};
export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Garlic Butter Pasta",
    minutes: 20,
    cuisine: "Italian",
    summary: "Quick spaghetti tossed with sautéed garlic, butter, parsley, and parmesan.",
  },
  {
    id: "2",
    title: "Crispy Chickpea Tacos",
    minutes: 25,
    cuisine: "Mexican",
    summary: "Spiced roasted chickpeas in warm tortillas with lime slaw and avocado.",
  },
  {
    id: "3",
    title: "Lemon Herb Salmon",
    minutes: 18,
    cuisine: "Mediterranean",
    summary: "Pan-seared salmon fillets finished with bright lemon juice and fresh dill.",
  },
  {
    id: "4",
    title: "Ginger Soy Veggie Stir-Fry",
    minutes: 15,
    cuisine: "Asian",
    summary: "Crisp broccoli, bell peppers, and snap peas in a savory ginger-soy glaze.",
  },
];