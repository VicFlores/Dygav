import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
} from '@/components';
import { heroSallenDeGallegoImages } from '@/utils';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const SallentDeGallegoLicensePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  console.log(cityName);

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Sallent De Gallego - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Sallent De Gallego de forma sencilla y rápida.`}
      />
      <MainHero images={heroSallenDeGallegoImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Licencias Turísticas Sallent De Gallego`}
            subtitle={`Como conseguir tu licencia turística en Sallent De Gallego en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <CityLicense cityName={cityName} />

      <Footer />
    </section>
  );
};

export default SallentDeGallegoLicensePage;