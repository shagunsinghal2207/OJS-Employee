
	function Jsonservice(){

	this.loadjsonData = function(){										//Loading Json Data..
		var employeeData = JSON.parse(JSON.stringify(employeeJson));
		return employeeData;
		}	
	}

