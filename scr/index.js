var Payers = /** @class */ (function () {
    function Payers() {
        this.playerNumber = 1;
    }
    Payers.prototype.setPlayerNumber = function (playerNumber) {
        this.playerNumber = playerNumber;
    };
    Payers.prototype.getPlayerNumber = function () {
        return this.playerNumber;
    };
    return Payers;
}());
var Scene = /** @class */ (function () {
    function Scene() {
        this.Game_Payers = new Payers();
        this.arrButton = []; //для запису назв кнопок, які вже натискалися
        this.arrXorOPosition = [];
    }
    Scene.prototype.checkElementArr = function (element) {
        for (var i = 0; i < this.arrButton.length; i++) {
            if (element === this.arrButton[i]) {
                return true;
            }
        }
        return false;
    };
    Scene.prototype.checkWinner = function () {
        if (this.arrXorOPosition[1] == this.arrXorOPosition[2] && this.arrXorOPosition[2] == this.arrXorOPosition[3] && this.arrXorOPosition[2] == 1) {
            alert("Winners X");
            this.start_Game();
            this.arrButton = []; //для запису назв кнопок, які вже натискалися
            this.arrXorOPosition = [];
        }
    };
    Scene.prototype.clickProcessing = function (btnNames) {
        var _this = this;
        btnNames.forEach(function (btnName) {
            document.querySelector(btnName).addEventListener('click', function () {
                if (!_this.checkElementArr(btnName)) {
                    var index = +btnName[btnName.length - 1];
                    _this.arrButton.push(btnName);
                    if (_this.Game_Payers.getPlayerNumber() === 1) {
                        _this.arrXorOPosition[index] = 1;
                        console.log(_this.arrXorOPosition);
                        document.querySelector(btnName).innerHTML = 'X';
                        _this.Game_Payers.setPlayerNumber(2);
                        _this.checkWinner();
                    }
                    else {
                        document.querySelector(btnName).innerHTML = '0';
                        _this.arrXorOPosition[index] = 0;
                        _this.Game_Payers.setPlayerNumber(1);
                        _this.checkWinner();
                    }
                }
            });
        });
    };
    Scene.prototype.start_Game = function () {
        this.clickProcessing(["#button_1", "#button_2", "#button_3", "#button_4", "#button_5", "#button_6", "#button_7", "#button_8", "#button_9"]);
    };
    return Scene;
}());
var Scene_Game = new Scene();
Scene_Game.start_Game();
