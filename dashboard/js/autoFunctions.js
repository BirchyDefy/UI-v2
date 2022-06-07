
let rewardPerYear;	

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
			
		for(let i = 0; i < pools.length; i++){
			await (pools[i].contract = new web3.eth.Contract(pools[i].ABI, pools[i].addr))
			await (pools[i].swapContract = new web3.eth.Contract(pools[i].swapABI, pools[i].swapAddr))
		}
			
		await (farmAuto = new web3.eth.Contract(farmABI, farmAddress))
		await (defyAuto = new web3.eth.Contract(defyABI, defy))
		await (wbnbAuto = new web3.eth.Contract(wbnbABI, wbnb))
		await (busdAuto = new web3.eth.Contract(wbnbABI, busd))
		await (kcakeAuto = new web3.eth.Contract(kcakeABI, kcake))
		await (aoeAuto = new web3.eth.Contract(AoEABI, aoe))
		await (ilpAuto = new web3.eth.Contract(ilpABI, ilp))
		
		await (defyBnbAuto = new web3.eth.Contract(defyBusdABI, defyBnbAddress))
        await (kcakeBnbAuto = new web3.eth.Contract(defyBusdABI, kcakeBnbAddress))
        await (aoeBnbAuto = new web3.eth.Contract(defyBusdABI, aoeBnbAddress))
		await (defyBusdAuto = new web3.eth.Contract(defyBusdABI, defyBusdAddress))
		await (defyKcakeAuto = new web3.eth.Contract(defyBusdABI, defyKcakeAddress))
		await (defyAoEAuto = new web3.eth.Contract(defyBusdABI, defyAoEAddress))
		await (priceFeed = new web3.eth.Contract(priceFeedABI, priceFeedAddress))
		
		await (defyBnbApeAuto = new web3.eth.Contract(apePoolABI, defyBnbApeAddress))
		await (defyBusdApeAuto = new web3.eth.Contract(apePoolABI, defyBusdApeAddress))
		
		await (pancakeContract = new web3.eth.Contract(pancakeABI, pancakeAddress))
		await (apeContract = new web3.eth.Contract(apeABI, apeAddress))
		await getPancakePrices()
		await getApePrices()
		
		for(let i = 0; i < pools.length; i++){
			await autoBalances(i)
			getLiqTotals(i)
		}
		
		getSupply()
		setInterval(() => {
			refreshStats()
		}, 1000 * 10)
	/*
	}catch(e){
		console.log(e)
		setTimeout(() => {
			autoContract()
		}, 750)
	}
	*/
}
function refreshStats(){
	getSupply()
	getPancakePrices()
	for(i = 0; i < pools.length; i++){
		autoBalances(i)
		getLiqTotals(i)
	}
}	

async function getSupply(){
	let totalSupply = await defyAuto.methods.totalSupply().call() / 1e18
	$('.total-supply')[0].innerHTML = '' +totalSupply.toFixed()
		
	let totalBurn = await defyAuto.methods.totalBurn().call() / 1e18
	$('.total-burned')[0].innerHTML = '' +totalBurn.toFixed()

	let ilpBalance = await defyAuto.methods.balanceOf(ilp).call() / 1e18
	$('.ilp-defy-balance')[0].innerHTML = '' +ilpBalance
}

let currentBnbToDefy
let currentDefyToBnb

let currentBusdToDefy = 0
let currentBnbToKcake = 0
let currentBnbToAoE = 0

//let currentDefyToBusd

let currentBnbPriceToUsd

let walletInt
async function getPancakePrices(){
	let resDefyBnb = await defyBnbAuto.methods.getReserves().call()	
	let resDefyBusd = await defyBusdAuto.methods.getReserves().call()	
	let resKcakeBnb = await kcakeBnbAuto.methods.getReserves().call()	
	let resAoEBnb = await aoeBnbAuto.methods.getReserves().call()
	let roundData = await priceFeed.methods.latestRoundData().call()
	currentBnbPriceToUsd = roundData.answer / 1e8

/* 	console.log(roundData)
	console.log(currentBnbPriceToUsd) */
	
	currentBnbToDefy = await pancakeContract.methods.quote(toHexString(1e18), resDefyBnb._reserve0, resDefyBnb._reserve1).call() / 1e18
	currentDefyToBnb = await pancakeContract.methods.quote(toHexString(1e18), resDefyBusd._reserve1, resDefyBusd._reserve0).call() / 1e18
	//$('.defy-bnb-price')[0].innerHTML = '1 Defy = '+currentBnbToDefy.toFixed(2)+' BNB'
	
	currentBusdToDefy = await pancakeContract.methods.quote(toHexString(1e18), resDefyBusd._reserve0, resDefyBusd._reserve1).call() / 1e18
	//$('.defy-busd-price')[0].innerHTML = '~$'+currentBusdToDefy.toFixed(2)
    
    currentBnbToKcake = await pancakeContract.methods.quote(toHexString(1e18), resKcakeBnb._reserve1, resKcakeBnb._reserve0).call() / 1e18
    
    currentBnbToAoE = 0
    
    
	
}

