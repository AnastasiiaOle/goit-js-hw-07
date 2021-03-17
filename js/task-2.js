const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];



const ingRef = document.querySelector('#ingredients');

const liRefs = ingredients.map(item => {
  const liRef = document.createElement('li');
  liRef.textContent = item;
  return liRef;
});

ingRef.append(...liRefs);

  
// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];

// const createListItems = listItems =>
//   listItems.map(function (item) {
//     const itemRef = document.createElement('li');
//     itemRef.textContent = item;
//     return itemRef;
//   });

// const listRef = document.querySelector('#ingredients');
// listRef.append(...createListItems(ingredients));