import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxLinearSearchNormal.module.css';
import { VuesaxLinearSearchNormalIcon } from './VuesaxLinearSearchNormalIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vuesaxLinearSearchNormal?: ReactNode;
  };
}
/* @figmaId 1:93 */
export const VuesaxLinearSearchNormal: FC<Props> = memo(function VuesaxLinearSearchNormal(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vuesaxLinearSearchNormal}>
        {props.swap?.vuesaxLinearSearchNormal || <VuesaxLinearSearchNormalIcon className={classes.icon} />}
      </div>
    </div>
  );
});
