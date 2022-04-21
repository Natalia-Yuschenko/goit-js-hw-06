const navRef = document.querySelectorAll('.item')
console.log('Number of categories:', navRef.length);

navRef.forEach(function (itemName) {
    const categoriesRef = itemName.querySelector('h2');
    const elementsLengthRef = itemName.querySelector('ul');
    console.log('Category :', categoriesRef.textContent);
    console.log('Elelments :', elementsLengthRef.children.length);
});
