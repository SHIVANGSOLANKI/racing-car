class Game {
  constructor() 
  {
    this.resettitle = createElement("h2");
    this.resetbutton = createButton("");
    this.leaderboardtitle = createElement("h2");
    this.leader1 = createElement("h2");
    this.leader2 = createElement("h2");
  }

  readgs()
  {
    database.ref("gameState").on("value",function(data){
      mygs= data.val()
    })
  }
  updategs(gs)
  {
    database.ref("/").update
    ({
      gameState:gs
    })
  }

  start() 
  {
    form = new Form();
    form.display();
    player = new Player();
    player.readpc()
    car1 = createSprite(width/2 - 50,height - 100)
    car1.addImage(car1Img)
    car1.scale = 0.07
    car2 = createSprite(width/2 + 100,height - 100)
    car2.addImage(car2Img)
    car2.scale = 0.07

    cars = [car1,car2]
   }
   hideforms()
   {
      form.hide()
      form.titleImg.position(40,50)
      form.titleImg.class("gameTitleAfterEffect")
      this.resettitle.html("reset game")
      this.resettitle.class("resetText")
      this.resettitle.position(width/2 + 200,40)
      this.resetbutton.class("resetButton")
      this.resetbutton.position(width/2 + 230,100)
      this.leaderboardtitle.html("ScoreBoard")
      this.leaderboardtitle.class("resetText")
      this.leaderboardtitle.position(width/3 - 60,40)
      this.leader1.class("leadersText")
      this.leader1.position(width/3 - 50,80)
      this.leader2.class("leadersText")
      this.leader2.position(width/3 - 50,130)
   }
   movecar()
   {
      if (keyIsDown(UP_ARROW))
      {
        player.positiony += 10
        player.update()
      }
      if (keyIsDown(LEFT_ARROW) && player.positionx > width / 3 - 50) {
        player.positionx -= 5;
        player.update();
      }
  
      if (keyIsDown(RIGHT_ARROW) && player.positionx < width / 2 + 300) {
        player.positionx += 5;
        player.update();
      }
   }

   play()
   {
      this.hideforms()
      this.resetButton()
      Player.getallplayerinfo()
      if (allplayers !== undefined)
      {
        image(trackImg,-810,-height*5 +200,width,height*6)
        this.showleaderboard()

        var index = 0
        for(var plr in allplayers)
        {
          index += 1
          var plrx = allplayers[plr].positionx
          var plry = height-allplayers[plr].positiony

          cars[index-1].position.x=plrx
          cars[index-1].position.y=plry 

          if(index === player.index)
          {
            fill("red")
            stroke(10)
            ellipse(plrx,plry,60,60)

            camera.position.x = cars[index-1].position.x
            camera.position.y = cars[index-1].position.y
          }
          }
        this.movecar()

        drawSprites();
      }
   }
   showleaderboard()
  {
    var leader1
    var leader2
    var players = Object.values(allplayers);
    console.log(players)
    if((players[0].rank === 0 && players[1].rank === 0)||players[0].rank === 1)
    {
       leader1 = players[0].rank + "&emsp;"+ players[0].name + "&emsp;"+ players[0].score
       leader2 = players[1].rank + "&emsp;"+ players[1].name + "&emsp;"+ players[1].score
    }
    if(players[1].rank == 1)
    {
      leader1 = players[1].rank + "&emsp;"+ players[1].name + "&emsp;"+ players[1].score
      leader2 = players[0].rank + "&emsp;"+ players[0].name + "&emsp;"+ players[0].score
    }
    this.leader1.html(leader1)
    this.leader2.html(leader2)
  }
  resetButton()
  {
    this.resetbutton.mousePressed(()=>{
      database.ref("/").set({
        carsatend:0,
        playerCount:0,
        gameState:0,
        players:{}
      })
      window.location.reload()
    })
  }

}
