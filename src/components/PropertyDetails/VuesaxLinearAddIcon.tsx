import { memo, SVGProps } from 'react';

const VuesaxLinearAddIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M6 12H18' stroke='white' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12 18V6' stroke='white' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(VuesaxLinearAddIcon);
export { Memo as VuesaxLinearAddIcon };
