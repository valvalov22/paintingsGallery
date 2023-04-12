import React, { useEffect } from 'react';

import NotFound from '../components/NotFound';
import { observer } from 'mobx-react-lite';
import './Home.scss';
import Loader from '../components/Loader';
import { picture } from '../store/Pictures';
import { data } from '../store/Data';
import { author } from '../store/Authors';
import { location } from '../store/Locations';
import Header from '../components/ui/Header';
import PicturesGrid from '../components/ui/PicturesGrid';
import Pagination from '../components/ui/Pagination';

const Home: React.FC = observer(() => {
  const length = data.length;
  useEffect(() => {
    data.fetchLength();
    author.fetchAuthors();
    location.fetchLocations();
  }, []);
  return (
    <div className="">
      <Header />
      {picture.pictures.length === 0 && !data.loading ? <NotFound /> : null}
      {data.loading ? <Loader /> : null}
      <div className={data.theme ? '' : `dark-grid`}>
        <PicturesGrid />
      </div>
      {data.length > 12 &&
        author.currentAuthor === 0 &&
        location.currentLocation === 0 &&
        picture.pictures.length > 0 && (
          <div className=" ">
            <Pagination totalItems={length} />
          </div>
        )}
    </div>
  );
});

export default Home;
