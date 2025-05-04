import { component$, useVisibleTask$, useSignal, useStylesScoped$ } from "@builder.io/qwik";

export default component$(() => {
  const mapContainerRef = useSignal<Element>();
  const mapInitialized = useSignal(false);

  useStylesScoped$(`
    .map-container {
      height: 400px;
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    .location-info {
      background-color: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      max-width: 800px;
      margin: 1.5rem auto;
    }
  `);

  useVisibleTask$(({ track }) => {
    track(() => mapContainerRef.value);
    
    if (mapContainerRef.value && !mapInitialized.value) {
      import('leaflet').then((L) => {
        const map = L.map(mapContainerRef.value as HTMLElement).setView([-7.0168872142804535, 110.38560231867122], 17);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        const qwikMarker = L.divIcon({
            html: ` 
              <svg xmlns="http://www.w3.org/2000/svg" width="30.12" height="32" viewBox="0 0 256 272">
                <path fill="#18B6F6"
                  d="m224.803 271.548l-48.76-48.483l-.744.107v-.532L71.606 120.252l25.55-24.667l-15.01-86.12l-71.222 88.247c-12.136 12.226-14.372 32.109-5.642 46.781l44.5 73.788c6.813 11.376 19.163 18.18 32.47 18.074l22.038-.213z" />
                <path fill="#AC7EF4"
                  d="m251.414 96.01l-9.795-18.075l-5.11-9.25l-2.023-3.615l-.212.213l-26.829-46.463C200.738 7.125 188.176-.105 174.55 0l-23.527.639l-70.158.213c-13.307.106-25.444 7.123-32.151 18.5l-42.69 84.632L82.353 9.25l100.073 109.937l-17.779 17.968l10.646 86.015l.107-.213v.213h-.213l.213.212l8.304 8.081l40.348 39.445c1.704 1.595 4.472-.318 3.3-2.339l-24.911-49.014l43.436-80.273l1.383-1.595c.533-.638 1.065-1.276 1.491-1.914c8.517-11.589 9.688-27.112 2.662-39.764" />
                <path fill="#FFF" d="M182.746 118.763L82.353 9.358l14.266 85.695l-25.55 24.773L175.08 223.065l-9.368-85.696z" />
              </svg>
            `,
            className: '',
            iconSize: [24, 40],
          });
        
        const marker = L.marker([-7.7456, 110.3695], { icon: qwikMarker }).addTo(map);
        marker.bindPopup("<b>Tiar Abon Ikan Tongkol</b><br>Jl. Candi Pawon Selatan XI. No 2").openPopup();
        
        mapInitialized.value = true;
        
        // Add Leaflet CSS dynamically
        if (!document.querySelector('link[href*="leaflet.css"]')) {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
          link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
          link.crossOrigin = '';
          document.head.appendChild(link);
        }
      });
    }
  });

  return (
    <section class="py-16 px-4">
      <h2 class="text-center text-3xl font-semibold mb-6">Lokasi Kami</h2>
      
      <div class="map-container" ref={mapContainerRef}></div>
      
      <div class="location-info">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">Tiar Abon Ikan Tongkol</h3>
        <p class="text-gray-700 mb-2">
          <strong>Alamat:</strong> Jl. Candi Pawon Selatan XI. No 2
        </p>
        <p class="text-gray-700 mb-2">
          <strong>Telepon:</strong> +62 812-3456-7890
        </p>
        <p class="text-gray-700 mb-2">
          <strong>Jam Buka:</strong> Senin - Sabtu, 08.00 - 17.00 WIB
        </p>
        <p class="text-gray-700">
          <strong>Email:</strong> info@tiarabonikan.com
        </p>
      </div>
    </section>
  );
});