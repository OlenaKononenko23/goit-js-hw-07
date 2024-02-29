const categoryItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((category) => {
    const categoryName = category.querySelector('h2').textContent;
    const elementCount = category.querySelectorAll('li').length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elementCount}`);
});