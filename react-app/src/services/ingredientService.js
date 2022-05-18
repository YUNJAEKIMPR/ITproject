const ingredients = [
  {
    id: 1,
    name: "garlic",
    type: "vegetables",
  },
  {
    id: 2,
    name: "onion",
    type: "vegetables",
  },
  {
    id: 3,
    name: "bell pepper",
    type: "vegetables",
  },
  {
    id: 4,
    name: "tomato",
    type: "vegetables",
  },
  {
    id: 5,
    name: "carrot",
    type: "vegetables",
  },
  {
    id: 6,
    name: "scallion",
    type: "vegetables",
  },
  {
    id: 7,
    name: "potato",
    type: "vegetables",
  },
  {
    id: 8,
    name: "red onion",
    type: "vegetables",
  },
  {
    id: 9,
    name: "celery",
    type: "vegetables",
  },
  {
    id: 10,
    name: "chili pepper",
    type: "vegetables",
  },
  {
    id: 11,
    name: "bacon",
    type: "meats",
  },
  {
    id: 12,
    name: "ground beef",
    type: "meats",
  },
  {
    id: 13,
    name: "beef steak",
    type: "meats",
  },
  {
    id: 14,
    name: "ham",
    type: "meats",
  },
  {
    id: 15,
    name: "pork loin",
    type: "meats",
  },
  {
    id: 16,
    name: "sausage",
    type: "meats",
  },
  {
    id: 17,
    name: "pork fillet",
    type: "meats",
  },
  {
    id: 18,
    name: "prosciutto",
    type: "meats",
  },
  {
    id: 19,
    name: "beef roast",
    type: "meats",
  },
  {
    id: 20,
    name: "ground pork",
    type: "meats",
  },
  {
    id: 21,
    name: "cocoa",
    type: "dessert & snack",
  },
  {
    id: 22,
    name: "chocolate chips",
    type: "dessert & snack",
  },
  {
    id: 23,
    name: "chocolate",
    type: "dessert & snack",
  },
  {
    id: 24,
    name: "dark chocolate chips",
    type: "dessert & snack",
  },
  {
    id: 25,
    name: "dark chocolate",
    type: "dessert & snack",
  },
  {
    id: 26,
    name: "graham cracker",
    type: "dessert & snack",
  },
  {
    id: 27,
    name: "baking chocolate",
    type: "dessert & snack",
  },
  {
    id: 28,
    name: "marshmallow",
    type: "dessert & snack",
  },
  {
    id: 29,
    name: "white chocolate",
    type: "dessert & snack",
  },
  {
    id: 30,
    name: "white chocolate chip",
    type: "dessert & snack",
  },
];

export const getAllIngredients = (type) => {
  if (type !== undefined && type !== "")
    return ingredients.filter((ingredient) => ingredient.type === type);
  return ingredients;
};
