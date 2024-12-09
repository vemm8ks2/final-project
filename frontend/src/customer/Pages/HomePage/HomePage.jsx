import MainCarousel from '@/customer/components/HomeCarousel/HomeCarousel';
import HomeSectionCarousel from '@/customer/components/HomeSectionCarousel/HomeSectionCarousel';

import { O7G44i } from '@/data/O7G44i';

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={O7G44i} sectionName="Men's Kurta" />
        <HomeSectionCarousel data={O7G44i} sectionName="Men's Shoes" />
        <HomeSectionCarousel data={O7G44i} sectionName="Men's Shirt" />
        <HomeSectionCarousel data={O7G44i} sectionName="Women's Saree" />
        <HomeSectionCarousel data={O7G44i} sectionName="Women's Dress" />
      </div>
    </div>
  );
};

export default HomePage;
