import { runInAction } from 'mobx';
import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import { data } from './Data';
import { picture } from './Pictures';
import { author } from './Authors';
import { location } from './Locations';

class Inputs {
  from = '';
  to = '';
  queryValue = '';
  baseUrl = 'https://test-front.framework.team/';

  constructor() {
    makeAutoObservable(this);
  }

  fetchByName = (value: string) => {
    data.loading = true;
    this.queryValue = value;
    picture.pictures = [];
    axios
      .get(
        `${this.baseUrl}paintings?q=${this.queryValue}&_limit=12${
          author.currentAuthor ? `&authorId=${author.currentAuthor}` : ''
        }${location.currentLocation ? `&locationId=${location.currentLocation}` : ''}${
          this.from ? `&created_gte=${this.from}` : ''
        }${this.to ? `&created_lte=${this.to}` : ''}`,
      )
      .then((result) => {
        runInAction(() => {
          picture.pictures = result.data;
          data.loading = false;
        });
      });
  };

  fetchByDate = (from: string, to: string) => {
    this.from = from;
    this.to = to;
    picture.pictures = [];
    data.loading = true;
    axios
      .get(
        `${this.baseUrl}paintings?${this.from !== '' ? `created_gte=${from}` : ''}&${
          this.to !== '' ? `created_lte=${to}` : ''
        }${author.currentAuthor > 0 ? `&authorId=${author.currentAuthor}` : ''}${
          location.currentLocation > 0 ? `&locationId=${location.currentLocation}` : ''
        }&_limit=12`,
      )
      .then((result) => {
        runInAction(() => {
          picture.pictures = result.data;
          data.loading = false;
        });
      });
  };
}

export const inputs = new Inputs();
