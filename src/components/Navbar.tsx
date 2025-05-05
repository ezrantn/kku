import type { PropFunction } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

interface NavbarProps {
  activeSection?: string;
  onNavChange$?: PropFunction<(section: string) => void>;
}

const Navbar = component$<NavbarProps>(({ activeSection = 'products', onNavChange$ }) => {
  return (
    <nav class="bg-black py-4 px-6 shadow-lg">
      <div class="max-w-6xl mx-auto flex justify-between items-center">
        <div class="flex-shrink-0">
          <h1 class="text-2xl font-bold text-white">Tiar Abon Ikan Tongkol</h1>
        </div>
        
        <div class="flex space-x-6">
          <button 
            onClick$={() => onNavChange$ && onNavChange$('products')} 
            class={`px-3 py-2 text-lg ${activeSection === 'products' 
              ? 'text-white font-semibold border-b-2 border-white' 
              : 'text-gray-300 hover:text-white'}`}
          >
            Produk
          </button>
          
          <button 
            onClick$={() => onNavChange$ && onNavChange$('location')} 
            class={`px-3 py-2 text-lg ${activeSection === 'location' 
              ? 'text-white font-semibold border-b-2 border-white' 
              : 'text-gray-300 hover:text-white'}`}
          >
            Lokasi
          </button>
          
          <button 
            onClick$={() => onNavChange$ && onNavChange$('about')} 
            class={`px-3 py-2 text-lg ${activeSection === 'about' 
              ? 'text-white font-semibold border-b-2 border-white' 
              : 'text-gray-300 hover:text-white'}`}
          >
            Tentang Kami
          </button>
        </div>
      </div>
    </nav>
  );
});

export default Navbar;