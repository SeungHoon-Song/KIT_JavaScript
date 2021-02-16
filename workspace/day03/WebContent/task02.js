/**
 * 자동차 주행에 필요한 js
 */

function SuperCar(){
	this.brand = "Ferrari";
	this.color = "red";
	this.price = 15000;
}

function activeEnter(){
	if(window.event.keyCode == 13){
		//시동 켜기
		SuperCar.engineStart();
	}
}

var flag = false;
var text = document.getElementById("currentText");
var img = document.getElementById("currentImg");

SuperCar.prototype.pw = prompt("자동차 초기 비밀번호 입력");
SuperCar.showInput = function(){
	if(!flag){
		//시동을 켤 수 있는 상태
		input.style.visibility  = "visible";
		SuperCar.engineStart();
	}else{
		//시동이 이미 켜져있는 상태
		input.style.visibility  = "hidden";
		text.innerHTML = "이미 켜져 있습니다.";
	}
}

//프로토타입의 메소드 사용 방법
//SuperCar.engineStart()

SuperCar.engineStart = function(){
	//비밀번호 검사 (SuperCar.prototype.pw : 초기비밀번호)
	//연속 3회 오류 시 경찰 출동
	var pw = document.getElementById("inputPw").value;
	var cntPw=0;
	if(pw != SuperCar.prototype.pw){
		cntPw++;
		currentText.innerHTML = "비밀번호 오류 : "+cntPw;
		if(cntPw==3){
			alert("경찰 출동중");
			currentText.innerHTML = "경찰 출동";
			img.src = "police.png";
		}
	}else{
		
		cntPw=0;
	}
}

SuperCar.engineStop = function(){
	/*if(){
		//시동을 끌 수 있는 상태
		
	}else{
		//시동이 이미 꺼져있는 상태
	}*/
}

SuperCar.reset = function(){
	history.go(0);
}