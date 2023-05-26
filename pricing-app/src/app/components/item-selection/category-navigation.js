"use client";
import itemSelectionStyles from "./item-selection.module.css";
import React, { createContext } from "react";
import styles from "../../page.module.css";

export const CategoryContext = createContext();

export default function CategoryNavigation({ categories, onChangeCategory }) {
  const categoryNames = Object.getOwnPropertyNames(categories);
  const categoryList = categoryNames.map((name) => {
    const handleCategoryClick = () => {
      onChangeCategory(name);
    };
    return (
      <div key={name}>
        <CategoryButton
          categoryName={name}
          onClick={handleCategoryClick} // Fix: Uncommented onClick handler
        />
      </div>
    );
  });
  // return component to navigate each category
  return (
    <div className={itemSelectionStyles.navigationContainer}>
      {categoryList}
    </div>
  );
}

export function CategoryButton({ categoryName, onClick }) {
  const handleClick = () => {
    onClick(categoryName);
  };

  // Capitalize first letter of category name
  const capitalizedCategoryName =
    categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  // Return category button to navigate corresponding ItemList
  return (
    <button
      key={categoryName}
      className={itemSelectionStyles.categoryButton}
      onClick={handleClick}
    >
      {capitalizedCategoryName}
    </button>
  );
}
