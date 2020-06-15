class Game {
    constructor(){

    }

    async start(){
        if(gameState === 0){
        cars = new cars();

        }
        form = new Form()
        form.display();
        
    }


    play(){
        form.hide();

        cars.getcarsInfo();
        cars.getcarsAtEnd();

        if(allcars !== undefined){
            background("brown");

            var index = 0


            var x = 600;
            var y ;

            for (var plr in allcars){
                index = index +1 ;


            x = x + 100 ;
            if (index === player.index){
                stroke(10);
                fill("red");
                ellipse(x,y,60,60);
                cars[index - 1].shapeColor = "red";          
              
              }
             
            }
        }

        
    if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
      if(player.distance>3860){
        gameState = 2;
        player.rank = player.rank+1;
        Player.updateCarsAtEnd(player.rank);
      }
    }
          end(){
          console.log("GameEnd");
          console.log(player.rank);
          
        }
      }
    
        
   
        