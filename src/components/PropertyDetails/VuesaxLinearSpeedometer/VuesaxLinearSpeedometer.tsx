import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxLinearSpeedometer.module.css';
import { VuesaxLinearSpeedometerIcon } from './VuesaxLinearSpeedometerIcon.js';

interface Props {
  className?: string;
  classes?: {
    vuesaxLinearSpeedometer?: string;
    root?: string;
  };
  swap?: {
    vuesaxLinearSpeedometer?: ReactNode;
  };
}
/* @figmaId 1:22 */
export const VuesaxLinearSpeedometer: FC<Props> = memo(function VuesaxLinearSpeedometer(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.vuesaxLinearSpeedometer || ''} ${classes.vuesaxLinearSpeedometer}`}>
        {props.swap?.vuesaxLinearSpeedometer || <VuesaxLinearSpeedometerIcon className={classes.icon} />}
      </div>
    </div>
  );
});
