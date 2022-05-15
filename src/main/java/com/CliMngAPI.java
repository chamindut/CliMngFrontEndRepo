package com;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class CliMngAPI
 */
@WebServlet("/CliMngAPI")
public class CliMngAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
	CliMngJAVA cus = new CliMngJAVA(); 
	
	//convert request parameters to a map
		private static Map getParasMap(HttpServletRequest request) {
			Map<String, String> map = new HashMap<String, String>();

			try {
				Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
				String queryString = scanner.hasNext() ? scanner.useDelimiter("\\A").next() : "";
				scanner.close();

				String[] params = queryString.split("&");

				for (String param : params) {
					String[] p = param.split("=");
					map.put(p[0], p[1]);
				}
			} catch (Exception e) {

			}

			return map;
		}
	
	
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CliMngAPI() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//sending values to insert function
				String output = cus.insertCustomer(	request.getParameter("Cus_id"),
													request.getParameter("name"),
													request.getParameter("NIC"),
													request.getParameter("Email"),
													request.getParameter("Phone"),
													request.getParameter("Location"),
													request.getParameter("Password"),
													request.getParameter("age"),
													request.getParameter("Assign_eid"));
													
				//sending the output to client
				response.getWriter().write(output);
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//parameter map
		Map paras = getParasMap(request);
		
		//getting values from the map and sending to update function
				String output = cus.updateCustomer(	paras.get("hidCusIDSave").toString(),
													paras.get("name").toString(),
													paras.get("NIC").toString(),
													paras.get("Email").toString(),
													paras.get("Phone").toString(),
													paras.get("Location").toString(),
													paras.get("Password").toString(),
													paras.get("age").toString(),
													paras.get("Assign_eid").toString());
				
				//sending the output to client
				response.getWriter().write(output);
		
		
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//parameter map
				Map paras = getParasMap(request);

				//getting values from the map and sending to delete function
				String output = cus.deleteCus(	paras.get("Cus_id").toString());
				
				//sending the output to client
				response.getWriter().write(output);
	}

}
