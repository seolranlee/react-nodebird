import React, { useCallback, useState } from "react"
import Head from "next/head"
import { Checkbox, Form, Input, Button } from "antd"
import AppLayout from "../components/AppLayout"
import useInput from "../hooks/useInput"
import styled from "styled-components"

const ErrorMessage = styled.div`
  color: red
`

const Signup = () => {
  const [id, onChangeId] = useInput('')
  const [nickname, onChangeNickname] = useInput('')
  const [password, onChangePassword] = useInput('')

  const [passwordCheck, setPasswordCheck] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value)
    // 이 부분이 달라서 커스텀 훅으로 못만듦
    setPasswordError(e.target.value !== password)
  }, [password])

  const [term, setTerm] = useState('')
  const [termError, setTermError] = useState('')
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked)
    setTermError(false)
  }, [])

  const onSubmit = useCallback(() => {
    // 한번 더 체크
    if (password !== passwordCheck) {
      return setPasswordError(true)
    }
    // 한번 더 체크
    if (!term) {
      return setTermError(true)
    }
    // 사용자의 Input을 받는건 여러번 체크

    console.log(id, nickname, password)
  }, [password, passwordCheck, term])

  return (
    <AppLayout>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      {/* onFinish의 경우 e.preventDefault()가 자동으로 실행되므로 명시적으로 써줄 필요가 없다. */}
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} required onChange={onChangeId}/>
        </div>
        <div>
          <label htmlFor="user-nickname">닉네임</label>
          <br />
          <Input name="user-nickname" value={nickname} required onChange={onChangeNickname}/>
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input name="user-password" type="password" value={password} required onChange={onChangePassword}/>
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호 체크</label>
          <br />
          <Input 
            name="user-password-check" 
            type="password"
            value={passwordCheck} 
            required 
            onChange={onChangePasswordCheck}
          />
          {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>약관동의에 동의합니다.</Checkbox>
          {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
        </div>
        <div style={{ marginTop: 10}}>
          <Button type="primary"htmlType="submit">가입하기</Button>
        </div>
      </Form>
    </AppLayout>
  )
}

export default Signup