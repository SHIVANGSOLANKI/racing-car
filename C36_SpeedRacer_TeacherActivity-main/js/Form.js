class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
    
  }
   setelementsposition() 
   {
     this.input.position(width/2 - 110,height/2 - 80)
     this.playButton.position(width/2 - 90,height/2 - 20)
     this.greeting.position(width/2 - 300,height/2 - 100)
     this.titleImg.position(120,50)
   }
   setelementsstyle()
   {
     this.input.class("customInput")
     this.playButton.class("customButton")
     this.greeting.class("greeting")
     this.titleImg.class("gameTitle")
   }
   display()
   {
     this.setelementsposition();
     this.setelementsstyle();
     this.handlemousepressed();
   }
  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }
  handlemousepressed()
  {
    this.playButton.mousePressed(()=>{
    this.playButton.hide();
    this.input.hide();
    var message=`hello ${this.input.value()} </br>wait for another player to join...`;

    this.greeting.html(message)
    mypc+=1
    player.name = this.input.value()
    player.index = mypc
    player.addplayer()
    player.updatepc(mypc)
    player.getdistance()
    })
  }
}
