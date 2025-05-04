import { component$ } from "@builder.io/qwik";

const About = component$(() => {
    return (
        <section class="py-16 px-4">
            <div class="max-w-3xl mx-auto text-center">
                <h2 class="text-4xl font-semibold text-black mb-8">Tentang Kami</h2>
                <p class="text-lg text-black leading-relaxed mb-8">
                    Tiar Abon Ikan Tongkol adalah usaha yang didedikasikan untuk menghadirkan cita rasa lezat dan bergizi melalui produk abon ikan tongkol berkualitas tinggi. Kami hadir dengan semangat untuk memberikan pilihan olahan ikan yang sehat, praktis, dan pastinya lezat bagi setiap konsumen.
                </p>

                <div class="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h3 class="text-2xl font-semibold text-gray-800 mb-4">Kualitas dan Keberlanjutan</h3>
                <p class="text-gray-700 leading-relaxed">
                    Sejak pertama kali berdiri, kami berkomitmen untuk menggunakan bahan baku ikan tongkol segar pilihan yang diproses dengan cara yang higienis dan tanpa bahan pengawet. Dengan sentuhan resep turun-temurun, Tiar Abon Ikan Tongkol tidak hanya menawarkan rasa yang gurih, tetapi juga kandungan gizi yang bermanfaat untuk kesehatan tubuh.
                </p>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h3 class="text-2xl font-semibold text-gray-800 mb-4">Produk yang Awet dan Ekonomis</h3>
                <p class="text-gray-700 leading-relaxed">
                    Abon ikan tongkol Tiar kami juga dikenal dengan daya tahan yang awet, sehingga dapat disimpan lebih lama tanpa mengurangi kualitas dan rasa. Hal ini menjadikannya pilihan praktis dan ekonomis bagi konsumen yang membutuhkan stok abon berkualitas tinggi untuk jangka waktu lama.
                </p>
                </div>

                <p class="text-lg text-white leading-relaxed mb-8">
                    Kami percaya bahwa abon ikan tongkol tidak hanya bisa dinikmati sebagai lauk pendamping nasi, tetapi juga sebagai camilan sehat yang dapat dinikmati kapan saja. Dengan inovasi dan dedikasi kami, Tiar Abon Ikan Tongkol siap memberikan pengalaman rasa yang tak terlupakan bagi Anda dan keluarga, serta memenuhi kebutuhan camilan sehat dan praktis di setiap kesempatan.
                </p>
            </div>
        </section>
    )
})

export default About;