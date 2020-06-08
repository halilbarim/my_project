const http = require('http')

const hostname = '127.0.0.1'
const port = 3000
const fs = require ('fs')
const indexPage = fs.readFileSync('index.html')




const testPage = fs.readFileSync('test.php')

global.globalBTCrate=5;

const server = http.createServer ( (req,res) => {

  if (req.url === '/'){

    return res.end(indexPage)
  } else if (req.url ==='/test.php'){
    return res.end(testPage)
  } else { res.end('404 not found page')}

} )

server.listen(port, hostname, ()=>{
  console.log(" Server Çalışıyor, http://"+hostname+":"+port+"/ ")
})



   

  
