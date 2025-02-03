let homePage = function (){
    let _content = document.getElementById('content');
    let _heading = document.createElement('h1');
    let _para1 = document.createElement('p');
    let _para2 = document.createElement('p');
    let _para3 = document.createElement('p');
    let _para4 = document.createElement('p');
    let _para5 = document.createElement('p');

    _heading.textContent = "Whisker & Spoon";
    _para1.textContent = "A fine dining experience like no other—crafted for cats, by cats.";
    _para2.textContent = "At Whisker & Spoon, we believe every kitty deserves more than just kibble and canned food. That’s why we’ve created a meow-chelin-worthy menu filled with fresh, gourmet flavors that will have your tail twitching with delight.";
    _para3.textContent = "From slow-baked salmon soufflés to delicately seared tuna tartare, each dish is prepared with purrfection in mind. Whether you're a kitten with a taste for the finer things or a seasoned mouser looking for a well-earned feast, we've got something for every whiskered guest.";
    _para4.textContent = "Sink your claws into something delicious.";
    _para5.textContent = "Reservations recommended — no hoomans allowed (unless serving).";

    _content.appendChild(_heading);
    _content.appendChild(_para1);
    _content.appendChild(_para2);
    _content.appendChild(_para3);
    _content.appendChild(_para4);
    _content.appendChild(_para5);
};

export {homePage};
