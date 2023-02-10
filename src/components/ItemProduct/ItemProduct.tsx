import itemProductStyle from './ItemProduct.module.css';

export interface ItemProductProps {
  item: {
    id: number,
    name: string,
    quantity: number,
    price: number,
    shopId: number
  }
}

export function ItemProduct({item}: ItemProductProps) {
  return (
    <li className={itemProductStyle.item}>{item.name}</li>
  );
}