const defyABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"WDefymaster","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"}],"name":"deliver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcluded","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"},{"internalType":"bool","name":"deductTransferFee","type":"bool"}],"name":"reflectionFromToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_defymaster","type":"address"}],"name":"setWdefymaster","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rAmount","type":"uint256"}],"name":"tokenFromReflection","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalBurn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const gameABI = [{"inputs":[{"internalType":"contract DefyCoinV2","name":"_defy","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"player","type":"address"}],"name":"Participated","type":"event"},{"inputs":[],"name":"payWinner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_num","type":"uint256"}],"name":"play","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"winner1","type":"address"},{"indexed":false,"internalType":"address","name":"winner2","type":"address"},{"indexed":false,"internalType":"address","name":"winner3","type":"address"}],"name":"PrizePaid","type":"event"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"},{"inputs":[],"name":"DEADLINE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"defy","outputs":[{"internalType":"contract DefyCoinV2","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAvg","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"},{"internalType":"uint256","name":"avg","type":"uint256"}],"name":"getDiff","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getTotalPlayers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWinner","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isDeadlineReached","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"playerAddrList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalPlayers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]

let defyAuto = undefined
let gameAuto = undefined

// const network = 'https://bsc-dataseed.binance.org/' //MainNet
const network = 'https://data-seed-prebsc-1-s1.binance.org:8545/' //TestNet

const defy = '0x6109a7cf9437c67dc57de4a5910b8982f653bb07' // '0x0acbb2c3d3826b82b17c09e2dfa605b5279e0c63'
let defyContract = undefined

const game = '0xb39C1f279682Ac1C4545389a27F2D901A54C073c'
let gameContract = undefined

const wbnb = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
let wbnbContract = undefined

const busd = '0xe9e7cea3dedca5984780bafc599bd69add087d56'
let busdContract = undefined

const user = {
    address: undefined,
	defy: 0,
    entered: false,
	harvestable: 0,
	userGuess: undefined
}
$(document).ready(function() {
	window.addEventListener('load', async function () {
		await ethereum.request( {method: 'eth_requestAccounts'} )
		ethereum.request({ method: 'eth_accounts' }).then(function (result) {
			user.address = result[0]
			console.log("User wallet: " + user.address)
			$('.user-address')[0].innerHTML = '' + user.address
			$('.user-address')[0].style.display = ''
			$('.connect-button')[0].innerHTML = 'Connected!'
			web3 = new Web3(window.web3.currentProvider)
		})
		if(user.address != undefined)
			initContracts()
		else 
			beginLogins()
	})
})

let attempts = 0
async function beginLogins(){
	await ethereum.request({method: 'eth_requestAccounts'})
	await userLoginAttempt()
	setTimeout(() => {
		if(user.address == undefined && attempts < 3){
			setTimeout(() => {
				if(user.address == undefined && attempts < 3){
					attempts++
					beginLogins()
				}
			}, 300)
		}
	}, 300)
}

let web3
let loginInt
async function userLoginAttempt(){
	await ethereum.request({method: 'eth_requestAccounts'})
	ethereum.request({ method: 'eth_accounts' }).then(function (result) {
		user.address = result[0]
		$('.user-address')[0].innerHTML = '' + user.address
		$('.user-address')[0].style.display = ''
		$('.connect-button')[0].innerHTML = 'Connected!'
		web3 = new Web3(window.web3.currentProvider)
		
		web3 = new Web3(window.web3.currentProvider)
		initContracts()
	})
	loginInt = setInterval(async () => {
		ethereum.request({ method: 'eth_accounts' }).then(function (result) {
			if (window.ethereum && user.address !== result[0]) location.reload()
		})
	}, 5000)

}

async function initContracts(){
	try{
		await (defyContract = new web3.eth.Contract(defyABI, defy))
		await (gameContract = new web3.eth.Contract(gameABI, game))
        runUserStats()
	}catch(e){
		console.log(e)
		setTimeout(() => {
			initContracts()
		}, 250)
	}
}

function runUserStats() {
    checkGameAllowance()

	getUserBalance()

    getUserInfo()

    setTimeout(() => {
        runUserStats()
    }, 1000 * 15)
}

// get balance of user and set it on the header
async function getUserBalance() {
	if(user.address != undefined){
		//user.bnb = (await web3.eth.getBalance(user.address) / 1e18).toFixed(6)
		//$('.user-bnb')[0].innerHTML = user.bnb
		user.defy = (await defyContract.methods.balanceOf(user.address).call() / 1e18).toFixed(6)
		$('.user-defy')[0].innerHTML = user.defy
	}else
		setTimeout(() => {
			getUserBalance()
		}, 2000)
}

async function getUserInfo(){

}

function toHexString(number){
	return '0x'+number.toString(16)
}
async function checkGameAllowance(){
	let allowance = await defyContract.methods.allowance(user.address, game).call()
	if(allowance > 1000000 * 1e18){
		$('.approve-game')[0].style.display = "none"
		$('.deposit-button')[0].style.display = ""
	}
	else if(allowance/1e18 < user.defy || allowance == 0){
		$('.approve-game')[0].style.display = ""
		$('.deposit-button')[0].style.display = "none"
	}
}
async function approveGame(){
	let amount = toHexString(100000000 * 1e18)
	await defyContract.methods.approve(game, amount).send({
		from: user.address,
		shouldPollResponse: true,
	}, function(error, res){
		if(error)
			console.log(error)
		else{
			checkGameAllowance()
			console.log(res)
			return res
		}
	})
}
let guess = 0
function updateGuess(){
	guess = parseInt($('.guess-input')[0].value)
    if( isNaN(guess) ){
        $('.guess-input')[0].value = 1
        guess = 1
    }
    if( guess < 1 || guess > 100 ){
        $('.guess-input')[0].value = 1
        guess = 1
    }
	console.log(guess)
}
async function random(){
    randomGuess = Math.floor(Math.random() * 100 + 1)
	$('.guess-input')[0].value = randomGuess
	guess = randomGuess
}
async function play(){
    let userGuess = parseInt($('.guess-input')[0].value)
    if(user.defy < 5){
        alert("You need at least 5 DEFY to play a round!")
        return
    }
    if(user.entered){
        alert("You have already entered this game round.")
        return
    }
	await gameContract.methods.play(userGuess).send({
		from: user.address,
		shouldPollResponse: true,
	}, function(error, res){
		if(error)
			console.log(error)
		else{
			console.log(res)
			return res
		}
	})
}


