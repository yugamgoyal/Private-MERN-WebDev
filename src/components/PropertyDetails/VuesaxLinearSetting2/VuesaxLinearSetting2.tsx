import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxLinearSetting2.module.css';
import { VuesaxLinearSetting2Icon } from './VuesaxLinearSetting2Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vuesaxLinearSetting2?: ReactNode;
  };
}
/* @figmaId 1:80 */
export const VuesaxLinearSetting2: FC<Props> = memo(function VuesaxLinearSetting2(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vuesaxLinearSetting2}>
        {props.swap?.vuesaxLinearSetting2 || <VuesaxLinearSetting2Icon className={classes.icon} />}
      </div>
    </div>
  );
});
