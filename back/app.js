// node는 서버가 아니다.
// node가 제공해주는 http 모듈
const http = require('http')
const server = http.createServer((req, res) => {
  console.log(req.url, req.method)
  res.write('<h1>Hello node1</h1>')
  res.write('<h2>Hello node2</h2>')
  res.write('<h3>Hello node3</h3>')
  res.write('<h4>Hello node4</h4>')
  res.end('Hello node5')
})
// http가 서버의 역할을 해주는 것(node가 해주는게 아니다)
server.listen(3065, () => {
  console.log('서버 실행 중')
})