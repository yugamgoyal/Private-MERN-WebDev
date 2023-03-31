import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxLinearFatrows.module.css';
import { VuesaxLinearFatrowsIcon } from './VuesaxLinearFatrowsIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vuesaxLinearFatrows?: ReactNode;
  };
}
/* @figmaId 1:102 */
export const VuesaxLinearFatrows: FC<Props> = memo(function VuesaxLinearFatrows(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vuesaxLinearFatrows}>
        {props.swap?.vuesaxLinearFatrows || <VuesaxLinearFatrowsIcon className={classes.icon} />}
      </div>
    </div>
  );
});
