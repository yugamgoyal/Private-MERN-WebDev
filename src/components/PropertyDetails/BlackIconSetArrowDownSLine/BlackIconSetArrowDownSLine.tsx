import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './BlackIconSetArrowDownSLine.module.css';
import { Path3859Icon } from './Path3859Icon.js';

interface Props {
  className?: string;
  classes?: {
    path3858?: string;
    root?: string;
  };
  swap?: {
    path3859?: ReactNode;
  };
}
/* @figmaId 1:77 */
export const BlackIconSetArrowDownSLine: FC<Props> = memo(function BlackIconSetArrowDownSLine(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.path3859}>{props.swap?.path3859 || <Path3859Icon className={classes.icon} />}</div>
    </div>
  );
});
