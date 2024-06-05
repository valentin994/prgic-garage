<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
</svelte:head>
<section>
    <div class="flex justify-center w-full md:mt-12 bg-gray-100">
        <div class="flex flex-col justify-center w-full bg-gray-500 text-background min-h-72 p-4 px-6 align-middle md:w-2/3 md:overflow-visible md:z-20 md:min-h-96">
            <h1 class="text-2xl md:text-3xl">We open Your world</h1>
            <p class="text-sm text-gray-300 md:text-lg">Garage, doors, gates automation, everything</p>
            <button class="text-lg bg-primary max-w-24 py-2 mt-10 md:text-2xl">Explore</button>
        </div>
    </div>
    <div class="flex w-full justify-center bg-gray-100">
        <div class="flex flex-col px-6 md:w-2/3">
            <h1 class="py-8 text-xl text-primary text-center w-full md:text-2xl">Meet us</h1>
            <p class="text-textcol text-center pb-14 md:text-lg">
                Welcome to Prgic Tor, where quality meets reliability. Whether you're looking to install a new garage door, need maintenance for your existing gate, or require urgent repairs, our team of experienced professionals is here to help. Trust us to keep your home secure and stylish with our top-notch products and services.   
            </p>
        </div>
    </div>

    <div class="flex w-full justify-center">
        <div class="w-full md:w-2/3">
            <swiper-container slides-per-view="1" speed="500" loop="true" css-mode="true">
              <swiper-slide>
                <div class="w-full min-h-64 bg-gray-200"></div>
              </swiper-slide>
              <swiper-slide><div class="w-full min-h-64 bg-green-200 "></div></swiper-slide>
              <swiper-slide><div class="w-full min-h-64 bg-red-200 "></div></swiper-slide>
              ...
            </swiper-container>
        </div>
    </div>
</section>
