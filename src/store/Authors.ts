import { runInAction } from 'mobx';
import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import { TAuthors } from '../components/types/types';
import { picture } from './Pictures';
import { data } from './Data';
import { location } from './Locations';
import { inputs } from './Inputs';

class Authors {
  authors: TAuthors[] = [];
  currentAuthor = 0;
  currentAuthorName = 'Author';
  baseUrl = 'https://test-front.framework.team/';

  constructor() {
    makeAutoObservable(this);
  }

  changeCurrentAuthorName = (name) => {
    this.currentAuthorName = name;
  };

  clearAuthors = () => {
    this.currentAuthor = 0;
    this.currentAuthorName = 'Author';
    picture.pictures = [];
    data.loading = true;
    axios
      .get(
        `${this.baseUrl}paintings${location.currentLocation > 0 ? `?locationId=${location.currentLocation}` : ''}${
          location.currentLocation > 0 ? '' : '?_limit=12'
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

  changeCurrentAuthor = (id) => {
    this.currentAuthor = id;
  };

  changeAuthor = (id) => {
    data.loading = true;
    picture.pictures = [];
    axios
      .get(
        `${this.baseUrl}paintings${location.currentLocation > 0 ? `?locationId=${location.currentLocation}` : ''}${
          location.currentLocation > 0 ? '&' : '?'
        }authorId=${id}${inputs.queryValue ? `&q=${inputs.queryValue}` : ''}${
          inputs.from ? `&created_gte=${inputs.from}` : ''
        }${inputs.to ? `&created_lte=${inputs.to}` : ''}`,
      )
      .then((result) => {
        runInAction(() => {
          picture.pictures = result.data;
          data.loading = false;
        });
      });
  };

  fetchAuthors = () => {
    axios.get(`${this.baseUrl}authors`).then((result) => {
      runInAction(() => {
        this.authors = result.data;
      });
    });
  };

  fetchAuthorById = (id) => {
    axios.get(`${this.baseUrl}authors`).then((result) => {
      runInAction(() => {
        this.authors = result.data;
      });
    });
  };
}

export const author = new Authors();