let currentApeBnbToDefy
let currentApeDefyToBnb

let currentApeBusdToDefy = 0
async function getApePrices(){
	let resDefyBnb = await defyBnbApeAuto.methods.getReserves().call()	
	let resDefyBusd = await defyBusdApeAuto.methods.getReserves().call()
	let roundData = await priceFeed.methods.latestRoundData().call()
	currentBnbPriceToUsd = roundData.answer / 1e8
	
	currentApeBnbToDefy = await apeContract.methods.quote(toHexString(1e18), resDefyBnb._reserve1, resDefyBnb._reserve0).call() / 1e18
	currentApeDefyToBnb = await apeContract.methods.quote(toHexString(1e18), resDefyBusd._reserve0, resDefyBusd._reserve1).call() / 1e18
/* 	console.log(currentApeBnbToDefy)
	console.log(currentApeDefyToBnb) */
	
	currentApeBusdToDefy = await ilpAuto.methods.getDefyPrice().call() / 1e18
	
	$('.defy-bnb-price')[0].innerHTML = '1 BNB = ~'+currentApeBnbToDefy.toFixed(2)+' DEFY'
	$('.defy-busd-price')[0].innerHTML = '~$'+currentApeBusdToDefy.toFixed(2)
	
	walletInt = setInterval(() => {
		$('.wallet-balance')[0].innerHTML = (currentApeBusdToDefy * user.defy)+'$'
	}, 1000)
}
async function autoBalances(pid){
	let contract = pools[pid].contract
	let swapContract = pools[pid].swapContract

	rewardPerYear = parseInt(await farmAuto.methods.defyPerBlock().call()) * 20 * 60 * 24 * 365 / 1e18
	
	pools[pid].lpInFarm = parseInt(await contract.methods.balanceOf(farmAddress).call()) / 1e18
	
	let resLpToken = await contract.methods.getReserves().call()
    if(pid == 5){
	let currentLpTokenPrice = 0
    }
    if(pid < 5){
	let currentLpTokenPrice = await swapContract.methods.quote(toHexString(1e18), resLpToken._reserve0, resLpToken._reserve1).call() / 1e18
    }
	pools[pid].totalSupply = parseInt(await contract.methods.totalSupply().call()) / 1e18
	
	if(pid == 0){
		pools[pid].defyBal = parseInt(await defyAuto.methods.balanceOf(pools[pid].addr).call()) / 1e18
		$('.pool-apy-'+pid)[0].innerHTML = '' +(rewardPerYear / ( 24/4 * (pools[pid].lpInFarm / pools[pid].totalSupply) * pools[pid].defyBal) * 100).toFixed(2) + '%'
	}
	if(3 > pid > 0){
		pools[pid].defyBal = parseInt(await defyAuto.methods.balanceOf(pools[pid].addr).call()) / 1e18
		$('.pool-apy-'+pid)[0].innerHTML = '' +(rewardPerYear / ( 24/2 * (pools[pid].lpInFarm / pools[pid].totalSupply) * pools[pid].defyBal) * 100).toFixed(2) + '%'
	}
	if(pid == 3){
		pools[pid].defyBal = parseInt(await defyAuto.methods.balanceOf(pools[pid].addr).call()) / 1e18
		$('.pool-apy-'+pid)[0].innerHTML = '' +(rewardPerYear / ( 24/1 * (pools[pid].lpInFarm / pools[pid].totalSupply) * pools[pid].defyBal) * 100).toFixed(2) + '%'
	}
	if(pid == 4){
		pools[pid].defyBal = parseInt(await defyAuto.methods.balanceOf(pools[pid].addr).call()) / 1e18
		$('.pool-apy-'+pid)[0].innerHTML = '' +(rewardPerYear / ( 24/1 * (pools[pid].lpInFarm / pools[pid].totalSupply) * pools[pid].defyBal) * 100).toFixed(2) + '%'
	}
    	if(pid == 5){
		pools[pid].defyBal = parseInt(await defyAuto.methods.balanceOf(pools[pid].addr).call()) / 1e18
		$('.pool-apy-'+pid)[0].innerHTML = '' + 0 * (rewardPerYear / ( 24/2 * (pools[pid].lpInFarm / pools[pid].totalSupply) * pools[pid].defyBal) * 100).toFixed(2) + '%'
	}
}
function getLiqTotals(pid){
	if(pid == 0)
		getApeDefyBnbLiq(pid)
	if(pid == 1)
		getApeDefyBusdLiq(pid)
	if(pid == 2)
		getDefyBnbLiq(pid)
	if(pid == 3)
		getDefyBusdLiq(pid)
	if(pid == 4)
		getDefyKcakeLiq(pid)
    if(pid == 5)
		getDefyAoELiq(pid)

}

