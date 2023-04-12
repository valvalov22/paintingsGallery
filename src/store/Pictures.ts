import { runInAction } from 'mobx';
import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import { TPictures } from '../components/types/types';
import { data } from './Data';

class Pictures {
  pictures: TPictures[] = [];
  length = 0;
  baseUrl = 'https://test-front.framework.team/';

  constructor() {
    makeAutoObservable(this);
  }

  fetchPictures = () => {
    data.loading = true;
    axios.get(`${this.baseUrl}paintings?_limit=12`).then((result) => {
      runInAction(() => {
        this.pictures = result.data;
        data.loading = false;
      });
    });
  };
}

export const picture = new Pictures();
