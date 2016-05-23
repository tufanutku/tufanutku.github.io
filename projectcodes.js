var aminoAcids = [];
var nucleotides = ['U','A','G','C'];
var nuc = [];
var template = $('#template');
function templateConstruct() {
    
    
    
    codonConstruct();
    }
function nucleotideConstruct() {  
    for(var i=0; i < 3; i++) {
         
        (nucleotides[parseInt(Math.random()*4)]);
        console.log("nuc");
        template.append(nuc);
    }    
}
function codonConstruct() {
    for (var o=0; o < 8; o++){
        nucleotideConstruct();
    }   
}
