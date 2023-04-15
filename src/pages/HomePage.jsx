import React, { useEffect, useState } from 'react';
import '../index.scss';
import Collection from '../components/Collection';

const Categories = [
  { name: 'All' },
  { name: 'Sea' },
  { name: 'Mountains' },
  { name: 'Cities' },
  { name: 'Other' },
];

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);

  const category = categoryId ? `category=${categoryId}` : '';

  const [collections, setCollections] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://643687663e4d2b4a12d4be88.mockapi.io/collection?page=${page}&limit=3&${category}`)
      .then((response) => response.json())
      .then((data) => setCollections(data))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, [categoryId, page]);

  return (
    <div className='App'>
      <h1>My photo gallery</h1>
      <div className='top'>
        {Categories.map((category, index) => (
          <ul className='tags'>
            <li
              onClick={() => setCategoryId(index)}
              key={category.name}
              className={categoryId === index ? 'active' : ''}>
              {category.name}
            </li>
          </ul>
        ))}
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type='text'
          className='search-input'
          placeholder='Search...'></input>
      </div>
      <div className='content'>
        {isLoading ? (
          <h2>Is loading, please, wait</h2>
        ) : (
          collections
            .filter((item) => {
              return item.name.toLowerCase().includes(searchValue.toLowerCase());
            })
            .map((collection, index) => (
              <Collection key={index} name={collection.name} images={collection.photos} />
            ))
        )}
      </div>

      <ul className='pagination'>
        {[...Array(3)].map((el, i) => (
          <li onClick={() => setPage(i + 1)} className={page === i + 1 ? 'active' : ''} key={i}>
            {i + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};
