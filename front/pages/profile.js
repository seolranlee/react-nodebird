import React from 'react'
import Head from 'next/head'

import AppLayout from '../components/AppLayout'
import NicknamedEditForm from '../components/NicknamedEditForm'
import FollowList from '../components/FollowList'

const Profile = () => {
  const followingList = [{ nickname: 'seolranlee' }, { nickname: 'foo' }, { nickname: 'bar' }]
  const followerlist = [{ nickname: 'seolranlee' }, { nickname: 'foo' }, { nickname: 'bar' }]
  
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknamedEditForm />
        <FollowList header="팔로잉 목록" data={followingList}/>
        <FollowList header="팔로워 목록" data={followerlist}/>
      </AppLayout>
    </>
  )
}

export default Profile