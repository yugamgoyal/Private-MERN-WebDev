import { memo, SVGProps } from 'react';

const VuesaxLinearSearchStatusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M14 5H20' stroke='#292D32' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M14 8H17' stroke='#292D32' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2'
      stroke='#292D32'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M22 22L20 20' stroke='#292D32' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(VuesaxLinearSearchStatusIcon);
export { Memo as VuesaxLinearSearchStatusIcon };
