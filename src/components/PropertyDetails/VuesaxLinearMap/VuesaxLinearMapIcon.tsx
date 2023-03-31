import { memo, SVGProps } from 'react';

const VuesaxLinearMapIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2.29 7.78V17.51C2.29 19.41 3.64 20.19 5.28 19.25L7.63 17.91C8.14 17.62 8.99 17.59 9.52 17.86L14.77 20.49C15.3 20.75 16.15 20.73 16.66 20.44L20.99 17.96C21.54 17.64 22 16.86 22 16.22V6.49C22 4.59 20.65 3.81 19.01 4.75L16.66 6.09C16.15 6.38 15.3 6.41 14.77 6.14L9.52 3.52C8.99 3.26 8.14 3.28 7.63 3.57L3.3 6.05C2.74 6.37 2.29 7.15 2.29 7.78Z'
      stroke='#292D32'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M8.56 4V17' stroke='#292D32' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M15.73 6.62V20' stroke='#292D32' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(VuesaxLinearMapIcon);
export { Memo as VuesaxLinearMapIcon };
