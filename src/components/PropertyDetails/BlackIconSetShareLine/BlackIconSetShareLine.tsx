import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './BlackIconSetShareLine.module.css';
import { Path4294Icon } from './Path4294Icon.js';

interface Props {
  className?: string;
  classes?: {
    path4293?: string;
    root?: string;
  };
  swap?: {
    path4294?: ReactNode;
  };
}
/* @figmaId 1:137 */
export const BlackIconSetShareLine: FC<Props> = memo(function BlackIconSetShareLine(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.path4294}>{props.swap?.path4294 || <Path4294Icon className={classes.icon} />}</div>
    </div>
  );
});
