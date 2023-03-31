import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxLinearSms.module.css';
import { VuesaxLinearSmsIcon } from './VuesaxLinearSmsIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vuesaxLinearSms?: ReactNode;
  };
}
/* @figmaId 1:140 */
export const VuesaxLinearSms: FC<Props> = memo(function VuesaxLinearSms(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vuesaxLinearSms}>
        {props.swap?.vuesaxLinearSms || <VuesaxLinearSmsIcon className={classes.icon} />}
      </div>
    </div>
  );
});
