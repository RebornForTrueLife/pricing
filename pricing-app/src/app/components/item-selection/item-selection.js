/* 
	- ItemSelection: a components to let cashier choose the specific item(eg: coffee, sandwich...)
	- Parameter: Catagories with follow structure
		- props are single category
		- each category is an object contains list of props, which are specific Item name
 */


import CategoryNevigation from './category-nevigation'
import ItemList from './item-list.js'
import itemSelectionStyles from './item-selection.module.css';
import styles from '../../page.module.css';


export default function ItemSelection({ categories }) {
	// to test the ItemList, choose 1 category on categories
	const category = categories.food;

	// return the ItemSelection table
	return (
		<div className={itemSelectionStyles.itemSelection}>
			<CategoryNevigation categories={categories} />
			<br />
			<ItemList category={category}/>
		</div>
	);
}	// close ItemSelection