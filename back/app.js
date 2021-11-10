// node는 서버가 아니다.
// node가 제공해주는 http 모듈이 서버의 역할을 해주는 것(node가 해주는게 아니다)
const express = require('express')

const app = express()

// app.get: 가져오다
// app.post: 생성하다
// app.put: 전체수정
// app.delete: 제거
// app.patch: 부분수정
// app.options: 찔러보기(나 요청보낼 수 있어..?)
// app.head: 헤더만 가져오기(헤더/바디)
app.get('/', (req, res) => {
  res.send('hello express')
})

app.get('/api', (req, res) => {
  res.send('hello api')
})

app.get('/api/posts', (req, res) => {
  // data는 보통 json으로 표현한다.
  // 실제로 api들은 json을 응답한다.
  res.json([
    { id: 1, content: 'hello1' },
    { id: 2, content: 'hello2' },
    { id: 3, content: 'hello3' },
  ])
})

app.post('/api/posts', (req, res) => {
  res.json({
    id: 1,
    content: 'hello'
  })
})

app.delete('/api/posts', (req, res) => {
  res.json({ id: 1 })
})

app.listen(3065, () => {
  console.log('서버 실행 중')
})