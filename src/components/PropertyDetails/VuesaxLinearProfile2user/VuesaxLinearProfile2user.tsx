import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxLinearProfile2user.module.css';
import { VuesaxLinearProfile2userIcon } from './VuesaxLinearProfile2userIcon.js';

interface Props {
  className?: string;
  classes?: {
    vuesaxLinearProfile2user?: string;
    root?: string;
  };
  swap?: {
    vuesaxLinearProfile2user?: ReactNode;
  };
}
/* @figmaId 1:37 */
export const VuesaxLinearProfile2user: FC<Props> = memo(function VuesaxLinearProfile2user(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.vuesaxLinearProfile2user || ''} ${classes.vuesaxLinearProfile2user}`}>
        {props.swap?.vuesaxLinearProfile2user || <VuesaxLinearProfile2userIcon className={classes.icon} />}
      </div>
    </div>
  );
});
