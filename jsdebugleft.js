
function generateTextLeft(where, sentenceCount) {
//if (1==1) {
//document.write
return(`
<form name = "myformL" method="POST" action="javascript:go(document.myformL.id.value);">
<font size="4" color="#FF0000"><b><i>Pictures</i></b></font>

&nbsp;&nbsp;Search For:
&nbsp;&nbsp;<input name="id" type=text size=25 name=gg>
<br>
&nbsp;&nbsp;<input type="button" value="Web! Search" onClick="javascript:go(document.myformL.id.value);">
<br>
<i>
<font size="1">
Web images may be subject to copyright.
</font>
</i>
</form>
<form name = "myform2" method="post" action="/cgi-bin/cgi/ngfop/each.cgi">
<hr></hr>
<!-- fm 6/18/7 -->
<font size="4" color="#FF0000"><b><i>Schedules by Category</i></b></font>
<br>
<font size="2" color="#FF0000"><b><i>My Schedules</i></b></font>
<br>

<input type="button" value="sch!" onClick="javascript:showMySchedules('sch', $('#cblist'));">
<input type="button" value="CB!" onClick="javascript:showMySchedules('cb', $('#cblist'));">
<input type="button" value="my Sch!" onClick="javascript:showMySchedules('mysch', $('#cblist'));">
<div id="cblist">my S</div>
</form>
`);
//}
}