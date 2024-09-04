"use strict"
const toggleSwitch= document.querySelector('input[type="checkbox"]');
const navbar= document.getElementById('nav');
const toggleIcon=document.getElementById('toggle-icon');
const image1= document.getElementById('image1');
const image2= document.getElementById('image2');
const image3= document.getElementById('image3');
const textBox = document.getElementById('text-box');


function toggleLightAndDark(isDark){
  navbar.style.backgroundColor = isDark?'rgb(0 0 0 /50%)':'rgb(255 255 255 /50%)';
  textBox.style.backgroundColor= isDark ?'rgb(255 255 255 /50%)': 'rgb(0 0 0 /50%)';
  toggleIcon.children[0].innerText=isDark ? "Dark Mode":"Light Mode";
  isDark ?
   toggleIcon.children[1].classList.replace('fa-sun','fa-moon')
  :toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
  changingImages(isDark ? 'dark' :'light');
 
}

function changingImages(color){
  image1.src= `img/undraw_conceptual_idea_${color}.svg`
  image2.src= `img/undraw_feeling_proud_${color}.svg`
  image3.src= `img/undraw_proud_coder_${color}.svg`
}
function saveTheme(mode){
localStorage.setItem('active_mode',mode);
}

// Switching the theme dynamically

function switchTheme(event){
   if(event.target.checked){
    saveTheme('dark');
       document.documentElement.setAttribute('data-theme','dark');
       toggleLightAndDark(true);
   }else{
    saveTheme('light');
    document.documentElement.setAttribute('data-theme','light');
    toggleLightAndDark(false);
 }
}
// Event Listener
toggleSwitch.addEventListener('change',switchTheme);

// check for the localStorage for the current theme
const currentTheme= localStorage.getItem('active_mode');
// if currentTheme exists
if(currentTheme){
  document.documentElement.setAttribute('data-theme',currentTheme);
  if(currentTheme==='dark'){
    toggleLightAndDark(true);
    toggleSwitch.checked=true;
  }

}