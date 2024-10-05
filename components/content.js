let a = true;
let btn = document.getElementById("btn-chng-mode");
btn.innerHTML = "Dark Mode";
btn.addEventListener("click", function (e) {
  e.preventDefault;
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
  document.documentElement.style.setProperty("--clr-skill-cart", "#090810");
  document.documentElement.style.setProperty("--clr-cert-btn", "#00a8c5");
};
// Dark mode End

// Light mode
let lightMode = () => {
  document.body.style.backgroundColor = "white";
  document.documentElement.style.setProperty("--clr-primary", "#4F4F4F");
  document.documentElement.style.setProperty("--clr-second", "#828282");
  document.documentElement.style.setProperty("--clr-third", "#333333");
  document.documentElement.style.setProperty("--clr-skill-cart", "#d3f7f2");
  document.documentElement.style.setProperty("--clr-cert-btn", "#051c93");
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
    expDate: "Feb 2020 - Aug 2020 &nbsp;&nbsp;( 6 - months )",
    roleName: "Web Developer",
    roleDesc:"Utilizing AEM to layout pages, troubleshoot issues and also working with adjacent development teams to implement integrated technical solutions.",
  },
  {
    logosrc: "./components/images/accenture-logo.png",
    logoAltTxt: "Accenture logo",
    expDate: "Jun 2019 - Jan 2020 &nbsp;&nbsp;( 7 - months )",
    roleName: "Web Developer",
    roleDesc:"Created AEM components and templates. Design and maintain scalable and stable web solutions that meet business needs."
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
let reactProjects = [
  {
    projhRef: "./components/images/proj-images/edie/edie-merged-old.png",
    projSrc: "./components/images/proj-images/edie/edie-merged.png",
    projAlt: "Button Component",
    projHeading: "Button Component",
    projDesc:"In this project, I work with React-js to create button (click to copy css) reusable components and style it using css as well as usues CSS: GRID and FLEXBOX to create responsive layouts.",
    projDemo: "https://button-component-react-devch-gw.netlify.app/",
    projCode: "https://github.com/WaniGaurav/button-component-react-devch",
  },
]

// projects section
let tabBtn = document.querySelectorAll(".tab-btn");
// //console.log(tabBtn.length)
let projectsName = [htmlProjects, javacriptProjects, reactProjects]
// let projectsName = [htmlProjects, javacriptProjects]

let pageIndex = 0;
let itemsPerPage = 3;

for (let index = 0; index < tabBtn.length; index++) {
  tabBtn[index].addEventListener("click",(e)=>{
    let btnremove = document.querySelectorAll(".page-btn");
    btnremove.forEach((element)=>{
      element.remove();
    })
    e.preventDefault;
    
    let b = document.querySelectorAll(".proj-grid, .not-found, .not-found-wrapper");
    
    tabBtn.forEach((element)=>{
      element == tabBtn[index] ? element.classList.add("tabs-btn-active") : element.classList.remove("tabs-btn-active");
    })

    // Hiding other tab's project
    b.forEach((element)=>{
      element.remove();
    })
    // displaying current tab projects
    projectTabs(projectsName[index]);
    
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

// pagination

let pagination = (items)=> {
  
  let b = document.querySelectorAll(".proj-grid");
  let nav = document.getElementById('nav');
  //console.log("projectsNumbers " +projectsNumbers.length)

  nav.innerHTML = "";
    for (let i=0; i<(items.length/itemsPerPage); i++) {
        
        const span = document.createElement('span');
        span.className="nav-num";
        span.innerHTML = i+1;
        span.addEventListener('click', (e) => {
          e.preventDefault;
          // span.classList.remove("btn-active");
          pageIndex = e.target.innerHTML-1;
          // Hiding previous tab's project
          b.forEach((element)=>{
            element.remove();
          })
          projectTabs(items);
        });
        if (i === pageIndex) {
          // span.style.fontSize = "2rem";
          span.classList.add("nav-num-active");
        }
        else{
          span.classList.remove("nav-num-active");
        }
        nav.append(span);
    }
  
    
      // Removes Pagination from project tab which has 3 or less projects
      
        let btnNumbers = items.length;
        // console.log("btnNumbers " +btnNumbers)
          if (btnNumbers <= 3) {
            let c = document.querySelectorAll(".nav-num");
            // console.log("Page Buttons " +c.length)
            c.forEach((element)=>{
              element.remove();
            })
            
            // Removes Pagination for "No data Found"
              if (btnNumbers == 0) {
                let proj = document.querySelector(".tabs");
                let divTag = document.createElement("div");
                divTag.className = "not-found-wrapper"

                  let spanTag = document.createElement("span");
                  spanTag.className = "not-found";
                  spanTag.innerHTML = "Work in process";
                  divTag.appendChild(spanTag)

                    // let imgTag = document.createElement("img");
                    // imgTag.className = "not-found-img"
                    // imgTag.src = "./components/images/work-in-progress.png"

                    // divTag.appendChild(imgTag)

                proj.appendChild(divTag)
              }
            // END Removes Pagination for "No data Found"
          }   
        //console.log("------------------------------------------------------------")

      // END Removes from project tab which has 3 or less projects
}

// pagination END

// Projects start

let projectTabs = (projects) => {
  
  let proj = document.querySelector(".tabs");
  
    for (let i=pageIndex*itemsPerPage; i<(pageIndex*itemsPerPage)+itemsPerPage; i++) {

        // if (!items[i]) { break }
        if (!projects[i]) { break }

          let divClass = document.createElement("div");
          divClass.classList.add("proj-grid", "wrapper-design");
          divClass.innerHTML = `<div class="projGrid-column1 ">
            <a target="_blank" href="${projects[i].projhRef}">
            <img loading="lazy" class="proj-img" src="${projects[i].projSrc}" alt="${projects[i].projAlt}"/>
            </a>
          </div>
          <div class="projGrid-column2 ">
            <span class="proj-heading">${projects[i].projHeading}</span>
            <span class="proj-desc">${projects[i].projDesc}</span>
            <div class="proj-links-wrapper">
              <div class="links-div1">
                <a target="_blank" class="proj-link" href="${projects[i].projDemo}">Demo</a>
              </div>
              <div class="links-div2">
                <a target="_blank" class="git-link" href="${projects[i].projCode}">Code</a>
              </div>
            </div>
          </div>`;
          proj.appendChild(divClass);
    }
    // pagination
    pagination(projects)

};

// Projects end

projectTabs(htmlProjects);