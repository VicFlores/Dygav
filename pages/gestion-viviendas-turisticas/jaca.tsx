import { pirineosAragonImages } from '@/utils/static/licenseImages';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';
import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  Footer,
  JacaMgmtInfo,
  CityLicense,
} from '@/components';
import { heroJacaImages } from '@/utils';

const JacaOwnersPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Gestion de Viviendas Turísticas en Jaca - Dygav.es`}
        content={`Descubre todo lo necesario para gestionar tu vivienda turística en Jaca de forma sencilla y rápida.`}
      />
      <MainHero images={heroJacaImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Gestion de Viviendas Turísticas`}
            subtitle={`En DYGAV nos especializamos en brindar soluciones integrales para el alquiler vacacional`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <JacaMgmtInfo />

      <CityLicense
        cityName={cityName}
        images={pirineosAragonImages}
        typeOfPage='owners'
      />

      <Footer />
    </section>
  );
};

export default JacaOwnersPage;