import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxLinearNoteFavorite.module.css';
import { VuesaxLinearNoteFavoriteIcon } from './VuesaxLinearNoteFavoriteIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vuesaxLinearNoteFavorite?: ReactNode;
  };
}
/* @figmaId 1:146 */
export const VuesaxLinearNoteFavorite: FC<Props> = memo(function VuesaxLinearNoteFavorite(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vuesaxLinearNoteFavorite}>
        {props.swap?.vuesaxLinearNoteFavorite || <VuesaxLinearNoteFavoriteIcon className={classes.icon} />}
      </div>
    </div>
  );
});
