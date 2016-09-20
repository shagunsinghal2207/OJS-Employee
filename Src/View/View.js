
function View(){

	var employeeName=document.getElementById('employeeTxt').value;	
	var employeeDiv=document.getElementById("employeeDiv");
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

	this.loadEmpdata = function(rowData){		
		employeeDiv.innerHTML='';
		var newRowtemplate = rowTemplate.replace("BandValue",this.getEmployeeband(rowData));
		newRowtemplate = newRowtemplate.replace("SalaryValue",this.getEmployeesalary(rowData));
		newRowtemplate = newRowtemplate.replace("DesignationValue",this.getEmployeedesignation(rowData));
		newRowtemplate = newRowtemplate.replace("ProjectValue",this.getEmployeeproject(rowData));			
		employeeDiv.innerHTML += newRowtemplate;	

	}

//Get Employee Band
	this.getEmployeeband=function(rowData){		
		for (var i = 0; i < rowData.length; i++){
			 if (rowData[i].name == employeeName){
			 	return rowData[i].Band;
			 }
			 
		}
	}

//Get Employee Designation
	this.getEmployeedesignation=function(rowData){		
		for (var i = 0; i < rowData.length; i++){
			 if (rowData[i].name == employeeName){
			 	return rowData[i].Designation;
			 }
		}
	}

//Get Employee Salary
	this.getEmployeesalary=function(rowData){		
		for (var i = 0; i < rowData.length; i++){
			 if (rowData[i].name == employeeName){
			 	return rowData[i].Salary;
			 }
		}
	}

//Get Employee Project
	this.getEmployeeproject=function(rowData){		
		for (var i = 0; i < rowData.length; i++){
			 if (rowData[i].name == employeeName){
			 	return rowData[i].Project;
			 }
		}


	}


	
}


