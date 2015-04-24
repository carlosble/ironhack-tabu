function containsTabuWord(recognizedSentence, tabuWords){
    var sentence_array = recognizedSentence.split(" ");
    var i;
    for (i = 0; i < sentence_array.length; i++){
        if (tabuWords.indexOf(sentence_array[i]) > -1) return true;
    }    
    return false; 
}