import React from 'react';
import classes from './CssModule.module.scss';

export const CssModule = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>CSS Module입니다</p>
      <button className={classes.button}>Button</button>
    </div>
  );
};
