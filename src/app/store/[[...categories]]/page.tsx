import React from "react";

interface CategoryProps {
  params: {
    categories: string[],
    searchParams?: string 
  }
}

export default function Categories(props: CategoryProps) {
  console.log(props)

  const { categories } = props.params

  console.log(categories);
  return (
    <h1>categoria dinamica: {categories} </h1>
  )
}