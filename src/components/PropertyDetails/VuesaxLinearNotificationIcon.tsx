import { memo, SVGProps } from 'react';

const VuesaxLinearNotificationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 27 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13.1295 2.91C9.514 2.91 6.57569 5.6 6.57569 8.91V11.8C6.57569 12.41 6.29169 13.34 5.95308 13.86L4.69692 15.77C3.92139 16.95 4.45662 18.26 5.87662 18.7C10.5845 20.14 15.6637 20.14 20.3715 18.7C21.6932 18.3 22.2722 16.87 21.5512 15.77L20.2951 13.86C19.9674 13.34 19.6834 12.41 19.6834 11.8V8.91C19.6834 5.61 16.7342 2.91 13.1295 2.91Z'
      stroke='#0F1C35'
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
    />
    <path
      d='M15.1503 3.2C14.8117 3.11 14.4622 3.04 14.1017 3C13.0531 2.88 12.0482 2.95 11.1088 3.2C11.4255 2.46 12.212 1.94 13.1295 1.94C14.0471 1.94 14.8335 2.46 15.1503 3.2Z'
      stroke='#0F1C35'
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16.4065 19.06C16.4065 20.71 14.9318 22.06 13.1295 22.06C12.2338 22.06 11.4037 21.72 10.8138 21.18C10.224 20.64 9.85262 19.88 9.85262 19.06'
      stroke='#0F1C35'
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
  </svg>
);
const Memo = memo(VuesaxLinearNotificationIcon);
export { Memo as VuesaxLinearNotificationIcon };
