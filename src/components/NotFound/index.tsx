import React from 'react';
import classes from './NotFound.module.scss';
import { data } from '../../store/Data';
import { observer } from 'mobx-react-lite';

const index: React.FC = observer(() => {
  return (
    <div className={data.theme ? classes.notFound : classes.notFoundD}>
      <span className={classes.heading}>По вашему запросу ничего не найдено</span>
      <div className={classes.emoji}>🙁</div>
    </div>
  );
});

export default index;