async function getDefyBnbLiq(pid){
	let token0Pool = await defyAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token0Dec
	let token1Pool = await wbnbAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token1Dec
			
	pools[pid].lpTokenValueTotal = (currentBusdToDefy * token0Pool) + (token1Pool * currentBnbPriceToUsd)
	let totalLiqInFarm = pools[pid].lpTokenValueTotal * (pools[pid].lpInFarm*1e18) / (pools[pid].totalSupply*1e18)
	
	$('.pool-liq-'+pid)[0].innerHTML = "" + totalLiqInFarm.toFixed(2)+'$'
	$('.total-pool-liq-'+pid)[0].innerHTML = "" + pools[pid].lpTokenValueTotal.toFixed(2)+'$'
}
async function getDefyKcakeLiq(pid){
	let token0Pool = await defyAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token0Dec
	let token1Pool = await kcakeAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token1Dec
			
	pools[pid].lpTokenValueTotal = (currentBusdToDefy * token0Pool) + (token1Pool * currentBnbToKcake * currentBnbPriceToUsd )
	let totalLiqInFarm = pools[pid].lpTokenValueTotal * (pools[pid].lpInFarm*1e18) / (pools[pid].totalSupply*1e18)
	
	$('.pool-liq-'+pid)[0].innerHTML = "" + totalLiqInFarm.toFixed(2)+'$'
	$('.total-pool-liq-'+pid)[0].innerHTML = "" + pools[pid].lpTokenValueTotal.toFixed(2)+'$'
}

async function getDefyAoELiq(pid){
	let token0Pool = await defyAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token0Dec
	let token1Pool = await (aoeAuto.methods.balanceOf(pools[pid].addr).call() * 1e18) / pools[pid].token1Dec
			
	pools[pid].lpTokenValueTotal = (currentBusdToDefy * token0Pool) + (token1Pool * currentBnbToAoE * currentBnbPriceToUsd )
	let totalLiqInFarm = pools[pid].lpTokenValueTotal * (pools[pid].lpInFarm*1e18) / (pools[pid].totalSupply*1e18)
	
	$('.pool-liq-'+pid)[0].innerHTML = "" + totalLiqInFarm.toFixed(2)+'$'
	$('.total-pool-liq-'+pid)[0].innerHTML = "" + pools[pid].lpTokenValueTotal.toFixed(2)+'$'
}

async function getDefyBusdLiq(pid){
	let token0Pool = await defyAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token0Dec
	let token1Pool = await busdAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token1Dec
		
	pools[pid].lpTokenValueTotal = (currentBusdToDefy*token0Pool + token1Pool)
	let totalLiqInFarm = pools[pid].lpTokenValueTotal * (pools[pid].lpInFarm*1e18) / (pools[pid].totalSupply*1e18)
	
	$('.pool-liq-'+pid)[0].innerHTML = "" + totalLiqInFarm.toFixed(2)+'$'
	$('.total-pool-liq-'+pid)[0].innerHTML = "" + pools[pid].lpTokenValueTotal.toFixed(2)+'$'
}

async function getApeDefyBnbLiq(pid){
	let token0Pool = await defyAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token0Dec
	let token1Pool = await wbnbAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token1Dec
			
	pools[pid].lpTokenValueTotal = (currentApeBusdToDefy * token0Pool) + (token1Pool * currentBnbPriceToUsd)

	let totalLiqInFarm = pools[pid].lpTokenValueTotal * (pools[pid].lpInFarm*1e18) / (pools[pid].totalSupply*1e18)
	
	$('.pool-liq-'+pid)[0].innerHTML = "" + totalLiqInFarm.toFixed(2)+'$'
	$('.total-pool-liq-'+pid)[0].innerHTML = "" + pools[pid].lpTokenValueTotal.toFixed(2)+'$'
}
async function getApeDefyBusdLiq(pid){
	let token0Pool = await defyAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token0Dec
	let token1Pool = await busdAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token1Dec
		
	pools[pid].lpTokenValueTotal = (currentApeBusdToDefy*token0Pool + token1Pool)
	let totalLiqInFarm = pools[pid].lpTokenValueTotal * (pools[pid].lpInFarm*1e18) / (pools[pid].totalSupply*1e18)
	
	$('.pool-liq-'+pid)[0].innerHTML = "" + totalLiqInFarm.toFixed(2)+'$'
	$('.total-pool-liq-'+pid)[0].innerHTML = "" + pools[pid].lpTokenValueTotal.toFixed(2)+'$'
}

