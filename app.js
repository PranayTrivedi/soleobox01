const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Jordan 1",
    price: 1799,
    colors: [
      {
        code: "white",
        img: "./img/air jordan 1 white.png",
      },
      {
        code: "skyblue",
        img: "./img/air forc 1 skyblue.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air force 1",
    price: 1599,
    colors: [
      {
        code: "white",
        img: "./img/air force 1 white.png",
      },
      {
        code: "black",
        img: "./img/air force 1 black.png",
      }
   ,
    ],
  },
  {
    id: 3,
    title: "ONITSUKA TIGER",
    price: 1299,
    colors: [
      {
        code: "white",
        img: "./img/onitsuka tiger white.png",
      },
      {
        code: "black",
        img: "./img/onitsuka tiger black.png",
      },
      {
        code: "gray",
        img: "./img/onitsuka tiger gray.png",
      }
    ],
  },
  {
    id: 4,
    title: "TRAVIS SCOTT",
    price: 1799,
    colors: [
      {
        code: "#F2F2F2",
        img: "./img/travis scott white.png",
      },
      {
        code: "#F2F2F2",
        img: "./img/travis scott white.png",
      }
    ],
  },
  {
    id: 5,
    title: "SLIDER",
    price: 399,
    colors: [
      {
        code: "black",
        img: "./img/slider balck.png",
      },
      {
        code: "tan",
        img: "./img/slider white.png",
      },
    ],
  },
  {
    id: 6,
    title: "ADIDAS ULTRABOOST",
    price: 2199,
    colors: [
      {
        code: "#F2F2F2",
        img: "./img/adidas ultraboost.png",
      },
      {
        code: "#F2F2F2",
        img: "./img/adidas ultraboost.png",
      }
    ],
  },
  {
    id: 7,
    title: "REEBOK ZIG KINETICA",
    price: 2999,
    colors: [
      {
        code: "#F2F2F2",
        img: "./img/reebok  zig kinetica.png",
      },
      {
        code: "#F2F2F2",
        img: "./img/reebok  zig kinetica.png",
      }
    ],
  },
  {
    id: 8,
    title: "ASICS GEL KAYANO",
    price: 1699,
    colors: [
      {
        code: "#F2F2F2",
        img: "./img/asics gel kayano.png",
      },
      {
        code: "#F2F2F2",
        img: "./img/asics gel kayano.png",
      }
    ],
  }
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // cahnge the chosen products
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "Rs " + choosenProduct.price;
    currentProductTitle.textContent = choosenProduct.title;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assign new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});
