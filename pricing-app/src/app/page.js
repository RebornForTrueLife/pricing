import Image from 'next/image'
import styles from './page.module.css'
import ItemSelection from './components/item-selection/item-selection'
// JSON database
import data from '../../database/item-data.json';


export default function Home() {
	return (
		<main className={styles.main}>
			<ItemSelection categories={data}/>
		</main>
	)
}
