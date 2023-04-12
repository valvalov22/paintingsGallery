import React from 'react';
import logol from '../../../assets/logo-l.png';
import themel from '../../../assets/theme-l.png';
import themed from '../../../assets/theme-d.png';
import classes from './Header.module.scss';
import Search from '../../Search';
import SelectAuthor from '../../SelectAuthor';
import SelectLocation from '../../SelectLocation';
import SelectCreate from '../../SelectCreate';
import { observer } from 'mobx-react-lite';
import { data } from '../../../store/Data';

const Header: React.FC = observer(() => {
  return (
    <div className={data.theme ? classes.wrapper : classes.wrapperDark}>
      <div className={classes.header}>
        <img className={classes.logo} src={logol} alt="" />
        <div onClick={() => data.changeTheme()}>
          <img className={classes.theme} src={data.theme ? themel : themed} alt="" />
        </div>
      </div>
      <div className={classes.filter}>
        <Search />
        <SelectAuthor />
        <SelectLocation />
        <SelectCreate />
      </div>
    </div>
  );
});

export default Header;
