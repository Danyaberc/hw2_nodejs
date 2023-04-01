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

const server = http.createServer((req, res) => {
   if (req.url === '/') {
      res.end('Homepage')
   } else if (req.url === '/cat') {
      res.end('Catalog')
   } else if (req.url === '/about') {
      res.end('About our company')
   } else {
      res.end('Page not found 404')
   }
})
server.listen(3000)
console.log('RUN')