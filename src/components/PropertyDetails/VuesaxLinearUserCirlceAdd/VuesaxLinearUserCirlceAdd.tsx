import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxLinearUserCirlceAdd.module.css';
import { VuesaxLinearUserCirlceAddIcon } from './VuesaxLinearUserCirlceAddIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vuesaxLinearUserCirlceAdd?: ReactNode;
  };
}
/* @figmaId 1:2 */
export const VuesaxLinearUserCirlceAdd: FC<Props> = memo(function VuesaxLinearUserCirlceAdd(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vuesaxLinearUserCirlceAdd}>
        {props.swap?.vuesaxLinearUserCirlceAdd || <VuesaxLinearUserCirlceAddIcon className={classes.icon} />}
      </div>
    </div>
  );
});
