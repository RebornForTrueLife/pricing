/* 
	- ItemSelection: a components to let cashier choose the specific item(eg: coffee, sandwich...)
	- Parameter: Catagories with follow structure
		- props are single category
		- each category is an object contains list of props, which are specific Item name
 */
"use client";
import CategoryNavigation from "./category-navigation";
import ItemList from "./item-list.js";
import itemSelectionStyles from "./item-selection.module.css";
import React, { useState } from "react";

export default function ItemSelection({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState(categories["food"]);

  const onChangeCategory = (name) => {
    const newCategory = categories[name];
    setSelectedCategory(newCategory);
  };

  return (
    <div className={itemSelectionStyles.itemSelection}>
      <CategoryNavigation
        categories={categories}
        onChangeCategory={onChangeCategory}
      />
      <br />
      <ItemList category={selectedCategory} />
    </div>
  );
}
