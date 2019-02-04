	
function generateTextTop() {
	if (1==1) {
		document.write(
`
<form name = "myformtop" method="post" action="/cgi-bin/cgi/ngfop/top.pl">



  <input type="hidden" NAME="leftsrc" value="cb"/>

  <input type="hidden" NAME="leftvalue" value="blank.xml"/>

  <input type="hidden" NAME="leftfname" value="blank.xml"/>

  <input type="hidden" NAME="leftfdesc" value=""/>

  <input type="hidden" NAME="middlefname" value=""/>



<!-- FM 3/17/7    <table style="height:"100%;" height="100%" width="100%"border="0"> 

    <table style= "xxxxxheight:100%; width:100%; border:0">

-->

    <table height="100%" width="100%" border="0">



	<tr align="center">

	<td>     

 <!-- Students -->

 <SELECT NAME="Students"

     <MYSTUDENTS></MYSTUDENTS>


 <OPTION VALUE="1">Jake   

 <OPTION VALUE="1">Tyler   

 <OPTION VALUE="1">Frank   

 <OPTION VALUE="1">Jack   

 <OPTION VALUE="1">Edie   
    <OPTION VALUE="1">Student

</SELECT>   

    <!-- folders -->

	 <a class="menuitem" title="Folder" href="javascript:ShowExtra('Folder');"><IMG SRC="/cgi/ngfop/folder.gif" ALT="Folder" align="middle" width="20" height="22" border="1"></a>         

    <!--<a class="menuitem" title="Folders" href="javascript:ShowExtra('Folders');">F's</a> -->

  </td>

<td>      

      

<SELECT NAME="Extra" 

    style="text-transform: uppercase; color: navy; background: #C9E8FB; 

           font-family: Verdana; font-size:12px;">

	<OPTION VALUE="-1">MiddleTest



	<OPTION VALUE="3">

        ----------

<!--	<OPTION VALUE="3">*ijoepec -->



	<OPTION VALUE="4">Form

	<OPTION VALUE="1">Cards

	<OPTION VALUE="1">Reward

   <OPTION VALUE="1">Left2rt 

	<OPTION VALUE="3">Story

   <OPTION VALUE="3">*Matching

        <!--

   <OPTION VALUE="3">ABA

        <OPTION VALUE="3">Pix(1)

        <OPTION VALUE="3">*Edit Pix(3)

        <OPTION VALUE="3">*Prnt Pix(3)

        <OPTION VALUE="3">Pix(3)

        <OPTION VALUE="3">*Folder for:

        <OPTION VALUE="3">*List ABA for:

        <OPTION VALUE="3">*List My ABA

        <OPTION VALUE="3">*Student Prgs      

         -->

      <OPTION VALUE="3">Add a Student

	</SELECT>

    <a class="menuitem" title="Execute a command" href="javascript:ShowExtra(document.myform.Extra.options[document.myform.Extra.selectedIndex].text);">Go!</a> 
<a class="menuitem" title="Execute a command" href="javascript:testAjax(document.myformtop.Extra.options[document.myformtop.Extra.selectedIndex].text);">Go22!</a> 


      <!-- FM 6/26/8

    <a class="menuitem" title="pictures" href="javascript:ShowExtra('Pictures');">Pictures</a> 

      -->





<!-- Calander related stuff -->

<!--

<SELECT NAME="People" 

	style="color: navy; background: #C9E8FB; font-family: Verdana; font-size:12px;">

<CALANDER_USERS>

	<OPTION VALUE="1"><NAME>

</CALANDER_USERS>

</SELECT>



<SELECT NAME="date" 

	style="color: navy; background: #C9E8FB; font-family: Verdana; font-size:12px;">

	<OPTION VALUE="-1">Day

	<OPTION VALUE="1">Week

</SELECT>

		<a class="menuitem" onClick="ShowDate(document.myform.date.options[document.myform.date.selectedIndex].text);"

		title="Show Day or Week">Go! </a> 

-->

<!-- Calander related stuff -->



	<a class="menuitem" title="My Picture" href="javascript:myPicture();"><IMG SRC="/cgi/ngfop/ca1.gif" alt="My Picture" align="middle" width="23" height="15" border="1"></a>





	<a class="menuitem" title="copy left to right" href="javascript:cp2sch22();"><IMG SRC="/cgi/ngfop/rarrow1.gif" ALT="copy left to right" align="middle" width="23" height="15" border="1"></a>

    <a class="menuitem" title="Embed" href="javascript:cp2ebcb();">Embed</a> 



	<a class="menuitem" title="Create a new schedule or choice board"

		href="/cgi-bin/cgi/ngfop/other2.pl?htmlname=editschframe.htm&name=blank.xml" target="right">New</a> 



    <a class="menuitem" title="Edit" href="javascript:editSchedule2();" >Edit</a>

	<a class="menuitem" title="Delete" href="javascript:del();">Del</a> 



	 <a class="menuitem" title="Sign Out" href="javascript:top.location='/cgi-bin/cgi/ngfop/signin.pl?action=signout'">Sign Out</a>

	 <a class="menuitem" title="Help" href="javascript:help();">Help</a>



	</td>

    </tr>

  </table>

</form>
`);
	}
}
