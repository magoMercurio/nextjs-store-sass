import { env } from "@/config/env"
import { shopifyUrls } from "./urls"


export const getCollections = async () => {
  try {
    const response = await fetch(shopifyUrls.collections.all, {
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
      })
    })
    const {smart_collections} = await response.json()
    const transformedCollections = smart_collections.map((collection: any) => {
      return {
        id: collection.id,
        title: collection.title,
        handle: collection.handle,
        /* image: collection.image.src,
        description: collection.description */
      }
    })
    
    return transformedCollections
  } catch (error) {
    console.error(error)
  }
  
}