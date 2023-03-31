import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxLinearCar.module.css';
import { VuesaxLinearCarIcon } from './VuesaxLinearCarIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vuesaxLinearCar?: ReactNode;
  };
}
/* @figmaId 1:168 */
export const VuesaxLinearCar: FC<Props> = memo(function VuesaxLinearCar(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vuesaxLinearCar}>
        {props.swap?.vuesaxLinearCar || <VuesaxLinearCarIcon className={classes.icon} />}
      </div>
    </div>
  );
});
