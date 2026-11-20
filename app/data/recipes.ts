export type Recipe = {
  id: string;
  title: string;
  minutes: number;
  cuisine: string;
  summary: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "garlic-butter-pasta",
    title: "Garlic Butter Pasta",
    minutes: 20,
    cuisine: "Italian",
    summary:
      "Quick spaghetti tossed with sautéed garlic, butter, parsley, and parmesan.",
    ingredients: [
      "200g spaghetti",
      "3 tbsp unsalted butter",
      "4 cloves garlic, minced",
      "1/2 cup grated parmesan cheese",
      "2 tbsp fresh parsley, chopped",
      "Salt and black pepper to taste",
    ],
    steps: [
      "Boil spaghetti in salted water until al dente, then reserve 1/2 cup pasta water and drain.",
      "Melt butter in a skillet over medium heat and sauté garlic for 1 minute until fragrant.",
      "Toss the pasta into the skillet with a splash of pasta water, parmesan, and parsley.",
      "Season with salt and black pepper, toss well, and serve immediately.",
    ],
  },
  {
    id: "crispy-chickpea-tacos",
    title: "Crispy Chickpea Tacos",
    minutes: 25,
    cuisine: "Mexican",
    summary:
      "Spiced roasted chickpeas in warm tortillas with lime slaw and avocado.",
    ingredients: [
      "1 can (400g) chickpeas, drained and patted dry",
      "1 tbsp olive oil",
      "1 tsp chili powder and 1/2 tsp cumin",
      "6 small corn or flour tortillas",
      "1 cup shredded cabbage",
      "1 sliced avocado and 1 lime",
    ],
    steps: [
      "Toss chickpeas with olive oil, chili powder, cumin, and salt, then roast at 200°C for 15–18 minutes until crisp.",
      "Mix shredded cabbage with fresh lime juice and a pinch of salt for a quick slaw.",
      "Warm the tortillas in a dry skillet for 20–30 seconds per side.",
      "Fill tortillas with crispy chickpeas, lime slaw, and sliced avocado.",
    ],
  },
  {
    id: "lemon-herb-salmon",
    title: "Lemon Herb Salmon",
    minutes: 18,
    cuisine: "Mediterranean",
    summary:
      "Pan-seared salmon fillets finished with bright lemon juice and fresh dill.",
    ingredients: [
      "2 salmon fillets",
      "1 tbsp olive oil",
      "1 lemon (juiced and zested)",
      "2 tbsp fresh dill, chopped",
      "Salt and black pepper to taste",
    ],
    steps: [
      "Pat salmon dry and season both sides with salt and pepper.",
      "Heat olive oil in a skillet over medium-high heat and sear salmon for 4–5 minutes per side until cooked through.",
      "Remove from heat and drizzle with lemon juice and zest.",
      "Garnish with fresh dill and serve warm.",
    ],
  },
  {
    id: "ginger-soy-veggie-stir-fry",
    title: "Ginger Soy Veggie Stir-Fry",
    minutes: 15,
    cuisine: "Asian",
    summary:
      "Crisp broccoli, bell peppers, and snap peas in a savory ginger-soy glaze.",
    ingredients: [
      "1.5 cups broccoli florets",
      "1 bell pepper, sliced",
      "1 cup sugar snap peas",
      "2 tbsp soy sauce",
      "1 tbsp fresh ginger, grated",
      "1 tbsp sesame or vegetable oil",
    ],
    steps: [
      "Heat oil in a wok or large skillet over high heat.",
      "Add grated ginger and stir for 15 seconds until aromatic.",
      "Add broccoli, bell pepper, and snap peas; stir-fry for 4–5 minutes until tender-crisp.",
      "Pour in soy sauce, toss to coat evenly, and serve right away.",
    ],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}