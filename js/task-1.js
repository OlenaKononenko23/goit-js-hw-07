const categoryNumbers = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryNumbers.length}`);

const categoryNames = document.querySelectorAll('h2');

categoryNames.forEach(function(name) {

    const categoryName = name.textContent;
    console.log(`Category: ${categoryName}`);

    const elementLength = document.querySelectorAll("ul>li");
    console.log(`Elements: ${elementLength.length}`);

});