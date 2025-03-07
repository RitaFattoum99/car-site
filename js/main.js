window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        headerElement.classList.add("scroll-down");        
    } else {
        headerElement.classList.remove("scroll-down")
    }
})




const cars = [
    {
      image: "../images/car1.jpg",
      title: "Car Name",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At cumque omnis quam magnam voluptas similique mini ma rerum cupiditate! Sapiente, in. Laudantium fuga saepe sint eveniet. Perferendis non pariatur illo assumenda.",
      price: "$100",
    },
    {
      image: "../images/car2.jpg",
      title: "Car Name",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At cumque omnis quam magnam voluptas similique mini ma rerum cupiditate! Sapiente, in. Laudantium fuga saepe sint eveniet. Perferendis non pariatur illo assumenda.",
      price: "$100",
    },
    {
      image: "../images/car3.jpg",
      title: "Car Name",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At cumque omnis quam magnam voluptas similique mini ma rerum cupiditate! Sapiente, in. Laudantium fuga saepe sint eveniet. Perferendis non pariatur illo assumenda.",
      price: "$100",
    },
    {
      image: "../images/car4.jpg",
      title: "Car Name",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At cumque omnis quam magnam voluptas similique mini ma rerum cupiditate! Sapiente, in. Laudantium fuga saepe sint eveniet. Perferendis non pariatur illo assumenda.",
      price: "$100",
    },

    {
      image: "../images/car5.jpg",
      title: "Car Name",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At cumque omnis quam magnam voluptas similique mini ma rerum cupiditate! Sapiente, in. Laudantium fuga saepe sint eveniet. Perferendis non pariatur illo assumenda.",
      price: "$100",
    },
    {
      image: "../images/car6.jpg",
      title: "Car Name",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At cumque omnis quam magnam voluptas similique mini ma rerum cupiditate! Sapiente, in. Laudantium fuga saepe sint eveniet. Perferendis non pariatur illo assumenda.",
      price: "$100",
    },
    {
      image: "../images/car7.jpg",
      title: "Car Name",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At cumque omnis quam magnam voluptas similique mini ma rerum cupiditate! Sapiente, in. Laudantium fuga saepe sint eveniet. Perferendis non pariatur illo assumenda.",
      price: "$100",
    },
    {
      image: "../images/car8.jpg",
      title: "Car Name",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At cumque omnis quam magnam voluptas similique mini ma rerum cupiditate! Sapiente, in. Laudantium fuga saepe sint eveniet. Perferendis non pariatur illo assumenda.",
      price: "$100",
    },
  ];
  localStorage.setItem("cars", JSON.stringify(cars));

  function createCarCard(car, index) {
    return `
      <article class="card">
        <a href="./pages/car-details.html?index=${index}">
          <img src="${car.image}" alt="${car.title}" />
        </a>
        <div style="width: 266px" class="content">
          <h1 class="title">${car.title}</h1>
          <p class="description">${car.description}</p>
          <div class="flex" style="justify-content: space-between; padding-bottom: 0.7rem;">
            <div class="price">${car.price}</div>
            <button class="reserve flex">
              <i class="fa-solid fa-circle-check"></i>
              Reserve
            </button>
          </div>
        </div>
      </article>
    `;
  }
  
  document.getElementById("car-list").innerHTML = cars
    .map(createCarCard)
    .join("");



    //header
    document.addEventListener("DOMContentLoaded", function () {
        fetch("/components/header.html")
          .then(response => response.text())
          .then(data => {
            document.getElementById("header-container").innerHTML = data;
          })
          .catch(error => console.error("Error loading header:", error));
      });
      