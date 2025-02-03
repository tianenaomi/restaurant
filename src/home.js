export let initialPageLoad = (function (){
    let content = document.getElementById('content');
    let heading = document.createElement('h1');
    let para1 = document.createElement('p');
    let para2 = document.createElement('p');
    let para3 = document.createElement('p');
    let para4 = document.createElement('p');
    let para5 = document.createElement('p');

    heading.textContent = "Whisker & Spoon";
    para1.textContent = "A fine dining experience like no other—crafted for cats, by cats.";
    para2.textContent = "At Whisker & Spoon, we believe every kitty deserves more than just kibble and canned food. That’s why we’ve created a meow-chelin-worthy menu filled with fresh, gourmet flavors that will have your tail twitching with delight.";
    para3.textContent = "From slow-baked salmon soufflés to delicately seared tuna tartare, each dish is prepared with purrfection in mind. Whether you're a kitten with a taste for the finer things or a seasoned mouser looking for a well-earned feast, we've got something for every whiskered guest.";
    para4.textContent = "Sink your claws into something delicious.";
    para5.textContent = "Reservations recommended — no hoomans allowed (unless serving).";

    content.appendChild(heading);
    content.appendChild(para1);
    content.appendChild(para2);
    content.appendChild(para3);
    content.appendChild(para4);
    content.appendChild(para5);
}());
