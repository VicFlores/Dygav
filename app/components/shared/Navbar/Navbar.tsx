'use client';

import Image from 'next/legacy/image';
import React, { useState } from 'react';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoBurgerMenu}>
        <figure className={styles.navbar__logo}>
          <Image
            src='https://res.cloudinary.com/feraguilar695/image/upload/v1725208668/DYGAV_g6gpci.svg'
            alt='Logo'
            layout='fill'
          />
        </figure>

        <div className={styles.navbar__burgerMenu}>
          <button
            className={isActive ? styles.active : styles.inactive}
            onClick={() => setIsActive(!isActive)}
          >
            {isActive ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <div
        className={`${styles.navbar__navigationContainer} ${
          isActive ? styles.burgerMenu__active : styles.burgerMenu__inactive
        }`}
      >
        <div>
          <ul className={styles.navbar__linkContainer}>
            <Link className={styles.navbar__link} href={'/'}>
              Panel General
            </Link>
            <Link className={styles.navbar__link} href={'/'}>
              Reservaciones
            </Link>
            <Link className={styles.navbar__link} href={'/'}>
              Mis Finanzas
            </Link>
            <Link className={styles.navbar__link} href={'/'}>
              Calendario
            </Link>
            <Link className={styles.navbar__link} href={'/'}>
              Favoritos
            </Link>
          </ul>
        </div>

        <div className={styles.navbar__linkContainer}>
          <LanguageSwitcher />

          <figure className={styles.navbar__user}>
            <Image
              src='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_Pic_profile_re_7g2h_o0irqa-1.png'
              alt='Profile'
              layout='fill'
            />
          </figure>

          <p>Nombre de Usuario</p>

          <button>Cerrar Sesión</button>
        </div>
      </div>
    </nav>
  );
};
