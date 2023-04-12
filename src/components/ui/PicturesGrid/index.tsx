import React, { useEffect } from 'react';
import PictureBlock from '../../PictureBlock';
import classes from './PicturesGrid.module.scss';
import { observer } from 'mobx-react-lite';
import { TAuthors, TPictures } from '../../types/types';
import { picture } from '../../../store/Pictures';
import { author } from '../../../store/Authors';
import { data } from '../../../store/Data';

const index: React.FC = observer(() => {
  const pictures: TPictures[] = picture.pictures;
  const authors: TAuthors[] = author.authors;
  useEffect(() => {
    picture.fetchPictures();
  }, []);

  const paintings = pictures.map((item) => (
    <div className={classes.picture}>
      <PictureBlock key={item.id} {...item} {...authors} />
    </div>
  ));
  return <div className={data.theme ? classes.grid : classes.gridD}>{!data.loading ? paintings : null}</div>;
});

export default index;
