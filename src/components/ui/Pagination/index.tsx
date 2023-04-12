import React from 'react';
import classes from './Pagination.module.scss';
import { observer } from 'mobx-react-lite';
import { data } from '../../../store/Data';
import { pagination } from '../../../store/Pagination';

type TPaginationProps = {
  totalItems: number;
};

const Pagination: React.FC<TPaginationProps> = observer((props) => {
  const pageNumbers: number[] = [];
  const length = Math.ceil(props.totalItems / 12);

  for (let i = 1; i <= length; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={data.theme ? classes.wrapper : classes.wrapperD}>
      <ul>
        <li
          className={
            pagination.currentPage === 1
              ? `${classes.doubleLeft} ${classes.disabled}`
              : `${classes.doubleLeft} + 'dark'`
          }
          onClick={() => pagination.changePage(1)}
        >
          &laquo;
        </li>
        <li
          className={pagination.currentPage === 1 ? `${classes.disabled}` : '' + 'dark'}
          onClick={() => pagination.changePage(pagination.currentPage - 1)}
        >
          &#8249;
        </li>
        {pageNumbers.map((number) => (
          <li
            className={pagination.currentPage === number ? `${classes.active}` : '' + 'dark'}
            onClick={() => pagination.changePage(number)}
            key={number}
          >
            {number}
          </li>
        ))}
        <li
          onClick={() => pagination.changePage(pagination.currentPage + 1)}
          className={pagination.currentPage === length ? `${classes.disabled}` : ''}
        >
          &#8250;
        </li>
        <li
          onClick={() => pagination.changePage(length)}
          className={
            pagination.currentPage === length ? `${classes.doubleRight} ${classes.disabled}` : `${classes.doubleRight}`
          }
        >
          &raquo;
        </li>
      </ul>
    </div>
  );
});

export default Pagination;
