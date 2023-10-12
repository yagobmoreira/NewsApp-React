import Card from 'react-bootstrap/Card';

type NewsCardProps = {
  title: string;
  introduction: string;
  date: string;
  link: string;
};
function NewsCard({ title, introduction, date, link }: NewsCardProps) {
  return (
    <Card style={ { width: '18rem' } }>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {introduction}
        </Card.Text>
        <Card.Footer>
          <small className="text-muted">{date}</small>
          <a target="_blank" href={ link } rel="noreferrer">Leia a notícia aqui</a>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}

export default NewsCard;
