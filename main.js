$(document).ready(function() {
  $("#button").click(function() {
    //Call calues of Total and Tenderd to find change
    var totalSale = $("#totalSale").val();
    var totalCusTen = $("#totalCustomerTender").val();

    //Subtract to get the actual change
    var subChange = totalCusTen - totalSale;

    //Round to nearest two decimals
    var wholeChange = Math.round(subChange * 100) / 100;

    //Find whole dollar amount
    var dollars = Math.floor(wholeChange);

    //Grab change value to apply modulo operator to find each change coin being returned
    var change = Math.floor((wholeChange - dollars) * 100).toFixed(0);
    var quarters = Math.floor(change / 25).toFixed(0);
    change %= 25;
    var dimes = Math.floor(change / 10).toFixed(0);
    change %= 10;
    var nickels = Math.floor(change / 5).toFixed(0);
    change %= 5;
    var pennies = change

    $("#totalOutput").html('Your change is $' + wholeChange + '.');
    $("#totalDollars").html("Dollars: " + dollars);
    $("#totalQuarters").html("Quarters: " + quarters);
    $("#totalDimes").html("Dimes: " + dimes);
    $("#totalNickels").html("Nickels: " + nickels);
    $("#totalPennies").html("Pennies: " + pennies);
  })

});
