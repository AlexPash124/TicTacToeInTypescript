class Payers{
  private playerNumber: number = 1;
  setPlayerNumber(playerNumber: number){
      this.playerNumber = playerNumber;
  }
  getPlayerNumber(){
    return this.playerNumber;
  }
}
class Scene{
  Game_Payers = new Payers();
  arrButton: string[] = []; //для запису назв кнопок, які вже натискалися
  arrXorOPosition: number[] = [];
  checkElementArr(element: string): boolean{
      for(let i = 0; i < this.arrButton.length; i++){
        if(element===this.arrButton[i]){
          return true;
        }
      }
      return false;
  }
  checkWinner(){
    if(this.arrXorOPosition[1]==this.arrXorOPosition[2] && this.arrXorOPosition[2]==this.arrXorOPosition[3] && this.arrXorOPosition[2]==1)
    {
      alert("Winners X");
    }
  }
  clickProcessing(btnNames: string[]){
    btnNames.forEach((btnName) => {
      document.querySelector(btnName).addEventListener('click', () => {
        if(!this.checkElementArr(btnName)){
          let index = +btnName[btnName.length-1];
          this.arrButton.push(btnName);
          if(this.Game_Payers.getPlayerNumber()===1){
            this.arrXorOPosition[index] = 1;
            console.log(this.arrXorOPosition);
            document.querySelector(btnName).innerHTML = 'X';
            this.Game_Payers.setPlayerNumber(2);
            this.checkWinner();
        }
          else{
            document.querySelector(btnName).innerHTML = '0';
            this.arrXorOPosition[index] = 0;
            this.Game_Payers.setPlayerNumber(1);
            this.checkWinner();
        }
        }});
  });
  }
  start_Game(){
    this.clickProcessing(["#button_1", "#button_2", "#button_3", "#button_4","#button_5", "#button_6", "#button_7", "#button_8", "#button_9"])
  }
}


let Scene_Game = new Scene();
Scene_Game.start_Game();