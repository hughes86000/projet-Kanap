const url = "http://127.0.0.1:3000/api/products";

function getProducts(){
    listeProduts =  fetch(url).then((response) => {return response.json()})
    .then((data) => {
       return data;
    });
    return listeProduts;
}

function writeproducts(){
   let products = getProducts();
   let productSection = document.getElementById("items");

   products.then((data) => {
    //console(data);

    for (i = 0; i < data.length; i++) {
        const productCard = `
          <a href="./product.html?id=${data[i]._id}">
            <article>
              <img
                src="${data[i].imageUrl}"
                alt="${data[i].altTxt}"
              />
              <h3 class="productName">${data[i].name}</h3>
              <p class="productDescription">
                ${data[i].description}
              </p>
            </article>
          </a>
        `;
        productSection.innerHTML += productCard;
      }
   });
}

writeproducts();
