context = describe;

// production code here:
function containsTabuWord(recognizedSentence, tabuWords){
}


// tests:

  describe("tabu's validator function", function(){
    it("know that sentence contains tabu word", function(){
        var result = containsTabuWord("monkey", ["monkey"]);
        expect(result).toBeTruthy(); 
    });

    xit("know that the tabu word is not present in the recognized sentence", function(){
        var result = containsTabuWord(
                          "some recognized text", ["monkey"]);
        expect(result).toBeFalsy(); 
    });
    
  });


  