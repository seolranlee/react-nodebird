import React from 'react'
import Head from 'next/head'

import AppLayout from '../components/AppLayout'
import NicknamedEditForm from '../components/NicknamedEditForm'
import FollowList from '../components/FollowList'
import { useSelector } from 'react-redux'

const Profile = () => {
  const { me } = useSelector((state) => state.user)
  
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknamedEditForm />
        <FollowList header="팔로잉" data={me.Followings}/>
        <FollowList header="팔로워" data={me.Followers}/>
      </AppLayout>
    </>
  )
}

export default Profile