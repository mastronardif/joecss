
var bodyText=["Remember, you are unique, just like everybody else.", "Too much agreement kills a good chat.", "Get your facts first, then you can distort them as you please.", "I intend to live forever. So far, so good.", "</p><p>A clear conscience is usually a sign of a bad memory.", "What's another word for Thesaurus?", "<h3>Heading</h3><p>Experience is something you don't get until just after you need it."]

//alert('jsdebug.js');
function generateTextRight() {
	if (1==1) {
		document.write(
`		<form name="myform" method="post" action="javascript:nothing('');">

	<tr>

	<!--

		<a class="menuitem" onclick = "save2('cb');"title="Save as a Choice board" href="#dummy">Sc</a>

        <a class="menuitem" onclick = "cutRow();" title="Cut a row"   href="#dummy">C</a>

		<a class="menuitem" onclick = "pasteRow();"title="Paste a row" href="#dummy">P</a>

		<a class="menuitem" onclick = "save2('sch');"title="Save as a Schedule board" href="#dummy">Ss</a>

	-->

	<td align="center">

		<a class="menuitem" title="Save As Choice Board" href="javascript:save2('cb');"><IMG SRC="/cgi/ngfop/tick6.gif" alt="Save as Choice Board" width="23" height="20" border="0"	style="vertical-align: middle"></a>

	</td>



	<td align="center">

		<a class="menuitem" title="Cut row" href="javascript:cutRow();"><IMG SRC="/cgi/ngfop/cut.gif" alt="Cut row" width="23" height="20" border="0"	style="vertical-align: middle"></a>

	</td>



	<td align="center">

		<a class="menuitem" title="insert row" href="javascript:insertRow();"><IMG SRC="/cgi/ngfop/darrow1.gif" alt="Insert row" width="23" height="20" border="0"	style="vertical-align: middle"></a>

	</td>



	<td align="center">

		<a class="menuitem" title="Reward" href="javascript:decorateRow('reward');"><IMG SRC="/cgi/ngfop/pin8.gif" alt="Reward" width="23" height="20" border="0"	style="vertical-align: middle"></a>

	</td align="center">



	<td align="center">

		<a class="menuitem" title="Paste row" href="javascript:pasteRow();"><IMG SRC="/cgi/ngfop/paste.gif" alt="Paste row" width="23" height="20" border="0"	style="vertical-align: middle"></a>

	</td>



	<td align="center">

		<a class="menuitem"  title="Save As Schedule" href="javascript:save2('sch');"><IMG SRC="/cgi/ngfop/tick12.gif" alt="Save as Schedule" width="23" height="20" border="0"	style="vertical-align: middle"></a>

	</td>



	</tr>

	<tr>

  <td align="center">

     w:m

  </td>

	<td colspan="5" align="center">

	name:


		<input type text name=d0 size = 20 value="Enter name here!">
    	</td>

	</tr>

</form>

<form name="myform" method="post" action="/cgi-bin/cgi/ngfop/editsch.pl?action=save">

<!-- hidden shits -->

<input type="hidden" name=name size = "10" value="blank.xml">  <input type="hidden" name=type size = "10" value="">

  <input type="hidden" name=d0 size = "30" value="">

  <input type="hidden" name=student size = "30" value="">   

<input type="hidden" name="SWMs" value=""/>

<table border="1" cellpadding="0" width="100%">


          <tr>
            <td width="5%">
               <!-- stude w m's -->
      <input type="checkbox" name="CW1" value="ON" >:<input type="checkbox" name="CM2" value="ON" >               
         <input type="hidden" NAME="HCW1" value=""> <input type="hidden" NAME="HCM2" value="">
               <!-- stude w m's -->

            <input type="text" name="T1" size="4" value="" checked>
            </td>

            <td width="5%">
            <input type="radio" name="R1">
            </td>

            <td width="64%">
			<input type="hidden" NAME="HR55" value="">
			<img NAME="I55" border="0" src="" width="12px" height="40px">         
			<input type="text" name="R55" size = "24" value = "">
			</td>
         </tr>

          <tr>
            <td width="5%">
               <!-- stude w m's -->
      <input type="checkbox" name="CW1" value="ON" >:<input type="checkbox" name="CM2" value="ON" >               
         <input type="hidden" NAME="HCW1" value=""> <input type="hidden" NAME="HCM2" value="">
               <!-- stude w m's -->

            <input type="text" name="T1" size="4" value="" checked>
            </td>

            <td width="5%">
            <input type="radio" name="R1">
            </td>

            <td width="64%">
			<input type="hidden" NAME="HR55" value="">
			<img NAME="I55" border="0" src="" width="12px" height="40px">         
			<input type="text" name="R55" size = "24" value = "">
			</td>
         </tr>

          <tr>
            <td width="5%">
               <!-- stude w m's -->
      <input type="checkbox" name="CW1" value="ON" >:<input type="checkbox" name="CM2" value="ON" >               
         <input type="hidden" NAME="HCW1" value=""> <input type="hidden" NAME="HCM2" value="">
               <!-- stude w m's -->

            <input type="text" name="T1" size="4" value="" checked>
            </td>

            <td width="5%">
            <input type="radio" name="R1">
            </td>

            <td width="64%">
			<input type="hidden" NAME="HR55" value="">
			<img NAME="I55" border="0" src="" width="12px" height="40px">         
			<input type="text" name="R55" size = "24" value = "">
			</td>
         </tr>

          <tr>
            <td width="5%">
               <!-- stude w m's -->
      <input type="checkbox" name="CW1" value="ON" >:<input type="checkbox" name="CM2" value="ON" >               
         <input type="hidden" NAME="HCW1" value=""> <input type="hidden" NAME="HCM2" value="">
               <!-- stude w m's -->

            <input type="text" name="T1" size="4" value="" checked>
            </td>

            <td width="5%">
            <input type="radio" name="R1">
            </td>

            <td width="64%">
			<input type="hidden" NAME="HR55" value="">
			<img NAME="I55" border="0" src="" width="12px" height="40px">         
			<input type="text" name="R55" size = "24" value = "">
			</td>
         </tr>

          <tr>
            <td width="5%">
               <!-- stude w m's -->
      <input type="checkbox" name="CW1" value="ON" >:<input type="checkbox" name="CM2" value="ON" >               
         <input type="hidden" NAME="HCW1" value=""> <input type="hidden" NAME="HCM2" value="">
               <!-- stude w m's -->

            <input type="text" name="T1" size="4" value="" checked>
            </td>

            <td width="5%">
            <input type="radio" name="R1">
            </td>

            <td width="64%">
			<input type="hidden" NAME="HR55" value="">
			<img NAME="I55" border="0" src="" width="12px" height="40px">         
			<input type="text" name="R55" size = "24" value = "">
			</td>
         </tr>

          <tr>
            <td width="5%">
               <!-- stude w m's -->
      <input type="checkbox" name="CW1" value="ON" >:<input type="checkbox" name="CM2" value="ON" >               
         <input type="hidden" NAME="HCW1" value=""> <input type="hidden" NAME="HCM2" value="">
               <!-- stude w m's -->

            <input type="text" name="T1" size="4" value="" checked>
            </td>

            <td width="5%">
            <input type="radio" name="R1">
            </td>

            <td width="64%">
			<input type="hidden" NAME="HR55" value="">
			<img NAME="I55" border="0" src="" width="12px" height="40px">         
			<input type="text" name="R55" size = "24" value = "">
			</td>
         </tr>

          <tr>
            <td width="5%">
               <!-- stude w m's -->
      <input type="checkbox" name="CW1" value="ON" >:<input type="checkbox" name="CM2" value="ON" >               
         <input type="hidden" NAME="HCW1" value=""> <input type="hidden" NAME="HCM2" value="">
               <!-- stude w m's -->

            <input type="text" name="T1" size="4" value="" checked>
            </td>

            <td width="5%">
            <input type="radio" name="R1">
            </td>

            <td width="64%">
			<input type="hidden" NAME="HR55" value="">
			<img NAME="I55" border="0" src="" width="12px" height="40px">         
			<input type="text" name="R55" size = "24" value = "">
			</td>
         </tr>

          <tr>
            <td width="5%">
               <!-- stude w m's -->
      <input type="checkbox" name="CW1" value="ON" >:<input type="checkbox" name="CM2" value="ON" >               
         <input type="hidden" NAME="HCW1" value=""> <input type="hidden" NAME="HCM2" value="">
               <!-- stude w m's -->

            <input type="text" name="T1" size="4" value="" checked>
            </td>

            <td width="5%">
            <input type="radio" name="R1">
            </td>

            <td width="64%">
			<input type="hidden" NAME="HR55" value="">
			<img NAME="I55" border="0" src="" width="12px" height="40px">         
			<input type="text" name="R55" size = "24" value = "">
			</td>
         </tr>

          <tr>
            <td width="5%">
               <!-- stude w m's -->
      <input type="checkbox" name="CW1" value="ON" >:<input type="checkbox" name="CM2" value="ON" >               
         <input type="hidden" NAME="HCW1" value=""> <input type="hidden" NAME="HCM2" value="">
               <!-- stude w m's -->

            <input type="text" name="T1" size="4" value="" checked>
            </td>

            <td width="5%">
            <input type="radio" name="R1">
            </td>

            <td width="64%">
			<input type="hidden" NAME="HR55" value="">
			<img NAME="I55" border="0" src="" width="12px" height="40px">         
			<input type="text" name="R55" size = "24" value = "">
			</td>
         </tr>

          <tr>
            <td width="5%">
               <!-- stude w m's -->
      <input type="checkbox" name="CW1" value="ON" >:<input type="checkbox" name="CM2" value="ON" >               
         <input type="hidden" NAME="HCW1" value=""> <input type="hidden" NAME="HCM2" value="">
               <!-- stude w m's -->

            <input type="text" name="T1" size="4" value="" checked>
            </td>

            <td width="5%">
            <input type="radio" name="R1">
            </td>

            <td width="64%">
			<input type="hidden" NAME="HR55" value="">
			<img NAME="I55" border="0" src="" width="12px" height="40px">         
			<input type="text" name="R55" size = "24" value = "">
			</td>
         </tr>







          <tr>
            <td width="5%" height="1">
              <!-- stude w m's -->
               <input type="checkbox" name="CW1" value="ON" >:<input type="checkbox" name="CM2" value="ON" >               
               <input type="hidden" NAME="HCW1" value=""> <input type="hidden" NAME="HCM2" value="">                  
              <!-- stude w m's -->
               
            <input type="text" name="T1" size="4" value="" checked >
            </td>

            <td width="5%">
            <input type="radio" name="R1">
            </td>

           <td width="64%">
			   <input type="hidden" NAME="HR55" value="">
			   <img NAME="I55" border="0" src="" width="40" height="40">
            <input type="text" name="R55" size = "24" value = "">
		    </td>
          </tr>

          <tr>
            <td width="5%" height="1">
              <!-- stude w m's -->
               <input type="checkbox" name="CW1" value="ON" >:<input type="checkbox" name="CM2" value="ON" >               
               <input type="hidden" NAME="HCW1" value=""> <input type="hidden" NAME="HCM2" value="">                  
              <!-- stude w m's -->
               
            <input type="text" name="T1" size="4" value="" checked >
            </td>

            <td width="5%">
            <input type="radio" name="R1">
            </td>

           <td width="64%">
			   <input type="hidden" NAME="HR55" value="">
			   <img NAME="I55" border="0" src="" width="40" height="40">
            <input type="text" name="R55" size = "24" value = "">
		    </td>
          </tr>

          <tr>
            <td width="5%" height="1">
              <!-- stude w m's -->
               <input type="checkbox" name="CW1" value="ON" >:<input type="checkbox" name="CM2" value="ON" >               
               <input type="hidden" NAME="HCW1" value=""> <input type="hidden" NAME="HCM2" value="">                  
              <!-- stude w m's -->
               
            <input type="text" name="T1" size="4" value="" checked >
            </td>

            <td width="5%">
            <input type="radio" name="R1">
            </td>

           <td width="64%">
			   <input type="hidden" NAME="HR55" value="">
			   <img NAME="I55" border="0" src="" width="40" height="40">
            <input type="text" name="R55" size = "24" value = "">
		    </td>
          </tr>

          <tr>
            <td width="5%" height="1">
              <!-- stude w m's -->
               <input type="checkbox" name="CW1" value="ON" >:<input type="checkbox" name="CM2" value="ON" >               
               <input type="hidden" NAME="HCW1" value=""> <input type="hidden" NAME="HCM2" value="">                  
              <!-- stude w m's -->
               
            <input type="text" name="T1" size="4" value="" checked >
            </td>

            <td width="5%">
            <input type="radio" name="R1">
            </td>

           <td width="64%">
			   <input type="hidden" NAME="HR55" value="">
			   <img NAME="I55" border="0" src="" width="40" height="40">
            <input type="text" name="R55" size = "24" value = "">
		    </td>
          </tr>

          <tr>
            <td width="5%" height="1">
              <!-- stude w m's -->
               <input type="checkbox" name="CW1" value="ON" >:<input type="checkbox" name="CM2" value="ON" >               
               <input type="hidden" NAME="HCW1" value=""> <input type="hidden" NAME="HCM2" value="">                  
              <!-- stude w m's -->
               
            <input type="text" name="T1" size="4" value="" checked >
            </td>

            <td width="5%">
            <input type="radio" name="R1">
            </td>

           <td width="64%">
			   <input type="hidden" NAME="HR55" value="">
			   <img NAME="I55" border="0" src="" width="40" height="40">
            <input type="text" name="R55" size = "24" value = "">
		    </td>
          </tr>

          <tr>
            <td width="5%" height="1">
              <!-- stude w m's -->
               <input type="checkbox" name="CW1" value="ON" >:<input type="checkbox" name="CM2" value="ON" >               
               <input type="hidden" NAME="HCW1" value=""> <input type="hidden" NAME="HCM2" value="">                  
              <!-- stude w m's -->
               
            <input type="text" name="T1" size="4" value="" checked >
            </td>

            <td width="5%">
            <input type="radio" name="R1">
            </td>

           <td width="64%">
			   <input type="hidden" NAME="HR55" value="">
			   <img NAME="I55" border="0" src="" width="40" height="40">
            <input type="text" name="R55" size = "24" value = "">
		    </td>
          </tr>

          <tr>
            <td width="5%" height="1">
              <!-- stude w m's -->
               <input type="checkbox" name="CW1" value="ON" >:<input type="checkbox" name="CM2" value="ON" >               
               <input type="hidden" NAME="HCW1" value=""> <input type="hidden" NAME="HCM2" value="">                  
              <!-- stude w m's -->
               
            <input type="text" name="T1" size="4" value="" checked >
            </td>

            <td width="5%">
            <input type="radio" name="R1">
            </td>

           <td width="64%">
			   <input type="hidden" NAME="HR55" value="">
			   <img NAME="I55" border="0" src="" width="40" height="40">
            <input type="text" name="R55" size = "24" value = "">
		    </td>
          </tr>

          <tr>
            <td width="5%" height="1">
              <!-- stude w m's -->
               <input type="checkbox" name="CW1" value="ON" >:<input type="checkbox" name="CM2" value="ON" >               
               <input type="hidden" NAME="HCW1" value=""> <input type="hidden" NAME="HCM2" value="">                  
              <!-- stude w m's -->
               
            <input type="text" name="T1" size="4" value="" checked >
            </td>

            <td width="5%">
            <input type="radio" name="R1">
            </td>

           <td width="64%">
			   <input type="hidden" NAME="HR55" value="">
			   <img NAME="I55" border="0" src="" width="40" height="40">
            <input type="text" name="R55" size = "24" value = "">
		    </td>
          </tr>

          <tr>
            <td width="5%" height="1">
              <!-- stude w m's -->
               <input type="checkbox" name="CW1" value="ON" >:<input type="checkbox" name="CM2" value="ON" >               
               <input type="hidden" NAME="HCW1" value=""> <input type="hidden" NAME="HCM2" value="">                  
              <!-- stude w m's -->
               
            <input type="text" name="T1" size="4" value="" checked >
            </td>

            <td width="5%">
            <input type="radio" name="R1">
            </td>

           <td width="64%">
			   <input type="hidden" NAME="HR55" value="">
			   <img NAME="I55" border="0" src="" width="40" height="40">
            <input type="text" name="R55" size = "24" value = "">
		    </td>
          </tr>

          <tr>
            <td width="5%" height="1">
              <!-- stude w m's -->
               <input type="checkbox" name="CW1" value="ON" >:<input type="checkbox" name="CM2" value="ON" >               
               <input type="hidden" NAME="HCW1" value=""> <input type="hidden" NAME="HCM2" value="">                  
              <!-- stude w m's -->
               
            <input type="text" name="T1" size="4" value="" checked >
            </td>

            <td width="5%">
            <input type="radio" name="R1">
            </td>

           <td width="64%">
			   <input type="hidden" NAME="HR55" value="">
			   <img NAME="I55" border="0" src="" width="40" height="40">
            <input type="text" name="R55" size = "24" value = "">
		    </td>
          </tr>
  </table>
</form>`
		);
	}
}

