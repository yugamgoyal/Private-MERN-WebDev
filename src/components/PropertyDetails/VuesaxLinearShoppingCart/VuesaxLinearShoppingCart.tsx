import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxLinearShoppingCart.module.css';
import { VuesaxLinearShoppingCartIcon } from './VuesaxLinearShoppingCartIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 1:29 */
export const VuesaxLinearShoppingCart: FC<Props> = memo(function VuesaxLinearShoppingCart(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vuesaxLinearShoppingCart}>
        <VuesaxLinearShoppingCartIcon className={classes.icon} />
      </div>
    </div>
  );
});
