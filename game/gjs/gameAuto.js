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

	let endTime = new Date(gameDeadline).getTime()

	gameTimer = setInterval(function time() {

		var now = new Date().getTime();
		var distance = endTime - now;

		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var sec = Math.floor((distance % (1000 * 60)) / 1000);


		$('.game-countdown')[0].innerHTML = '<p>' + zeroPrefix(days) + 'd ' + zeroPrefix(hours) + 'h ' + zeroPrefix(min) + 'm ' + zeroPrefix(sec) + "s</p>"
		if (distance < 0) {
			clearInterval(gameTimer)
			$('.game-countdown')[0].innerHTML = '<p>Game complete.</p>'
		}
		
	}, 1000);
}


