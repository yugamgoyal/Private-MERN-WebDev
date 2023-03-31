import { memo, SVGProps } from 'react';

const VectorIcon8 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 4 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1.69082 0.380859L1.65957 1.85898L0.27832 2.23398L1.6377 2.71836L1.60645 4.07148L2.49082 3.01523L3.83145 3.47773L3.05645 2.34336L4.0002 1.21523L2.5502 1.61523L1.69082 0.380859V0.380859Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(VectorIcon8);
export { Memo as VectorIcon8 };
