import { runInAction } from 'mobx';
import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import { author } from './Authors';
import { inputs } from './Inputs';

class Data {
  theme = true;
  loading = false;
  length = 0;
  baseUrl = 'https://test-front.framework.team/';

  constructor() {
    makeAutoObservable(this);
  }

  changeTheme = () => {
    this.theme = !this.theme;
  };

  fetchLength = () => {
    axios
      .get(
        `${this.baseUrl}paintings${inputs.queryValue ? `?q=${inputs.queryValue}` : ''}${
          author.currentAuthor ? `?authorId=${author.currentAuthor}` : ''
        }${inputs.from ? `?created_gte=${inputs.from}` : ''}`,
      )
      .then((result) => {
        runInAction(() => {
          this.length = result.data.length;
        });
      });
  };
}

export const data = new Data();
