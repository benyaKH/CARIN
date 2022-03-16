//import { numberOfResources } from './GlobalVar';
import {styles} from './scriptstyle.css';
var thisInterval = setInterval(function(){
    if(document.getElementById("canvas") != null){
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 900;
        canvas.height = 600;
        
        
        //Global Variables
        const cellSize = 100;
        const cellGap = 3;
        let Cost = 300;
        let virusesInterval = 600;
        let frame = 0;
        let gameOver = false;
        let score = 0;
        const winningScore = 100;
        let chosenAntibody = 0;
        let card1stroke = 'white';
        let card2stroke = 'white';
        let card3stroke = 'white';
        
        
        const gameGrid = [];
        const Antibodies = [];
        const Viruses = [];
        const VirusPositions = [];
        const Attacks = [];
        const resources = [];
        
        // mouse
        const mouse = {
            x: 10,
            y: 10,
            width: 0.1,
            height: 0.1,
            clicked: false
        }
        canvas.addEventListener('mousedown', function(){
            mouse.clicked = true;
        });
        canvas.addEventListener('mouseup', function(){
            mouse.clicked = false;
        });
        let canvasPosition = canvas.getBoundingClientRect();
        canvas.addEventListener('mousemove', function(e){
            mouse.x = e.x - canvasPosition.left;
            mouse.y = e.y - canvasPosition.top;
        });
        canvas.addEventListener('mouseleave', function(){
            mouse.y = undefined;
            mouse.y = undefined;
        });
        
        // Menu
        const controlsBar = {
            width: canvas.width,
            height: cellSize,
        }
        class Cell {
            constructor(x, y){
                this.x = x;
                this.y = y;
                this.width = cellSize;
                this.height = cellSize;
            }
            draw(){
                if (mouse.x && mouse.y && collision(this, mouse)){
                    ctx.strokeStyle = 'black';
                    ctx.strokeRect(this.x, this.y, this.width, this.height);
                }
            }
        }
        function createGrid(){
            for (let y = cellSize; y < canvas.height; y += cellSize){
                for (let x = 0; x < canvas.width; x += cellSize){
                    gameGrid.push(new Cell(x, y));
                }
            }
        }
        createGrid();
        function handleGameGrid(){
            for (let i = 0; i < gameGrid.length; i++){
                gameGrid[i].draw();
            }
        }
        // Attacks
        class Attack {
            constructor(x, y){
                this.x = x;
                this.y = y;
                this.width = 10;
                this.height = 10;
                this.power = 20;
                this.speed = 5;
            }
            update(){
                this.x -= this.speed;
            }
            draw(){
                ctx.fillStyle = 'black';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.width, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        function handleAttacks(){
            for (let i = 0; i < Attacks.length; i++){
                Attacks[i].update();
                Attacks[i].draw();
        
                for (let j = 0; j < Viruses.length; j++){
                    if (Viruses[j] && Attacks[i] && collision(Attacks[i], Viruses[j])){
                        Viruses[j].health -= Attacks[i].power;
                        Attacks.splice(i, 1);
                        i--;
                    }
                }
        
                if (Attacks[i] && Attacks[i].x > canvas.width + cellSize){
                    Attacks.splice(i, 1);
                    i--;
                }
            }
        }
        
        // Antibody
        const Antibody1 = new Image();
        Antibody1.src = 'A1.png';
        const Antibody2 = new Image();
        Antibody2.src = 'A2.png';
        const Antibody3 = new Image();
        Antibody3.src = 'A3.png';
        class Antibody {
            constructor(x, y){
                this.x = x;
                this.y = y;
                this.width = cellSize - cellGap * 2;
                this.height = cellSize - cellGap * 2;
                this.shooting = false;
                this.health = 100;
                this.Attacks = [];
                this.timer = 0;
                this.spriteWidth = 300;
                this.spriteHeight = 300;
                this.chosenAntibody = chosenAntibody;
            }
            draw(){
                //ctx.fillStyle = 'blue';
                //ctx.fillRect(this.x, this.y, this.width, this.height);
                ctx.fillStyle = 'gold';
                ctx.font = '30px Orbitron';
                ctx.fillText(Math.floor(this.health), this.x + 15, this.y + 30);
                if(this.chosenAntibody === 1){
                    ctx.drawImage(Antibody1, 0, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
                }else if(this.chosenAntibody === 2){
                    ctx.drawImage(Antibody2, 0, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
                }else if(this.chosenAntibody === 3){
                    ctx.drawImage(Antibody3, 0, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
                }
            }
            update(){
                if (this.shooting){
                    this.timer++;
                    if (this.timer % 100 === 0){
                        Attacks.push(new Attack(this.x + 70, this.y + 50));
                    }
                } else {
                    this.timer = 0;
                }
            }
        }
        
        function handleAntibodies(){
            for (let i = 0; i < Antibodies.length; i++){
                Antibodies[i].draw();
                Antibodies[i].update();
                if (VirusPositions.indexOf(Antibodies[i].y) !== -1){
                    Antibodies[i].shooting = true;
                } else {
                    Antibodies[i].shooting = false;
                }
                for (let j = 0; j < Viruses.length; j++){
                    if (Antibodies[i] && collision(Antibodies[i], Viruses[j])){
                        Viruses[j].movement = 0;
                        Antibodies[i].health -= 1;
                    }
                    if (Antibodies[i] && Antibodies[i].health <= 0){
                        Antibodies.splice(i, 1);
                        i--;
                        Viruses[j].movement = Viruses[j].speed;
                    }
                }
            }
        }

        const card1 = {
            x: 10,
            y: 5,
            width: 90,
            height: 90
        }

        const card2 = {
            x: 110,
            y: 5,
            width: 90,
            height: 90
        }

        const card3 = {
            x: 210,
            y: 5,
            width: 90,
            height: 90
        }

        function chooseAntibody(){
            if(collision(mouse, card1) && mouse.clicked){
                chosenAntibody = 1;
            }else if(collision(mouse, card2) && mouse.clicked){
                chosenAntibody = 2;
            }else if(collision(mouse, card3) && mouse.clicked){
                chosenAntibody = 3;
            }
            if (chosenAntibody === 1){
                card1stroke = 'balck';
                card2stroke = 'white';
                card3stroke = 'white';
            }else if(chosenAntibody === 2){
                card1stroke = 'white';
                card2stroke = 'balck';
                card3stroke = 'white';
            }else if(chosenAntibody === 3){
                card1stroke = 'white';
                card2stroke = 'white';
                card3stroke = 'balck';
            }else {
                card1stroke = 'white';
                card2stroke = 'white';
                card3stroke = 'white';
            }
            ctx.lineWidth = 1;
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(card1.x, card1.y, card1.width, card1.height);
            ctx.strokeStyle = card1stroke;
            ctx.strokeRect(card1.x, card1.y, card1.width, card1.height);
            ctx.drawImage(Antibody1, 0, 0, 350, 350, 15, 12.5, 90, 90);
            ctx.fillRect(card2.x, card2.y, card2.width, card2.height);
            ctx.strokeStyle = card2stroke;
            ctx.strokeRect(card2.x, card2.y, card2.width, card2.height);
            ctx.drawImage(Antibody2, 0, 0, 330, 330, 115, 12.5, 90, 90);
            ctx.fillRect(card3.x, card3.y, card3.width, card3.height);
            ctx.strokeStyle = card3stroke;
            ctx.strokeRect(card3.x, card3.y, card3.width, card3.height);
            ctx.drawImage(Antibody3, 0, 0, 340, 340, 215, 12.5, 90, 90);
        }
        
        //Message
        const Messages  =  [];
        class Message {
            constructor(value, x, y, size, color){
                this.value = value;
                this.x = x;
                this.y = y;
                this.size = size;
                this.lifeSpan = 0;
                this.color = color;
                this.opacity = 1;
            }
            update(){
                this.y -= 0.3;
                this.lifeSpan += 1;
                if(this.opacity > 0.05) this.opacity -= 0.05;
            }
            draw(){
                ctx.globalAlpha = this.opacity;
                ctx.fillStyle = this.color;
                ctx.font = this.size + 'px Obritron';
                ctx.fillText(this.value, this.x, this.y);
                ctx.globalAlpha = 1;
            }
        }
        function handleMessages(){
            for (let i = 0; i < Messages.length; i++){
                Messages[i].update();
                Messages[i].draw();
                if(Messages[i].lifeSpan >= 50){
                    Messages.splice(i, 1);
                    i--;
                }
            }
        }

        //Viruses
        const VirusTypes = [];
        const Virus1 = new Image();
        Virus1.src = 'V.png';
        VirusTypes.push(Virus1);

        class Enemy {
            constructor(verticalPosition){
                this.x = 0;
                this.y = verticalPosition;
                this.width = cellSize - cellGap * 2;
                this.height = cellSize - cellGap * 2;
                this.speed = Math.random() * 0.2 + 0.4;
                this.movement = this.speed;
                this.health = 100;
                this.maxHealth = this.health;
                this.VirusType = VirusTypes[0];
                this.spriteWidth = 300;
                this.spriteHeight = 300;
            }
            update(){
                this.x += this.movement;
            }
            draw(){
                //ctx.fillStyle = 'red';
                //ctx.fillRect(this.x, this.y, this.width, this.height);
                ctx.fillStyle = 'black';
                ctx.font = '30px Orbitron';
                ctx.fillText(Math.floor(this.health), this.x + 15, this.y + 30);
                ctx.drawImage(this.VirusType, 0, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
            }
        }
        function handleViruses(){
            for (let i = 0; i < Viruses.length; i++){
                Viruses[i].update();
                Viruses[i].draw();
                if (Viruses[i].x > 900){
                    gameOver = true;
                }
                if (Viruses[i].health <= 0){
                    let gainedResources = Viruses[i].maxHealth/10;
                    Messages.push(new Message('+' + gainedResources, Viruses[i].x, Viruses[i].y, 30, 'black'));
                    Messages.push(new Message('+' + gainedResources, 250, 50, 30, 'gold'));
                    Cost += gainedResources;
                    score += gainedResources;
                    const findThisIndex = VirusPositions.indexOf(Viruses[i].y);
                    VirusPositions.splice(findThisIndex, 1);
                    Viruses.splice(i, 1);
                    i--;
                  }
            }
            if (frame % virusesInterval === 0 && score < winningScore){
                let verticalPosition = Math.floor(Math.random() * 5 + 1) * cellSize + cellGap;
                Viruses.push(new Enemy(verticalPosition));
                VirusPositions.push(verticalPosition);
                if (virusesInterval > 120) virusesInterval -= 50;
            }
        }
        
        // resources
        const amounts = [20, 30, 40];
        class Resource {
            constructor(){
                this.x = Math.random() * (canvas.width - cellSize);
                this.y = (Math.floor(Math.random() * 5) + 1) * cellSize + 25;
                this.width = cellSize * 0.6;
                this.height = cellSize * 0.6;
                this.amount = amounts[Math.floor(Math.random() * amounts.length)];
            }
            draw(){
                ctx.fillStyle = 'yellow';
                ctx.fillRect(this.x, this.y, this.width, this.height);
                ctx.fillStyle = 'black';
                ctx.font = '20px Orbitron';
                ctx.fillText(this.amount, this.x + 15, this.y + 25);
            }
        }
        function handleResources(){
            if (frame % 500 === 0 && score < winningScore){
                resources.push(new Resource());
            }
            for (let i = 0; i < resources.length; i++){
                resources[i].draw();
                if (resources[i] && mouse.x && mouse.y && collision(resources[i], mouse)){
                    Cost += resources[i].amount;
                    resources.splice(i, 1);
                    i--;
                }
            }
        }
        
        // utilities
        function handleGameStatus(){
            ctx.fillStyle = 'black';
            ctx.font = '30px Orbitron';
            ctx.fillText('Score: ' + score, 630, 40);
            ctx.fillText('AntibodyCost : ' + Cost, 630, 80);
            if (gameOver){
                ctx.fillStyle = 'black';
                ctx.font = '90px Orbitron';
                ctx.fillText('GAME OVER', 135, 330);
            }
            if (score >= winningScore && Viruses.length === 0){
                ctx.fillStyle = 'black';
                ctx.font = '60px Orbitron';
                ctx.fillText('LEVEL COMPLETE', 130, 300);
                ctx.font = '30px Orbitron';
                ctx.fillText('You win with ' + score + ' points!', 134, 340);
            }
        }

        canvas.addEventListener('click', function(){
            const gridPositionX = mouse.x  - (mouse.x % cellSize) + cellGap;
            const gridPositionY = mouse.y - (mouse.y % cellSize) + cellGap;
            if (gridPositionY < cellSize) return;
            for (let i = 0; i < Antibodies.length; i++){
                if (Antibodies[i].x === gridPositionX && Antibodies[i].y === gridPositionY) return;
            }
            let AntibodyCost = 100;
            if (Cost >= AntibodyCost){
                if(chosenAntibody != 0){
                    Antibodies.push(new Antibody(gridPositionX, gridPositionY));
                    Cost -= AntibodyCost;
                }else{
                    Messages.push(new Message('Not select antibody yet', mouse.x, mouse.y, 30, 'red'));
                }
            } else {
                Messages.push(new Message('Not enough cost', mouse.x, mouse.y, 30, 'red'));
            }
        });
        
        function animate(){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#e5e7eb';
            ctx.fillRect(0,0,controlsBar.width, controlsBar.height);
            handleGameGrid();
            handleAntibodies();
            chooseAntibody();
            handleResources();
            handleAttacks();
            handleViruses();
            handleGameStatus();
            handleMessages();
            frame++;
            if (!gameOver) requestAnimationFrame(animate);
        }
        animate();
        
        function collision(first, second){
            if (    !(  first.x > second.x + second.width ||
                        first.x + first.width < second.x ||
                        first.y > second.y + second.height ||
                        first.y + first.height < second.y)
            ) {
                return true;
            };
        };
        
        window.addEventListener('resize', function(){
            canvasPosition = canvas.getBoundingClientRect();
        })
        
        //CR:https://www.youtube.com/watch?v=QxYg8-mhhhs&t=302s
        //CR:https://www.youtube.com/watch?v=mpvNwYmTMJ4&t=2767s
  
  
      
      clearInterval(thisInterval)
    }
  },100)


