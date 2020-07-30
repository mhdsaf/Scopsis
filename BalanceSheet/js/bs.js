
	$(document).ready(function(){
		$("#sub").click(function(){
		var cash1 = $("#cash").val();
		var ar1 = $("#ar").val();
		var nr1 = $("#nr").val();
		var te1 = $("#te").val();
		var ap1 = $("#ap").val();
		var np1 = $("#np").val();
		var sc1 = $("#sc").val();
		var dividents1 = $("#dividents").val();
		var re1 = $("#re").val();
		var profits1 = $("#profits").val();
		localStorage.setItem("cash2",cash1);
		localStorage.setItem("ar2",ar1);
		localStorage.setItem("nr2",nr1);
		localStorage.setItem("te2",te1);
		localStorage.setItem("ap2",ap1);
		localStorage.setItem("np2",np1);
		localStorage.setItem("sc2",sc1);
		localStorage.setItem("dividents2",dividents1);
		localStorage.setItem("re2",re1);
		localStorage.setItem("profits2",profits1);
		
		});
	});