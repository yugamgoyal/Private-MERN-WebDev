import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxLinearAdd.module.css';
import { VuesaxLinearAddIcon } from './VuesaxLinearAddIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vuesaxLinearAdd?: ReactNode;
  };
}
/* @figmaId 1:70 */
export const VuesaxLinearAdd: FC<Props> = memo(function VuesaxLinearAdd(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vuesaxLinearAdd}>
        {props.swap?.vuesaxLinearAdd || <VuesaxLinearAddIcon className={classes.icon} />}
      </div>
    </div>
  );
});
