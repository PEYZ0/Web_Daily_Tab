//////////////////////////////////////////////
///
///  >> App by Jason Jesse Huber | 2021
///    (copyright 2021)
///
//////////////////////////////////////////////



/// API KEY ===> 90c8fb1425627d1c0bc36d4828223042




var App_Setting_Date = new Date();
var App_Setting_Hour = App_Setting_Date.getHours().toString();
var App_Setting_Minute = App_Setting_Date.getMinutes().toString();
var App_Setting_Backdrops = 30;
var App_Setting_Search_Engine = 0;
var App_Setting_Username = "Jason";


var App_Setting_WeatherAPI_Key = "Your_Open_Weather_API_Key"; // 
var App_Weather_Long = 6.781840;
var App_Weather_Lat = 49.305142;
var App_WeatherAPI_URL;





var App_Data_Todos;


var App_Interval_Timeupdate;


/// Fancy EventListeners







//// Loades Init Function when page is loaded!

document.addEventListener("DOMContentLoaded", function() {


  const options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000
  };


  const watchID = navigator.geolocation.watchPosition(App_Update_Weather, error, options);


    App_Init();

    document.getElementById("App_Object_Clock").innerText = App_Get_Time_Data();

    document.getElementById("App_Object_User").innerText = App_Get_Time_Text();

    
    document.getElementById('App_Object_Shortcut_Left').className = "App_Window_Shortcut_Left animate__animated animate__fadeInLeft";

  });







/// Fancy Intervals


setInterval(App_Update_General,10000);

function App_Update_General(){

/// Updateing Time Data

  App_Setting_Date = new Date;
  App_Setting_Hour = App_Setting_Date.getHours().toString();
  App_Setting_Minute = App_Setting_Date.getMinutes().toString()

  var App_F_Hour = App_Setting_Date.getHours(); 

  document.getElementById("App_Object_Clock").innerText = App_Get_Time_Data();

  console.log("App_Console ==> Time is Updateing!!!");
  console.log('App_Console ==>' + App_Get_Time_Data());


  document.getElementById("App_Object_User").innerText = App_Get_Time_Text();

  

}

/// Fancy Return Functions 

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function App_Get_Time_Data(){

  var App_F_Minutes;
  var App_F_Hour;
if (App_Setting_Hour.length == 2) {
  if (App_Setting_Minute.length ==2) {

    return App_Setting_Hour + ":" +App_Setting_Minute;

  }else{

      App_F_Minutes = "0" + App_Setting_Minute;
      return App_Setting_Hour + ":" + App_F_Minutes;

  }

} else {
  App_F_Hour = "0" + App_Setting_Hour;
  if (App_Setting_Minute.length ==2) {

    return App_F_Hour + ":" +App_Setting_Minute;

  }else{

      App_F_Minutes = "0" + App_Setting_Minute;
      return App_Setting_Hour + ":" + App_F_Hour;

  }
}


}

function App_Get_Weather_Data(){

  fetch(App_WeatherAPI_URL) 
  .then(function(response){

    return response.json();

  })
  .then(function(obj){

    var App_Icon = App_Get_Weather_Icon(obj['weather'][0]['icon']);
    var App_Temp_Data = Math.round(obj['main']['temp']-273.15);


    document.getElementById('App_Object_Weather_Data').innerText = obj['name'] +   " | " +   obj['sys']['country']    +  "  |   " + obj['weather'][0]['description'] + " " + App_Temp_Data + "℃";

    document.getElementById('App_Object_Weather_Icon').innerText = App_Icon;


    console.log(obj);
    console.log(App_Icon);


  })

}

function App_Update_Weather(){

  navigator.geolocation.getCurrentPosition(function(position){

    App_WeatherAPI_URL = "http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&appid=" + App_Setting_WeatherAPI_Key;

    console.log("hello");
    console.log(App_WeatherAPI_URL);

    App_Get_Weather_Data();

  });

    

}

function App_Get_Weather_Icon(icon_ID = ""){

  switch (icon_ID) {
    case "11d":
      // ThunderIcon
      return "";

    case "09d": 
      // RainIcon
      return "";

    case "10d":
      // RainIcon 1
    return "";

    case "13d":
      //  Frezz Rain
      return "";

    case "50d":
      // MistIcon
      return "";

    case "01d":
      // Sun Icon
      return "";

    case "01n":
      // Moon Icon
      return "";
      
    case "02d":
       // Sunny with Clouds
       return "";

    case "02n":
      // Clear Night Sky with Clouds
       return "";

    case "03d":
       // Clouds Day
      return "";

    case "03n":
        // Clouds Night
       return "";

     case "04d":
        // Clouds Broken
       return "";

     case "04n":
        // Clouds Broken
       return "";


      

    default:
      console.log("App_Console ==> Weather Icon Error! / Icon ID? ");
      
      return "";
  }


}

function App_Get_Time_Text(){

  var App_F_Hour = App_Setting_Date.getHours();

  if ( App_F_Hour >= 0 && App_F_Hour <= 5) {
    return "Sleep Well," + App_Setting_Username;

  } else {
    if (App_F_Hour >= 6 && App_F_Hour <= 11) {
      return "Good Morning," + App_Setting_Username;
    }else{
      if (App_F_Hour >= 12 && App_F_Hour <= 15) {
        return "Have a nice day," + App_Setting_Username;
      }else{
        if (App_F_Hour >= 15 && App_F_Hour <= 21) {
          return "Good Evening," + App_Setting_Username;
        }else{
          return "Have a Nice Sleep," + App_Setting_Username;
        }
      }
    }
    
  }




}

function App_Openlink(Link="Google.com"){

  window.open(Link);


}

function error() {
  alert('Sorry, no position available.');
}








function App_Init(){

    console.log("App is Running");
    changeBackgroundImage();

}

      function changeBackgroundImage() {
        var App_Background = "url('./Assets/Others/Backgrounds/Background" + getRandomInt(61) + ".jpg";
        console.log(App_Background);
        document.body.style.backgroundImage = App_Background;
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
      }





