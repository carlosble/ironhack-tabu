context = describe;
/*
// WORD SELECTOR TESTS:
    describe("TABU´s word selector function", function(){
    it("picks a random card", function(){
        var carddeck = {elefante: ["trompa", "grande", "dumbo", "orejas"],
            pingpong: ["mesa", "tenis", "red", "pelota"],
            italia: ["país", "pasta", "pizza", "europa"],
            sol: ["día", "astro", "luz", "calor"]};
        var result = pickRandomCardKey(carddeck);
            expect(result).toBe(elefante || pingpong || italia || sol); 
    });






});
*/





// VALIDATOR TESTS:
  describe("tabu's validator function", function(){
    it("knows that sentence contains tabu word", function(){
        var result = containsTabuWord("monkey", ["monkey"]);
        expect(result).toBeTruthy(); 
    });

    it("know that the tabu word is not present in the recognized sentence", function(){
        var result = containsTabuWord("some", ["monkey"]);
        expect(result).toBeFalsy(); 
    });
    

    it("know that the tabu word is present in the recognized sentence", function(){
        var result = containsTabuWord("monkey", ["dog","monkey"]);
        expect(result).toBeTruthy(); 
    });

    it("know that a tabu word is present in sentence with more than one word", function(){
        var result = containsTabuWord("spider monkey", ["dog","monkey"]);
        expect(result).toBeTruthy(); 
    });

    it("know that a tabu word is present in sentence with more than one word", function(){
        var result = containsTabuWord("spider cat monkey ", ["dog","monkey"]);
        expect(result).toBeTruthy(); 
    });
    
    it("know that a tabu word is present in sentence with more than one word", function(){
        var result = containsTabuWord("spider cat monkey true", ["dog", "monkey"]);
        expect(result).toBeTruthy(); 
    });

    
  });

  