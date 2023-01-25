document.onload = test();

function test(){
    document.getElementById("Button").addEventListener("click", () => console.log("Hallo"))
}