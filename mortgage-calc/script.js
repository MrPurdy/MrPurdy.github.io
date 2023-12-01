function doMath() {
    var P = Number(document.getElementById("P").value);
    var R = Number(document.getElementById("P").value);
    var T = Number(document.getElementById("P").value);
    var M = Number(document.getElementById("P").value);
    var N = 12;
    var B = (P*(1 + (R/N))**(N*T)) - ((M*((1 + (R/N))**(N*T)-1))/(R/N));
    var output = document.getElementById("output");
    output.innerText="$"+ B.toFixed(2);
}
function reset() {
    document.getElementById("P").value = "";
    document.getElementById("R").value = "";
    document.getElementById("T").value = "";
    document.getElementById("M").value = "";
    document.getElementById("output").innerHTML = "";
}