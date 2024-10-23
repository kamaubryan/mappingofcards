const fetchApi = async () => {
  try {
    const products = await fetch(
      "https://fakestoreapi.in/api/products?limit=5"
    );
    const fetchData = await products.json();
    console.log("yoow", fetchData);
    return fetchData;
  } catch (error) {
    console.log("there was an error loading the page", error);
  }
};

const displayFetchApi = async () => {
  let data = document.getElementById("products");
  let response = await fetchApi();

  data.innerHTML = response.products
    .map(({ image, title, price, description }) => {
      return `
    <div class ="card-body">
    <img src="${image}" alt="${title}"/>
    <h4>${title}</h4>
    <p>${price}</p>
    <p> ${description}</p>
    </div>
    `;
    })
    .join("");
};
displayFetchApi();
