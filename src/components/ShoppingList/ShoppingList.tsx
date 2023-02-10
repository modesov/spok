import { Container } from '../Container/Container';
import { ListInStore } from '../ListInStore/ListInStore';
import shoppingListStyle from './ShoppingList.module.css';
import { data, shops } from '../../utils/data';

export function ShoppingList() {
  return (
    <Container>
      <section className={shoppingListStyle.box}>
        <h1>Список покупок</h1>
        {shops.map((shop) => {
          const list = data.filter((item) => item.shopId === shop.id);
          return (<ListInStore title={shop.name} list={list}/>);
        })}
      </section>
    </Container>
  );
}