let listar = document.getElementById('listarea');
let item = document.querySelector('input[type="text"]');
let addtolist = document.getElementById('add');

// Create a <ul> element outside the event listener so it is only created once
let itemlist = document.createElement("ul");
itemlist.className = 'itemlist';

listar.appendChild(itemlist);  // Append the <ul> to the div (or listarea)


addtolist.addEventListener('click', function () {
    let itemValue = item.value.trim();

    if (itemValue === "") {
        alert("Please enter a task!");
    } else {

        // Create a new <li> element
        let li = document.createElement("li");
        li.className = 'li';

        // Append the <li> to the <ul>
        itemlist.appendChild(li);

        //create divs for separating list content and remove button
        let li_div = document.createElement("div");
        li_div.className = 'li_div';
        li_div.innerHTML = itemValue;  // Set the content of the <li> to the input value

        li.appendChild(li_div);

        let remove_div = document.createElement("div");
        remove_div.className = 'remove_div';

        li.appendChild(remove_div);

        // Optionally clear the input after adding the item
        item.value = "";

        // Create a remove <button> outside the event listener so its only created once
        let remove = document.createElement("button");
        remove.textContent = 'Remove' // Sets the button label
        remove.className = 'removebtn'

        // Removes the added list item for the ul 
        remove.addEventListener('click', function () {
            itemlist.removeChild(li);
        });

        // Append remove button into li
        remove_div.appendChild(remove);
    }
});

//backgroundtheme variable craetion
let backgroundtheme = '';

// making toggle of te themes and changing the background images

document.getElementById('default').addEventListener('click', () => {
    alert('Default Theme clicked!');
    backgroundtheme = "https://i.ytimg.com/vi/EjLKIeqDmXU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBdoBg8A1TwSODYH3P3RSKOMvELRg";
    document.body.style.backgroundImage = `url('${backgroundtheme}')`;
    document.body.style.backgroundSize = "cover"; // Optional, to make sure image covers the full screen
});
document.getElementById('theme1').addEventListener('click', () => {
    alert('Nature Theme clicked!');
    backgroundtheme = "https://marketplace.canva.com/EAGDYZWPJyc/1/0/1600w/canva-green-and-yellow-simple-nature-lake-desktop-wallpaper-oO_xIwyw0KM.jpg";
    document.body.style.backgroundImage = `url('${backgroundtheme}')`;
    document.body.style.backgroundSize = "cover"; // Optional, to make sure image covers the full screen
});
document.getElementById('theme2').addEventListener('click', () => {
    alert('Love Theme clicked!');
    backgroundtheme = "https://png.pngtree.com/thumb_back/fh260/background/20230208/pngtree-heart-background-in-orange-symbol-of-love-romantic-and-valentine-concept-image_1541546.jpg";
     document.body.style.backgroundImage = `url('${backgroundtheme}')`;
    document.body.style.backgroundSize = "cover"; // Optional, to make sure image covers the full screen
});
document.getElementById('theme3').addEventListener('click', () => {
    alert('Gym theme clicked!');
    backgroundtheme = "https://png.pngtree.com/thumb_back/fh260/background/20240329/pngtree-rows-of-dumbbells-in-the-gym-image_15662386.jpg";
   document.body.style.backgroundImage = `url('${backgroundtheme}')`;
    document.body.style.backgroundSize = "cover"; // Optional, to make sure image covers the full screen
});

// Function to send data to mylist.html
function sendData() {
    const content = encodeURIComponent(document.getElementById('listarea').innerHTML);
    // send background theme as well
    const backdrop = encodeURIComponent(backgroundtheme);
    window.location.href = `mylist.html?data=${content}&bg=${backdrop}`;
}
