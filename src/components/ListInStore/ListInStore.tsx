import { ItemProduct } from '../ItemProduct/ItemProduct';
import listInStoreStyle from './ListInStore.module.css';

export interface ListInStoreProps {
  title: string,
  list: {
    id: number,
    name: string,
    quantity: number,
    price: number,
    shopId: number
  }[]
}

export function ListInStore({title, list}: ListInStoreProps) {
  return (
    <section>
      <h2>{title}</h2>
      <ul className={listInStoreStyle.list}>
        {list.map((item) => <ItemProduct item={item} />)}
      </ul>
      <div>
        Общая цена и кнопка
      </div>
    </section>
  );
}