function addPlayer(){
    player1_name=document.getElementById("player-1nameinput").value;
    player2_name=document.getElementById("player-2nameinput").value;
    localStorage.setItem("player-1 name",player1_name);
    localStorage.setItem("player-2 name",player2_name);
    window.location.replace("game_page.html");

}

