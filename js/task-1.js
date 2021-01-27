const catRef = document.getElementById('categories');
const itemRef = document.querySelectorAll('.item');

const licount = catRef.children.length;
console.log(`В списке ${licount} категории.`);



catogItemsRef.forEach(item => { 
    console.log(`Категория: ${item.querySelector('h2').textContent}`);
    console.log(`Количество элементов: ${item.getElementsByTagName('li').length}`);
  });
