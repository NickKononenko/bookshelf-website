const categories = document.querySelector('.categories');

function renderCategoriesMarkup() {
  fetch('https://books-backend.p.goit.global/books/category-list')
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      const markup = data.map(({ list_name }) => {
        `<li class="categories-item all-categories">
<a href="" class="categories-item-link all-categories-link"
  >${list_name}</a
>
</li>`;
      });
    })
    .catch(error => {
      console.log(error);
    });
}

renderCategoriesMarkup();
