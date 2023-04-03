// //Створення модуля http для підключеня до сервера
// const http = require('http')
// //Опис сервера та його створення
// //Всі запити будуть падати в одну єдину функцію req
// //Данні які прийшли від сервера ми розміщуємо в аргументі req(Входячий запит).req - це запит браузера у сервера. 
// //А res - це інструменти щоб відповісти браузеру на сервер(Відходячий запит) 
// const server = http.createServer((req, res) => {
//    console.log('REQUEST')
//    console.log(req.url)

//    if (req.url === '/') {
//       res.end('HOME PAGE')
//    } else if (req.url === '/cat') {
//       res.end('Catalog')
//    } else if (req.url === '/prod') {
//       res.end('product')
//    } else {
//       res.end('404')
//    }
// }, 3000)

// //Піднімання сервера(створення його на певньому хості)
// server.listen(3000);
// //Ця консоль потрібна щоб побачити що він запустився
// console.log('Run')

const fs = require('fs')
const http = require('http')

const array = [
   { id: 1, text: 'TEXTfirstId' },
   { id: 2, text: 'TEXTsecId' },
   { id: 3, text: 'TEXTthirId' }
]


const server = http.createServer((req, res) => {
   if (req.url === '/') {
      let img = fs.readFileSync('./img/homepage.jpg')
      res.writeHead(200, { 'Content-Type': 'image/jpg' });
      res.end(img)

   } else if (req.url === '/cat') {
      res.statusCode = 200;
      res.setHeader("Content-Type", "image/jpeg");
      fs.readFile('./img/catalog.jpg', (err, image) => {
         res.end(image);
      });
   } else if (req.url === '/about') {
      res.statusCode = 200;
      res.setHeader("Content-Type", "image/jpeg")
      fs.readFile('./img/about.jpg', (err, image) => {
         res.end(image)
      })
   } else {
      fs.readFile('./img/notfound404.jpg', (err, image) => {
         res.end(image)
      })
   }
   for (let i = 0; i < array.length; i++) {
      let newarray = array[i].id
      if (req.url === '/newarray') {
         res.end(newarray)
      }
   }
})
server.listen(3000)
console.log('RUN')