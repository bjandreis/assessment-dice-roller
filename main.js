// buttons for determining the dice size.
fourSides = document.querySelector("#dice-4s")
sixSides = document.querySelector("#dice-6s")
eightSides = document.querySelector("#dice-8s")
tenSides = document.querySelector("#dice-10s")
twelveSides = document.querySelector("#dice-12s")
twentySides = document.querySelector("#dice-20s")
diceSidesMessage = document.querySelector("#dice-sides-message")

let diceSides = 6

// buttons for rolling, showing all rolls and resetting.
userInput = document.querySelector("#user-input")
rollButton = document.querySelector("#user-input-button")
showAllRollsButton = document.querySelector("#show-all-rolls-button")
resetButton = document.querySelector("#reset-button")

let roll = 0

// variables for displaying information on the screen.
message = document.querySelector("#message")
sumOfRolls = document.querySelector("#sum-of-rolls")
rollList = document.querySelector("#roll-list")

// variables for keeping track of data.
let rollHistory = []
let updateIndex = 0
let rollCount = 0
let rollSum = 0

// These buttons allow the user to change the size of the dice.
fourSides.addEventListener("click", function() {
    if (diceSides === 4) {
        diceSidesMessage.innerHTML = "<p style=\"color:yellow\">You're already using a 4 sided dice.</p>The current dice has " + diceSides + " sides."
    } else if (updateIndex === rollHistory.length)  {
        diceSides = 4
        diceSidesMessage.innerHTML = "<p style=\"color:lightgreen\">Dice successfully changed to 4 sides.</p>The current dice has " + diceSides + " sides."
    } else {
        diceSidesMessage.innerHTML = "<p style=\"color:red\">You must press 'Show All Rolls' before changing dice size.</p>The current dice has " + diceSides + " sides."
    }
})
sixSides.addEventListener("click", function() {
    if (diceSides === 6) {
        diceSidesMessage.innerHTML = "<p style=\"color:yellow\">You're already using a 6 sided dice.</p>The current dice has " + diceSides + " sides."
    } else if (updateIndex === rollHistory.length)  {
        diceSides = 6
        diceSidesMessage.innerHTML = "<p style=\"color:lightgreen\">Dice successfully changed to 6 sides.</p>The current dice has " + diceSides + " sides."
    } else {
        diceSidesMessage.innerHTML = "<p style=\"color:red\">You must press 'Show All Rolls' before changing dice size.</p>The current dice has " + diceSides + " sides."
    }
})
eightSides.addEventListener("click", function() {
    if (diceSides === 8) {
        diceSidesMessage.innerHTML = "<p style=\"color:yellow\">You're already using a 8 sided dice.</p>The current dice has " + diceSides + " sides."
    } else if (updateIndex === rollHistory.length)  {
        diceSides = 8
        diceSidesMessage.innerHTML = "<p style=\"color:lightgreen\">Dice successfully changed to 8 sides.</p>The current dice has " + diceSides + " sides."
    } else {
        diceSidesMessage.innerHTML = "<p style=\"color:red\">You must press 'Show All Rolls' before changing dice size.</p>The current dice has " + diceSides + " sides."
    }
})
tenSides.addEventListener("click", function() {
    if (diceSides === 10) {
        diceSidesMessage.innerHTML = "<p style=\"color:yellow\">You're already using a 10 sided dice.</p>The current dice has " + diceSides + " sides."
    } else if (updateIndex === rollHistory.length)  {
        diceSides = 10
        diceSidesMessage.innerHTML = "<p style=\"color:lightgreen\">Dice successfully changed to 10 sides.</p>The current dice has " + diceSides + " sides."
    } else {
        diceSidesMessage.innerHTML = "<p style=\"color:red\">You must press 'Show All Rolls' before changing dice size.</p>The current dice has " + diceSides + " sides."
    }
})
twelveSides.addEventListener("click", function() {
    if (diceSides === 12) {
        diceSidesMessage.innerHTML = "<p style=\"color:yellow\">You're already using a 12 sided dice.</p>The current dice has " + diceSides + " sides."
    } else if (updateIndex === rollHistory.length)  {
        diceSides = 12
        diceSidesMessage.innerHTML = "<p style=\"color:lightgreen\">Dice successfully changed to 12 sides.</p>The current dice has " + diceSides + " sides."
    } else {
        diceSidesMessage.innerHTML = "<p style=\"color:red\">You must press 'Show All Rolls' before changing dice size.</p>The current dice has " + diceSides + " sides."
    }
})
twentySides.addEventListener("click", function() {
    if (diceSides === 20) {
        diceSidesMessage.innerHTML = "<p style=\"color:yellow\">You're already using a 20 sided dice.</p>The current dice has " + diceSides + " sides."
    } else if (updateIndex === rollHistory.length)  {
        diceSides = 20
        diceSidesMessage.innerHTML = "<p style=\"color:lightgreen\">Dice successfully changed to 20 sides.</p>The current dice has " + diceSides + " sides."
    } else {
        diceSidesMessage.innerHTML = "<p style=\"color:red\">You must press 'Show All Rolls' before changing dice size.</p>The current dice has " + diceSides + " sides."
    }
})

