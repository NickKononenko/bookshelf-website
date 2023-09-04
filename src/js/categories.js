const categoriesList = document.querySelector('.categories-list');

console.log(categoriesList);

fetchCategories().then(categories => renderCategoriesList(categories));

function fetchCategories() {
  const URL = 'https://books-backend.p.goit.global/books/category-list';
  return fetch(URL).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderCategoriesList(categories) {
  const markup = categories
    .map(({ list_name }) => {
      return `<li class="categories-list-item">${list_name}</li>`;
    })
    .join('');
  categoriesList.innerHTML =
    `<li class="categories-list-item all-categories">All categories</li>` +
    markup;
}
