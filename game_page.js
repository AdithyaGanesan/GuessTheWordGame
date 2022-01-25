player1name=localStorage.getItem("player-1 name");
player2name=localStorage.getItem("player-2 name");
player1score=0
player2score=0
question_turn="player1";
answer_turn="player2";
document.getElementById("player-1_name").innerHTML=player1name+":"
document.getElementById("player-2_name").innerHTML=player2name+":"
document.getElementById("player-1_score").innerHTML=player1score;
document.getElementById("player-2_score").innerHTML=player2score;
document.getElementById("player_question").innerHTML="question turn: "+player1name;
document.getElementById("player_answer").innerHTML="answer turn: "+player2name;

function send() {
    get_word= document.getElementById("word").value
    word=get_word.toLowerCase();
    console.log("word in LowerCase="+word);

    charAt1=word.charAt(1);
    console.log(charAt1);
    
    length_divide_2= Math.floor(word.length/2);
    charAt2=word.charAt(length_divide_2);
    console.log(charAt2);

    length_minus_1=word.length-1;
    charAt3=word.charAt(length_minus_1);
    console.log(charAt3);

    remove_CharAt1=word.replace(charAt1,"_");
    remove_charAt2=remove_CharAt1.replace(charAt2,"_");
    remove_charAt3=remove_charAt2.replace(charAt3,"_");
    console.log(remove_charAt3);

    question_word="<h4 id='word_display'> Q."+remove_charAt3+"</h4>";
    input_box="<br>Answer:<input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
} 
function check(){
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    console.log("Answer in lowercase="+answer);
    if(answer==word){
        if(answer_turn=="player1"){
            player1score=player1score+1;
            document.getElementById("player-1_score").innerHTML=player1score;
        }
        else{
            player2score=player2score+1;
            document.getElementById("player-2_score").innerHTML=player2score;
        }
    }
    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML="question turn-"+player2name
    }
    else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML="question turn-"+player1name
    }
    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="answer turn-"+player2name
    }
    else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="answer turn-"+player1name
    }
    document.getElementById("output").innerHTML="";
}