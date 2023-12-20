import React from "react";
import { ProductsWrapper } from "@/components/Store/ProductWrapper";
import { getProducts } from "@/services/shopify";

interface CategoryProps {
  params: {
    categories: string[],
    searchParams?: string 
  }
}

export default async function Categories(props: CategoryProps) {

  const products = await getProducts()

  const { categories } = props.params

  console.log(categories);
  return (
    <ProductsWrapper products={products} />
  )
}