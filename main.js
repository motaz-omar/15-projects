const body = document.querySelector("body");
const projectsBtn = document.querySelectorAll(".project-button");
const colorFlipperPage = document.querySelector("#color-flipper-page");
const counterPage = document.querySelector("#counter-page");
const reviewsPage = document.querySelector("#reviews-page");
const navbarPage = document.querySelector("#navbar-page");
const sidebarPage = document.querySelector("#sidebar-page");
const modalPage = document.querySelector("#modal-page");
const questionsPage = document.querySelector("#questions-page");
const menuPage = document.querySelector("#menu-page");
const videoPage = document.querySelector("#video-page");
const scrollPage = document.querySelector("#scroll-page");
const tabsPage = document.querySelector("#tabs-page");
const countdownPage = document.querySelector("#countdown-page");
const loremIpsumPage = document.querySelector("#lorem-ipsum-page");
const groceryPage = document.querySelector("#grocery-page");
const sliderPage = document.querySelector("#slider-page");

projectsBtn.forEach((projectBtn) => {
  projectBtn.addEventListener("click", (e) => {
    const clicked = document.querySelectorAll(".clicked");

    if (clicked.length > 0) {
      projectsBtn.forEach((projectBtn2) => {
        projectBtn2.classList.remove("clicked");
      });
    }
    e.currentTarget.classList.add("clicked");

    displayNone();
    if (e.currentTarget.id === "color-flipper-button") {
      colorFlipperPage.style.display = "flex";
      body.style.backgroundColor = color;
      console.log("hi");
    } else if (e.currentTarget.id === "counter-button") {
      counterPage.style.display = "flex";
      body.style.backgroundColor = "var(--white)";
    } else if (e.currentTarget.id === "reviews-button") {
      reviewsPage.style.display = "flex";
      showreview(0);
      body.style.backgroundColor = "var(--white)";
    } else if (e.currentTarget.id === "navbar-button") {
      navbarPage.style.display = "flex";
      body.style.backgroundColor = "var(--white)";
    } else if (e.currentTarget.id === "sidebar-button") {
      sidebarPage.style.display = "flex";
      body.style.backgroundColor = "var(--white)";
    } else if (e.currentTarget.id === "modal-button") {
      modalPage.style.display = "flex";
      body.style.backgroundColor = "var(--white)";
    } else if (e.currentTarget.id === "question-button") {
      questionsPage.style.display = "flex";
      body.style.backgroundColor = "var(--white)";
    } else if (e.currentTarget.id === "menu-button") {
      menuPage.style.display = "flex";
      body.style.backgroundColor = "var(--white)";
    } else if (e.currentTarget.id === "video-button") {
      videoPage.style.display = "block";
      body.style.backgroundColor = "var(--white)";
    } else if (e.currentTarget.id === "scroll-button") {
      scrollPage.style.display = "flex";

      body.style.backgroundColor = "var(--white)";
    } else if (e.currentTarget.id === "tabs-button") {
      tabsPage.style.display = "grid";
      body.style.backgroundColor = "var(--gray-3)";
    } else if (e.currentTarget.id === "countdown-button") {
      countdownPage.style.display = "flex";
      body.style.backgroundColor = "var(--white)";
    } else if (e.currentTarget.id === "lorem-ipsum-button") {
      loremIpsumPage.style.display = "flex";
      body.style.backgroundColor = "var(--white)";
    } else if (e.currentTarget.id === "grocery-button") {
      groceryPage.style.display = "flex";
      body.style.backgroundColor = "var(--white)";
    } else if (e.currentTarget.id === "slider-button") {
      sliderPage.style.display = "flex";
      body.style.backgroundColor = "var(--white)";
    }
  });
});
function displayNone() {
  colorFlipperPage.style.display = "none";
  counterPage.style.display = "none";
  reviewsPage.style.display = "none";
  navbarPage.style.display = "none";
  sidebarPage.style.display = "none";
  modalPage.style.display = "none";
  questionsPage.style.display = "none";
  menuPage.style.display = "none";
  videoPage.style.display = "none";
  scrollPage.style.display = "none";
  tabsPage.style.display = "none";
  countdownPage.style.display = "none";
  loremIpsumPage.style.display = "none";
  groceryPage.style.display = "none";
  sliderPage.style.display = "none";
}

