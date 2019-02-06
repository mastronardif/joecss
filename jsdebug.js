

//alert('jsdebug.js');
//testAjax();

function testAjax(Area) {
	//alert(Area);
$.ajax({
  url: "http://joeschedule.com/cgi-bin/cgi/ngfop/isch3b.pl?id=Visitor&pw=visitor&htmlname=isch3b.htm&name=sch116356388.xml", //"https://developers.google.com/speed/libraries/#jquery", //"/api/getWeather",
  data: {
    zipcode: 97201
  },
  success: function( result ) {
    
	//$( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
	if ('MiddleTest'=== Area) {
		$( "#middle" ).html( "<strong>" + result + "</strong>" );
		//console.log(result);
	}
  }
});	
}