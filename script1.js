/*============================= typed name  ============================ */
var typed = new Typed (".typing",{
    strings:["","Hafez Of The Quran","IBA Of Smart Value","Web Developer","Student Of Fazil"],
    typeSpeed:100,
    backSpeed:80,
    loop:true
});
/*============================= aside  ============================ */
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length;
      allsection = document.querySelectorAll(".section"),
      totalSection = allsection.length;
      for (let i=0; i<totalNavList; i++){
        const a = navList[i].querySelector("a");

        a.addEventListener("click",function(){
    removeSection();
            for(let j = 0;j<totalNavList; j++){
              if(navList[j].querySelector("a").classList.contains("active")){
                allsection[j].classList.add("back-section");
              }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            showSection(this);
            if(window.innerWidth <1200){
              asideSectionTogglerBtn();
            }
        })
      }
      function removeSection(){
        for(let i =0; i<totalSection; i++){
          allsection[i].classList.remove("back-section");
        }
      }
      function showSection(element){
        for(let i =0; i<totalSection; i++){
          allsection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active");
}
function updateNav(element){
     for(let i=0;i<totalNavList; i++){
      navList[i].querySelector("a").classList.remove("active");
      const target = element.getAttribute("href").split("#")[1];
      if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
        navList[i].querySelector("a").classList.add("active");
      }
     }
}
document.querySelector(".hire-me").addEventListener("click",()=>{
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
})

const navtogglerbtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    navtogglerbtn.addEventListener("click",()=>{
     asideSectionTogglerBtn();
    })
    function asideSectionTogglerBtn(){
      aside.classList.toggle("open");
      navtogglerbtn.classList.toggle("open");
      for(let i=0; i<totalSection; i++){
        allsection[i].classList.toggle("open");
      }
    }