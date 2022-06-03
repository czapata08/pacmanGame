


//Set grid with in JS file and bring scoreDisplay to javascript
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container')
    const scoreDisplay = document.getElementById('score')
    const width = 28; //28 * 28 = 784 squares
    let score = 0; 

    /*let pacImages = [
        [PacmanImages/PacMan1.png, PacmanImages/PacMan2.png]//Right 
        [PacmanImages/PacMan3.png, PacmanImages/PacMan4.png]//Left 
        [PacmanImages/pacman5.png, PacmanImages/pacMan6.png]//Down 
        [PacmanImages/pacman7.png, PacmanImages/PacMan8.png]//Up
    ]*/
    

    //grid layout inside array
    const layout=[ 
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
        4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
        1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
        1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
      ]
      // 0 - pac-dots
      // 1 - wall
      // 2 - ghost-lair
      // 3 - power-pellet
      // 4 - empty

      const squares =[];

      //draw grid and render it 
      function createBoard() {
          for (let i=0; i< layout.length; i++) {
              const square = document.createElement('div')
              container.appendChild(square)
              squares.push(square)

              //add layout to the board //assing functionality of each number
                if(layout [i] === 0) {
                    squares[i].classList.add('pac-dot')
                } else if (layout[i] === 1) {
                    squares[i].classList.add('wall')
                } else if (layout[i] === 2) {
                    squares[i].classList.add('ghost-lair')
                } else if (layout[i] === 3) {
                    squares[i].classList.add('power-pellet')
                } else if (layout[i] === 4) {
                    squares[i].classList.add('empty')
                }
          }
        }
        createBoard();

//start pacman at a index in the square array
let pacmanCurrentIndex = 490;
//add pacman to the square array and the DOM 
squares[pacmanCurrentIndex].classList.add('.pac-man')


const PacMan1 = document.querySelector('pac-man');

function movePacman(e) {

    squares[pacmanCurrentIndex].classList.remove('pac-man')
  
    /*
   width allows pacman to go up by substracting and down by addition of itself
    */



    switch(e.keyCode) {
        //left arrow in key board
        case 37:
            if(pacmanCurrentIndex % width !== 0 && 
                !squares[pacmanCurrentIndex -1].classList.contains('wall') &&
                !squares[pacmanCurrentIndex -1].classList.contains('ghost-lair')) 
                pacmanCurrentIndex -=1;
                if(pacmanCurrentIndex -1 === 363) pacmanCurrentIndex = 391
            break
        //up arrow
        case 38:
            if(pacmanCurrentIndex - width >= 0 &&
                 !squares[pacmanCurrentIndex -width].classList.contains('wall') &&
                 !squares[pacmanCurrentIndex -width].classList.contains('ghost-lair')) pacmanCurrentIndex -=width
            break 
            case 39:
        //right arrow
        case 39: 
        if(pacmanCurrentIndex % width < width - 1  && 
           !squares[pacmanCurrentIndex +1].classList.contains('wall')) pacmanCurrentIndex +=1
           if(pacmanCurrentIndex +1 === 392) pacmanCurrentIndex = 364
        break
        //down arrow
        case 40:
            if(pacmanCurrentIndex + width < width * width &&
                 !squares[pacmanCurrentIndex +width].classList.contains('wall') &&
                 !squares[pacmanCurrentIndex +width].classList.contains('ghost-lair')) pacmanCurrentIndex +=width;
                 break
    }

    
    squares[pacmanCurrentIndex].classList.add('pac-man')
    pacDotEaten()
    powerPelletEaten()
    checkGameOver()
    checkForwin()
}
//Add function to DOM -- keyup is built in function for: 
document.addEventListener('keyup', movePacman)

//if pacman index === dot add 1 to the score 
//display score in dom tag score
//remove dot from the grid

function pacDotEaten() {
    if(squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
        score++
        scoreDisplay.innerHTML = score;
        squares[pacmanCurrentIndex].classList.remove('pac-dot')
    }
}

//create Ghost dynamically by creating a class Object that serves as a template 
class Ghost{
    constructor(className, startIndex, speed) {
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex
        this.timerId = NaN
        this.isScared = false;

    }
}
ghosts = [
new Ghost('blinky', 348, 250),
new Ghost('pinky', 376, 400),
new Ghost('inky', 351, 300),
new Ghost('clyde', 379, 500)
]

//draw ghost onto the grid for ea item in ghost array 
ghosts.forEach(ghost => {
    squares[ghost.currentIndex].classList.add(ghost.className)
    squares[ghost.currentIndex].classList.add('ghost')
});


//set all ghost to move randomly 
ghosts.forEach(ghost => moveGhost(ghost))

//move ghosts dynamically thru the grid 
function moveGhost(ghost) {
    const directions = [-1, +1, width, -width]
    let direction = directions[Math.floor(Math.random() * directions.length)]
    
    ghost.timerId = setInterval(function() {
        //if direction contains wall or ghost, ghost can move in that direction
        if(!squares[ghost.currentIndex + direction].classList.contains('wall') && 
        !squares[ghost.currentIndex + direction].classList.contains('ghost')) {
            // remove all ghost related classes
            squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
            //change the currentindex to the new direction 
            ghost.currentIndex += direction
            //display ghost in the new direction 
            squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
        } else 
        //else find new direction 
        direction = directions[Math.floor(Math.random() * directions.length)]
        
        //if power pellet is eaten turn ghost to cyan 
        if (ghost.isScared) {
            squares[ghost.currentIndex].classList.add('scared-ghost')
        }

        //if ghosts is scared and pacman runs into it
        if(ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')) {
            squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
            ghost.currentIndex = ghost.startIndex
            score += 100
            squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
        }
        checkGameOver()
        checkForWin()
        
    }, ghost.speed)
}

//check game-over 
function checkGameOver() {
    if (squares[pacmanCurrentIndex].classList.contains('ghost') &&
      !squares[pacmanCurrentIndex].classList.contains('scared-ghost')) {
      ghosts.forEach(ghost => clearInterval(ghost.timerId))
      document.removeEventListener('keyup', movePacman)
      scoreDisplay.innerHTML = "YOU LOOSE"
    }
  }

//check for a win 
function checkForWin() {
    if (score >= 274) {
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        document.removeEventListener('keyup', movePacman)
        scoreDisplay.innerHTML = 'WINNER'
    }
}
//power pelletEaten
function powerPelletEaten(){
    if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
        score +=10;
        ghosts.forEach(ghost => ghost.isScared = true)
        //scare for 10 seconds 
        setTimeout(unScaredGhosts, 10000)
        squares[pacmanCurrentIndex].classList.remove('power-pellet')
    }
}

//make ghost stop being vulnerable 
function unScaredGhosts(){
    ghosts.forEach(ghost => ghost.isScared = false)
}


})

