import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { ShoppingList } from '../ShoppingList/ShoppingList';
import appStyle from './App.module.css';

function App() {
  return (
    <div className={appStyle.App}>
      <header className={appStyle.header}>
        <Header />
      </header>
      <main className={appStyle.main}>
        <ShoppingList />
      </main>
      <footer className={appStyle.footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
