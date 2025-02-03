import './style.css';
import {homePage} from './home.js';
import {aboutPage} from './about.js';
import {menuPage} from './menu.js';

// alert('meow meow!');

let screenController = (function(){
    let _content = document.getElementById('content');
    let _home = document.querySelector('nav :first-child');
    let _menu = document.querySelector('nav :nth-child(2)');
    let _about = document.querySelector('nav :nth-child(3)');

    homePage();

    function clearContent(){
        while (_content.firstChild){
            _content.firstChild.remove();
        }
    }

    _home.addEventListener('click', () => {
        clearContent();
        homePage();
    });

    _menu.addEventListener('click', () => {
        clearContent();
        menuPage();
    });

    _about.addEventListener('click', () => {
        clearContent();
        aboutPage();
    });

}());

/*
        POUR MOI POUR LE MARDI
========================================

*/