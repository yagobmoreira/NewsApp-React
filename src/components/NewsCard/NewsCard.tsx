import Card from 'react-bootstrap/Card';
import { Heart } from '@phosphor-icons/react';
import { useState } from 'react';
import calcDate from '../../utils/calcDate';
import { Item } from '../../utils/types';

type NewsCardProps = {
  item: Item;

};
function NewsCard({ item }: NewsCardProps) {
  const { titulo, introducao, data_publicacao: dataPublicacao, link } = item;

  const [isFavorite, setIsFavorite] = useState(
    () => JSON.parse(localStorage.getItem('favoriteNews') || '[]')
      .some((news: Item) => news.titulo === titulo),
  );

  const setAndRemoveFromLocalStorage = () => {
    const favoriteNews = JSON.parse(localStorage.getItem('favoriteNews') || '[]');
    if (isFavorite) {
      const newFavoriteNews = favoriteNews.filter((news: Item) => news.titulo !== titulo);
      localStorage.setItem('favoriteNews', JSON.stringify(newFavoriteNews));
      setIsFavorite(false);
    } else {
      localStorage.setItem('favoriteNews', JSON.stringify([...favoriteNews, item]));
      setIsFavorite(true);
    }
  };

  return (
    <Card
      style={ {
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        margin: '1rem 0',
        minHeight: '16rem',
        position: 'relative',
        width: '24rem',
      } }
    >
      <Card.Body className="cardBody">
        <Card.Title
          style={ {
            color: '#2a2b2c',
            fontFamily: 'Gabarito',
            fontSize: titulo.length > 80 ? '1.2rem' : '1.3rem',
            fontWeight: '700',
            minHeight: '4.375rem',
            textAlign: 'left',
          } }
        >
          {titulo}
        </Card.Title>
        <Card.Text
          style={ {
            color: '#2a2b2c',
            fontFamily: 'Gabarito' || 'sans-serif',
            fontSize: '0.75rem',
            fontWeight: '400',
            lineHeight: '1.2rem',
            minHeight: '6rem',
            textAlign: 'justify',
          } }
        >
          {introducao}
        </Card.Text>
        <Card.Footer
          style={ {
            alignItems: 'center',
            backgroundColor: 'white',
            display: 'flex',
            flexFlow: 'row nowrap',
            padding: '10px',
            justifyContent: 'space-between',
            width: '100%',
          } }
        >
          <small
            className="text-muted"
            style={ {
              color: '#2a2b2c',
              fontFamily: 'Gabarito',
              fontSize: '0.75rem',
              fontWeight: '400',
              textAlign: 'justify',
              lineHeight: '1.2rem',
            } }
          >
            {
          calcDate(dataPublicacao) === 0
            ? 'hoje'
            : `${calcDate(dataPublicacao)} dias atrás`
}
          </small>
          <a
            target="_blank"
            href={ link }
            rel="noreferrer"
            style={ {
              backgroundColor: '#05d465',
              borderRadius: '5px',
              color: '#2a2b2c',
              fontFamily: 'Gabarito',
              fontSize: '0.75rem',
              boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              padding: '5px 10px',
              textDecoration: 'none',
            } }
          >
            Leia a notícia aqui
          </a>
          <button
            style={ { border: 'none',
              background: 'none',
            } }
            onClick={ () => setAndRemoveFromLocalStorage() }
          >
            <Heart color="#05d465" weight={ isFavorite ? 'fill' : 'bold' } size={ 24 } />
          </button>
        </Card.Footer>

      </Card.Body>
    </Card>
  );
}

export default NewsCard;
