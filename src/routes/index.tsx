import { component$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import About from "~/components/About";
import LocationPage from "~/components/Location";
import Navbar from "~/components/Navbar";
import ProductPage from "~/components/ProductPage";

export default component$(() => {
  const state = useStore({
    activeSection: 'products', 
  });

  return (
    <>
      <Navbar 
        activeSection={state.activeSection}
        onNavChange$={(section) => {
          state.activeSection = section;
        }}
      />
      
      <div>
        {state.activeSection === 'products' && (
          <div>
            <ProductPage /> 
          </div>
        )}
        
        {state.activeSection === 'location' && (
          <div>
            <LocationPage />
          </div>
        )}
        
        {state.activeSection === 'about' && (
          <div>
            <About />
          </div>
        )}
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Tiar Abon Ikan Tongkol",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
