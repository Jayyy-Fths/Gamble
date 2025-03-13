let symbols = ["Gojo", "Sukuna", "Megumi", "Yuji", "Nobara"];
let spinning = false;

document.getElementById("spinButton").addEventListener("click", function() {
    if (spinning) return;
    spinning = true;
    document.getElementById("message").textContent = "Spinning...";

    setTimeout(() => {
        let newReels = [
            symbols[Math.floor(Math.random() * symbols.length)],
            symbols[Math.floor(Math.random() * symbols.length)],
            symbols[Math.floor(Math.random() * symbols.length)]
        ];
        document.getElementById("reel1").textContent = newReels[0];
        document.getElementById("reel2").textContent = newReels[1];
        document.getElementById("reel3").textContent = newReels[2];

        document.getElementById("message").textContent =
            newReels[0] === newReels[1] && newReels[1] === newReels[2]
                ? "🎉 JACKPOT! You win! 🎰"
                : "Try Again! 🔄";

        spinning = false;
    }, 3000);
});

// Add new names to the slot machine's symbols list
document.getElementById("nameInput").addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        let newName = event.target.value.trim();
        if (newName && !symbols.includes(newName)) {
            symbols.push(newName);
            let li = document.createElement("li");
            li.textContent = newName;
            document.getElementById("nameList").appendChild(li);
            event.target.value = '';  // Clear input field
        }
    }
});
