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
var initTime1 = [50];

function handleDrop(aminoAcidConstruct, templateConstruct) {
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
            $('#message').html("Great! You may proceed to Level 2! Time left:"+initTime1);
            $('#next').attr('disabled',false);
            clearInterval(timer1);
        }
    }else{
        $('#message').html('Wrong');
        console.log(event.target.id);
        console.log(droppableId);
        wrong++;      
    }   
}
function startInterval1() {
    timer1 = setInterval("countdown1()",1000);
}
function countdown1(){
    initTime1--;
    console.log(initTime1);
    $('#timeleft1').val(initTime1);
}

function templateConstruct() {
    startInterval1();
    for (var o=0; o < 8; o++){
        for(var i=0; i < 64; i++) {
           var codon = (aminoAcids[parseInt(Math.random()*64)]);
        } 
        $('#template').append("<div id='" + codon + "' class='codon'>" + codon + "</div>");
    }
    $('#Start').attr("disabled", true);
    $('#Start').attr("value","Initiated!");
    aminoAcidConstruct(setDraggable);
}
function aminoAcidConstruct(cbf) {
    for (var t=0; t < 64; t++) {
        var anticodon = aminoAcids[t];
         $('#store').append("<div id='" + anticodon + "' class='aa'>" + aminoAcidsNames[anticodon] + " (" + anticodon + ")</div>")
                .attr("display","inline-block").data('anticodon', +anticodon);
    }
    cbf();
    
}
function setDraggable(){
    $('.aa').draggable();
    $('.codon').droppable({ 
                accept:'.aa',
                drop: handleDrop
            });
}
