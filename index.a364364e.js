document.querySelector(".categories");fetch("https://books-backend.p.goit.global/books/category-list").then((o=>{if(!o.ok)throw new Error(o.status);return o.json()})).then((o=>{console.log(o),o.map((({list_name:o})=>{}))})).catch((o=>{console.log(o)}));
//# sourceMappingURL=index.a364364e.js.map
