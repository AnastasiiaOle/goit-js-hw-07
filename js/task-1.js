const totalCategories = document.querySelectorAll(".item");
console.log(`В списке ${totalCategories.length} категории.`);

const categoriesArray = [...totalCategories]
  .map(
    categories => `Категория: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);

// const mainListRef = document.querySelector('#categories');
// const mainListItems = Array.from(mainListRef.children);

// console.log(`В списке ${mainListItems.length} категории.`);

// mainListItems.forEach(el => {
//   console.log(`Категория: ${el.querySelector('h2').textContent}`);
//   console.log(
//     `Количество элементов: ${el.querySelector('ul').children.length}`,
//   );
// });