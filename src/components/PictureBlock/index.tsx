import React, { useState } from 'react';
import classes from './PictureBlock.module.scss';
import { observer } from 'mobx-react-lite';
import { TAuthors, TLocations } from '../types/types';
import { author } from '../../store/Authors';
import { location } from '../../store/Locations';

const baseUrl = 'https://test-front.framework.team';

type TPictureBlockProps = {
  imageUrl: string;
  name: string;
  created: string;
  authorId: number;
  locationId: number;
};

const index: React.FC<TPictureBlockProps> = observer((props) => {
  const authors: TAuthors[] = author.authors;
  const locations: TLocations[] = location.locations;
  const [visible, setVisible] = useState(false);
  return (
    <div className={classes.picture} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
      <img className={classes.img} src={`${baseUrl}${props.imageUrl}`} alt="img" />
      <div>
        {!visible && <span className={classes.span}>{props.name}</span>}
        {visible && (
          <div className={classes.popup}>
            <div>
              <span className={classes.popup__heading}>{props.name}</span>
            </div>
            <div className={classes.popup__subh}>
              <span>Author:</span> {authors.find((author) => author.id === props.authorId)?.name}
            </div>
            <div className={classes.popup__subh}>
              <span>Created:</span> {props.created}
            </div>
            <div className={classes.popup__subh}>
              <span>Location:</span> {locations.find((location) => location.id === props.locationId)?.location}
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default index;
