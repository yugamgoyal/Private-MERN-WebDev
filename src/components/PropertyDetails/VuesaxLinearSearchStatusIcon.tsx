import { memo, SVGProps } from 'react';

const VuesaxLinearSearchStatusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 27 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M15.2923 5H21.8462' stroke='#0F1C35' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M15.2923 8H18.5692' stroke='#0F1C35' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M22.9385 11.5C22.9385 16.75 18.2962 21 12.5615 21C6.82692 21 2.18462 16.75 2.18462 11.5C2.18462 6.25 6.82692 2 12.5615 2'
      stroke='#0F1C35'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M24.0308 22L21.8462 20' stroke='#0F1C35' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(VuesaxLinearSearchStatusIcon);
export { Memo as VuesaxLinearSearchStatusIcon };
