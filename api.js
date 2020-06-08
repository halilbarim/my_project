var https = require('https')

var options = {
  "method": "GET",
  "hostname": "rest.coinapi.io",
  "path": "/v1/exchangerate/BTC/USD",
  "headers": {"X-CoinAPI-Key" : "2AB81F30-2612-4550-A7A9-7133313AE493"},
  //"output_format":"json" 
  //json:true
};

var request = https.request(options, function (response) {

  response.setEncoding('utf-8')
 var chunks =[];
  
  response.on("data", function (chunk) {
    
    //console.log(chunk)
    // var jsonObject = JSON.stringify(chunk);
    // jsonObject = JSON.parse(jsonObject)
    
    // var coinArray = jsonObject.split(",")

    // var parcalabehcet =''
    // console.log(coinArray[2])
    //var jsonChunk = JSON.parse(chunk)
    //console.log(chunk)
    // var data = JSON.parse(Buffer.concat(chunk).toString());
    
    chunks.push(chunk);
    var data = JSON.parse(chunk);

    
    console.log(data['rate'])
  
  })
  

});

request.end();

