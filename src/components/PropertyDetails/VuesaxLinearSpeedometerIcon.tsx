import { memo, SVGProps } from 'react';

const VuesaxLinearSpeedometerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 27 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M20.9068 19.5C22.8402 17.7 24.0308 15.22 24.0308 12.5C24.0308 6.98 19.1372 2.5 13.1077 2.5C7.07815 2.5 2.18462 6.98 2.18462 12.5C2.18462 15.22 3.3643 17.68 5.28677 19.49'
      stroke='#0F1C35'
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M13.1077 21.5C15.1467 21.5 16.7997 19.9867 16.7997 18.12C16.7997 16.2533 15.1467 14.74 13.1077 14.74C11.0687 14.74 9.41569 16.2533 9.41569 18.12C9.41569 19.9867 11.0687 21.5 13.1077 21.5Z'
      stroke='#0F1C35'
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16.6577 12H17.4769C18.3726 12 19.1154 11.33 19.1154 10.5C19.1154 9.68 18.3726 9 17.4769 9C16.5812 9 15.8385 9.67 15.8385 10.5V11.25C15.8385 11.66 16.2098 12 16.6577 12Z'
      stroke='#0F1C35'
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(VuesaxLinearSpeedometerIcon);
export { Memo as VuesaxLinearSpeedometerIcon };
