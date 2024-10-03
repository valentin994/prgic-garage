<script>
    import WarrantyIcon from "$lib/images/warranty-svgrepo-com.svg";
</script>
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
</svelte:head>
<section>
    <div class="flex justify-center w-full md:mt-12 md:pb-16 bg-gradient-to-b from-background from-10% to-gray-300 to-0%">
        <div class="flex flex-col justify-center w-full bg-gray-500 text-background min-h-72 p-4 px-6 align-middle md:w-2/3 md:overflow-visible md:z-20 md:min-h-96 md:rounded md:shadow">
            <h1 class="text-2xl md:text-3xl">We open Your world</h1>
            <p class="text-sm text-gray-300 md:text-lg">Garage, doors, gates automation, everything</p>
            <button class="text-lg bg-primary max-w-32 rounded py-2 px-4 mt-10 md:text-2xl">Explore</button>
        </div>
    </div>
    <div class="flex w-full justify-center py-16">
        <div class="flex flex-col px-6 md:w-2/3">
            <h1 class="py-4 text-xl text-primary text-center w-full md:text-2xl">Meet us</h1>
            <p class="text-textcol text-center pb-10 md:text-xl">
                Welcome to Prgic Tor, where quality meets reliability. Whether you're looking to install a new garage door, need maintenance for your existing gate, or require urgent repairs, our team of experienced professionals is here to help. Trust us to keep your home secure and stylish with our top-notch products and services.   
            </p>
        </div>
    </div>
    <div class="flex flex-col md:flex-row w-full justify-evenly bg-gray-100">
        <div class="w-full md:w-1/3 md:max-w-96">
            <div class="flex flex-col justify-end w-full h-full md:mt-28">
                <h2 class="text-md px-4 md:px-0 pt-4 text-gray-500 font-semibold">Automate your life</h2>
                <h1 class="text-2xl px-4 md:px-0 pb-2 md:pb-2 text-primary md:text-2xl">Lorem Ipsum</h1>
                <p class="font-light px-4 md:px-0 text-lg text-gray-700 md:text-xl"> Nunc mattis enim ut tellus elementum sagittis. Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Non enim praesent elementum facilisis leo vel fringilla est. In tellus integer feugiat scelerisque. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Urna et pharetra pharetra massa massa ultricies mi quis hendrerit.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque aliquam vestibulum morbi blandit cursus risus. </p>
                <div class="bg-textcol w-full md:w-96 h-96 my-12"></div>
            </div>
        </div>
        <div class="w-full md:w-1/3 md:max-w-96">
            <div class="flex flex-col w-full md:px-4 md:pt-12">
                <div class="h-96 w-full md:w-96 bg-secondary hidden md:block">
                    <p class="text-white w-full h-full p-36 text-center align-text-bottom">Some text in the div</p>
                </div>
                <p class="px-4 md:px-0 font-light text-lg text-gray-700 md:text-xl md:pt-8">Nunc mattis enim ut tellus elementum sagittis. Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Non enim praesent elementum facilisis leo vel fringilla est. In tellus integer feugiat scelerisque. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Urna et pharetra pharetra massa massa ultricies mi quis hendrerit.</p>
                <div class="w-full text-center pb-8 md:text-start">
                    <button class="text-lg text-background bg-primary max-w-32 rounded py-2 px-4 mt-10 md:text-xl">Shop now</button>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col justify-center md:flex-row p-4 py-8 md:mt-24 md:bg-gray-50">
        <div class="flex justify-center py-2">
            <img class="w-20" alt="Warranty" src={WarrantyIcon} />
        </div>
        <div class="flex justify-center py-2">
            <img class="w-20" alt="Warranty" src={WarrantyIcon} />
        </div>
        <div class="flex justify-center py-2">
            <img class="w-20" alt="Warranty" src={WarrantyIcon} />
        </div>
    </div>
</section>
