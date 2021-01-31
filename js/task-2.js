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

