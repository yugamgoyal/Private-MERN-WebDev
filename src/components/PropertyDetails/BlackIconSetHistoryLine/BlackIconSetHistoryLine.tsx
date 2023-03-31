import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './BlackIconSetHistoryLine.module.css';
import { Path4106Icon } from './Path4106Icon.js';

interface Props {
  className?: string;
  classes?: {
    path4105?: string;
    root?: string;
  };
  swap?: {
    path4106?: ReactNode;
  };
}
/* @figmaId 1:115 */
export const BlackIconSetHistoryLine: FC<Props> = memo(function BlackIconSetHistoryLine(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.path4106}>{props.swap?.path4106 || <Path4106Icon className={classes.icon} />}</div>
    </div>
  );
});
