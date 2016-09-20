
function Controller(){
    
	this.init=function(){
		var jsonObj = new Jsonservice();   				  //JsonService object
		var jsonData = jsonObj.loadjsonData();		
		var viewObj = new View();		                 //View object
		viewObj.loadRow(jsonData);
	}	
};
