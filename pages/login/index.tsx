import { Layout, Login } from '@/components';

export default function LoginPage() {
  return (
    <section>
      <div
        className={
          'w-full bg-brandContent bg-center bg-cover bg-no-repeat h-screen'
        }
      >
        <Layout title='DyGav Login' />
        <Login />
      </div>
    </section>
  );
}