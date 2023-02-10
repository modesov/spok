import { Container } from '../Container/Container';
import footerStyle from './Footer.module.css';

export function Footer() {
  return (
    <Container>
      <div className={footerStyle.box}>
        © 2002–2023
      </div>
    </Container>
  );
}