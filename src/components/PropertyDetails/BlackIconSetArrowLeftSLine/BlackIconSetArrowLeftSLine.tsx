import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './BlackIconSetArrowLeftSLine.module.css';
import { Path3903Icon } from './Path3903Icon.js';

interface Props {
  className?: string;
  classes?: {
    path3902?: string;
    root?: string;
  };
  swap?: {
    path3903?: ReactNode;
  };
}
/* @figmaId 1:99 */
export const BlackIconSetArrowLeftSLine: FC<Props> = memo(function BlackIconSetArrowLeftSLine(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.path3903}>{props.swap?.path3903 || <Path3903Icon className={classes.icon} />}</div>
    </div>
  );
});
