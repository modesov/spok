import { Container } from '../Container/Container';
import headerStyle from './Header.module.css';

export function Header() {
  return (
    <Container>
      <div className={headerStyle.box}>
        <nav className={headerStyle.mainMenu}>
          Главное меню
        </nav>
        <div className={headerStyle.logo}>
          Logo
        </div>
        <nav className={headerStyle.userMenu}>
          Пользовательское меню
        </nav>
      </div>
    </Container>
  );
}