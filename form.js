class Form{

   constructor(){
       this.input = createInput("name");
       this.button = createInput("Start");
       this.greeting = createElement("h2");
       this.title = createElement("h2");
   }
   hide(){
       this.greeting.hide();
       this.button.hide();
       this.input.hide();
       this.title.hide();

   }
   display(){
    this.title.html("CARS");
    this.title.position(600,100);

    this.input.position(600,400);
    this.button.position(800,400);

    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        this.greeting.html("Hello"+ player.name);
        this.greeting.position(600,400);
        game.play();
        
    });

   }
}