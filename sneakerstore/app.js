const wrapper = document.querySelector(".sliderWrapper");
const menuItem = document.querySelectorAll(".menuItem");

const product = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colours: [
            {
                code: "black",
                img: "./img/Product/air.png",
            },
            {
                code: "darkblue",
                img: "./img/Product/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "./img/Product/jordan.png",
            },
            {
                code: "green",
                img: "./img/Product/jordan2.png",
            },
        ]
    },
    {
        id: 3,
        title: "Blazar",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: "./img/Product/blazar.png",
            },
            {
                code: "green",
                img: "./img/Product/blazar2.png",
            },
        ]
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                img: "./img/Product/crater.png",
            },
            {
                code: "lightgray",
                img: "./img/Product/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "./img/Product/hippie.png",
            },
            {
                code: "lightgray",
                img: "./img/Product/hippie2.png",
            },
        ],
    },
    {
        id: 6,
        title: "Asics",
        price: 689,
        colors: [
            {
                code: "pink",
                img: "./img/Product/Asicss.png",
            },
            {
                code: "green",
                img: "./img/Product/Asics2.png",
            },
        ],
    },
];

let choosenProductImg = product[0];

const currentProductimg = document.querySelector(".productimg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItem.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the choosen slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choose product
        choosenProductImg = product[index];

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProductImg.title;
        currentProductPrice.textContent = "RM" + choosenProductImg.price;
        currentProductimg.src = choosenProductImg.colors[0].img;

        //assing new colors
        currentProductColors.forEach((color, index) => {
            color.computedStyleMap.backgroundColor = choosenProductImg.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductimg.src = choosenProductImg.colors[index].img;
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.syle.color = "black";
        });
        size.syle.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});
