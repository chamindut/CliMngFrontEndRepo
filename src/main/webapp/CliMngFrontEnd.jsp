<%@page import="com.CliMngJAVA"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
   
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="Views/bootstrap.min.css">
		<script src="Components/jquery-3.6.0.min.js"></script>
        <script src="Components/items.js"></script>
		<title>Client Management</title>
	</head>
	<body>
		<div class="container">
			<div class="row">
				<div class="col">
					<h1>Client Management</h1>
					<form id="formCustomer" name="formCustomer" method="POST" action="CliMngFrontEnd.jsp">
						Customer ID: 
						<input 
							id="Cus_id" 
							name="Cus_id" 
							type="text" 
							class="form-control form-control-sm"
						><br>

						Customer Name: 
						<input 
							id="name"
							name="name" 
							type="text" 
							class="form-control form-control-sm"
						><br>

						NIC: 
						<input 
							id="NIC" 
							name="NIC" 
							type="text" 
							class="form-control form-control-sm"
						><br>

						Email Address: 
						<input 
							id="Email" 
							name="Email" 
							type="text" 
							class="form-control form-control-sm"
						><br>
						
						Phone Number: 
						<input 
							id="Phone" 
							name="Phone" 
							type="text" 
							class="form-control form-control-sm"
						><br>
						
						Customer Location: 
						<input 
							id="Location" 
							name="Location" 
							type="text" 
							class="form-control form-control-sm"
						><br>
						
						Account Password: 
						<input 
							id="Password" 
							name="Password" 
							type="text" 
							class="form-control form-control-sm"
						><br>
						
						Customer Age: 
						<input 
							id="Age" 
							name="Age" 
							type="text" 
							class="form-control form-control-sm"
						><br>
						
						Assigned Employee ID: 
						<input 
							id="Assign_eid" 
							name="Assign_eid" 
							type="text" 
							class="form-control form-control-sm"
						><br>

						

						<input 
							id="btnSave" 
							name="btnSave" 
							type="button" 
							value="Save" 
							class="btn btn-primary"
						>

						<input type="hidden" name="hidCusIDSave" id="hidCusIDSave" value="">
					</form>
				
					<br>
					<div id="alertSuccess" class="alert alert-success"></div>
					<div id="alertError" class="alert alert-danger"></div>
					<br>
					<div id="divCusGrid">
						<%
						CliMngJAVA cus = new CliMngJAVA(); 
							out.print(cus.readCustomers());
						%>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>