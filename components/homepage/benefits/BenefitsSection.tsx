'use client';
import Heading from '@/components/ui/Heading';
import SubTitle from '@/components/ui/SubTitle';
import Title from '@/components/ui/Title';
import React from 'react';
import { CornerDownLeft, Truck } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';
import styled from 'styled-components';
const DivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 20px;
  max-width: 400px;
`;
export default function BenefitsSection() {
  return (
    <div className=' container m-auto w-full flex justify-center flex-col items-center gap-8'>
      <Title>There are some redeeming factors</Title>
      <Heading size='text-4xl'>We Provide High Quality Goods</Heading>
      <SubTitle>
        A client that's unhappy for a reason is a problem, a client that's
        unhappy though he or her can't
      </SubTitle>
      <div className='flex gap-10 items-center justify-center'>
        <DivContainer>
          <Truck className=' text-blue-400 w-[50px] h-[50px]  ' />
          <Heading size='text-3xl'>Fast Delivery</Heading>
          <SubTitle>
            Chances are there wasn’t collaboration and checkpoints, there wasn’t
            a process.
          </SubTitle>
        </DivContainer>
        <DivContainer>
          <ThumbsUp className=' text-blue-400 w-[50px] h-[50px]' />
          <Heading size='text-3xl'>Best Qualit</Heading>
          <SubTitle>
            It's content strategy gone awry right from the start. Forswearing
            the use of Lorem Ipsum.
          </SubTitle>
        </DivContainer>
        <DivContainer>
          <CornerDownLeft className=' text-blue-400 w-[50px] h-[50px]' />
          <Heading size='text-3xl'>Free Return</Heading>
          <SubTitle>
            Chances are there wasn’t collaboration and checkpoints, there wasn’t
            a process.
          </SubTitle>
        </DivContainer>
      </div>
    </div>
  );
}
