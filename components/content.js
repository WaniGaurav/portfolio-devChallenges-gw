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
  document.body.style.backgroundColor = "white";
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

let htmlProjects = [
  {
    projhRef: "./components/images/proj-images/not-found/not-found-merged-old.png",
    projSrc: "./components/images/proj-images/not-found/not-found-merged.png",
    projAlt: "404 Not Found page",
    projHeading: "404 Not Found",
    projDesc:"In this project, I work with CSS GRID and FLEXBOX to create responsive page.",
    projDemo: "https://404-not-found-gw.netlify.app/",
    projCode: "https://github.com/WaniGaurav/devchallenges",
  },
  {
    projhRef:"./components/images/proj-images/my-team-page/my-team-page-merged-old.png",
    projSrc:"./components/images/proj-images/my-team-page/my-team-page-merged.png",
    projAlt: " My team page",
    projHeading: "My team page",
    projDesc:"In this project, I work with CSS GRID and FLEXBOX to create responsive page.",
    projDemo: "https://my-team-page-gw.netlify.app/",
    projCode: "https://github.com/WaniGaurav/My-team-page",
  },
  {
    projhRef: "./components/images/proj-images/gallery/gallery-merged-old.png",
    projSrc: "./components/images/proj-images/gallery/gallery-merged.png",
    projAlt: "My Gallery page",
    projHeading: "My Gallery",
    projDesc:"In this project, I work with CSS GRID and FLEXBOX to create responsive page.",
    projDemo: "https://my-gallery-page-gw.netlify.app/",
    projCode: "https://github.com/WaniGaurav/my-gallery-master-devChallenges",
  }
]
let javacriptProjects = [

  {
    projhRef: "./components/images/proj-images/interior/interior-merged-old.png",
    projSrc: "./components/images/proj-images/interior/interior-merged.png",
    projAlt: "Interior Consultant page",
    projHeading: "Interior Consultant",
    projDesc:"In this project, I work with HTML, CSS: GRID, and FLEXBOX to create layouts, collapsed navigation, and make the page responsive.",
    projDemo: "https://interiorgw.netlify.app/",
    projCode: "https://github.com/WaniGaurav/interior",
  },
  {
    projhRef: "./components/images/proj-images/recipe/recipe-merged-old.png",
    projSrc: "./components/images/proj-images/recipe/recipe-merged.png",
    projAlt: "Recipe page",
    projHeading: "Recipe blog",
    projDesc:"In this project, I work with CSS: GRID and FLEXBOX to create layouts and make pages responsive, and I also use JAVASCRIPT for creating dynamic content.",
    projDemo: "https://recipe-page-gw.netlify.app/",
    projCode: "https://github.com/WaniGaurav/recipe-page",
  },
  
  {
    projhRef:"./components/images/proj-images/checkout/checkout-mobile-merged-old.png",
    projSrc:"./components/images/proj-images/checkout/checkout-mobile-merged.png",
    projAlt: "Checkout Page",
    projHeading: "Checkout Page",
    projDesc:"In this project, I work with HTML, CSS: GRID, and FLEXBOX to create layouts and make pages responsive, and I also use JAVASCRIPT for creating alerts and dynamic content. I also added validation to the forms.",
    projDemo: "https://checkout-page-devchallenges-gw.netlify.app/",
    projCode: "https://github.com/WaniGaurav/checkout-page-devChallenges",
  },
  {
    projhRef: "./components/images/proj-images/edie/edie-merged-old.png",
    projSrc: "./components/images/proj-images/edie/edie-merged.png",
    projAlt: "Edie homepage",
    projHeading: "Edie homepage",
    projDesc:"In this project, I work with CSS: GRID and FLEXBOX to create card and gallery layouts, and I also use JAVASCRIPT for creating dynamic content.",
    projDemo: "https://edie-homepage-devchallenges-gw.netlify.app/",
    projCode: "https://github.com/WaniGaurav/edie-homepage-devChallenges",
  },
]
let reactProjects = []

// projects section
let tabBtn = document.querySelectorAll(".tab-btn");
let divClassName = ["htmlClass", "jsClass", "reactClass"]

for (let index = 0; index < tabBtn.length; index++) {
  tabBtn[index].addEventListener("click",(e)=>{
    // e.preventDefault();
    
    let tabContentDisplay = tabBtn[index].id;
    let b = document.querySelectorAll(".proj-grid");

      if(tabContentDisplay == "html-btn") {       // tabBtn[0]

        document.getElementById(tabContentDisplay).classList.add("tabs-btn-active");
        document.getElementById(tabBtn[1].id).classList.remove("tabs-btn-active");
        document.getElementById(tabBtn[2].id).classList.remove("tabs-btn-active");

        // Hiding other tab's project
        b.forEach((element)=>{
          element.style.display = "none";
        })
        projectTabs(htmlProjects);
        
      }
      else if(tabContentDisplay == "js-btn") {    // tabBtn[1]
        
        document.getElementById(tabContentDisplay).classList.add("tabs-btn-active");
        document.getElementById(tabBtn[0].id).classList.remove("tabs-btn-active");
        document.getElementById(tabBtn[2].id).classList.remove("tabs-btn-active");
        
        // Hiding other tab's project
        b.forEach((element)=>{
          element.style.display = "none";
        })
        projectTabs(javacriptProjects);
      }
      else{   // tabBtn[2]

        document.getElementById(tabContentDisplay).classList.add("tabs-btn-active");
        document.getElementById(tabBtn[0].id).classList.remove("tabs-btn-active");
        document.getElementById(tabBtn[1].id).classList.remove("tabs-btn-active");
        
        // Hiding other tab's project
        b.forEach((element)=>{
          element.style.display = "none";
        })
        projectTabs(reactProjects);
          
        }
  })
}
// projects section End

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

let projectTabs = (projects) => {
  let proj = document.querySelector(".tabs");

  projects.map((projData) => {
    let divClass = document.createElement("div");
    divClass.classList.add("proj-grid", "wrapper-design");
    divClass.innerHTML = `<div class="projGrid-column1 ">
      <a target="_blank" href="${projData.projhRef}">
      <img loading="lazy" class="proj-img" src="${projData.projSrc}" alt="${projData.projAlt}"/>
      </a>
    </div>
    <div class="projGrid-column2 ">
      <span class="proj-heading">${projData.projHeading}</span>
      <span class="proj-desc">${projData.projDesc}</span>
      <div class="proj-links-wrapper">
        <div class="links-div1">
          <a target="_blank" class="proj-link" href="${projData.projDemo}">Demo</a>
        </div>
        <div class="links-div2">
          <a target="_blank" class="git-link" href="${projData.projCode}">Code</a>
        </div>
      </div>
    </div>`;
    proj.appendChild(divClass);
  });
};

projectTabs(htmlProjects);