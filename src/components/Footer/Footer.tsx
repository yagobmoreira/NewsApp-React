import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { FooterContainer, FooterContent, FooterLogos } from './styles';
import { scrollPage } from '../../utils';

function Footer() {
  return (
    <FooterContainer>
      <button onClick={ scrollPage }>
        Últimas notícias
      </button>
      <FooterContent>
        <span>Desenvolvido por Yago Moreira.</span>
        <FooterLogos>
          <a
            href="https://github.com/yagobmoreira"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub size={ 32 } />
          </a>
          <a
            href="https://www.linkedin.com/in/yagobmoreira/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin size={ 32 } />
          </a>
        </FooterLogos>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
