import "./style.css";
import InitialPageLoad from "./about";
import RenderContact from "./contact";
import RenderMenu from "./menu";
LoadNavigationBar();
InitialPageLoad();

function LoadNavigationBar(){
    const content=document.querySelector('#content');
    
    const nav=document.createElement('div');
    nav.classList.add('nav');
    
    const logo=document.createElement('div');
    logo.classList.add('logo');
    logo.innerHTML='Momos House';
    nav.appendChild(logo);
    
    const navItems=document.createElement('ul');
    navItems.classList.add('navItems');
    const listItems=['About','Menu','Contact'];
    for(let i=0;i<3;i++){
        const navItem=document.createElement('li');
        navItem.setAttribute('id',listItems[i]);
        navItem.innerHTML=listItems[i];
        navItems.appendChild(navItem);
    }
    nav.appendChild(navItems);
    content.appendChild(nav);
}

function RenderAbout(e){
    const content=document.querySelector('#content');
    const main=document.querySelector('.main');
    content.removeChild(main);
    InitialPageLoad();
}


const about=document.querySelector('#About');
about.addEventListener('click', RenderAbout);

const menu=document.querySelector('#Menu');
menu.addEventListener('click', RenderMenu);

const contact=document.querySelector('#Contact');
contact.addEventListener('click', RenderContact);
