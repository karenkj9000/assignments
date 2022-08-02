// Using .then and .catch

console.log("USING THEN AND CATCH");
fetch("https://reqres.in/api/products/")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));

// Using .async and await

const fetchDetailsJSON = async () => {
  try {
    const response = await fetch("https://reqres.in/api/products/");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

console.log("USING ASYNC AND AWAIT");
fetchDetailsJSON();
