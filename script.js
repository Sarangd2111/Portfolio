function animationListeners() {
  const elements = document.querySelectorAll("[data-animate-in]");
  elements.forEach((element) => {
    console.log(element);
    const text = [...element.innerText];

    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
    text.forEach((letter, i) => {
      const span = document.createElement("span");
      span.innerHTML = letter != " " ? letter : "&nbsp;";
      span.style.display = "inline-block";
      span.style.animation = `fade-in 3s`;
      const delay = i * 75;
      span.style.animationDelay = `${delay}ms`;
      span.style.animationFillMode = "both";
      element.append(span);
    });
  });
}
animationListeners();

function Aboutscroll() {
  let x = (window.innerHeight / 5) * 5;
  // let clslist = document.getElementById("aboutHeading").classList;
  let clslist = document.getElementById("aboutHeading").classList;
  const targetClass = document.getElementsByClassName("About");
  const classTop = aboutHeading.getBoundingClientRect().top;
  if (classTop < x) {
    clslist.add("about-heading-transform");
    document.getElementById("pointLight1").className = "point-light1";
  } else {
    clslist.remove("about-heading-transform");
    document.getElementById("pointLight1").classList.remove("point-light1");
  }
}

function Skillscroll() {
  let x1 = (window.innerHeight / 5) * 5;
  // let clslist = document.getElementById("aboutHeading").classList;
  let clslist = document.getElementById("skillHeading").classList;
  const targetClass = document.getElementsByClassName("Skills");
  const classTop = skillHeading.getBoundingClientRect().top;
  if (classTop < x1) {
    clslist.add("skill-heading-transform");
    document.getElementById("pointLight5").className = "point-light1";
  } else {
    clslist.remove("skill-heading-transform");
    document.getElementById("pointLight5").classList.remove("point-light1");
  }
}

function Projectscroll() {
  let x1 = (window.innerHeight / 5) * 5;
  // let clslist = document.getElementById("aboutHeading").classList;
  let clslist = document.getElementById("projectHeading").classList;
  const targetClass = document.getElementsByClassName("Project-heading");
  const classTop = projectHeading.getBoundingClientRect().top;
  if (classTop < x1) {
    clslist.add("project-heading-transform");
    document.getElementById("pointLight2").className = "point-light2";
  } else {
    clslist.remove("project-heading-transform");
    document.getElementById("pointLight2").classList.remove("point-light2");
  }
}

function Contactscroll() {
  let x1 = (window.innerHeight / 5) * 5;
  // let clslist = document.getElementById("aboutHeading").classList;
  let clslist = document.getElementById("contactHeading").classList;
  const targetClass = document.getElementsByClassName("contact-heading");
  const classTop = contactHeading.getBoundingClientRect().top;
  if (classTop < x1) {
    clslist.add("contact-heading-transform");
    document.getElementById("pointLight3").className = "point-light3";
  } else {
    clslist.remove("contact-heading-transform");
    document.getElementById("pointLight3").classList.remove("point-light3");
  }
}

window.addEventListener("scroll", Aboutscroll);
window.addEventListener("scroll", Skillscroll);
window.addEventListener("scroll", Projectscroll);
window.addEventListener("scroll", Contactscroll);

  function toggleAboutLight() {
    let aboutDivs = document.querySelectorAll("#aboutLightEffect")
    aboutDivs.forEach((element)=>{
        element.classList.toggle("lightEffect")
    })
  }
  
  function toggleSkillsLight() {
    let aboutDivs = document.querySelectorAll("#skillLightEffect")
    aboutDivs.forEach((element)=>{
        element.classList.toggle("lightEffect")
    })
  }

  function toggleContactLight() {
    let aboutDivs = document.querySelectorAll("#contactLightEffect")
    aboutDivs.forEach((element)=>{
        element.classList.toggle("lightEffectContact")
    })
  }