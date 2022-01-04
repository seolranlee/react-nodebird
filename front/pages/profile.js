import React, { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';

import { useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import NicknamedEditForm from '../components/NicknamedEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    if (!(me && me.id)) {
      Router.push('/');
    }
  }, [me && me.id]);

  if (!me) return null;
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknamedEditForm />
        <FollowList header="팔로잉" data={me.Followings} />
        <FollowList header="팔로워" data={me.Followers} />
      </AppLayout>
    </>
  );
};

export default Profile;
