import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxLinearLogout.module.css';
import { VuesaxLinearLogoutIcon } from './VuesaxLinearLogoutIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vuesaxLinearLogout?: ReactNode;
  };
}
/* @figmaId 1:86 */
export const VuesaxLinearLogout: FC<Props> = memo(function VuesaxLinearLogout(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vuesaxLinearLogout}>
        {props.swap?.vuesaxLinearLogout || <VuesaxLinearLogoutIcon className={classes.icon} />}
      </div>
    </div>
  );
});
