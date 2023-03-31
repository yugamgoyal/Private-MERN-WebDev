import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxLinearLocationTick.module.css';
import { VuesaxLinearLocationTickIcon } from './VuesaxLinearLocationTickIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vuesaxLinearLocationTick?: ReactNode;
  };
}
/* @figmaId 1:121 */
export const VuesaxLinearLocationTick: FC<Props> = memo(function VuesaxLinearLocationTick(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vuesaxLinearLocationTick}>
        {props.swap?.vuesaxLinearLocationTick || <VuesaxLinearLocationTickIcon className={classes.icon} />}
      </div>
    </div>
  );
});
