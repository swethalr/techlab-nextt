import { Metadata } from 'next';
import { MainHeader } from '@/src/layout/header';
import { Footer } from '@/src/layout/footer/v1';

// The only section created so far
import GoogleRankingExpertSection from '@/src/google-ranking-expert/banner';

/* FUTURE COMPONENTS 
  (Keep these commented out until you create the files in src/google-ranking-expert/)
*/
// import GoogleRankingExpert from '@/src/google-ranking-expert/google-ranking-expert';
// import { WebsiteResults } from '@/src/google-ranking-expert/proof-result';
// import { ManualSEOMastery } from '@/src/google-ranking-expert/manual-seo-mastery';
// import Ranking from '@/src/google-ranking-expert/45-days';
// import { GMBSEO } from '@/src/google-ranking-expert/gmb-result';
// import { FAQSection } from '@/src/google-ranking-expert/faq';

// 1. SEO Metadata - This is vital for the Google Ranking Expert page
export const metadata: Metadata = {
  title: 'Google SEO Consultant & Ranking Expert | Zammy Zaif',
  description: 'Dominate Google Search results with expert algorithm-based strategies. Specialist in securing Position #1 rankings.',
};

export default function Page() {
  return (
    <>
      {/* Navigation */}
      <MainHeader version="1" />

      <main>
        {/* 2. Your Banner Section */}
        <GoogleRankingExpertSection />

        {/* As you create the files, uncomment them here one by one:
          
          <GoogleRankingExpert />
          <WebsiteResults />
          <ManualSEOMastery />
          <Ranking />
          <GMBSEO />
          <FAQSection />
        */}
        
       
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}