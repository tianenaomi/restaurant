let menuPage = function(){
    let _content = document.getElementById('content');
    
    function getHeading() {
        let _heading = document.createElement('h2');
        _heading.textContent = "Menu";
        _content.appendChild(_heading);
    };

    function getEntrees(){
        let _entree = document.createElement('h3');
        let _ent1 = document.createElement('h4');
        let _entPrice1 = document.createElement('span');
        let _entDesc1 = document.createElement('p');
        let _ent2 = document.createElement('h4');
        let _entPrice2 = document.createElement('span');
        let _entDesc2 = document.createElement('p');
        let _ent3 = document.createElement('h4');
        let _entPrice3 = document.createElement('span');
        let _entDesc3 = document.createElement('p');

        _entree.textContent = "Entrée";
        _ent1.textContent = "Tuna Tartare-Tini";
        _entPrice1.textContent = "2";
        _entDesc1.textContent = "A purrfectly portioned tuna tartare served in a tiny dish.";
        _ent2.textContent = "Mice Croquettes";
        _entPrice2.textContent = "2";
        _entDesc2.textContent = "No actual mice, just a crunchy treat shaped like one!";
        _ent3.textContent = "Meowzers' Macarons";
        _entPrice3.textContent = "3";
        _entDesc3.textContent = "Savory salmon mousse sandwiched between delicate tuna crisps.";

        _content.appendChild(_entree);

        _content.appendChild(_ent1);
        _ent1.appendChild(_entPrice1);
        _content.appendChild(_entDesc1);

        _content.appendChild(_ent2);
        _ent2.appendChild(_entPrice2);
        _content.appendChild(_entDesc2);

        _content.appendChild(_ent3);
        _ent3.appendChild(_entPrice3);
        _content.appendChild(_entDesc3);
    }

    function getMains(){
        let _main = document.createElement('h3');
        let _main1 = document.createElement('h4');
        let _mainPrice1 = document.createElement('span');
        let _mainDesc1 = document.createElement('p');
        let _main2 = document.createElement('h4');
        let _mainPrice2 = document.createElement('span');
        let _mainDesc2 = document.createElement('p');
        let _main3 = document.createElement('h4');
        let _mainPrice3 = document.createElement('span');
        let _mainDesc3 = document.createElement('p');
        let _main4 = document.createElement('h4');
        let _mainPrice4 = document.createElement('span');
        let _mainDesc4 = document.createElement('p');

        _main.textContent = "Main";
        _main1.textContent = "The Fancy Feast Platter";
        _mainPrice1.textContent = "5";
        _mainDesc1.textContent = "A deluxe selection of the freshest salmon, chicken, and turkey.";
        _main2.textContent = "Meowssaka";
        _mainPrice2.textContent = "4";
        _mainDesc2.textContent = "Layers of tuna, eggplant, and creamy béchamel.";
        _main3.textContent = "Pawsta alla Napawlitana";
        _mainPrice3.textContent = "4";
        _mainDesc3.textContent = "Homemade catnip-infused noodles with a rich sardine sauce.";
        _main4.textContent = "Claw-some Curry";
        _mainPrice4.textContent = "7";
        _mainDesc4.textContent = "A mild and comforting pumpkin and crab blend.";

        _content.appendChild(_main);
        _content.appendChild(_main1);
        _main1.appendChild(_mainPrice1);
        _content.appendChild(_mainDesc1);

        _content.appendChild(_main2);
        _main2.appendChild(_mainPrice2);
        _content.appendChild(_mainDesc2);

        _content.appendChild(_main3);
        _main3.appendChild(_mainPrice3);
        _content.appendChild(_mainDesc3);

        _content.appendChild(_main4);
        _main4.appendChild(_mainPrice4);
        _content.appendChild(_mainDesc4);
    }

    function getDesserts(){
        let _dessert = document.createElement('h3');
        let _dess1 = document.createElement('h4');
        let _dessPrice1 = document.createElement('span');
        let _dessDesc1 = document.createElement('p');
        let _dess2 = document.createElement('h4');
        let _dessPrice2 = document.createElement('span');
        let _dessDesc2 = document.createElement('p');  
        
        _dessert.textContent = "Dessert";
        _dess1.textContent = "Pawffles";
        _dessPrice1.textContent = "2";
        _dessDesc1.textContent = "Crispy fish-shaped waffles drizzled with creamy yogurt.";
        _dess2.textContent = "Whisker Whip Mousse";
        _dessPrice2.textContent = "2";
        _dessDesc2.textContent = "A fluffy, fishy delight topped with a sprig of catnip.";

        _content.appendChild(_dessert);
        _content.appendChild(_dess1);
        _dess1.appendChild(_dessPrice1);
        _content.appendChild(_dessDesc1);
        _content.appendChild(_dess2);
        _dess2.appendChild(_dessPrice2);
        _content.appendChild(_dessDesc2);
    }

    function getDrinks(){
        let _drinks = document.createElement('h3');
        let _drink1 = document.createElement('h4');
        let _drinkPrice1 = document.createElement('span');
        let _drinkDesc1 = document.createElement('p');
        let _drink2 = document.createElement('h4');
        let _drinkPrice2 = document.createElement('span');
        let _drinkDesc2 = document.createElement('p');    

        _drinks.textContent = "Drinks";
        _drink1.textContent = "Catpuccino";
        _drinkPrice1.textContent = "1";
        _drinkDesc1.textContent = "Frothy, warm bone broth with a sprinkle of powdered chicken.";
        _drink2.textContent = "Meowmosa";
        _drinkPrice2.textContent = "1";
        _drinkDesc2.textContent = "A bubbly blend of fish broth and goat’s milk, garnished with a sprig of catnip.";

        _content.appendChild(_drinks);
        _content.appendChild(_drink1);
        _drink1.appendChild(_drinkPrice1);
        _content.appendChild(_drinkDesc1);
        _content.appendChild(_drink2);
        _drink2.appendChild(_drinkPrice2);
        _content.appendChild(_drinkDesc2);
    }

    getHeading();
    getEntrees();
    getMains();
    getDesserts();
    getDrinks();
};

export {menuPage};