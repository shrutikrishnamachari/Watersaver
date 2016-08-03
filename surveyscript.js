

function showerGals(){
  //calculates total number of gallons used by shower
  var showerTimes = Number(document.getElementById("showeroften").value); //number of showers per week
  var showerMins= Number(document.getElementById("showertime").value); //number of minutes per shower

  if (document.getElementById("showertype").value == "Standard"){ //if shower is standard, the type is false and vice versa
    showerType = false;
  }else{
    showerType = true;
  }
  if (showerType == true){
    showerGal = (showerTimes * (showerMins * 2)); //shower gallons for energy saving
  }else{
    showerGal = (showerTimes * (showerMins * 5)); //shower gallons for standard
  }
  return showerGal;
}



function faucetGals(){
  //calculates the total gallons used by all faucets
  var bFaucetType, kFaucetType, oFaucetType; 
  var faucetGal = 0; //total gallons used by faucet starts at 0
  var bFaucetTimes= Number(document.getElementById("bathfaucetoften").value); //bathroom faucet uses per day
  var bFaucetMins= Number(document.getElementById("bathfaucettime").value); //bathroom faucet mins per use
  var kFaucetTimes= Number(document.getElementById("kitchenfaucetoften").value); //kitchen faucet uses per day
  var kFaucetMins= Number(document.getElementById("kitchenfaucettime").value); //kitchen faucet mins per use
  var oFaucetTimes= Number(document.getElementById("otherfaucetoften").value); //other faucet uses per day
  var oFaucetMins= Number(document.getElementById("otherfaucettime").value); //other faucet mins per use

  if (document.getElementById("bathfaucettype").value == "Standard"){
    bFaucetType = false;
  }else{
    bFaucetType = true;
  }
  if (document.getElementById("kitchenfaucettype").value == "Standard"){
    kFaucetType = false;
  }else{
    kFaucetType = true;
  }
  if (document.getElementById("otherfaucettype").value == "Standard"){
    oFaucetType = false;
  }else{
    oFaucetType = true;
  }

  if (bFaucetType == true){
    //calculates total gallons by adding each type of faucet's usage together to faucetGal
    faucetGal += 7 * (bFaucetTimes * (bFaucetMins * 0.5));
  }else{
    faucetGal += 7 * (bFaucetTimes * (bFaucetMins * 2.5));
  }
  if (kFaucetType == true){
    faucetGal += 7 * (kFaucetTimes * (kFaucetMins * 0.5));
  }else{
    faucetGal += 7 * (kFaucetTimes * (kFaucetMins * 2.5));
  }
  if (bFaucetType == true){
    faucetGal += 7 * (oFaucetTimes * (oFaucetMins * 0.5));
  }else{
    faucetGal += 7 * (oFaucetTimes * (oFaucetMins * 2.5));
  }
  return faucetGal;
}



function washingMachineGals(){
  var washingMachineTimes= Number(document.getElementById("washingmachineoften").value); //loads per week
  var washingMachineType; //type of machine

  if (document.getElementById("machinetype").value == "Standard"){
    washingMachineType = false;
  }else{
    washingMachineType = true;
  }

  if (washingMachineType == true){
    washingMachineGal = washingMachineTimes * 22.5; //gallons for energy saving machine
  }else{
    washingMachineGal = washingMachineTimes * 37; //gallons for standard
  }
  return washingMachineGal;
}



function dishWasherGals(){
  var dishWasherType;
  var dishWasherTimes= Number(document.getElementById("dishwasheroften").value); //loads per week

  if (document.getElementById("dishtype").value == "Standard"){
    dishWasherType = false;
  }else{
    dishWasherType = true;
  }
  if (dishWasherType == true){ 
    dishWasherGal = dishWasherTimes * 5.5; //gallons for energy saving machine
  }else{
    dishWasherGal = dishWasherTimes * 12.5; //gallons for standard
  }
  return dishWasherGal;
}



function toiletGals(){
  var toiletType;
  var toiletTimes= Number(document.getElementById("toiletoften").value); //toilet uses per day

  if (document.getElementById("toilettype").value == "Older"){
    toiletType = false;
  }else{
    toiletType = true;
  }

  if (toiletType == true){
    toiletGal = 7* (toiletTimes * 1.6); //gallons for newer toilet
  }else{
    toiletGal = 7 * (toiletTimes * 5); //gallons for older toilet
  }
  return toiletGal;

}


var total;
var showerGal, faucetGal,washingMachineGal,dishWasherGal,toiletGal;

function setVariables(showerGals,faucetGals,washingMachineGals,dishWasherGals,toiletGals){
  showerGal = showerGals;
  faucetGal = faucetGals;
  washingMachineGal = washingMachineGals;
  dishWasherGal = dishWasherGals;
  toiletGal = toiletGals;
  alert(totalGals());
}

function totalGals(){
  var totalGal = 0; //total water gallons starts at 0
  totalGal = showerGal + faucetGal + washingMachineGal + dishWasherGal + toiletGal; //using helper funcions (which return the total gallons for that machine) to add all the water usage from different machines together
  localStorage.setItem("totalGallons", totalGal); //stores total gallons to be used on next
  total=totalGal;
  return totalGal;
}

