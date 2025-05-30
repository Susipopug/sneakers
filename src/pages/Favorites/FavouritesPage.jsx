import Card from '../../components/Card';

export const FavoritesPage = ({ items }) => {
  return (
    <div className="content">
      <div className="sneakers">
        {items
          // .filter((obj) => obj.title.toLowerCase().includes(search.toLowerCase()))
          .map((obj) => (
            <Card
              key={obj.id}
              cardData={obj}
              onPlus={(obj) => handleCartItems(obj)}
              clickFavorite={(obj) => addToFavorite(obj)}
            />
          ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
