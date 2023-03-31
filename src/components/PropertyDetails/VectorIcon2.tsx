import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 24C13.2548 24 24 13.2548 24 0C10.7452 0 0 10.7452 0 24Z' fill='#2E63F6' />
  </svg>
);
const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
