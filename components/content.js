let a = true;
let btn = document.getElementById("btn-chng-mode");
btn.innerHTML = "Dark Mode";
btn.addEventListener("click", function (e) {
  if (a) {
    btn.innerHTML = "Light Mode";
    darkMode();
    a = false;
  } else {
    btn.innerHTML = "Dark Mode";
    lightMode();
    a = true;
  }
});

// Dark mode
let darkMode = () => {
  document.body.style.backgroundColor = "black";
  document.documentElement.style.setProperty("--clr-primary", "#eee");
  document.documentElement.style.setProperty("--clr-second", "#eee");
  document.documentElement.style.setProperty("--clr-third", "#28c1ad");
  document.documentElement.style.setProperty("--clr-skill-cart", "#32008b");
  document.documentElement.style.setProperty("--clr-skill-cart2", "#033641");
};
// Dark mode End

// Light mode
let lightMode = () => {
  document.body.style.backgroundColor = "#e4ea8a";
  document.documentElement.style.setProperty("--clr-primary", "#4F4F4F");
  document.documentElement.style.setProperty("--clr-second", "#828282");
  document.documentElement.style.setProperty("--clr-third", "#333333");
  document.documentElement.style.setProperty("--clr-skill-cart", "#d3f7f2");
  document.documentElement.style.setProperty("--clr-skill-cart2", "#d3f7f2");
};
// Light mode End

let technical = [
  {
    technology: "HTML",
    spanClass: "html",
  },
  {
    technology: "CSS",
    spanClass: "css",
  },
  {
    technology: "JAVASCRIPT",
    spanClass: "javascript",
  },
  {
    technology: "REACT-JS",
    spanClass: "react-js",
  },
  {
    technology: "REDUX",
    spanClass: "redux",
  },
];

let experiance = [
  {
    logosrc: "./components/images/accenture-logo.png",
    logoAltTxt: "Accenture logo",
    expDate: "Feb 2020 - Aug 2020",
    roleName: "Web Developer",
    roleDesc:
      "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie",
  },
  {
    logosrc: "./components/images/accenture-logo.png",
    logoAltTxt: "Accenture logo",
    expDate: "Jun 2019 - Jan 2020",
    roleName: "Web Developer",
    roleDesc:
      "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie",
  },
];

let hobbies = [
  {
    hobbyPic: "./components/images/gaming.png",
    hobbyAltTxt: "playing game on playstation",
    hobbyName: "Gaming",
    hobbyDesc: "Quisque feugiat malesuada molestie.",
  },
  {
    hobbyPic: "./components/images/playing-chess.png",
    hobbyAltTxt: "Playing chess on board",
    hobbyName: "Playng chess",
    hobbyDesc: "Quisque feugiat malesuada molestie.",
  },
  {
    hobbyPic: "./components/images/tour.png",
    hobbyAltTxt: "",
    hobbyName: "Travelling",
    hobbyDesc: "Quisque feugiat malesuada molestie.",
  },
];

let trchnologiesCard = () => {
  let role = document.querySelector(".skill");

  technical.map((techData) => {
    let divClass = document.createElement("div");
    divClass.className = "skill-wrapper";
    divClass.innerHTML = `<span class="technologis">${techData.technology}</span>
        <span class="bar"><span class="${techData.spanClass}"></span></span>`;
    role.appendChild(divClass);
  });
};

trchnologiesCard();

let expCard = (e) => {
  let exp = document.querySelector(".experience");

  experiance.map((expData) => {
    let divClass = document.createElement("div");
    divClass.classList.add("exp-wrapper", "wrapper-design");
      divClass.innerHTML = `<div class="exp-wrp-left">
        <img loading="lazy" class="exp-logo" src="${expData.logosrc}" alt="${expData.logoAltTxt}">
      </div>
      <div class="exp-wrp-right">
        <span class="exp">${expData.expDate}</span>
        <span class="role-heading">${expData.roleName}</span>
        <span class="desc-role">${expData.roleDesc}</span>
      </div>`;
    exp.appendChild(divClass);
  });
};

expCard();

let hobbyCard = () => {
  let hob = document.querySelector(".hobbies");

  hobbies.map((hobData) => {
    let divClass = document.createElement("div");
    divClass.classList.add("hobbies-wrapper", "wrapper-design");
    divClass.innerHTML = `<img loading="lazy" class="hob-img" src="${hobData.hobbyPic}" alt="${hobData.hobbyAltTxt}">
        <span class="hob-name">${hobData.hobbyName}</span>
        <span class="hob-desc">${hobData.hobbyDesc}</span>`;
    hob.appendChild(divClass);
  });
};

hobbyCard();
