
function Controller(){  
  
	this.init=function(){
		var json = new Employeeservice();   				  //JsonService object
		var jsonData = json.loadjsonData();		
		var view = new View();		                 //View object
		view.loadRow(jsonData);
	}	
}
