const applyCells = function () {
  for (i = 0; i < 6; i++) {
    const boardFolder = document.createElement("div")
    boardFolder.classList.add("board-folder")
    let number = 0
    let c = 0
    switch (i) {
      case 0:
      case 1:
        c = 0
        break
      case 2:
      case 3:
        c = 3
        break
      case 4:
      case 5:
        c = 6
        break
    }
    if (i % 2 === 0) {
      for (b = c; b < c + 3; b++) {
        for (a = 0; a < 5; a++) {
          number = b * 10 + a + 1
          const boardCell = document.createElement("div")
          boardCell.classList.add("board-cell")
          boardCell.setAttribute("id", `cell-number-${number}`)
          const boardCellNumber = document.createElement("h3")
          boardCellNumber.innerText = number
          boardCell.appendChild(boardCellNumber)
          boardFolder.appendChild(boardCell)
          document.getElementById("board-div").appendChild(boardFolder)
        }
      }
    } else {
      for (b = c; b < c + 3; b++) {
        for (a = 5; a < 10; a++) {
          number = b * 10 + a + 1
          const boardCell = document.createElement("div")
          boardCell.classList.add("board-cell")
          boardCell.setAttribute("id", `cell-number-${number}`)
          const boardCellNumber = document.createElement("h3")
          boardCellNumber.innerText = number
          boardCell.appendChild(boardCellNumber)
          boardFolder.appendChild(boardCell)
          document.getElementById("board-div").appendChild(boardFolder)
        }
      }
    }
  }
}

applyCells()

// funzione per numero random da 1 a 90
const randomNumber = function () {
  let number = Math.ceil(Math.random() * 90)
  return number
}

console.log(randomNumber())

const numeriUsciti = []

const newNumber = function () {
  let number = randomNumber()
  for (i = 0; i < numeriUsciti.length; i++) {
    if (number === numeriUsciti[i]) {
      number = randomNumber()
      i = 0
    }
  }
  numeriUsciti.push(number)
  document.getElementById(`cell-number-${number}`).classList.add("numeroUscito")
}
