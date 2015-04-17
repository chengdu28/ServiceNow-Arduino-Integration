int redPin = 11;
int greenPin = 10;
int bluePin = 9;
int pushed = 0;
int sent = 0;
int incomingByte = 0;
int result = 0;

const int button1Pin = 2;
 
//uncomment this line if using a Common Anode LED
//#define COMMON_ANODE
 
void setup()
{
  pinMode(redPin, OUTPUT);
  pinMode(greenPin, OUTPUT);
  pinMode(bluePin, OUTPUT);  
  
  Serial.begin(9600);
  pinMode(2,INPUT);

  // test LED wiring
  setColor(180, 0, 0);
  delay(500);
  setColor(0, 180, 0);
  delay(500);
  setColor(0, 0, 180);
  delay(500);

  // turn off
  setColor(0, 0, 0);
}
 
void loop()
{
 int sensorValue = digitalRead(button1Pin);
  
        if(Serial.available() > 0) {
          result = Serial.read();
          if (result != 65 && result != 66)
          {
            Serial.write(66);
            setColor(180, 0, 0);
            pushed = 0;
          }
        }  
 
if (sensorValue == 0 && pushed == 0)
{
  pushed = 1;
  //turn the LED green
  setColor(0, 180, 180);
   Serial.write(65);
  delay(2000);
  setColor(0, 0, 0);
  sent = 1;
  
}
else if (sensorValue != 0 && sent != 1)
{
  pushed = 0;  
}

delay(1);  

}
 
void setColor(int red, int green, int blue)
{
  #ifdef COMMON_ANODE
    red = 255 - red;
    green = 255 - green;
    blue = 255 - blue;
  #endif
  analogWrite(redPin, red);
  analogWrite(greenPin, green);
  analogWrite(bluePin, blue);  
}
