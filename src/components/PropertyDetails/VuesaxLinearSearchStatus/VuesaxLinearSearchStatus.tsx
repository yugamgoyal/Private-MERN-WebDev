import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxLinearSearchStatus.module.css';
import { VuesaxLinearSearchStatusIcon } from './VuesaxLinearSearchStatusIcon.js';

interface Props {
  className?: string;
  classes?: {
    vuesaxLinearSearchStatus?: string;
    root?: string;
  };
  swap?: {
    vuesaxLinearSearchStatus?: ReactNode;
  };
}
/* @figmaId 1:55 */
export const VuesaxLinearSearchStatus: FC<Props> = memo(function VuesaxLinearSearchStatus(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.vuesaxLinearSearchStatus || ''} ${classes.vuesaxLinearSearchStatus}`}>
        {props.swap?.vuesaxLinearSearchStatus || <VuesaxLinearSearchStatusIcon className={classes.icon} />}
      </div>
    </div>
  );
});
