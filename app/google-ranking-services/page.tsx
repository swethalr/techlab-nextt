import { MainHeader } from '@/src/layout/header';
import { Footer } from '@/src/layout/footer/v1';
import GoogleRankingServices from '@/src/google-ranking-services/services';


export default function Page() {
  return (
    <>
      {/* Navigation */}
      <MainHeader version="1" />

      <main>


 <GoogleRankingServices />

  </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

