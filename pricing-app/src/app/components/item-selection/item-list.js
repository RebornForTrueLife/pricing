
import itemSelectionStyles from './item-selection.module.css';
import styles from '../../page.module.css';


export default function ItemList({ category }) {
	const itemNames = Object.getOwnPropertyNames(category);
	const itemList = itemNames.map((name) => {
		return (
			<div className={itemSelectionStyles.itemContainer}>
				<Item key={name} item={category[name]}/>
			</div>
		);
	});
	// return component to select specific item
	return <div> {itemList} </div>;
}	// close ItemList


export function Item({ item }) {
	// return Item button
	return (
		<button key={item.showName} className={itemSelectionStyles.itemButton}>
			{item.showName}
		</button>
	);
}	// close Item
