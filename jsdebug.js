

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


function testAjax33(url, outDiv) {
	//alert(area);return;
$.ajax({
  url: url,
  data: {
    zipcode: 97201
  },
  success: function( result ) {
   // return result;
	//$( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
	outDiv.html(result);
	
	// if ('Middle'=== area) {
		  // $( "#middle" ).html( "<strong>" + result + "</strong>" );
    // }
	// if ('Right'=== area) {
		  ////$( "#right" ).html(result);
		  // outDiv.html(result);
    // }
  },
  error: function (xhr, status, error) {
    var err = status;
    //var err = eval("(" + xhr.responseText + ")");
    // var acc = []
    // $.each(status, function(index, value) {
    //     acc.push(index + ': ' + value);
    // });
    //var err=JSON.stringify(acc);
    //$( "#middle" ).html( '<span style="color:Red;">' + err + "</span>" );
	outDiv.html( '<span style="color:Red;">' + err + "</span>" );
	//$( "#right" ).html( '<span style="color:Red;">' + err + "</span>" );
	
  }
});	
}

// function testAjax22(url, area) {
	// //alert(area);return;
// $.ajax({
  // url: url,
  // data: {
    // zipcode: 97201
  // },
  // success: function( result ) {
   // // return result;
	// //$( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
	  // if ('Middle'=== area) {
		  // $( "#middle" ).html( "<strong>" + result + "</strong>" );
    // }
  // },
  // error: function (xhr, status, error) {
    // var err = status;
    // //var err = eval("(" + xhr.responseText + ")");
    // // var acc = []
    // // $.each(status, function(index, value) {
    // //     acc.push(index + ': ' + value);
    // // });
    // //var err=JSON.stringify(acc);
    // $( "#middle" ).html( '<span style="color:Red;">' + err + "</span>" );
  // }
// });	
// }

function go(fn)
{
//alert("go "+fn); return;
  //var str="/cgi-bin/cgi/ngfop/lwpyahoo.pl?jsquery="+fn
  var str="http://www.joeschedule.com/cgi-bin/cgi/ngfop/lwpyahoo.cgi?jsquery="+fn;
	// FM 6/18/8 parent.middle.location=str;
   //top.frames[2].location=str;   
   testAjax33(str, $("#middle" ));
   //$( "#middle" ).html( testAjax22(str, 'MiddleTest') );

}

function dbg_getListItem(iii)
{
    return "\74picture>"+gStr+"\74/picture>";
}

function notifytop(xml, name)
{
    alert('notifytop('+xml+', '+name);  
}

// top functions
function myshowMiddle(id, href)
{
    var element = document.getElementById(id);
    alert(href);
    if (!href) {return;}

    var str = "http://www.joeschedule.com"+ href;
	  testAjax33(str, $("#middle" ));


     //element.classList.toggle("mystyle");
     //element.classList.toggle("hover-item:hover");

    //   for (i = 1; i < 4; i++) { 
    //       if (i != id) {         
    //       element = document.getElementById(i);
    //      // element.classList.toggle("hover-item:hover");
    // //      //element.style.cssText ="color: blue; border: 1px solid black";
    //       element.style.cssText =" background-color: black;";
    //      }
    //   }
}

// function getEventTarget(e) {
//     e = e || window.event;
//     return e.target || e.srcElement; 
// }

// var ul = document.getElementById('ulSchedules');
// ul.onclick = function(event) {
//     var target = getEventTarget(event);
//     target.innerHTML && alert("debug: "+ target.innerHTML);
// };

