import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxLinearCalendar.module.css';
import { VuesaxLinearCalendarIcon } from './VuesaxLinearCalendarIcon.js';

interface Props {
  className?: string;
  classes?: {
    vuesaxLinearCalendar?: string;
    root?: string;
  };
  swap?: {
    vuesaxLinearCalendar?: ReactNode;
  };
}
/* @figmaId 1:45 */
export const VuesaxLinearCalendar: FC<Props> = memo(function VuesaxLinearCalendar(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.vuesaxLinearCalendar || ''} ${classes.vuesaxLinearCalendar}`}>
        {props.swap?.vuesaxLinearCalendar || <VuesaxLinearCalendarIcon className={classes.icon} />}
      </div>
    </div>
  );
});
