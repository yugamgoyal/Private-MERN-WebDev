import { memo, SVGProps } from 'react';

const VectorIcon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path fillRule='evenodd' clipRule='evenodd' d='M0 0H16V16H0V0Z' fill='#E30A17' />
  </svg>
);
const Memo = memo(VectorIcon5);
export { Memo as VectorIcon5 };