// This button will cause the user to roll a set number of times determined by their text input.
rollButton.addEventListener("click", function() {
    
    rollCount = parseInt(userInput.value)
    if (isNaN(rollCount)) {
        console.log("User input was invalid.")
        message.innerText = "That is not a valid input. Please enter a number instead."
    } else {
        console.log("User rolls " + userInput.value + " time(s).")
        message.innerText = "You roll " + userInput.value + " time(s). Enter a number to roll again."
        
        while (rollCount > 0) {
            roll = Math.floor(Math.random() * diceSides) + 1
            rollHistory.push(roll)
            rollCount--
        }

        rollSum = rollHistory.reduce(function(a, b) {
            return a + b
        }, 0)
        sumOfRolls.innerText = "The sum of rolls is " + rollSum
        console.log(rollHistory)
    }
})

// This button will update and show a history of all of the user's rolls.
showAllRollsButton.addEventListener("click", function() {
    if (diceSides === 4) {
        while (updateIndex < rollHistory.length) {
            rollList.innerHTML += "<li>&nbsp;<img src=\".\/images\/blank_4.png\" style=\"width:48px;height:48px;\">&nbsp;" + rollHistory[updateIndex] + "</li>"
            updateIndex++
        }
    } else if (diceSides === 6) {
        while (updateIndex < rollHistory.length) {
            rollList.innerHTML += "<li>&nbsp;<img src=\".\/images\/blank_6.png\" style=\"width:48px;height:48px;\">&nbsp;" + rollHistory[updateIndex] + "</li>"
            updateIndex++
        }
    } else if (diceSides === 8) {
        while (updateIndex < rollHistory.length) {
            rollList.innerHTML += "<li>&nbsp;<img src=\".\/images\/blank_8.png\" style=\"width:48px;height:54px;\">&nbsp;" + rollHistory[updateIndex] + "</li>"
            updateIndex++
        }
    } else if (diceSides === 10) {
        while (updateIndex < rollHistory.length) {
            rollList.innerHTML += "<li>&nbsp;<img src=\".\/images\/blank_10.png\" style=\"width:48px;height:48px;\">&nbsp;" + rollHistory[updateIndex] + "</li>"
            updateIndex++
        }
    } else if (diceSides === 12) {
        while (updateIndex < rollHistory.length) {
            rollList.innerHTML += "<li>&nbsp;<img src=\".\/images\/blank_12.png\" style=\"width:48px;height:54px;\">&nbsp;" + rollHistory[updateIndex] + "</li>"
            updateIndex++
        }
    } else if (diceSides === 20) {
        while (updateIndex < rollHistory.length) {
            rollList.innerHTML += "<li>&nbsp;<img src=\".\/images\/blank_20.png\" style=\"width:48px;height:54px;\">&nbsp;" + rollHistory[updateIndex] + "</li>"
            updateIndex++
        }
    } else {
        message.innerText = "ERROR: Undefined dice size."
    }

    updateIndex = rollHistory.length
})

// This button will reset everything.
resetButton.addEventListener("click", function() {
    roll = 0
    rollHistory = []
    updateIndex = 0
    rollCount = 0
    rollSum = 0

    message.innerHTML = "Rolls have been reset. Enter a number."
    sumOfRolls.innerText = ""
    rollList.innerHTML = ""
})