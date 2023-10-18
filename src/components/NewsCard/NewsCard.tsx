import Card from 'react-bootstrap/Card';
import { Heart } from '@phosphor-icons/react';
import { useContext } from 'react';
import calcDate from '../../utils/calcDate';
import { Item } from '../../utils/types';
import NewsContext from '../../context/NewsContext';
import useLocalStorage from '../../hooks/useLocalStorage';
import './newscard.css';

type NewsCardProps = {
  item: Item;
  renderFavorite?: (item: Item) => void | undefined;
};

function NewsCard({ item, renderFavorite = undefined }: NewsCardProps) {
  const { titulo, introducao, data_publicacao: dataPublicacao, link } = item;
  const { toggleOrientation } = useContext(NewsContext);
  const { isFavorite, setAndRemoveFromLocalStorage } = useLocalStorage(item);

  return (
    <Card
      data-testid="news-card"
      className="card"
      style={ {
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        margin: '1rem 0',
        height: toggleOrientation ? '18rem' : '14rem',
        position: 'relative',
        width: toggleOrientation ? '24rem' : '80rem',
      } }
    >
      <Card.Body
        style={ {
          display: 'flex',
          flexFlow: 'column nowrap',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        } }
        className="cardBody"
      >
        <Card.Title
          style={ {
            color: '#2a2b2c',
            fontFamily: 'Gabarito',
            fontSize: toggleOrientation ? '1.2rem' : '2rem',
            fontWeight: '700',
            minHeight: toggleOrientation ? '4.375rem' : '2rem',
            textAlign: 'left',
          } }
        >
          {titulo}
        </Card.Title>
        <Card.Text
          style={ {
            color: '#2a2b2c',
            fontFamily: 'Gabarito' || 'sans-serif',
            fontSize: toggleOrientation ? '0.75rem' : '1rem',
            fontWeight: '400',
            lineHeight: '1.2rem',
            minHeight: toggleOrientation ? '6rem' : '3rem',
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
              backgroundColor: '#C18147',
              boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              borderRadius: '5px',
              color: '#fff',
              fontFamily: 'Gabarito',
              fontSize: '0.75rem',
              fontWeight: '700',
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
            onClick={ renderFavorite
              ? () => renderFavorite(item)
              : () => setAndRemoveFromLocalStorage() }
          >
            <Heart color="#cf813c" weight={ isFavorite ? 'fill' : 'bold' } size={ 24 } />
          </button>
        </Card.Footer>

      </Card.Body>
    </Card>
  );
}

export default NewsCard;
