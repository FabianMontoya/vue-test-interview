<template>
    <div v-for="product in products" class="grid grid-cols-3">
        <Product 
            :name="product.name"
            :img="product.image"
            :description="product.description"
            :price="product.price"
            :isAvailable="product.rating.count > 0"
        />
    </div>
</template>

<script setup>
    import Product from "./Product.vue"
    import axios from "axios";
    import { onMounted, ref } from 'vue'
    const products = ref([])
    const productsByCategory = ref([])

    const getProducts = async () => {
        const response = await axios('https://fakestoreapi.com/products')
        return response.data
    }

    onMounted( async () => {
        products.value = await getProducts()

        const productsByCategory = products.value.reduce(( valorAnterior, valorActual, indice, arr ) => {
            console.log(valorAnterior)
            if (arr[indice] === valorActual.category) {
                return {
                    category:  valorActual.category,
                    // products: [...valorActual]
                }
            }
        }, [])

        console.log(productsByCategory)
    })


</script>