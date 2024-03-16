import axios from "axios"
import { Product, CategoryWithProducts } from "../types/product.types"


const mappingProducts = async (products: Product[]) => {
    const productsByCategory = products.reduce((acc: CategoryWithProducts, item: Product) => {
        const foundCategoryIndex = acc.findIndex((element: Product) => element.category === item.category)
        if (foundCategoryIndex !== -1) {
            acc[foundCategoryIndex].products.push(item)
        } else {
            acc.push({ category: item.category, products: [item] })
        }
        return acc;
    }, [])

    return productsByCategory.sort((a, b) => a.category.localeCompare(b.category)) as CategoryWithProducts[]
}

const getProducts = async () => {
    const response = await axios<Product[]>('https://fakestoreapi.com/products')
    return response.data
}

const getTopRatedProducts = async () => {
    const products = await getProducts()
    const sortedProducts = products.sort((a, b) => {
        if (a.rating.rate !== b.rating.rate) {
            return b.rating.rate - a.rating.rate
        }
        return b.rating.count - a.rating.count
    });
    const topRatedProducts = sortedProducts.slice(0, 5)
    return topRatedProducts as Product[]
}


const getProductsByCategory = async () => {
    const products = await getProducts()
    const productsByCategory = await mappingProducts(products)
    productsByCategory.push({
        category: 'Recomendados',
        products: await getTopRatedProducts()
    })
    return productsByCategory as CategoryWithProducts[]
}

export {
    getProductsByCategory
}

