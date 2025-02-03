export let menuPage = (function(){
    let content = document.getElementById('content');
    let heading = document.createElement('h2');
    
    heading.textContent = "Menu";
    content.appendChild(heading);

    function getEntrees(){
        let entree = document.createElement('h3');
        let ent1 = document.createElement('p');
        let entPrice1 = document.createElement('span');
        let entDesc1 = document.createElement('p');
        let ent2 = document.createElement('p');
        let entPrice2 = document.createElement('span');
        let entDesc2 = document.createElement('p');
        let ent3 = document.createElement('p');
        let entPrice3 = document.createElement('span');
        let entDesc3 = document.createElement('p');

        entree.textContent = "Entrée";
        ent1.textContent = "Tuna Tartare-Tini";
        entPrice1.textContent = "2";
        entDesc1.textContent = "A purrfectly portioned tuna tartare served in a tiny dish.";
        ent2.textContent = "Mice Croquettes";
        entPrice2.textContent = "2";
        entDesc2.textContent = "No actual mice, just a crunchy treat shaped like one!";
        ent3.textContent = "Meowzers' Macarons";
        entPrice3.textContent = "3";
        entDesc3.textContent = "Savory salmon mousse sandwiched between delicate tuna crisps.";

        content.appendChild(entree);
        content.appendChild(ent1);
        ent1.appendChild(entPrice1);
        content.appendChild(entDesc1);
    }

    function getMains(){
        let main = document.createElement('h3');
        let main1 = document.createElement('h4');
        let mainPrice1 = document.createElement('span');
        let mainDesc1 = document.createElement('p');
        let main2 = document.createElement('h4');
        let mainPrice2 = document.createElement('span');
        let mainDesc2 = document.createElement('p');
        let main3 = document.createElement('h4');
        let mainPrice3 = document.createElement('span');
        let mainDesc3 = document.createElement('p');
        let main4 = document.createElement('h4');
        let mainPrice4 = document.createElement('span');
        let mainDesc4 = document.createElement('p');

    }

    function getDesserts(){
        let dessert = document.createElement('h3');
        let dess1 = document.createElement('h4');
        let dessPrice1 = document.createElement('span');
        let dessDesc1 = document.createElement('p');
        let dess2 = document.createElement('h4');
        let dessPrice2 = document.createElement('span');
        let dessDesc2 = document.createElement('p');  
        

    }

    function getDrinks(){
        let drinks = document.createElement('h3');
        let drink1 = document.createElement('h4');
        let drinkPrice1 = document.createElement('span');
        let drinkDesc1 = document.createElement('p');
        let drink2 = document.createElement('h4');
        let drinkPrice2 = document.createElement('span');
        let drinkDesc2 = document.createElement('p');    
    }



}());