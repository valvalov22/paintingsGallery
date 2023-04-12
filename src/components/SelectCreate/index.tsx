import React, { useRef, useState } from 'react';
import classes from './CreateSelect.module.scss';
import arrow from '../../assets/arrow-l.png';
import arrowD from '../../assets/arrow-d.png';
import { observer } from 'mobx-react-lite';
import { data } from '../../store/Data';
import { inputs } from '../../store/Inputs';

const index: React.FC = observer(() => {
  const [visible, setVisible] = useState(false);
  const createSelectRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      let path = event.composedPath().includes(createSelectRef.current!);
      if (!path) setVisible(false);
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={createSelectRef} className={classes.wrapper}>
      <div
        onClick={(e) => {
          setVisible(!visible), e.stopPropagation();
        }}
        className={classes.first}
      >
        Create
      </div>
      <div className={classes.arrow}>
        <img src={data.theme ? arrow : arrowD} alt="" />
      </div>
      {visible ? (
        <div className={data.theme ? classes.inputs : classes.inputsD}>
          <input
            onChange={(e) => {
              inputs.fetchByDate(e.target.value, inputs.to), data.fetchLength();
            }}
            value={inputs.from}
            placeholder="from"
            type="text"
          />
          <div className={classes.divider}>
            <span>—</span>
          </div>
          <input
            onChange={(e) => inputs.fetchByDate(inputs.from, e.target.value)}
            value={inputs.to}
            placeholder="to"
            type="text"
          />
        </div>
      ) : null}
    </div>
  );
});

export default index;
