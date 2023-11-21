import { useRouter } from 'next/router';
import MainContainer from '../../components/MainContainer';

export default function ({ user }) {
  const { query } = useRouter();
  return (
    <MainContainer>
      <div>
        Пользователь {query.id}
        <p>{user.name}</p>
      </div>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await res.json();
  return {
    props: { user },
  };
}
