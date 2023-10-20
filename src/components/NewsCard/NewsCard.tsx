import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { Heart } from '@phosphor-icons/react';
import useStoredFavorites from '../../hooks/useStoredFavorites';
import { calcDate } from '../../utils';
import { GlobalStateType, Item } from '../../utils/types';
import './newscard.css';

type NewsCardProps = {
  item: Item;
  renderFavorite?: (item: Item) => void | undefined;
  filter?: string | undefined;
  imgSrc: string;
};

function NewsCard({ item,
  renderFavorite = undefined, filter = undefined, imgSrc }: NewsCardProps) {
  const { titulo, introducao, data_publicacao: dataPublicacao, link } = item;
  const globalState = useSelector((state: GlobalStateType) => state.news);
  const { toggleOrientationType: toggleOrientation } = globalState;
  const { isFavorite, setAndRemoveFromLocalStorage } = useStoredFavorites(item);

  return (
    <Card
      data-testid="news-card"
      className={ `card ${filter}` }
      style={ {
        alignItems: 'center',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        display: 'flex',
        flexDirection: toggleOrientation ? 'column' : 'row',
        margin: '1rem 0',
        height: '18rem',
        position: 'relative',
        width: toggleOrientation ? '24rem' : '80rem',
      } }
    >
      <img
        src={ imgSrc }
        alt="Imagem da notícia"
        style={ {
          display: toggleOrientation ? 'none' : 'inline-block',
          height: '95%',
          width: '60%',
        } }
      />
      <Card.Body
        style={ {
          alignItems: toggleOrientation ? 'flex-start' : 'flex-end',
          display: 'flex',
          flexFlow: 'column nowrap',
          justifyContent: 'space-between',
          width: toggleOrientation ? '100%' : '40%',
        } }
        className="cardBody"
      >
        <Card.Title
          style={ {
            color: '#2a2b2c',
            fontFamily: 'Gabarito',
            fontSize: toggleOrientation ? '1.2rem' : '1.5rem',
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
            data-testid="favorite-btn"
          >
            <Heart color="#cf813c" weight={ isFavorite ? 'fill' : 'bold' } size={ 24 } />
          </button>
        </Card.Footer>
        <span
          style={
          {
            backgroundColor: item.tipo === 'Notícia' ? '#870511' : '#2f6640',
            border: '1px solid #C18147',
            borderRadius: '10px',
            color: '#fff',
            fontFamily: 'Gabarito',
            fontSize: '0.8rem',
            padding: '2px 5px',
          }
}
        >
          {item.tipo}
        </span>
      </Card.Body>
    </Card>
  );
}

export default NewsCard;
