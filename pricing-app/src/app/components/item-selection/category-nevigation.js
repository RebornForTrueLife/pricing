
import itemSelectionStyles from './item-selection.module.css';
import styles from '../../page.module.css';


export default function CategoryNevigation({ categories }) {
	const categoryNames = Object.getOwnPropertyNames(categories);
	const categoryList = categoryNames.map((name) => {
		return (
			<div key={name}> 
				<CategoryButton key={name} categoryName={name} /> 
			</div>
		);
	});
	// return component to nevigate each category
	return (
		<div className={itemSelectionStyles.nevigationContainer}>
			{categoryList}
		</div>
	);
}	// close CategoryNevigation


export function CategoryButton({ categoryName }) {
	// capitalize first letter of category name
	const lastPart = categoryName.slice(1);
	const upCategoryName = categoryName.charAt(0).toUpperCase() + lastPart;
	// return category button to nevigate corresponding ItemList
	return (
		<button key={categoryName} className={itemSelectionStyles.categoryButton}>
			{upCategoryName}
		</button>
	);
}	// close CategoryButton