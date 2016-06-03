var aminoAcidsNames = 
    {
        "GCU" : "Alanine", "GCC" : "Alanine", "GCA" : "Alanine", "GCG": "Alanine",
        "CGU" : "Arginine", "CGC" : "Arginine", "CGA" : "Arginine", "AGA" : "Arginine", "AGG" : "Arginine","CGG": "Argine",
        "AAU" : "Asparagine", "AAC": "Asparagine",
        "GAU" : "Aspartic Acid","GAC" : "Aspartic Acid",
        "UGU" : "Cystine", "UGC" : "Cystine",
        "GAA" : "Glutamic Acid","GAG" : "Glutamic Acid",
        "CAA" : "Glutamine", "CAG": "Glutamine",
        "GGU" : "Glycine", "GGC": "Glycine", "GGA": "Glycine", "GGG": "Glycine",
        "CAU" : "Histidine", "CAC": "Histidine",
        "AUU" : "Isoleucine", "AUC": "Isoleucine", "AUA": "Isoleucine",
        "UUA" : "Leucine","UUG" : "Leucine","CUU": "Leucine","CUC": "Leucine", "CUA": "Leucine","CUG": "Leucine",
        "AAA" : "Lysine", "AAG": "Lysine",
        "AUG" : "Methionine",
        "UUU" : "Phenylalanine","UUC": "Phenylalanine",
        "CCU" : "Proline", "CCC": "Proline", "CCA": "Proline","CCG": "Proline",
        "UCU" : "Serine", "UCC": "Serine", "UCA": "Serine", "UCG": "Serine", "AGU": "Serine","AGC": "Serine",
        "ACU" : "Theronine","ACC": "Theronine", "ACA": "Theronine", "ACG": "Theronine",
        "UGG" : "Tryptophan",
        "UAU" : "Tyrosine","UAC": "Tyrosine",
        "GUU" : "Valine", "GUC": "Valine","GUA": "Valine", "GUG": "Valine",
        "UAG" : "STOP!", "UAA": "STOP!", "UGA": "STOP!"
    };
var aminoAcids = ['GCU', 'GCC', 'GCA', 'GCG', 'CGU','CGC','CGA','AGA', 'AGG','CGG','AAU', 'AAC','GAU', 'GAC', 'UGU', 'UGC',
    'GAA','GAG','CAA', 'CAG','GGU','GGC','GGA','GGG','CAU','CAC','AUU','AUC','AUA','UUA','UUG','CUU','CUC','CUA','CUG',
'AAA','AAG','AUG','UUU','UUC','CCU','CCC','CCA','CCG','UCU','UCC','UCA','UCG','AGU','AGC','ACU','ACC','ACA','ACG','UGG','UAU','UAC','GUU','GUC',
'GUA','GUG','UAG','UAA','UGA'];
var correct = [];
var wrong = [];
var initTime3 = [40];

function setCookie() {
    document.cookie = "finalTime3=" + document.getElementById("timeleft3").value;
}

function handleDrop3(aminoAcidConstruct3, templateConstruct3) {
     var droppableId = $(this).attr("id");
     var dragged = $(event.target).attr("id");
    if  (droppableId == dragged){
        console.log(event.target.id);
        console.log(droppableId);
        $(event.target).attr('class', 'done').attr('position','absolute');
        $('.done').draggable('disable');
        $('#message').html('Correct');
        correct++;
        if(correct == 8 ) {
            $('#message').html("Great! You have finished the game. Time left:"+initTime3);
            $('#next').attr('disabled',false);
            clearInterval(timer3);
            setCookie();
        }
    }else{
        $('#message').html('Wrong');
        console.log(event.target.id);
        console.log(droppableId);
        wrong++;      
    }   
}
function startInterval3() {
    timer3 = setInterval("countdown3()",1000);
}
function countdown3(){
    initTime3--;
    console.log(initTime3);
    $('#timeleft3').val(initTime3);
}

function templateConstruct3() {
    startInterval3();
    for (var o=0; o < 8; o++){
        for(var i=0; i < 64; i++) {
           var codon = (aminoAcids[parseInt(Math.random()*64)]);
        } 
        $('#template').append("<div id='" + codon + "' class='codon'>" + codon + "</div>");
    }
    $('#Start').attr("disabled", true);
    $('#Start').attr("value","Initiated!");
    aminoAcidConstruct3(setDraggable3);
}
function aminoAcidConstruct3(cbf3) {
    for (var t=0; t < 64; t++) {
        var anticodon = aminoAcids[t];
         $('#store').append("<div id='" + anticodon + "' class='aa'>" + aminoAcidsNames[anticodon] + " (" + anticodon + ")</div>")
                .attr("display","inline-block").data('anticodon', +anticodon);
    }
    cbf3();
    
}
function setDraggable3(){
    $('.aa').draggable();
    $('.codon').droppable({ 
                accept:'.aa',
                drop: handleDrop3
            });
}
function score() {
    var x = $.cookie("finalTime1");
    var y = $.cookie("finalTime2");
    var z = $.cookie("finalTime3");
    var finalTime = x + y + z;
    var score = (finalTime)*5 ;
    $('#message').html("Your score is"+score);
}