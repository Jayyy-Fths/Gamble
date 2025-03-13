// Initialize an empty array to store names
let namesArray = [];

// Add an event listener to the "Add Name" button
document.getElementById('addNameButton').addEventListener('click', function() {
    // Get the value from the input box
    let name = document.getElementById('nameInput').value.trim();
    
    // Check if the input is not empty
    if (name) {
        // Add the name to the namesArray
        namesArray.push(name);
        
        // Create a list item to display the name in the list
        let li = document.createElement('li');
        li.textContent = name;
        li.classList.add('list-group-item');
        
        // Append the new list item to the nameList
        document.getElementById('nameList').appendChild(li);
        
        // Clear the input field after adding the name
        document.getElementById('nameInput').value = '';
    }
});

// Add an event listener to the "Select Random Name" button
document.getElementById('selectRandomButton').addEventListener('click', function() {
    // Check if the namesArray is empty
    if (namesArray.length > 0) {
        // Get a random index from the array
        let randomIndex = Math.floor(Math.random() * namesArray.length);
        
        // Select the name at the random index
        let selectedName = namesArray[randomIndex];
        
        // Display the selected name in the 'randomName' div
        document.getElementById('randomName').textContent = selectedName;
        
        // Remove the selected name from the array
        namesArray.splice(randomIndex, 1);
        
        // Optional: You can also remove the name from the displayed list
        let listItems = document.getElementById('nameList').getElementsByTagName('li');
        for (let item of listItems) {
            if (item.textContent === selectedName) {
                item.remove();
                break;
            }
        }
    } else {
        // If no names are left in the list, show a message
        document.getElementById('randomName').textContent = 'No names left!';
    }
});

