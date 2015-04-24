var recognizer = {
  	    init: function(){
  	    		var self = this;
					  this._recognition = new webkitSpeechRecognition();
						this._recognition.continuous = true;
						this._recognition.interimResults = true;
						this._recognition.lang = "es";
						this._recognition.addEventListener('result', function (event) {
					     for (var i = event.resultIndex; i < event.results.length; ++i) {
                  
	                   self._callback(event.results[i][0].transcript);
	             }
	          });
  	    },
        start: function(){ 
            this._recognition.start();
            //var self = this;
            //self._recognition.start();
        },
        stop: function(){
            this._recognition.stop();
        },
        onRecognize: function(callback){
        	  this._callback = callback;
        }
  };

//-------------------------------------------------------
//TO CALL ONLY ONCE WHEN START:

//recognizer.init(); 

//-------------------------------------------------------

//HOW TO CALL OUR METHOD TO GET THE STRING:
// THE STRING IS SEND IN THE VARIABLE ---> recognizedText

/* 
  recognizer.onRecognize(function(recognizedText){
      //console.log("Recognized:", recognizedText);
      console.log(recognizedText);
  });*/

//-------------------------------------------------------

// TO START --> recognizer.start();

//-------------------------------------------------------
// TO STOP --> recognizer.stop();

//-------------------------------------------------------



