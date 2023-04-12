import { runInAction } from 'mobx';
import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import { data } from './Data';
import { author } from './Authors';
import { inputs } from './Inputs';
import { picture } from './Pictures';
import { TLocations } from '../components/types/types';

class Locations {
  locations: TLocations[] = [];
  currentLocationName = 'Location';
  currentLocation = 0;

  baseUrl = 'https://test-front.framework.team/';

  constructor() {
    makeAutoObservable(this);
  }

  clearLocations = () => {
    this.currentLocation = 0;
    this.currentLocationName = 'Location';
    data.loading = true;
    picture.pictures = [];
    axios
      .get(
        `${this.baseUrl}paintings${author.currentAuthor > 0 ? `?authorId=${author.currentAuthor}` : ''}${
          author.currentAuthor > 0 ? '' : '?_limit=12'
        }${inputs.queryValue ? `&q=${inputs.queryValue}` : ''}${inputs.from ? `&created_gte=${inputs.from}` : ''}${
          inputs.to ? `&created_lte=${inputs.to}` : ''
        }`,
      )
      .then((result) => {
        runInAction(() => {
          picture.pictures = result.data;
          data.loading = false;
        });
      });
  };

  changeLocation = (id: number) => {
    data.loading = true;
    picture.pictures = [];
    axios
      .get(
        `${this.baseUrl}paintings?locationId=${id}${
          author.currentAuthor > 0 ? `&authorId=${author.currentAuthor}` : ''
        }${inputs.from ? `&created_gte=${inputs.from}` : ''}${inputs.to ? `&created_lte=${inputs.to}` : ''}${
          inputs.queryValue ? `&q=${inputs.queryValue}` : ''
        }`,
      )
      .then((result) => {
        runInAction(() => {
          picture.pictures = result.data;
          data.loading = false;
        });
      });
  };

  changeCurrentLocationName = (name: string) => {
    this.currentLocationName = name;
  };

  changeCurrentLocation = (id: number) => {
    this.currentLocation = id;
  };

  fetchLocations = () => {
    axios.get(`${this.baseUrl}locations`).then((result) => {
      runInAction(() => {
        this.locations = result.data;
      });
    });
  };
}

export const location = new Locations();
