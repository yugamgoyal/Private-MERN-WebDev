import { memo, SVGProps } from 'react';

const VuesaxLinearLogoutIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M17.44 14.62L20 12.06L17.44 9.5'
      stroke='#292D32'
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9.76 12.06H19.93'
      stroke='#292D32'
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M11.76 20C7.34 20 3.76 17 3.76 12C3.76 7 7.34 4 11.76 4'
      stroke='#292D32'
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(VuesaxLinearLogoutIcon);
export { Memo as VuesaxLinearLogoutIcon };
