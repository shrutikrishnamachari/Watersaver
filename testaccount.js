


// Get the modal
        var modal = document.getElementById('myModal');

// Get the button that opens the modal
        var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
        btn.onclick = function() {
            modal.style.display = "block";
        }

// When the user clicks on <span> (submit), close the modal
        span.onclick = function() {
            modal.style.display = "none";
//calculates total number of gallons used by shower
            var showerMins= Number(document.getElementById("showertime").value); 
//number of minutes per shower

            if (document.getElementById("showertype").value == "Standard"){ 
// if shower is standard, the type is false and vice versa
                showerType = false;
            }else{
                showerType = true;
            }
            if (showerType == true){
                showerGal = (showerMins * 2); 
            }else{
                showerGal = (showerMins * 5); 
            }
            var element = document.getElementById("demo");
            element.innerHTML = showerGal + " gallons";
            return showerGal;
        }

// When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }   
// Get the modal
        var modal1 = document.getElementById('myModal1');

// Get the button that opens the modal
        var btn1 = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
        var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal
        btn1.onclick = function() {
            modal1.style.display = "block";
        }

// When the user clicks on <span> (submit), close the modal
        span1.onclick = function() {
            modal1.style.display = "none";
//calculates the total gallons used by all faucets
            var bFaucetType, kFaucetType, oFaucetType; 
            var faucetGal = 0; //total gallons used by faucet starts at 0
  
            var bFaucetMins= Number(document.getElementById("bathfaucettime").value); //bathroom faucet mins per use

            var kFaucetMins= Number(document.getElementById("kitchenfaucettime").value); //kitchen faucet mins per use

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
                faucetGal += 7 * (bFaucetMins * 0.5);
            }else{
                faucetGal += 7 * (bFaucetMins * 2.5);
            }
            if (kFaucetType == true){
                faucetGal += 7 * (kFaucetMins * 0.5);
            }else{
                faucetGal += 7 * (kFaucetMins * 2.5);
            }
            if (bFaucetType == true){
                faucetGal += 7 * (oFaucetMins * 0.5);
            }else{
                faucetGal += 7 * (oFaucetMins * 2.5);
            }

            var element = document.getElementById("demo");
            element.innerHTML = faucetGal + " gallons";
            return faucetGal;
}
// When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal1) {
                modal1.style.display = "none";
            }
}
// Get the modal
        var modal2 = document.getElementById('myModal2');

// Get the button that opens the modal
        var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
        var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal
        btn2.onclick = function() {
            modal2.style.display = "block";
        }

// When the user clicks on <span> (submit), close the modal
        span2.onclick = function() {
            modal2.style.display = "none";
            var washingMachineType; //type of machine

                if (document.getElementById("machinetype").value == "Standard"){
                    washingMachineType = false;
                }else{
                    washingMachineType = true;
                }
            
                if (washingMachineType == true){
                    washingMachineGal = 22.5; //gallons for energy saving machine
                }else{
                    washingMachineGal = 37; //gallons for standard
                }
            var element = document.getElementById("demo");
            element.innerHTML = washingMachineGal;

        }

// When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal2) {
            modal2.style.display = "none";
            }

 }  

 // Get the modal
        var modal3 = document.getElementById('myModal3');

// Get the button that opens the modal
        var btn3 = document.getElementById("myBtn3"); 
// Get the <span> element that closes the modal
        var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks the button, open the modal
        btn3.onclick = function() {
            modal3.style.display = "block";
        }
// When the user clicks on <span> (submit), close the modal
        span3.onclick = function() {
            modal3.style.display = "none";
            var dishwasher; //type of machine
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
  
        }
// When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal3) {
            modal3.style.display = "none";
            }

 }  