// color fipper
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector("#change-color");
const colorName = document.querySelector("#color-name");

let color = "#";
btn.addEventListener("click", () => {
  color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * hex.length)];
  }
  colorName.textContent = "the color is " + color;
  body.style.backgroundColor = color;
});
//counter
const counterCounts = document.querySelector("#counter-counts");
const increaseCounts = document.querySelector("#increase-counter");
const decreaseCounts = document.querySelector("#decrease-counter");
const resetCounts = document.querySelector("#reset-counter");
let counts = 0;

increaseCounts.addEventListener("click", () => {
  counts++;
  counterCounts.textContent = counts;
  checkCounts();
});
decreaseCounts.addEventListener("click", () => {
  counts--;
  counterCounts.textContent = counts;
  checkCounts();
});
resetCounts.addEventListener("click", () => {
  counts = 0;
  counterCounts.textContent = counts;
  checkCounts();
});
function checkCounts() {
  if (counts === 0) {
    counterCounts.style.color = "var(--black)";
  } else if (counts > 0) {
    counterCounts.style.color = "var(--green)";
  } else if (counts < 0) {
    counterCounts.style.color = "var(--red)";
  }
}
// reviews
const img = document.querySelector("#person-image");
const personName = document.querySelector("#person-name");
const job = document.querySelector("#job");
const descrption = document.querySelector("#description");

const prevBtn = document.querySelector("#prev-review");
const nextBtn = document.querySelector("#next-review");
const randomBtn = document.querySelector("#random-review");
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
let currentreview = 0;
function showreview(review) {
  const item = reviews[review];
  img.src = item.img;
  personName.textContent = item.name;
  job.textContent = item.job;
  descrption.textContent = item.text;
}
nextBtn.addEventListener("click", () => {
  currentreview++;

  if (currentreview > reviews.length - 1) {
    currentreview = 0;
  }
  showreview(currentreview);
});
prevBtn.addEventListener("click", () => {
  currentreview--;
  if (currentreview < 0) {
    currentreview = reviews.length - 1;
  }
  showreview(currentreview);
});

randomBtn.addEventListener("click", () => {
  currentreview = Math.floor(Math.random() * reviews.length);
  showreview(currentreview);
});
// navbar
const openNavbar = document.querySelector("#show-navbar");
const navbar = document.querySelector("#navbar-buttons");
openNavbar.addEventListener("click", () => {
  if (navbar.classList.contains("navbar-opened")) {
    navbar.classList.remove("navbar-opened");
    navbar.style.display = "none";
  } else if (!navbar.classList.contains("navbar-opened")) {
    navbar.classList.add("navbar-opened");
    navbar.style.display = "flex";
  }
});
// sidebar
const openSidebar = document.querySelector("#show-sidebar");
const closeSidebar = document.querySelector("#close-sidebar");
const sidebar = document.querySelector("#sidebar");
closeSidebar.addEventListener("click", (e) => {
  sidebar.style.display = "none";
  sidebar.classList.remove("sidebar-opened");
  openSidebar.style.color = "var(--black)";
});
openSidebar.addEventListener("click", () => {
  if (sidebar.classList.contains("sidebar-opened")) {
    sidebar.classList.remove("sidebar-opened");
    openSidebar.style.color = "var(--black)";

    sidebar.style.display = "none";
  } else if (!sidebar.classList.contains("sidebar-opened")) {
    sidebar.classList.add("sidebar-opened");
    openSidebar.style.color = "var(--blue-2)";

    sidebar.style.display = "flex";
  }
});
// modal
const openModal = document.querySelector("#show-modal-button");
const modal = document.querySelector("#modal-container");
const closeModal = document.querySelector("#close-modal-button");

