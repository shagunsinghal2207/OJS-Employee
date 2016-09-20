
function Employeeservice(){
	
	this.loadjsonData = function(){										//Loading Json Data..
		var employee = JSON.parse(JSON.stringify(employeeData));
		return employee;
	}	
}

