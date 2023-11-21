import Head from 'next/head';
import A from './A';

const MainContainer = ({ children }) => {
  return (
    <>
      <Head>
        <meta keywords='nextjs'></meta>
        <title>Главная страница</title>
      </Head>
      <div>
        <A href={'/'} text={'Главная'}></A>
        <A href={'/users'} text={'Пользователи'}></A>
      </div>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
