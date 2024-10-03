<script>
    let isMenuOpen = false;
    let isProductDropdownOpen = false;
</script>

    <nav class="px-4 border-b border-gray-200 bg-background sticky top-0 z-50">
      <div class="flex border-red-400 items-center justify-between w-full">
        <a href="/" class="px-4 min-w-24 text-2xl" on:click={() => isMenuOpen=false}>
            Prgic Tor
        </a>
        <div class="text-primary hidden md:max-[4200px]:block text-lg">
          <ul class="flex h-full font-bold">
            <li class="px-2 py-6 border-b-2 border-transparent hover:border-primary transition-all duration-300 ease-in">
              <a href="/products">PRODUCTS</a>
            </li>
            <li class="px-2 py-6 border-b-2 border-transparent hover:border-primary transition-all duration-300 ease-in">
              <a href="/about">ABOUT</a>
            </li>
            <li class="px-2 py-6 border-b-2 border-transparent hover:border-primary transition-all duration-300 ease-in">
              <a href="/">GALLERY</a>
            </li>
            <li class="px-2 py-6 border-b-2 border-transparent hover:border-primary transition-all duration-300 ease-in">
              <a href="/">CONTACT</a>
            </li>
          </ul>
        </div>
        <div class="min-w-24 hidden md:max-[4200px]:block">
        </div>
        <button
          name="Contact call to action"
          class="md:hidden m-4 flex top-0 right-0 z-20 relative w-10 h-10 text-textcol focus:outline-none"
          on:click={()=> isMenuOpen = !isMenuOpen}
        >
          <div class="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <span
              class={`absolute h-0.5 w-5 bg-textcol transform transition duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45 bg-textcol delay-200" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              class={`absolute h-0.5 bg-textcol  transform transition-all duration-200 ease-in-out ${
                isMenuOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
              }`}
            ></span>
            <span
              class={`absolute h-0.5 w-5 bg-textcol transform transition duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>
      </div>

    <nav
        class={`fixed flex top-0 left-0 w-full z-10 mt-16 h-screen bg-background text-primary bg-opacity-100 transform delay-100 transition-all duration-500 overscroll-auto ${
          isMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-full"
        }`}
      >
        <ul class="flex flex-col px-4 items-start w-full justify-start">
          <li  class="flex justify-between text-xl p-4 border-b w-full">
            <a on:click={() => isMenuOpen = false}
              href="/products"
            >
              PRODUCTS
            </a>

          <svg fill="currentColor" viewBox="0 0 20 20"
            on:click={() => isProductDropdownOpen = !isProductDropdownOpen}
            class={`inline w-6 h-6 mt-1 ml-1 transition-transform duration-200 transform cursor-pointer 
              ${isProductDropdownOpen
                ? "rotate-180"
                : "rotate-0"
              }`}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </li>
            <ul class={`flex flex-col items-start w-full justify-start transform transition-all duration-300 overflow-hidden text-gray-600 ${isProductDropdownOpen ? "max-h-52" : "max-h-0"}`}>
              <li class="text-l p-4 border-b w-full">Garage</li>
              <li class="text-l p-4 border-b w-full">Automatic Doors</li>
              <li class="text-l p-4 border-b w-full">Gate Automation</li>
            </ul>
          <li class="text-xl p-4 border-b w-full">
            <a on:click={() => isMenuOpen = false}
              href="/about"
              class="nav-link"
            >
              ABOUT
            </a>
          </li>
          <li class="text-xl p-4 border-b w-full">
            <a on:click={() => isMenuOpen = false}
              href="/"
              class="nav-link"
            >
              GALLERY
            </a>
          </li>
          <li class="text-xl p-4 border-b w-full">
            <a on:click={() => isMenuOpen = false}
              href="/"
              class="nav-link"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
 </nav>
