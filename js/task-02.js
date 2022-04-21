const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRefs = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const itemElement = document.createElement("li");
  itemElement.textContent = ingredient;
  itemElement.classList.add("item")
console.log(itemElement);
  return itemElement;
})
listRefs.append(...elements);