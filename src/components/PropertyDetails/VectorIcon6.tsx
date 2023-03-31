import { memo, SVGProps } from 'react';

const VectorIcon6 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 9 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8.89999 4.24999C8.89999 6.45624 7.07811 8.24686 4.83436 8.24686C2.59061 8.24686 0.768738 6.45624 0.768738 4.24686C0.768738 2.03749 2.58749 0.253113 4.83124 0.253113C7.07499 0.253113 8.90311 2.04061 8.90311 4.24999H8.89999Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(VectorIcon6);
export { Memo as VectorIcon6 };
