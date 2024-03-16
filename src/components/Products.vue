<script setup lang="ts">
    import { onMounted, ref, computed } from 'vue'
    import { CategoryWithProducts } from "../types/product.types"
    import { getProductsByCategory } from "../services/products.services.ts"
    import Product from "./Product.vue"
    const searchQuery = ref<string>('')
    const productsByCategory = ref<CategoryWithProducts>([])


    const filteredProducts = computed(() => {
        if (!searchQuery.value.trim()) {
            return productsByCategory.value;
        }

        return productsByCategory.value.map(category => {
            return {
                ...category,
                products: category.products.filter(product =>
                    product.title.toLowerCase().includes(searchQuery.value.toLowerCase())
                )
            }
        })
    })

    onMounted( async () => {
        productsByCategory.value = await getProductsByCategory()
    })

</script>

<template>
    <h1 class="text-6xl mb-8 text-center">Marketplace</h1>
    <input
      type="search"
      class="w-full px-4 py-2 border border-gray-300 rounded-md mb-8"
      placeholder="Search product by name..."
      v-model="searchQuery"
    />
    <div v-for="item in filteredProducts" class="mb-8">
        <h2 class="text-3xl uppercase mb-8">{{ item.category }}</h2>
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <Product 
                v-for="product in item.products"
                :name="product.title"
                :img="product.image"
                :description="product.description"
                :price="product.price"
                :isAvailable="product.rating.count > 0"
                :isHighlight="product.title.toLowerCase() === searchQuery?.toLowerCase().trim()"
            />
        </div>
    </div>
</template>