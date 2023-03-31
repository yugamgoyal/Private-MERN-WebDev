import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0C13.2548 0 24 10.7452 24 24C10.7452 24 0 13.2548 0 0Z' fill='#2E63F6' />
  </svg>
);
const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