openModal.addEventListener("click", () => {
  modal.style.display = "block";
});
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
// questions
const openQ = document.querySelectorAll(".show-question-content");
openQ.forEach((openQBtn) => {
  openQBtn.addEventListener("click", (e) => {
    const QContent = e.currentTarget.parentElement.nextElementSibling;
    if (QContent.classList.contains("question-opened")) {
      QContent.classList.remove("question-opened");
      e.currentTarget.innerHTML = '<i class="far fa-plus-square"></i>';
    } else if (!QContent.classList.contains("question-opened")) {
      QContent.classList.add("question-opened");
      e.currentTarget.innerHTML = '<i class="far fa-minus-square"></i>';
    }
  });
});
// tabs
const visionBtn = document.querySelector("#vision-button");
const goalsBtn = document.querySelector("#goals-button");
const historyBtn = document.querySelector("#history-button");
const history = document.querySelector("#history");
const vision = document.querySelector("#vision");
const goals = document.querySelector("#goals");
historyBtn.addEventListener("click", (e) => {
  e.currentTarget.style.backgroundColor = "var(--white)";
  visionBtn.style.backgroundColor = "transparent";
  goalsBtn.style.backgroundColor = "transparent";
  history.style.display = "grid";
  vision.style.display = "none";
  goals.style.display = "none";
});
visionBtn.addEventListener("click", (e) => {
  e.currentTarget.style.backgroundColor = "var(--white)";
  historyBtn.style.backgroundColor = "transparent";
  goalsBtn.style.backgroundColor = "transparent";
  vision.style.display = "grid";
  goals.style.display = "none";
  history.style.display = "none";
});
goalsBtn.addEventListener("click", (e) => {
  e.currentTarget.style.backgroundColor = "var(--white)";
  visionBtn.style.backgroundColor = "transparent";
  historyBtn.style.backgroundColor = "transparent";
  goals.style.display = "grid";

  history.style.display = "none";
  vision.style.display = "none";
});
//grocery
// variables
const alret = document.querySelector("#alret");
const header = document.querySelector("#header");
const Name = document.querySelector("#item_name_input");
const addBtn = document.querySelector("#add_btn");
const container = document.querySelector(".list");
const list = document.querySelector("#itmes_container");
const clear = document.querySelector("#clear_btn");
// edit variables
let editElement;
let editFlag = false;
let editId = "";
// adding and editing and  deleteing items
header.addEventListener("submit", (e) => {
  // preventDefault
  e.preventDefault();
  // item name
  const value = Name.value;
  // item unique id
  const id = new Date().getTime().toString();
  // add item if the input is not empty
  if (value !== "" && editFlag === false) {
    saveItemToLocalStorage(id, value);
    displayalret("Item added to the list", "green");
    container.classList.add("show-list");
    // save to local storage
    addToLocalStorage(id, value);
    // deafualt
    setBackToDefault();
  }
  // edit item name
  else if (value !== "" && editFlag === true) {
    editElement.innerHTML = value;
    displayalret("Item name edited", "green");
    // save to local storage
    editLocalStorage(editId, value);
    // default
    setBackToDefault();
  }
  // shows a alret if the input is empty
  else {
    displayalret("Please write something first", "red");
  }
});

