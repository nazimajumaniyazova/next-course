import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from '../styles/users.module.scss';
import MainContainer from '../components/MainContainer';
const Users = ({ users }) => {
  return (
    <MainContainer>
      <div className={styles.users}>
        <h1>Пользователи</h1>
        <ul>
          {users.map((item) => (
            <li key={item.id}>
              <Link href={`/users/${item.id}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await res.json();
  return {
    props: { users },
  };
}
