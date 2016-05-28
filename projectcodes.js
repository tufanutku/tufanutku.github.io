var aminoAcids = 
    {
        "GCU" : "Alanine", "GCC" : "Alanine", "GCA" : "Alanine", "GCG": "Alanine",
        "CGU" : "Arginine", "CGC" : "Arginine", "CGA" : "Arginine", "AGA" : "Arginine", "AGG" : "Arginine", "CGG": "Argine",
        "AAU" : "Asparagine", "AAC": "Asparagine",
        "GAU" : "Aspartic Acid", "GAC" : "Aspartic Acid",
        "UGU" : "Cystine", "UGC" : "Cystine",
        "GAA" : "Glutamic Acid", "GAG" : "Glutamic Acid",
        "CAA" : "Glutamine", "CAG": "Glutamine",
        "GGU" : "Glycine", "GGC": "Glycine", "GGA": "Glycine", "GGG": "Glycine",
        "CAU" : "Histidine", "CAC": "Histidine",
        "AUU" : "Isoleucine", "AUC": "Isoleucine", "AUA": "Isoleucine",
        "UUA" : "Leucine", "UUG" : "Leucine", "CUU": "Leucine", "CUC": "Leucine", "CUA": "Leucine", "CUG": "Leucine",
        "AAA" : "Lysine", "AAG": "Lysine",
        "AUG" : "Methionine",
        "UUU" : "Phenylalanine", "UUC": "Phenylalanine",
        "CCU" : "Proline", "CCC": "Proline", "CCA": "Proline", "CCG": "Proline",
        "UCU" : "Serine", "UCC": "Serine", "UCA": "Serine", "UCG": "Serine", "AGU": "Serine", "AGC": "Serine",
        "ACU" : "Theronine", "ACC": "Theronine", "ACA": "Theronine", "ACG": "Theronine",
        "UGG" : "Tryptophan",
        "UAU" : "Tyrosine", "UAC": "Tyrosine",
        "GUU" : "Valine", "GUC": "Valine", "GUA": "Valine", "GUG": "Valine",
        "UAG" : "STOP!", "UAA": "STOP!", "UGA": "STOP!"
    }
;
var nucleotides = ['U','A','G','C'];
var correct = [];

function handleDrop(aminoAcidConstruct, templateConstruct) {
    if  (data('codon').codon === data('anticodon').anticodon){
        console.log("1");
        $('this').draggable('disable').attr('class', 'done');
        correct++;
    }   
}

function templateConstruct() {
    for (var o=0; o < 8; o++){
        var codon = "";
        for(var i=0; i < 3; i++) {
            codon += (nucleotides[parseInt(Math.random()*4)]);
        } 
        $('#template').append("<div id='" + codon + "' class='codon'>" + codon + "</div>")
                .droppable({ 
                    drop: handleDrop
            })
                    .data('codon', +codon);
    }
    $('#Start').attr("disabled", true);
    $('#Start').attr("value","Initiated!");
    $('#Shuffle').attr("disabled", false);
    aminoAcidConstruct(setDraggable);
}
function aminoAcidConstruct(cbf) {
    for (var t=0; t < 31; t++) {
        var anticodon = "";
        for(var i=0; i < 3; i++) {anticodon += (nucleotides[parseInt(Math.random()*4)]);
        }
        $('#store').append("<div id='" + anticodon + "' class='aa ui-draggable'>" + aminoAcids[anticodon] + " (" + anticodon + ")</div>")
                .attr("display","inline-block").data('anticodon', "+codon");
    }
    cbf();
    
}
function setDraggable(){
    $('.aa').draggable();
}



function shuffle () {
    $('.aa').remove();
   aminoAcidConstruct(setDraggable);
}
