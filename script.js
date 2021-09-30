function food() {
    var input = document.getElementsByName("foodchart");
    var total = 0;
    for (var i = 0; i < input.length; i++) {
      if (input[i].checked) {
        total += parseFloat(input[i].value);
      }
    }
    
    }
   function total(){
    var input = document.getElementsByName("foodchart");
    var totalSum = 0;
    var prodName="";
    for (var i = 0; i < input.length; i++) {
      if (input[i].checked) {
        totalSum += parseFloat(input[i].value);
        prodName +=input[i].id+" "+ parseFloat(input[i].value)+"   ";
      }
    }
    document.getElementById("total").value = prodName + "   total amount =" + totalSum.toFixed(2);
   }