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

        content.appendChild(ent2);
        ent2.appendChild(entPrice2);
        content.appendChild(entDesc2);

        content.appendChild(ent3);
        ent3.appendChild(entPrice3);
        content.appendChild(entDesc3);
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

        main.textContent = "Main";
        main1.textContent = "The Fancy Feast Platter";
        mainPrice1.textContent = "5";
        mainDesc1.textContent = "A deluxe selection of the freshest salmon, chicken, and turkey.";
        main2.textContent = "Meowssaka";
        mainPrice2.textContent = "4";
        mainDesc2.textContent = "Layers of tuna, eggplant, and creamy béchamel.";
        main3.textContent = "Pawsta alla Napawlitana";
        mainPrice3.textContent = "4";
        mainDesc3.textContent = "Homemade catnip-infused noodles with a rich sardine sauce.";
        main4.textContent = "Claw-some Curry";
        mainPrice4.textContent = "7";
        mainDesc4.textContent = "A mild and comforting pumpkin and crab blend.";

        content.appendChild(main);
        content.appendChild(main1);
        main1.appendChild(mainPrice1);
        content.appendChild(mainDesc1);

        content.appendChild(main2);
        main2.appendChild(mainPrice2);
        content.appendChild(mainDesc2);

        content.appendChild(main3);
        main3.appendChild(mainPrice3);
        content.appendChild(mainDesc3);

        content.appendChild(main4);
        main4.appendChild(mainPrice4);
        content.appendChild(mainDesc4);
    }

    function getDesserts(){
        let dessert = document.createElement('h3');
        let dess1 = document.createElement('h4');
        let dessPrice1 = document.createElement('span');
        let dessDesc1 = document.createElement('p');
        let dess2 = document.createElement('h4');
        let dessPrice2 = document.createElement('span');
        let dessDesc2 = document.createElement('p');  
        
        dessert.textContent = "Dessert";
        dess1.textContent = "Pawffles";
        dessPrice1.textContent = "2";
        dessDesc1.textContent = "Crispy fish-shaped waffles drizzled with creamy yogurt.";
        dess2.textContent = "Whisker Whip Mousse";
        dessPrice2.textContent = "2";
        dessDesc2.textContent = "A fluffy, fishy delight topped with a sprig of catnip.";

        content.appendChild(dessert);
        content.appendChild(dess1);
        dess1.appendChild(dessPrice1);
        content.appendChild(dessDesc1);
        content.appendChild(dess2);
        dess2.appendChild(dessPrice2);
        content.appendChild(dessDesc2);
    }

    function getDrinks(){
        let drinks = document.createElement('h3');
        let drink1 = document.createElement('h4');
        let drinkPrice1 = document.createElement('span');
        let drinkDesc1 = document.createElement('p');
        let drink2 = document.createElement('h4');
        let drinkPrice2 = document.createElement('span');
        let drinkDesc2 = document.createElement('p');    

        drinks.textContent = "Drinks";
        drink1.textContent = "Catpuccino";
        drinkPrice1.textContent = "1";
        drinkDesc1.textContent = "Frothy, warm bone broth with a sprinkle of powdered chicken.";
        drink2.textContent = "Meowmosa";
        drinkPrice2.textContent = "1";
        drinkDesc2.textContent = "A bubbly blend of fish broth and goat’s milk, garnished with a sprig of catnip.";

        content.appendChild(drinks);
        content.appendChild(drink1);
        drink1.appendChild(drinkPrice1);
        content.appendChild(drinkDesc1);
        content.appendChild(drink2);
        drink2.appendChild(drinkPrice2);
        content.appendChild(drinkDesc2);
    }

    return {
        getEntrees,
        getMains,
        getDesserts,
        getDrinks
    }

}());