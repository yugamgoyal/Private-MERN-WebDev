import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxLinearBuilding4.module.css';
import { VuesaxLinearBuilding4Icon } from './VuesaxLinearBuilding4Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vuesaxLinearBuilding4?: ReactNode;
  };
}
/* @figmaId 1:157 */
export const VuesaxLinearBuilding4: FC<Props> = memo(function VuesaxLinearBuilding4(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vuesaxLinearBuilding4}>
        {props.swap?.vuesaxLinearBuilding4 || <VuesaxLinearBuilding4Icon className={classes.icon} />}
      </div>
    </div>
  );
});
