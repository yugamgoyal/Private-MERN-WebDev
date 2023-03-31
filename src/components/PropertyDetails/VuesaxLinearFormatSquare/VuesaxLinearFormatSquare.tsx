import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxLinearFormatSquare.module.css';
import { VuesaxLinearFormatSquareIcon } from './VuesaxLinearFormatSquareIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vuesaxLinearFormatSquare?: ReactNode;
  };
}
/* @figmaId 1:186 */
export const VuesaxLinearFormatSquare: FC<Props> = memo(function VuesaxLinearFormatSquare(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vuesaxLinearFormatSquare}>
        {props.swap?.vuesaxLinearFormatSquare || <VuesaxLinearFormatSquareIcon className={classes.icon} />}
      </div>
    </div>
  );
});
