
var submitRequest = function() {
	console.log($('#reqForm').serialize());
	$.ajax({
        type:"get",
        async:true,
        url:"http://ld9415:8002/ta/TravelAnalysis/xsjs/newTraReq.xsjs",
        data: $('#reqForm').serialize(),
        success:function(json){
           alert("abc");
       },
       error:function(){
           alert('Fail to connect to HANA server!');
       }
	});
};