$(function () {
  //PRODUCT SLIDER START
  $(".product_slider").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    draggable: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 444,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  //PRODUCT SLIDER END
  //BLOG SLIDER START
  $(".blog_slider").slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    draggable: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
  //BLOG SLIDER END
  //BRAND SLIDER START
  $(".brand_slider").slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: false,
    draggable: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
  //BRAND SLIDER END
  //CART SLIDER START
  $(".cart_slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    infinite: true,
    arrows: true,
    prevArrow: '<i class="fa-solid fa-chevron-left prev_arrow"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right next_arrow"></i>',
  });
  //CART SLIDER END

  //THEME FEATURE START////////////////
  let dark_light = document.querySelector(".dark_light");
  let body = document.querySelector("body");
  dark_light.addEventListener("click", function () {
    body.classList.toggle("dark");
    dark_light.classList.add("dark_color");
  });
  //THEME FEATURE END/////////////////

  //TOP COLLECTION START ///////////////////////////
  /* All Reference start
 -------------------------*/

  const thumbnailArray = Array.from(
    document.querySelectorAll(".thambnail ul li")
  );
  const displayArray = Array.from(document.querySelectorAll(".display a"));
  const colorsArray = Array.from(document.querySelectorAll(".colors i"));
  /* All Reference end
 -------------------------*/

  thumbnailArray.map((item, index) => {
    item.addEventListener("mouseenter", () => {
      // console.log(index);

      // catch all thumbnail image
      let allListArr = Array.from(item.parentElement.querySelectorAll("li"));
      allListArr.map((thumbnail) => {
        thumbnail.classList.remove("active");
      });

      // catch all Circle color
      let colors = Array.from(
        item.parentElement.parentElement.parentElement.parentElement.querySelectorAll(
          ".text_box .colors span"
        )
      );
      colors.map((item) => {
        item.classList.remove("active");
      });

      // Catch all Display images
      let parentDiv = displayArray[index].parentElement;
      let displayImages = parentDiv.querySelectorAll("a");
      let displayImgArr = Array.from(displayImages);
      displayImgArr.map((img) => {
        img.classList.remove("active");
      });

      // Active class add
      thumbnailArray[index].classList.add("active");
      displayArray[index].classList.add("active");
      colorsArray[index].classList.add("active");
    });
  });

  // Colors circle eventListener
  colorsArray.map((color, index) => {
    color.addEventListener("click", () => {
      // catch all display image
      let displayImages = color.parentElement.parentElement.parentElement;
      let img = Array.from(
        displayImages.querySelectorAll(".image_box .display a")
      );
      img.map((item) => {
        item.classList.remove("active");
      });
      // catch all thumbnail image
      let thumbnailImages = color.parentElement.parentElement.parentElement;
      let thumb = Array.from(
        thumbnailImages.querySelectorAll(".image_box .thambnail li")
      );
      console.log(thumbnailImages);
      thumb.map((item) => {
        item.classList.remove("active");
      });

      // catch all circle color
      let parentCircle = color.parentElement;
      let allColorCircle = parentCircle.querySelectorAll("i");
      let allColorCircleArr = Array.from(allColorCircle);
      allColorCircleArr.map((item) => {
        item.classList.remove("active");
      });

      // Active class add
      thumbnailArray[index].classList.add("active");
      displayArray[index].classList.add("active");
      colorsArray[index].classList.add("active");
    });
  });
  //TOP COLLECTION END ///////////////////////////

  //FILTER GALLERY START///////////////////////
  const filter_menu = document.querySelectorAll(".filter_menu button");
  const filter_gallery = document.querySelectorAll(
    ".filter_gallery .filter_item"
  );

  const filter_menuArr = Array.from(filter_menu);
  const filter_galleryArr = Array.from(filter_gallery);

  filter_menuArr.map((menu_item, index) => {
    menu_item.addEventListener("click", (e) => {
      //remove active class from all filter_menu items
      filter_menuArr.map((remove_class) => {
        remove_class.classList.remove("active");
      });
      //remove active class from all filter_gallery items
      filter_galleryArr.map((item) => {
        item.classList.remove("active");
      });

      //add active class
      filter_galleryArr[index].classList.add("active");
      filter_menuArr[index].classList.add("active");
    });
  });

  //FILTER GALLERY END///////////////////////

  // PRODUCT DISPLAY STYLE START//////////////

  let left_arrow = document.getElementById("left_arrow");
  let right_arrow = document.getElementById("right_arrow");
  let inStock = document.getElementById("inStock");
  let input = document.getElementById("input");
  let add_cart = document.querySelectorAll(".add_cart");
  let add_cartArr = Array.from(add_cart);

  let input_value = 1;

  function increment() {
    input_value++;

    if (input_value < 5) {
      input.value = input_value;
      left_arrow.disabled = false;
    } else if (input_value === 5) {
      input.value = input_value;
      right_arrow.disabled = true;
      add_cartArr.map((item) => {
        item.classList.add("disabled");
      });
    }
  }
  function decrement() {
    input_value--;
    if (input_value < 5) {
      input.value = input_value;
      right_arrow.disabled = false;
      add_cartArr.map((item) => {
        item.classList.remove("disabled");
      });
    }
    if (input_value === 1) {
      left_arrow.disabled = true;
    }
  }

  right_arrow.addEventListener("click", increment);
  left_arrow.addEventListener("click", decrement);
  // PRODUCT DISPLAY STYLE END/////////////////

  // COUNTDOWN START
  $("#countdown").countdown({
    date: "12/24/2028 23:59:59",
  });
  // COUNTDOWN END
});

// STICKY NAVBAR START ///////////////////////
let navbar = document.querySelector("nav");

window.addEventListener("scroll", function () {
  let scroll_value = Math.floor(window.scrollY);

  if (scroll_value > 100) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
// STICKY NAVBAR END ///////////////////////
// MOVE TO TOP START ///////////////////////
let move_top = document.querySelector("#move_top");

window.addEventListener("scroll", function () {
  let move_scroll_value = Math.ceil(window.scrollY);

  if (move_scroll_value > 100) {
    move_top.classList.add("sticky");
  } else {
    move_top.classList.remove("sticky");
  }
});
// MOVE TO TOP END ///////////////////////
