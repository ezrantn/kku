import { component$ } from "@builder.io/qwik";
import ProductCard from "./ProductCard";

const ProductPage = component$(() => {
    return (
        <section id="products" class="py-16">
            <h2 class="text-center text-3xl mb-12">Produk Kami</h2>
            <div class="flex justify-center items-center flex-wrap gap-8">
                <div class="w-full sm:w-1/2 md:w-1/3">
                    <ProductCard
                        image="https://via.placeholder.com/300x200"
                        name="Nama Produk 1"
                        description="Deskripsi singkat produk 1."
                        price="Rp 100.000"
                    />
                    </div>
                    <div class="w-full sm:w-1/2 md:w-1/3">
                    <ProductCard
                        image="https://via.placeholder.com/300x200"
                        name="Nama Produk 2"
                        description="Deskripsi singkat produk 2."
                        price="Rp 150.000"
                    />
                    </div>
                    <div class="w-full sm:w-1/2 md:w-1/3">
                    <ProductCard
                        image="https://via.placeholder.com/300x200"
                        name="Nama Produk 3"
                        description="Deskripsi singkat produk 3."
                        price="Rp 200.000"
                    />
                </div>
            </div>
        </section>
    )
});

export default ProductPage;