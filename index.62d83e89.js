!function(){document.querySelector(".categories");fetch("https://books-backend.p.goit.global/books/category-list").then((function(o){if(!o.ok)throw new Error(o.status);return o.json()})).then((function(o){console.log(o),o.map((function(o){o.list_name}))})).catch((function(o){console.log(o)}))}();
//# sourceMappingURL=index.62d83e89.js.map
