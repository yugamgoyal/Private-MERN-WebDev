import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxLinearKey.module.css';
import { VuesaxLinearKeyIcon } from './VuesaxLinearKeyIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vuesaxLinearKey?: ReactNode;
  };
}
/* @figmaId 1:108 */
export const VuesaxLinearKey: FC<Props> = memo(function VuesaxLinearKey(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vuesaxLinearKey}>
        {props.swap?.vuesaxLinearKey || <VuesaxLinearKeyIcon className={classes.icon} />}
      </div>
    </div>
  );
});
