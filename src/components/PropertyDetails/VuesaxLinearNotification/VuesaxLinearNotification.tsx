import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxLinearNotification.module.css';
import { VuesaxLinearNotificationIcon } from './VuesaxLinearNotificationIcon.js';

interface Props {
  className?: string;
  classes?: {
    vuesaxLinearNotification?: string;
    root?: string;
  };
  swap?: {
    vuesaxLinearNotification?: ReactNode;
  };
}
/* @figmaId 1:15 */
export const VuesaxLinearNotification: FC<Props> = memo(function VuesaxLinearNotification(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.vuesaxLinearNotification || ''} ${classes.vuesaxLinearNotification}`}>
        {props.swap?.vuesaxLinearNotification || <VuesaxLinearNotificationIcon className={classes.icon} />}
      </div>
    </div>
  );
});