// alret function
function displayalret(text, action) {
  alret.textContent = text;
  alret.classList.add(`alret-${action}`);

  setTimeout(() => {
    alret.textContent = "";
    alret.classList.remove(`alret-${action}`);
  }, 1000);
}
// clearing all items
clear.addEventListener("click", () => {
  const items = document.querySelectorAll(".item");
  if (items.length > 0) {
    items.forEach((item) => {
      list.removeChild(item);
    });
  }
  container.classList.remove("show-list");
  displayalret("All items cleared ", "red");
  // default // save to local storage
  setBackToDefault();
  // removing from local storage
  localStorage.removeItem("list");
});
// setting back to default default
function setBackToDefault() {
  Name.value = "";
  editFlag = false;
  editId = "";
  addBtn.textContent = "submit";
}
// local storage
// removing the item from the local storage
function removeFromLocalStorage(id) {
  let items = getFromLocalStorage();
  items = items.filter((item) => {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
}
// adding item to the local storage
function addToLocalStorage(id, value) {
  const storage = { id, value };
  let items = getFromLocalStorage();
  items.push(storage);
  localStorage.setItem("list", JSON.stringify(items));
}
// getting the item from the local storage
function getFromLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}
// editing item from local storage
function editLocalStorage(id, value) {
  let items = getFromLocalStorage();
  items = items.map((item) => {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}
// saving item to local storage
function saveItemToLocalStorage(id, value) {
  // adding item to javascript
  const element = document.createElement("article");
  element.classList.add("item");
  const attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  // item
  element.innerHTML = `<p class="item_name">${value}</p>
   <div class="btn_container">
   <button class="edit"><i class="fa-solid fa-pen-to-square icon"></i></button>
     
   <button  class="delete"><i class="fa-solid fa-trash icon"></i></button>
   </div>`;
  // add item

  // local storage

  // delete item
  const Delete = element.querySelector(".delete");
  Delete.addEventListener("click", (e) => {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if (list.children.length === 0) {
      container.classList.remove("show-list");
    }
    displayalret("item removed", "red");
    setBackToDefault();
    removeFromLocalStorage(id);
  });
  // picking item name to edit it
  const edit = element.querySelector(".edit");

  edit.addEventListener("click", (e) => {
    const element = e.currentTarget.parentElement.parentElement;
    editElement = e.currentTarget.parentElement.previousElementSibling;
    Name.value = editElement.innerHTML;
    editFlag = true;
    editId = element.dataset.id;
    addBtn.textContent = "edit";
  });
  list.appendChild(element);
}
//saving items even if the page refreshes
window.addEventListener("DOMContentLoaded", () => {
  let items = getFromLocalStorage();
  if (items.length > 0) {
    items.forEach(function (item) {
      saveItemToLocalStorage(item.id, item.value);
    });
    container.classList.add("show-list");
  }
});
//countdown
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const givenItem = document.querySelector("#giveaway-date");
const leftTime = document.querySelectorAll(".left-time-format");
const date = new Date();
const getYear = date.getFullYear();
const getMonth = date.getMonth();
const getDay = date.getDate();
const futureDate = new Date(getYear, getMonth, getDay + 10, 11, 30, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

const month = months[futureDate.getMonth()];
const weekday = weekdays[futureDate.getDay()];
const day = futureDate.getDate();

givenItem.textContent = `giveaway ends on ${weekday}, ${day} ${month} ${year} ${hours}:${minutes}am`;

const futureTime = futureDate.getTime();
function getRemainingTime() {
  const today = new Date().getTime();
  const time = futureTime - today;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  let days = Math.floor(time / oneDay);
  let hours = Math.floor((time % oneDay) / oneHour);
  let minutes = Math.floor((time % oneHour) / oneMinute);
  let seconds = Math.floor((time % oneMinute) / 1000);
  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  leftTime.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (time < 0) {
    clearInterval(countdown);
    leftTime.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
}
let countdown = setInterval(getRemainingTime, 1000);
//menu
const items = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
const menu = document.querySelector("#menu");
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(items);
});
function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<div class="menu-item">
          <img src=${item.img} class="item-img" />
          <div class="item-about">
            <div class="item-about-top">
              <h4 class="item-title">${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </div >
            <p class="item-desc">
              ${item.desc}
            </p>
          </div>
        </div>`;
  });
  displayMenu = displayMenu.join("");
  menu.innerHTML = displayMenu;
}
const filterBtns = document.querySelectorAll(".filter-button");
filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const btnCategory = e.currentTarget.id;
    const category = items.filter((menuItem) => {
      if (menuItem.category === btnCategory) {
        return menuItem;
      }
    });
    if (btnCategory === "all") {
      diplayMenuItems(items);
    } else {
      diplayMenuItems(category);
    }
  });
});
// video
const switchBtn = document.querySelector("#switch-buttons");
const video = document.querySelector("#video");

switchBtn.addEventListener("click", () => {
  if (!switchBtn.classList.contains("switched")) {
    switchBtn.classList.add("switched");
    video.pause();
  } else {
    switchBtn.classList.remove("switched");
    video.play();
  }
});
//scroll
const scrollHeader = document.querySelector("#scroll-header");
const scrollAbout = document.querySelector("#scroll-about");
const scrollHome = document.querySelector("#scroll-home");
const scrollServices = document.querySelector("#scroll-services");
const scrollTours = document.querySelector("#scroll-tours");
const scrollAboutBtn = document.querySelector("#scroll-about-button");
const scrollHomeBtn = document.querySelector("#scroll-home-button");
const scrollServicesBtn = document.querySelector("#scroll-services-button");
const scrollToursBtn = document.querySelector("#scroll-tours-button");
const backTop = document.querySelector("#back-top");

document.addEventListener("scroll", () => {
  if (window.scrollY > 186) {
    scrollHeader.classList.add("scrolled");
  } else if (window.scrollY < 110) {
    scrollHeader.classList.remove("scrolled");
  }
});
// if (scrollHeader.classList.contains("scrolled")) {
backTop.addEventListener("click", () => {
  scrollHome.scrollIntoView({ behavior: "smooth" });
});
scrollHomeBtn.addEventListener("click", () => {
  scrollHome.scrollIntoView({ behavior: "smooth" });
});
scrollAboutBtn.addEventListener("click", () => {
  scrollAbout.scrollIntoView({ behavior: "smooth" });
});

scrollServicesBtn.addEventListener("click", () => {
  scrollServices.scrollIntoView({ behavior: "smooth" });
});
scrollToursBtn.addEventListener("click", () => {
  scrollTours.scrollIntoView({ behavior: "smooth" });
});
// }
// lorem ipsum
const text = [
  `Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.`,
  `Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.`,
  `Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.`,
  `Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds. `,
  `This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them.
I just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.`,
  `Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie.`,
  `Salvia glossier subway tile, leggings mustache YOLO semiotics chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B master cleanse post-ironic man bun pabst mustache letterpress synth. Snackwave raw denim godard, 3 wolf moon shaman offal kitsch unicorn live-edge selvage schlitz fashion axe vaporware drinking vinegar prism. Shabby chic tacos artisan, chambray chicharrones cardigan leggings typewriter af pop-up williamsburg meditation PBR&B viral. You probably haven't heard of them DIY jean shorts subway tile fashion axe bushwick kitsch tumeric cloud bread vaporware freegan franzen pork belly chicharrones banh mi.`,
  `Man braid celiac synth freegan readymade, pitchfork fam salvia waistcoat lomo bitters gentrify four loko. Pitchfork semiotics post-ironic vegan. Tofu meditation microdosing hashtag semiotics venmo. Flexitarian vape tilde taiyaki. Prism poutine farm-to-table, messenger bag vegan taxidermy tattooed sartorial squid jean shorts fixie selvage trust fund vape.`,
  `Rutters Plate Fleet boom chandler Brethren of the Coast handsomely lookout marooned brigantine knave. Buccaneer gangway jack rum loot spyglass line Jack Tar fore gaff. Gaff topmast scuttle ballast swab draught measured fer yer chains dance the hempen jig Chain Shot yardarm.`,
];

const generate = document.querySelector("#generate-text-button");
const copy = document.querySelector("#copy-text-button");
const amount = document.querySelector("#amount");
const result = document.querySelector("#text-container");

generate.addEventListener("click", (e) => {
  e.preventDefault();

  const value = parseInt(amount.value);
  const random = Math.floor(Math.random() * text.length);
  if (isNaN(value) || value < 0 || value > 9) {
    result.innerHTML = `<p class="result">${text[random]}</p>`;
  } else {
    let tempText = text.slice(0, value);
    tempText = tempText
      .map(function (item) {
        return `<p class="result">${item}</p>`;
      })
      .join("");
    result.innerHTML = tempText;
  }
});
copy.addEventListener("click", () => {
  navigator.clipboard.writeText(result.innerText);
  // slider
});
const slider = document.querySelectorAll(".slide");
const prevSlide = document.querySelector("#slider-prev-button");
const nextSlide = document.querySelector("#slider-next-button");
slider.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
let currentSlide = 0;
prevSlide.addEventListener("click", () => {
  currentSlide--;
  slide();
});
nextSlide.addEventListener("click", () => {
  currentSlide++;
  slide();
});
function slide() {
  if (currentSlide === slider.length) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = slider.length - 1;
  }
  slider.forEach((slide) => {
    slide.style.transform = `translateX(-${currentSlide * 100}%)`;
  });
}
