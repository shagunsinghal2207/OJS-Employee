
function View(){	
	
	this.View = function() {     
       this.employeeName=document.getElementById('employeeTxt').value;	
	   this.employeeDiv=document.getElementById("employeeDiv");     
    }()

	
    var rowTemplate = "<table>"+
				 	  "<tr>"+
				      "<td><label for='empBand'>Employee Band:</label>"+"</td>"+               
                      "<td><input type='text' name='empBand' value='BandValue' >"+" </td>"+ 
				      "</tr>"+
				      "<tr>"+
				      "<td><label for='empSalary'>Employee Salary:</label>"+"</td>"+ 
                      "<td><input type='text' name='empSalary' value='SalaryValue'>"+"</td>"+ 
				      "</tr>"+
				      "<tr>"+
				      "<td><label for='empDesigination'>Employee Designation:</label>"+"</td>"+ 
                      "<td><input type='text' name='empDesigination' value='DesignationValue'>"+"</td>"+ 
				      "</tr>"+
				      "<tr>"+
				      "<td><label for='empProject'>Employee Project:</label>"+"</td>"+ 
                      "<td><input type='text' name='empProject' value='ProjectValue'>"+"</td>"+ 
				      "</tr>"+
				      "</table>";

	// Loading Employee Data
	this.loadRow = function(rowData){			
		this.loadEmpdata(rowData);		
	}

	this.loadEmpdata = function(employeeData){		
		employeeDiv.innerHTML='';
		var newRowtemplate = rowTemplate.replace("BandValue", this.getEmployeeband(employeeData));
		newRowtemplate = newRowtemplate.replace("SalaryValue", this.getEmployeesalary(employeeData));
		newRowtemplate = newRowtemplate.replace("DesignationValue", this.getEmployeedesignation(employeeData));
		newRowtemplate = newRowtemplate.replace("ProjectValue", this.getEmployeeproject(employeeData));			
		employeeDiv.innerHTML += newRowtemplate;
	}

	//Get Employee Band
	this.getEmployeeband = function(employeeData){		
		for (var i = 0; i < employeeData.length; i++){
			if (employeeData[i].name == employeeName){
			 	return employeeData[i].Band;
			}
			 
		}
	}

	//Get Employee Designation
	this.getEmployeedesignation = function(employeeData){		
		for (var i = 0; i < employeeData.length; i++){
			if (employeeData[i].name == employeeName){
			 	return employeeData[i].Designation;
			}
		}
	}

	//Get Employee Salary
	this.getEmployeesalary = function(employeeData){		
		for (var i = 0; i < employeeData.length; i++){
			if (employeeData[i].name == employeeName){
			 	return employeeData[i].Salary;
			}
		}
	}

	//Get Employee Project
	this.getEmployeeproject = function(employeeData){		
		for (var i = 0; i < employeeData.length; i++){
			if (employeeData[i].name == employeeName){
			 	return employeeData[i].Project;
			}
		}
	}	
}


