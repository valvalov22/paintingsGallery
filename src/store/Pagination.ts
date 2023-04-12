import { runInAction } from 'mobx';
import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import { picture } from './Pictures';
import { inputs } from './Inputs';
import { author } from './Authors';
import { data } from './Data';

class Pagination {
  length = 0;
  currentPage = 1;
  baseUrl = 'https://test-front.framework.team/';

  constructor() {
    makeAutoObservable(this);
  }

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

  changePage = (pageNumber) => {
    this.currentPage = pageNumber;
    picture.pictures = [];
    data.loading = true;
    axios
      .get(
        `${this.baseUrl}paintings?_page=${pageNumber}&_limit=12${inputs.queryValue ? `&q=${inputs.queryValue}` : ''}${
          inputs.from ? `&created_gte=${inputs.from}` : ''
        }`,
      )
      .then((result) => {
        runInAction(() => {
          picture.pictures = result.data;
          data.loading = false;
        });
      });
  };
}

export const pagination = new Pagination();
