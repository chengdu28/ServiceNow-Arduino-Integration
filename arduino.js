var stuff = setInterval(function(){
soap = require('soap');
config = require('./config')
var xmldoc = require('xmldoc');
//url = config.instance; // update this to the desired instance.
var args = {priority: config.search_priority, state: config.search_state}; // update these variables to the desired priority and state (or what ever variables you would like to search)

url = 'http://' + config.username + ':' + config.password + '@' + config.instance + '/incident.do?WSDL';
                                                            
soap.createClient(url, function(err, client) 
{

client.setSecurity(new soap.BasicAuthSecurity(config.username, config.password));

client.getRecords(args, function(err, result, raw, soapHeader) 
{
    var string = new xmldoc.XmlDocument(raw);
    var isIncident = raw.lastIndexOf('<getRecordsResponse xmlns="http://www.service-now.com/incident"></getRecordsResponse>');
    console.log(isIncident); 
    if (isIncident<1)
    {
   var getRecordsResponse = string.childNamed("SOAP-ENV:Body");
   var getRecordsResult = getRecordsResponse.childNamed("getRecordsResponse");
   var values = getRecordsResult.childNamed("getRecordsResult")
   var sys_idval = values.childNamed("sys_id")
   sys_id_value = sys_idval.val;
   raw = '';
   lightUpLED = "yes"
   callArduino();
}
    });
});
}, 5 * 1000);

function callArduino() 
{
  var SerialPort = require("serialport").SerialPort
  var serialPort = new SerialPort(config.serialport, 
  {
    baudrate: 9600
  }, false); // update SerialPort based on the serial port shown in the arduino IDE

  serialPort.open(function (error) 
  {

    setTimeout(function() 
    {
      if ( error ) 
      {
        console.log('failed to open: '+error);
      } 
      else 
      {
        console.log('open');
        serialPort.on('data', function(data) 
        {
          console.log('data received: ' + data);
          if (data == "A")
          {
            assignIncident();
            return;
          }
        });

        if (lightUpLED == "yes")
        {
          serialPort.write(1);
          lightUpLED = "no";
        }
      }
    }, 3000);
  });
}


function assignIncident() 
{

var args = {sys_id: sys_id_value, state: config.assigned_state, assigned_to: config.assigned_to, assignment_group: config.assignment_group}; // these are the SYS_ID's for the assigned to and the assignment group

soap.createClient(url, function(err, client) 
{
client.setSecurity(new soap.BasicAuthSecurity(config.username, config.password));
client.update(args, function(err, result, raw, soapHeader) 
{

console.log(raw);
lightUpLED = "no";
   });
});
}
