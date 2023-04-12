import React from 'react';
import classes from './Search.module.scss';
import { observer } from 'mobx-react-lite';
import { inputs } from '../../store/Inputs';
import { data } from '../../store/Data';

const index: React.FC = observer(() => {
  return (
    <div className={classes.inp}>
      <input
        placeholder="Name"
        value={inputs.queryValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          inputs.fetchByName(e.target.value), data.fetchLength();
        }}
        type="text"
        className={data.theme ? classes.search : classes.searchD}
      />
    </div>
  );
});

export default index;
