// import CategoriesSlider from '@/components/slider/CategoriesSlider';
import BenefitsSection from '@/components/homepage/benefits/BenefitsSection';
import HomeProductTab from '@/components/homepage/homeProductTabs/HomeProductTab';
import HeroCategoriesSlider from '@/components/homepage/sliders/HeroCategoriesSlider';
import ProductsCategoriesSlider from '@/components/homepage/sliders/ProductsCategoriesSlider-copy';
import React from 'react';

export default function Home() {
  return (
    <div className='flex flex-col gap-y-30 mb-30'>
      <HeroCategoriesSlider />
      <ProductsCategoriesSlider />
      <HomeProductTab />
      <BenefitsSection />
    </div>
  );
}
