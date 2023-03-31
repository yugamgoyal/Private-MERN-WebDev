import { memo, SVGProps } from 'react';

const VuesaxLinearLocationTickIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M3.62 8.49C5.59 -0.17 18.42 -0.16 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39 20.54C5.63 17.88 2.47 13.57 3.62 8.49Z'
      stroke='#292D32'
      strokeWidth={1.5}
    />
    <path
      d='M9.25 11.5L10.75 13L14.75 9'
      stroke='#292D32'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(VuesaxLinearLocationTickIcon);
export { Memo as VuesaxLinearLocationTickIcon };
