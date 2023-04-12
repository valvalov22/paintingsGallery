import React, { useRef, useState } from 'react';
import classes from './LiSelectLocation.module.scss';
import close from '../../assets/close.png';
import arrow from '../../assets/arrow-l.png';
import arrowD from '../../assets/arrow-d.png';
import closeD from '../../assets/closeD.png';
import { observer } from 'mobx-react-lite';
import { TLocations } from '../types/types';
import { location } from '../../store/Locations';
import { data } from '../../store/Data';

const index: React.FC = observer(() => {
  const [visible, setVisible] = useState(false);
  const locationRef = useRef<HTMLDivElement>(null);
  const locations: TLocations[] = location.locations;

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      let path = event.composedPath().includes(locationRef.current!);
      if (!path) setVisible(false);
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div
      ref={locationRef}
      onClick={() => setVisible(!visible)}
      className={data.theme ? classes.wrapper : classes.wrapperD}
    >
      <span className={classes.first}>{location.currentLocationName}</span>
      {location.currentLocation > 0 ? (
        <div
          className={classes.close}
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            location.clearLocations(), e.stopPropagation();
          }}
        >
          <img src={data.theme ? close : closeD} alt="close" className={classes.closeImg} />
        </div>
      ) : null}
      <div className={classes.arrow}>
        <img src={data.theme ? arrow : arrowD} alt="" />
      </div>
      {visible ? (
        <ul>
          {visible &&
            locations.map((item) => (
              <li
                value={item.id}
                onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
                  location.changeLocation(e.currentTarget.value),
                    location.changeCurrentLocationName(item.location),
                    location.changeCurrentLocation(item.id),
                    setVisible(false);
                }}
                key={item.id}
              >
                {item.location.length > 32 ? item.location.slice(0, 32) + '...' : item.location}
              </li>
            ))}
        </ul>
      ) : null}
    </div>
  );
});

export default index;
