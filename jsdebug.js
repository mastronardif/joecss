

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

function getListItem(iii)
{
//    alert("\74picture>"+gStr+"\74/picture>");
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

	alert("jsdebug.js:  getListItem(iii) = "+ gStr);


    //return "\74picture>"+str+"\74/picture>";

//alert("\74picture>"+str+"\74/picture>");
//	return _listData[iii];
}

function dbg_getListItem(iii)
{
    return "\74picture>"+gStr+"\74/picture>";
}

function notifytop(fn, desc)
{
  //alert('notifytop('+fn+', '+desc);  
  setLeftValue("", fn, desc);
}

function setLeftValue(src, value, fdesc)
{
  // FM 10/13/7
  //alert("setLeftValue = "+src+", "+value+", "+fdesc); return;

  document.myformtop.leftfname.value = value;

  // FM 6/12/4

	document.myformtop.leftsrc.value = src;
  document.myformtop.leftvalue.value = value;
  document.myformtop.leftfdesc.value = fdesc;
}


// top functions
function showMySchedules(id, outDiv)
{
  //alert(outDiv);

  var str = "http://www.joeschedule.com/cgi-bin/cgi/ngfop/lwpyahoo.cgi?jsquery="+'Hawks';
  if (id === 'sch') {
    str = "http://www.joeschedule.com/cgi-bin/cgi/ngfop/left02.pl?htmlname=leftschcgi.htm";
  }
  else if (id === 'cb') {
    str = "/cgi-bin/cgi/ngfop/catagory.pl?htmlname=catagorycgi.htm";
  }
  else if (id === 'mypics') {
    str = "/cgi/ngfop/mypicshtml.cgi?htmlname=mypicscgi.htm";
  }

	testAjax33(str, outDiv);
}


function getLeftfDesc()
{
  var myf = document.myformtop;
	var leftsrc   = myf.leftsrc.value;

	if (leftsrc == "")
	{
		return myf.leftfdesc.value;
	}

	return "";
}

function getLeftFN(action)
{
// FM 6/12/04
var myf = document.myformtop;
if (action == "clear")
{
//	alert ("clear the global vars!!!");

	document.myform.leftsrc.value   = "";
	document.myform.leftvalue.value = "";
	document.myform.leftfname.value = "";
	return;
}
// FM 6/12/04

	//var objLeft    = parent.left;
	//var objLeftFrm = parent.left.myform;

	var leftsrc   = myf.leftsrc.value;
	var leftvalue = myf.leftvalue.value;
	var xmlfilename = myf.leftfname.value;

//alert("getLeftFN = "+leftsrc+", "+leftvalue+", "+xmlfilename);


	if (leftsrc == "")
	{
		xmlfilename = leftvalue;
		return xmlfilename;
	}

	return xmlfilename;
}

function cp2sch22()
{
   if(!getListItem) return;

   var szMid = getListItem();   
   
   if (szMid)
   {
	   test(szMid);
   }
}


function editSchedule2() {
  var xmlfilename = getLeftFN();  
  var str = "/cgi-bin/cgi/ngfop/editsch.cgi?htmlname=editschcgi.htm&action=edit&name="+xmlfilename;

  if (/blank.xml/i.test(xmlfilename))
	{
		var strMsg = "Click on the radio button to the left of the \nschedule you wish to edit";
		alert(strMsg);
		return;
	}
   
  //alert(str);
  testAjax33(str, $("#right" ));
  
}


function del()
{
	var fn  = getLeftFN();
	var desc= getLeftfDesc();

	var response = confirm("Are you sure you want to delete \n"+ desc+"\n("+fn+")?","");
	if (response == false)
		return;

	var str="/cgi-bin/cgi/ngfop/editsch.cgi?action=delete&htmlname=deletecgi.htm&name="+fn;

	//top.frames[3].location=str;
  // window.open(str);
  
  $.ajax({url: str, type: "GET",
        success: function( result ) {    	  
          $( "#middle" ).html( "<strong>" + result + "</strong>" );

          //showMySchedules('sch', $('#cblist'));
          /*
          var str   = "/cgi-bin/cgi/ngfop/left02.pl?htmlname=leftsch.htm";
          $.ajax({url: str, type: "GET",
            success: function( result ) {    	  
              $( "#left" ).html( "<strong>" + result + "</strong>" );
            }
          });         
************/
        }
  });

 	//parent.middle.location=str;
   //alert(str);

   // FM 7/8/8
	//var str = "/cgi-bin/cgi/ngfop/other2.pl?htmlname=left01frame.htm&name=blank.xml"
   var str   = "/cgi-bin/cgi/ngfop/left02.pl?htmlname=leftsch.htm";
	//top.frames[1].location=str;
   
	//parent.left.location=str;
   //parent.left[0].location=str;
   // FM 7/8/8

}


function myshowMiddle(id, src)
{
    //var element = document.getElementById(id);
    //alert(src);
    if (!src) {return;}

    var str = "http://www.joeschedule.com"+ src;   

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

function myPicture()
{
//	alert("user supplied picture.\n Go somewhere get a picture and paste it here.\n You can have local pictures this way and or picture from anywhere on the net.");

	src="/cgi-bin/cgi/ngfop/editsch.pl?action=edit&name=blank.xml&htmlname=mypicturecgi.htm";
  //parent.middle.location=src;
  testAjax33(src, $("#middle" ));

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


function ShowExtra(szExtra)
{
  var fn = getLeftFN();
  alert(szExtra+ "\n" +fn);
  template = "&htmlname=" + "template01.htm";
  var src="/cgi-bin/cgi/ngfop/editsch.pl?name=" + fn + template;

  if (szExtra === 'email') {
    src="/cgi-bin/cgi/ngfop/editsch.pl?name=" + fn + template;
  }
   
  if (szExtra === '*upload Images') {
    template = "?htmlname=" + "fileuploadimg33.html";
    src="/cgi-bin/cgi/ngfop/other2.pl" + template;
  }  

  if (szExtra === '*upload croped Images') {
    template = "?htmlname=" + "imgcrop.html";
    src="/cgi/ngfop/other2.pl" + template;
  }

  if (szExtra === '*My Pics') {
    template = "?htmlname=" + "mypicscgi.htm";
    src="/cgi/ngfop/mypicshtml.cgi" + template;
    testAjax33(src, $("#middle" ));
    return;
  }  

   alert("src= " + "\n" + src);
   window.open(src);

   
}
