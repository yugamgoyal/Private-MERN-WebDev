import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './BlackIconSetDirectionLine.module.css';
import { Path2979Icon } from './Path2979Icon.js';

interface Props {
  className?: string;
  classes?: {
    path2978?: string;
    root?: string;
  };
  swap?: {
    path2979?: ReactNode;
  };
}
/* @figmaId 1:134 */
export const BlackIconSetDirectionLine: FC<Props> = memo(function BlackIconSetDirectionLine(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.path2979}>{props.swap?.path2979 || <Path2979Icon className={classes.icon} />}</div>
    </div>
  );
});
