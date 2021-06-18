$(document).ready(function() {
	autoContract()
})

async function autoContract() {
	//try{
		const HttpProvider = Web3.providers.HttpProvider;
		const fullNode = new HttpProvider(network);
		const solidityNode = new HttpProvider(network);
		const eventServer = new HttpProvider(network);
		
		let web3 = new Web3(fullNode, solidityNode, eventServer)
			
		await (defyAuto = new web3.eth.Contract(defyABI, defy))
		await (gameAuto = new web3.eth.Contract(gameABI, game))
				
	 	gameStats()
}

let gameDeadline = ''
let gameEntries = ''
let gameDefyEntered = ''
let playerCount = ''

async function gameStats(){
	getGameDeadline()
	getPlayerCount()

}

async function getPlayerCount(){
	let playerCount = await gameAuto.methods.totalPlayers().call()
	$('.player-count')[0].innerHTML = playerCount
}

function zeroPrefix(val) {
	if ((val.toString()).length < 2) {
		val = '0' + val;
	}

	return val;
}

let gameTimer;
async function getGameDeadline(){
	let gameDeadline = await gameAuto.methods.DEADLINE().call() * 1000

	let endTime = new Date(gameDeadline)
/* 	let endHours = new Date(gameDeadline).getHours()
	let ampm = " AM"
	if(endHours / 12 > 1){
		ampm = " PM"
		endHours -= 12
	} */

	gameTimer = setInterval(function time() {
		let now = new Date()
		if(now < endTime){
			let days = endTime.getDay() - now.getDay() - 1
			if(days < 0)
				days = 0

			let hours = endTime.getHours() - now.getHours() - 1
			if(hours < 0)
				hours = 0

			let min = endTime.getMinutes() - now.getMinutes()
			if(endTime.getMinutes() < now.getMinutes())
				min = 59 + endTime.getMinutes() - now.getMinutes()

			let sec = endTime.getSeconds() - now.getSeconds()
			if(endTime.getSeconds() < now.getSeconds())
				sec = 59 + endTime.getSeconds() - now.getSeconds()

			$('.game-countdown')[0].innerHTML = '<p>' + zeroPrefix(days) + 'd ' + zeroPrefix(hours) + 'h ' + zeroPrefix(min) + 'm ' + zeroPrefix(sec) + "s</p>"
		}else{
			$('.game-countdown')[0].innerHTML = '<p>Game complete.</p>'

		}
	}, 1000);
}


