import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxLinearMap.module.css';
import { VuesaxLinearMapIcon } from './VuesaxLinearMapIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vuesaxLinearMap?: ReactNode;
  };
}
/* @figmaId 1:127 */
export const VuesaxLinearMap: FC<Props> = memo(function VuesaxLinearMap(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vuesaxLinearMap}>
        {props.swap?.vuesaxLinearMap || <VuesaxLinearMapIcon className={classes.icon} />}
      </div>
    </div>
  );
});
