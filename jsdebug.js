

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
	if ('Middle'=== Area) {
		$( "#middle" ).html( "<strong>" + result + "</strong>" );
		//console.log(result);
	}
  }
});	
}


function testAjax22(url, area) {
	//alert(area);return;
$.ajax({
  url: url,
  data: {
    zipcode: 97201
  },
  success: function( result ) {
   // return result;
	//$( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
	  if ('Middle'=== area) {
		  $( "#middle" ).html( "<strong>" + result + "</strong>" );
    }
  },
  error: function (xhr, status, error) {
    var err = status;
    //var err = eval("(" + xhr.responseText + ")");
    // var acc = []
    // $.each(status, function(index, value) {
    //     acc.push(index + ': ' + value);
    // });
    //var err=JSON.stringify(acc);
    $( "#middle" ).html( '<span style="color:Red;">' + err + "</span>" );
  }
});	
}

function go(fn)
{
//alert("go "+fn); return;
  //var str="/cgi-bin/cgi/ngfop/lwpyahoo.pl?jsquery="+fn
  var str="http://www.joeschedule.com/cgi-bin/cgi/ngfop/lwpyahoo.pl?jsquery="+fn;
	// FM 6/18/8 parent.middle.location=str;
   //top.frames[2].location=str;
   testAjax22(str, 'Middle');
   //$( "#middle" ).html( testAjax22(str, 'MiddleTest') );

}

function dbg_getListItem(iii)

{

    return "\74picture>"+gStr+"\74/picture>";



	var obj    = document.myform;



	var str;



	for (var iii = 0; iii < obj.elements.C1.length; iii++)

	{

		if (obj.elements.C1[iii].checked)

		{

			str = obj.elements.HR55[iii].value;



			break;

		}

	}



//	alert(gStr);





    //return "\74picture>"+str+"\74/picture>";



//alert("\74picture>"+str+"\74/picture>");

//	return _listData[iii];

}
