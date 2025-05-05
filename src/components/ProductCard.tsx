import { component$ } from "@builder.io/qwik";

export interface ProductCardProps {
    image: string;
    name: string;
    description: string;
    price: string;
}

const ProductCard = component$<ProductCardProps>((props) => {
    return (
        <div class="relative group bg-black rounded-lg overflow-hidden">
            <img src={props.image} alt={props.name} class="w-full h-48 object-cover" width={20} height={20} />
            <div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <h5 class="text-lg font-semibold">{props.name}</h5>
                <p class="text-sm">{props.description}</p>
                <p class="text-xl font-bold">{props.price}</p>
                <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bg-white text-black px-4 py-2 rounded-lg mt-4 inline-block"
                >
                    Pesan Sekarang
                </a>
            </div>
      </div>
    )
});

export default ProductCard;