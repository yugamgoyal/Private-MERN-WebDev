import { memo, SVGProps } from 'react';

const VectorIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M24 24C10.7452 24 -1.15877e-06 13.2548 0 0C13.2548 0 24 10.7452 24 24Z' fill='#2E63F6' />
  </svg>
);
const Memo = memo(VectorIcon4);
export { Memo as VectorIcon4 };
