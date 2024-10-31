//Button Function based on dice type
document.getElementById("rollButton").addEventListener("click", function () {
  const diceType = parseInt(document.getElementById("dice-select").value);

// Generate a number based on selected dice type
  const diceValue = Math.floor(Math.random() * diceType) + 1; 

// Displays the result
  document.getElementById("dice").textContent = diceValue; 

// Shows the result message
  document.getElementById("result").textContent = `You rolled a ${diceValue} on a d${diceType}!`; 
});
