context = describe;

// production code here:
function containsTabuWord(recognizedSentence, tabuWords){
    if (recognizedSentence === tabuWords[0]){
      return true;
    }; 
    return false;  
}


// tests:

  describe("tabu's validator function", function(){
    it("knows that sentence contains tabu word", function(){
        var result = containsTabuWord("monkey", ["monkey"]);
        expect(result).toBeTruthy(); 
    });

    it("know that the tabu word is not present in the recognized sentence", function(){
        var result = containsTabuWord("some", ["monkey"]);
        expect(result).toBeFalsy(); 
    });
    
  });


  