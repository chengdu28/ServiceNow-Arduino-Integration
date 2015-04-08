# ServiceNow-Arduino-Integration
This integration will connect an Arduino to a computer. An application on the computer will consume web service which will check ServiceNow for Critical (P1) incidents in a New status.

<h1>Getting Started</h1>

This integration will connect an Arduino to a computer. An application on the computer will consume web service which will check ServiceNow for Critical (P1) incidents in a New status.<br/>

If the web service returns an incident, an LED attached to the Arduino will light up red. A user can hit a button which will temporarily light up the LED blue and assign the incident to Fred Luddy in the CAB Approvers group.<br/>

<h3>SETUP</h3>
<ul>
<li>    Download and install the Arduno IDE: <a href="http://arduino.cc/en/main/software"><font color="red">http://arduino.cc/en/main/software</font></a></li>
<li>    Download and install Node.JS: <a href="https://nodejs.org/download/"><font color="red">https://nodejs.org/download/</font></a></li>
<li>    Download and install your preferred Node.JS IDE (such as <a href="http://www.sublimetext.com/"><font color="red">http://www.sublimetext.com/</font></a>)</li>
<li>    Install NODE modules.</li>
        <ol>    Open a command prompt/terminal</ol>
        <ol>    Type this and hit enter: npm install soap</ol>
        <ol>    Type this and hit enter: npm install xmldoc</ol>
        <ol>    Type this and hit enter:  npm install serialport</ol>
</ul>

<h3>ARDUINO STEPS</h3>
<table width="600" colspacing="0" cellpadding="0">
<tr>
<td valign="top">
<ul>
<li>    Wire the Arduino based on this diagram</li>		
<li>    Open Arduino IDE</li>
<li>    Download this sketch..<a href="https://github.com/chengdu28/ServiceNow-Arduino-Integration/blob/master/arduinosketch.ino"><font color="red"> HERE </font></a>..and paste in to the Arduino IDE</li>
<li>    In the Arduino IDE, hit the Arrow icon (upper left, to the right of the check) to upload the script to the Arduino</li>
</ul>
</td>
<td>
<a href="https://cloud.githubusercontent.com/assets/11547510/7054056/ef2ec7b2-de07-11e4-9c73-b4c78a837b26.png" border="0"><img src="https://cloud.githubusercontent.com/assets/11547510/7054056/ef2ec7b2-de07-11e4-9c73-b4c78a837b26.png" width="200"/></a>
</td>
</tr>
</table>

<h3>NODE.JS STEPS</h3>
<ul>
<li>    Open the NODE.JS IDE (if you chose sublime, open that)</li>
<li>    Download the..<a href="https://github.com/chengdu28/ServiceNow-Arduino-Integration/blob/master/arduino.js"><font color="red"> arduino.js </font></a>..and..<a href="https://github.com/chengdu28/ServiceNow-Arduino-Integration/blob/master/config.js"><font color="red"> config.js </font></a>..files and save them in your users directory.</li>
<li>    Open config.js in the Node.JS IDE.</li>
<li>    Update the instance URL with your instance name	</li>
<li>    Update username and password with an Admin username and password.</li>
<li>    Find the location of the file xmldoc.js and paste the complete path for the xmlDocPath variable	</li>
<li>     Update the serialport variable.  You will find this listed at the bottom right of the Arduino IDE window. It will say something like "Arduino Uno on /dev/tty.usbmodem1451" or  "Arduino Uno on COM4"	</li>
<li>    Save the file.</li>
</ul>

<h3>SERVICENOW STEPS</h3>
<ul>
<li>    Log in to your ServiceNow instance</li>
<li>    Update the web services properties</li>
<li>    Set following check boxes to "Yes" leave all other unchecked</li>
        <ol>    Require authorization for incoming RSS requests</ol>
        <ol>    Require basic authorization for incoming SOAP requests</ol>
        <ol>    Require authorization for incoming WSDL requests.</ol>
        <ol>    Use unique targetNamespace for WSDL definition.</ol>
</ul>

<h3>RUN THE APPLICATION</h3>
<ul>
<li>    After confirming you have unassigned, P1 incidents in a "new" status, run the application</li>
<li>    Open the command prompt/terminal</li>
<li>    type "node arduino"</li>
</ul>


