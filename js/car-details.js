const params = new URLSearchParams(window.location.search);
const index = params.get("index");
console
const cars = JSON.parse(localStorage.getItem("cars"));
console.log("Car Image Path:", car.image);

if (cars && cars[index]) {
    const car = cars[index];
    console.log("Car Image Path:", car.image);
    document.querySelector(".car-details h2").textContent = car.title;
    document.querySelector(".car-details .price").textContent = car.price;
    document.querySelector(".car-details .description").textContent = car.description;

    document.getElementById("car-image").src = `../images/${car.image}`;
    document.querySelector(".car-details img").src = car.image.startsWith("./") 
        ? car.image.replace("./", "../")
        : car.image;

    document.querySelector(".car-details img").alt = car.title;
} else {
    console.error("Car data not found!");
}
