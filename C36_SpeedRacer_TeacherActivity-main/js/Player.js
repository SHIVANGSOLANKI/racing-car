class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionx = 0;
    this.positiony = 0;
    this.rank = 0;
    this.score = 0;
  }
readpc()
{
    database.ref("playerCount").on("value",function(data)
    {
      mypc = data.val()
    })
    
}
  updatepc(count)
  {
    database.ref("/").update
    ({
       playerCount:count
    })
  }
  addplayer()
  {
    var playerindex = "players/player"+this.index
    if(this.index === 1)
    {
      this.positionx = width/2 - 100
    }
    else
    {
      this.positionx = width/2 + 100
    }
    database.ref(playerindex).set({
      name:this.name,
      positionx:this.positionx,
      positiony:this.positiony,
      rank:this.rank,
      score:this.score
    })
  }
  static getallplayerinfo()
  {
    database.ref("players").on("value",function(data)
    {
      allplayers = data.val()
    })
  }
  update ()
  {
    var playerindex = "players/player" + this.index
    database.ref(playerindex).update
    ({
       positionx:this.positionx,
       positiony:this.positiony,
       rank:this.rank,
       score:this.score
    })
  }
  getdistance()
  {
    database.ref("players/player"+this.index).on("value",function(data){
      var data = data.val()
      this.positionx = data.positionx;
      this.positiony = data.positiony;
    })
  }
}
