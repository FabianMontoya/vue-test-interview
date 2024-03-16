interface Product {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    };
}

interface CategoryWithProducts {
    category: string
    products: Product[]

}

export type {
    Product,
    CategoryWithProducts
}