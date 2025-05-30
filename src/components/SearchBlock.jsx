import { useSearchParams } from 'react-router-dom';

export default function SearchBlock() {
  const [searchParams, setSearchParams] = useSearchParams('');

  const onChangeInput = (event) => {
    const newParams = new URLSearchParams(searchParams);

    if (event.target.value) {
      newParams.set('search', event.target.value);
    } else {
      newParams.delete('search');
    }
    setSearchParams(newParams);
  };

  const search = searchParams.get('search') || '';

  return (
    <div className="search">
      <h1>{search ? `Поиск по запросу:"${search}"` : 'Все кроссовки'}</h1>
      <div className="search-block">
        <img src="/public/search.svg" alt="Search" />
        {search && (
          <img
            onClick={() => setSearchParams('')}
            className="inputButton"
            width={20}
            height={20}
            src="/public/btn-remove.svg"
            alt=""
          />
        )}
        <input
          onChange={onChangeInput}
          params={search}
          placeholder="Поиск..."
        />
      </div>
    </div>
  );
}
