import React, { useRef, useState } from 'react';
import classes from './LiSelectAuthor.module.scss';
import close from '../../assets/close.png';
import closeD from '../../assets/closeD.png';
import arrow from '../../assets/arrow-l.png';
import arrowD from '../../assets/arrow-d.png';
import { observer } from 'mobx-react-lite';
import { TAuthors } from '../types/types';
import { author } from '../../store/Authors';
import { data } from '../../store/Data';

const index: React.FC = observer(() => {
  const [visible, setVisible] = useState(false);
  const authorRef = useRef<HTMLDivElement>(null);
  const authors: TAuthors[] = author.authors;

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      let path = event.composedPath().includes(authorRef.current!);
      if (!path) setVisible(false);
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div
      ref={authorRef}
      onClick={() => setVisible(!visible)}
      className={data.theme ? classes.wrapper : classes.wrapperD}
    >
      <span className={classes.first}>{author.currentAuthorName}</span>
      {author.currentAuthor > 0 ? (
        <div
          className={classes.close}
          onClick={(e) => {
            author.clearAuthors(), data.fetchLength(), e.stopPropagation();
          }}
        >
          <img src={data.theme ? close : closeD} alt="close" className={classes.closeImg} />
        </div>
      ) : null}
      <div className={classes.arrow}>
        <img src={data.theme ? arrow : arrowD} alt="" />
      </div>
      {visible ? (
        <ul>
          {visible &&
            authors.map((item) => (
              <li
                value={item.id}
                onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
                  author.changeAuthor(e.currentTarget.value),
                    author.changeCurrentAuthorName(item.name),
                    data.fetchLength(),
                    author.changeCurrentAuthor(item.id),
                    setVisible(false);
                }}
                key={item.id}
              >
                {item.name}
              </li>
            ))}
        </ul>
      ) : null}
    </div>
  );
});

export default index;
