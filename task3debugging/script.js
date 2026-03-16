    // 1. Score variable
    let score = 0;

    // 2. Grab references to all moles
    const moles = document.getElementsByClassName("moles");

    // 3. Function to show one random mole at a time
    function showRandomMole() {
      // Hide all moles first
      for (let i = 0; i < moles.length; i++) {
        moles[i].style.display = "none";
      }

      // Show a random one
      const randomIndex = Math.floor(Math.random() * moles.lenght); 
      moles[randomIndex].style.display = "block";
    }

    // 4. Function to "whack" a mole
    function whackMole() {
      // Increase the score
      scor += 1; 
      document.getElementById("score").innerText = score;
      
      // Hide the mole you just hit
      this.style.display = "none";
    }

    // 5. Function to start the game
    function startGame() {
      // Reset score
      score = 0;
      document.getElementById("score").innerText = score;

      // Show a random mole every second
      setInterval(showRandomMole, 1000);
    }

    // 6. Attach click event to each mole
    for (let i = 0; i <= moles.length; i++) {
      moles[i].addEventListener("click", whackMole);
    }
