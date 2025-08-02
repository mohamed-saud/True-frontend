import Heading from '@/components/ui/Heading';
import SubTitle from '@/components/ui/SubTitle';
import Title from '@/components/ui/Title';
import React from 'react';

export default function BenefitsSection() {
  return (
    <div className=' container m-auto w-full flex justify-center flex-col items-center gap-8'>
      <Title>There are some redeeming factors</Title>
      <Heading>We Provide High Quality Goods</Heading>
      <SubTitle>
        A client that's unhappy for a reason is a problem, a client that's
        unhappy though he or her can't
      </SubTitle>
    </div>
  );
}
