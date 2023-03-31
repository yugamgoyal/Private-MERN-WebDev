import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './BlackIconSetDonutChartLine.module.css';
import { Path489Icon } from './Path489Icon.js';

interface Props {
  className?: string;
  classes?: {
    path488?: string;
    root?: string;
  };
  swap?: {
    path489?: ReactNode;
  };
}
/* @figmaId 1:118 */
export const BlackIconSetDonutChartLine: FC<Props> = memo(function BlackIconSetDonutChartLine(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.path489}>{props.swap?.path489 || <Path489Icon className={classes.icon} />}</div>
    </div>
  );
});
