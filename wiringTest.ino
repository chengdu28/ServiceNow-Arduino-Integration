int redPin = 11;
int greenPin = 10;
int bluePin = 9;


const int button1Pin = 2;


void setup() {
  
  // put your setup code here, to run once:
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

  setColor(0, 0, 0);
  // turn off 

}

void loop() {
  // put your main code here, to run repeatedly:
   int sensorValue = digitalRead(button1Pin);
  
  if (sensorValue == 0)
  {
    //turn the LED green
    setColor(0, 180, 180);
    
  }
  else 
  {
      setColor(0, 0, 0);
  }

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
