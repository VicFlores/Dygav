'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import styles from '@/app/components/shared/RegisterLoginRecovery/RegisterLoginRecovery.module.css';
import Link from 'next/link';
import Image from 'next/legacy/image';
import { setLoginCookies } from '@/app/actions';
import { AxiosError } from 'axios';
import { crmFinanzas, getOwnerInfo, validateAccessToken } from '@/app/utils';
import { useRouter } from 'next/navigation';
import Partners from '../shared/Partners/Partners';

interface IFormInput {
  email: string;
  password: string;
}

export const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  const handleLogin = async () => {
    try {
      const { email, password } = getValues();

      if (!email || !password) {
        return;
      }

      const response = await crmFinanzas.post('/auth/login', {
        username_email: email,
        password,
      });

      const { data } = response.data;

      await setLoginCookies(data.access_token, data.refresh_token);

      const userRole = await getOwnerInfo();

      if (userRole?.role === 'OWNER') {
        router.push('/private/owners/dashboard');
      } else {
        router.push('/');
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error.response?.data);
      } else {
        console.error(error);
      }
    }
  };

  const handleGoogleLogin = async () => {};

  return (
    <main className={styles.maincontainer}>
      <div className={styles.cardContainer}>
        <div className={styles.formContainer}>
          <figure className={styles.formImage}>
            <Image
              src='https://res.cloudinary.com/feraguilar695/image/upload/v1725208668/DYGAV_g6gpci.svg'
              alt='Login'
              layout='fill'
            />
          </figure>

          <div>
            <h1 className={styles.formContainer__title}>Iniciar Sesion</h1>

            <p className={styles.formContainer__subtitle}>
              Hola, Bienvenido a DYGAV 👋
            </p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formInputContainer}>
              <input
                type='text'
                placeholder='Correo electronico'
                {...register('email', { required: true })}
                aria-invalid={errors.email ? 'true' : 'false'}
              />

              {errors.email?.type === 'required' && (
                <p className={styles.error} role='alert'>
                  El correo electronico es requerido
                </p>
              )}
            </div>

            <div className={styles.formInputContainer}>
              <input
                type='password'
                placeholder='Contraseña'
                {...register('password', { required: true })}
                aria-invalid={errors.password ? 'true' : 'false'}
              />

              {errors.password?.type === 'required' && (
                <p className={styles.error} role='alert'>
                  La contraseña es requerida
                </p>
              )}
            </div>

            <button type='submit' onClick={handleLogin}>
              Iniciar sesión
            </button>

            <button type='button' onClick={handleGoogleLogin}>
              Iniciar sesión con Google
            </button>

            <Link className={styles.recov_pass} href='/recovery'>
              ¿Olvidaste tu contraseña?
            </Link>
          </form>
        </div>

        <div className={styles.formInfo}>
          <h2>Dygav propietarios y turistas</h2>

          <p>
            Administra todo el ecosistema de dygav desde un solo panel de
            control en donde podras ver los alojamientos, propietarios entre
            otras cosas.
          </p>
        </div>
      </div>

      <Partners />
    </main>
  );
};
