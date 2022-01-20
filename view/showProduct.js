export const showProduct = (productlist) => {
  productlist.forEach((element) => {
    console.log("en ff");
    const template = document.getElementById("productList");

    const clone = template.content.cloneNode(true);

    const img = clone.querySelector("img");

    img.src = element.image;

    const h3 = clone.querySelector("h3");

    h3.innerText = element.name;

    const parrafo = clone.querySelector("p");

    parrafo.innerText = element.descripcion;

    const price = clone.querySelector("a");

    price.innerText = element.price;
    const container = document.querySelector("div.producto");
    container.appendChild(clone);
  });
};
