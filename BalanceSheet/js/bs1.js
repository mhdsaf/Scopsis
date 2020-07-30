
	$(document).ready(function(){
		//Set the date properly
		var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
		var d = new Date();
		var day = d.getDate();
		var month = months[d.getMonth()];
		var year = d.getFullYear();
		var fullDate = day + " " + month + " " + year;
		$("#c2").append(fullDate);
		//End date
		
		//Import the values:
		
		var cash = localStorage.getItem("cash2");
		var ar = localStorage.getItem("ar2");
		var nr = localStorage.getItem("nr2");
		var te = localStorage.getItem("te2");
		var ap = localStorage.getItem("ap2");
		var np = localStorage.getItem("np2");
		var sc = localStorage.getItem("sc2");
		var dividents = localStorage.getItem("dividents2");
		var re = localStorage.getItem("re2");
		var profits = localStorage.getItem("profits2");
		
		// Got all the values
		
		// change variables into ints
		
		var cash = parseInt(cash);
		var ar = parseInt(ar);
		var nr = parseInt(nr);
		var te = parseInt(te);
		var ap = parseInt(ap);
		var np = parseInt(np);
		var sc = parseInt(sc);
		var dividents = parseInt(dividents);
		var re = parseInt(re);
		var profits = parseInt(profits);
		
		//End
		//Now get the sums
		
			var totalAssets = cash + ar + nr + te;
			
			var totalLiability = ap + np;
			
			var totalEquity = sc + (-dividents) + (re + profits);
		
		//End of sums
		
		//Now print in the apropriate divs
		
		$("#cash").html("$" + "" + cash);
		$("#ar").html("$" + "" + ar);
		$("#nr").html("$" + "" + nr);
		$("#te").html("$" + "" + te);
		$("#ap").html("$" + "" + ap);
		$("#np").html("$" + "" + np);
		$("#sc").html("$" + "" + sc);
		$("#dividents").html("$" + "" + dividents);
		$("#re").html("$" + "" + re);
		$("#profits").html("$" + "" + profits);
		$("#teq").html("$" + "" + totalEquity);
		$("#ta").html("$" + "" + totalAssets);
		$("#tl").html("$" + "" + totalLiability);
	});