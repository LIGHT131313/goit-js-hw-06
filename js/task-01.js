const liItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${liItems.length}`);

liItems.forEach(item => {
	console.log(`Category: ${item.children[0].textContent}`);
	console.log(`Elements: ${item.children[1].children.length}`);
});
