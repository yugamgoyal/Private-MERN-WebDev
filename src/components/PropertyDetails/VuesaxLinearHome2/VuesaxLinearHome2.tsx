import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxLinearHome2.module.css';
import { VuesaxLinearHome2Icon } from './VuesaxLinearHome2Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vuesaxLinearHome2?: ReactNode;
  };
}
/* @figmaId 1:180 */
export const VuesaxLinearHome2: FC<Props> = memo(function VuesaxLinearHome2(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vuesaxLinearHome2}>
        {props.swap?.vuesaxLinearHome2 || <VuesaxLinearHome2Icon className={classes.icon} />}
      </div>
    </div>
  );
});
