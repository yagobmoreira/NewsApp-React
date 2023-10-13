import Card from 'react-bootstrap/Card';
import calcDate from '../../utils/calcDate';

type NewsCardProps = {
  title: string;
  introduction: string;
  date: string;
  link: string;
};
function NewsCard({ title, introduction, date, link }: NewsCardProps) {
  calcDate(date);
  return (
    <Card
      style={ {
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        minHeight: '22rem',
        position: 'relative',
        width: '20rem',
      } }
    >
      <Card.Body className="cardBody">
        <Card.Title
          style={ {
            color: '#2a2b2c',
            fontFamily: 'Roboto' || 'sans-serif',
            fontSize: title.length > 80 ? '1.1rem' : '1.2rem',
            fontWeight: '700',
            textAlign: 'match-parent',
          } }
        >
          {title}
        </Card.Title>
        <Card.Text
          style={ {
            color: '#2a2b2c',
            fontFamily: 'Roboto' || 'sans-serif',
            fontSize: '0.75rem',
            fontWeight: '400',
            textAlign: 'justify',
            lineHeight: '1.2rem',
          } }
        >
          {introduction}
        </Card.Text>
        <Card.Footer
          style={ {
            backgroundColor: 'white',
            bottom: '40px',
            position: 'absolute',
          } }
        >
          <small className="text-muted">{date}</small>
          <a target="_blank" href={ link } rel="noreferrer">Leia a notícia aqui</a>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}

export default NewsCard;
