import { CornerDownLeft, ThumbsUp, Truck } from 'lucide-react';
import React from 'react';

export default function BenefitsItem() {
  return (
    <div>
      <div>
        <Truck />
        <h1>Fast Delivery</h1>
        <p>
          Chances are there wasn’t collaboration and checkpoints, there wasn’t a
          process.
        </p>
      </div>
      <div>
        <ThumbsUp />
        <h1>Best Qualit</h1>
        <p>
          It&apos;s content strategy gone awry right from the start. Forswearing
          the use of Lorem Ipsum.
        </p>
      </div>
      <div>
        <CornerDownLeft className=' text-blue-400 w-[120px] h-[120px]' />
        <h1>Free Return</h1>
        <p>
          Chances are there wasn’t collaboration and checkpoints, there wasn’t a
          process.
        </p>
      </div>
    </div>
  );
}
