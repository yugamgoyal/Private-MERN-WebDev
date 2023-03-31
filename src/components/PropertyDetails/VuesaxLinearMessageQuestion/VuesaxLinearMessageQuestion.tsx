import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxLinearMessageQuestion.module.css';
import { VuesaxLinearMessageQuestionIco } from './VuesaxLinearMessageQuestionIco.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vuesaxLinearMessageQuestion?: ReactNode;
  };
}
/* @figmaId 1:63 */
export const VuesaxLinearMessageQuestion: FC<Props> = memo(function VuesaxLinearMessageQuestion(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vuesaxLinearMessageQuestion}>
        {props.swap?.vuesaxLinearMessageQuestion || <VuesaxLinearMessageQuestionIco className={classes.icon} />}
      </div>
    </div>
  );
});
