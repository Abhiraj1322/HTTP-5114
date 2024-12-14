// Monty Hall Game Logic
function playGame(userChoice) {
    const prizeDoor = Math.floor(Math.random() * 3) + 1;
    let montyReveals = 0;
  
    if (userChoice !== prizeDoor) {
      do {
        montyReveals = Math.floor(Math.random() * 3) + 1;
      } while (montyReveals === userChoice || montyReveals === prizeDoor);
    } else {
      do {
        montyReveals = Math.floor(Math.random() * 3) + 1;
      } while (montyReveals === userChoice);
    }
  
    const resultText = `
      You chose Door ${userChoice}.<br>
      Monty reveals Door ${montyReveals} which does not have the prize.<br>
      The prize is behind Door ${prizeDoor}.<br>
    `;
    const switchOption = `
      Do you want to switch your choice to Door ${6 - userChoice - montyReveals}?<br><br>
      <button class="btn" onclick="switchChoice(${userChoice}, ${prizeDoor}, ${montyReveals})">Yes, switch!</button>
      <button class="btn" onclick="stayChoice(${userChoice}, ${prizeDoor})">No, stay!</button>
    `;
  
    document.getElementById("resultMonty").innerHTML = resultText + switchOption;
  }
  
  function switchChoice(userChoice, prizeDoor, montyReveals) {
    const switchChoice = 6 - userChoice - montyReveals;
    const resultText = switchChoice === prizeDoor ? "You won!" : "You lost!";
    document.getElementById("resultMonty").innerHTML = `You switched to Door ${switchChoice}. ${resultText}`;
  }
  
  function stayChoice(userChoice, prizeDoor) {
    const resultText = userChoice === prizeDoor ? "You won!" : "You lost!";
    document.getElementById("resultMonty").innerHTML = `You stayed with Door ${userChoice}. ${resultText}`;
  }