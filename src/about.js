export let aboutPage = (function(){
    let content = document.getElementById('content');
    let heading = document.createElement('h2');
    let para1 = document.createElement('p');
    let para2 = document.createElement('p');
    let para3 = documentl.createElement('p');
    let para4 = document.createElement('p');
    let para5 = document.createElement('p');

    heading.textContent = "About Whisker & Spoon";
    para1.textContent = "Once upon a meow, two ambitious felines set out to change the world of fine dining.";
    para2.textContent = "Rupurrt, a seasoned food connoisseur with a deep love for culinary adventures, spent years taste-testing every meal his humans put in front of him (and a few they didn’t). Dissatisfied with the lack of truly gourmet options for cats, he knew something had to change.";
    para3.textContent = "Enter Purrscilla, a young and fearless chef with a talent for blending flavors and an eye for presentation. From the moment she batted her first tuna tartare into pawfection, Rupurrt knew he had found the purrfect partner.";
    para4.textContent = "Together, they founded Whisker & Spoon, a restaurant dedicated to redefining feline fine dining. Their mission? To bring fresh, high-quality ingredients, expertly crafted recipes, and a luxurious dining experience to every cat with a refined palate.";
    para5.textContent = "Now serving only the most distinguished whiskered guests.";

    content.appendChild(heading);
    content.appendChild(para1);
    content.appendChild(para2);
    content.appendChild(para3);
    content.appendChild(para4);
    content.appendChild(para5);
}());