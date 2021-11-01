import React, { useCallback, useMemo } from "react"
import { Form, Input, Button } from "antd"
import Link from 'next/link'
import styled from 'styled-components'
import useInput from "../hooks/useInput"

import { useDispatch } from "react-redux"
import { loginAction } from "../reducers/user"
// styled-components는 css적듯이.
// 인라인 스타일에서의 리렌더링 최적화
// const ButtonWrapper = styled.div`
//   margin-top: 10px
// `

const FormWrapper = styled(Form)`
  padding: 10px
`


const LoginForm = () => {
  const dispatch = useDispatch()
  const [id, onChangeId] = useInput('')
  const [password, onChangePassword] = useInput('')

  // styled-components를 쓰기 싫으면
  // 함수를 캐싱하는 게 useCallback. 값을 캐싱하는 건 userMemo.
  // 인라인 스타일에서의 리렌더링 최적화
  const style = useMemo(() => ({ marginTop: 10}), [])

  const onSubmitForm = useCallback(() => {
    dispatch(loginAction({ id, password }))
  }, [id, password])


  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required/>
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input 
          name="user-password" 
          type="password" 
          value={password} 
          onChange={onChangePassword} 
          required
        />
      </div>
      {/* <ButtonWrapper> */}
      <div style={style}>
        <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </div>
      {/* </ButtonWrapper> */}
    </FormWrapper>
  )
}

export default LoginForm