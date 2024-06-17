<script>
    import '../app.css';
    import { browser } from '$app/environment';
	import { page } from '$app/stores';
     
    $: getCurrentTheme;

    function getCurrentTheme() {
        if(browser){
            if (window.localStorage.theme === 'dark' || (!('theme' in window.localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                return "dark";
            } else {
                return ""
            }
        }
    }

    $: currentTheme = getCurrentTheme();

    function toggleTheme() {
        if(browser){
            if(window.localStorage.theme === "light") {
                window.localStorage.theme = "dark"
                window.localStorage.darkMode = true
                currentTheme = "dark"
            }else{
                currentTheme = "light"
                window.localStorage.theme = "light"
                window.localStorage.darkMode = false
            }
        }
    }
    let isMenuOpen = false;
    let isProductDropdownOpen = false;
    let href;
	$: href = $page.url.pathname;
</script>

<div class="{currentTheme} app bg-background min-h-screen flex flex-col transition-colors duration-1000">
    <nav class="px-4 border-b border-gray-200 bg-background md:sticky md:top-0 md:z-50">
      <div class="flex border-red-400 items-center justify-between w-full">
        <a href="/" class="px-4 min-w-24 text-2xl">
            Prgic Tor
        </a>
        <div class="text-primary hidden md:max-[4200px]:block text-lg">
          <ul class="flex h-full">
            <li class="px-2 py-6 border-b-2 border-transparent hover:border-primary transition-all duration-300 ease-in">
              <a href="/">PRODUCTS</a>
            </li>
            <li class="px-2 py-6 border-b-2 border-transparent hover:border-primary transition-all duration-300 ease-in">
              <a href="/">ABOUT</a>
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
            <p class="text-lg text-gray-500"><span class="text-primary">EN</span> | <span class="text-gray-300">DE</span></p>
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
          <li on:click={() => isProductDropdownOpen = !isProductDropdownOpen} class="flex justify-between text-xl p-4 border-b w-full">
            <a 
              href="/"
            >
              PRODUCTS
            </a>

          <svg fill="currentColor" viewBox="0 0 20 20" 
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
              href="/"
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
            <div class="w-full text-center text-2xl p-12">
                <p class="text-gray-500"><span class="p-2 px-4 m-2 text-primary">DE</span><span class="p-2 px-4 m-2 text-gray-300">EN</span></p>
            </div>

            <button on:click={()=> {console.log("disabled")}} class="p-4 m-4 max-w-20 bg-gray-100 text-gray-400">Toggle Theme</button>
        </ul>
      </nav>
      </nav>
	<main>
		<slot />
	</main>
    <footer class="p-2 mt-4 border-t text-textcol text-md md:px-20 lg:px-52 md:text-sm bg-gray-50 bg-opacity-25">
        <div class="flex flex-row justify-between my-4 md:my-12">
            <div class="flex flex-col p-2 text-start md:flex-row">
                <div class="p-2 content-center md:py-px">
                    <a class="hover:text-gray-500" href="/">PRODUCTS</a>
                </div>
                <div class="p-2 content-center  md:py-px">
                    <a class="hover:text-gray-500" href="/">ABOUT</a>
                </div>
                <div class="p-2 content-center  md:py-px">
                    <a class="hover:text-gray-500" href="/">GALLERY</a>
                </div>
                <div class="p-2 content-center  md:py-px">
                    <a class="hover:text-gray-500" href="/contact">CONTACT</a>
                </div>


            </div>
            <div class="p-2 text-end">
                <p class="p-2 md:p-0 md:py-px">Prgic Tor- und Türtechnik Inh</p>
                <p class="p-2 md:p-0 md:py-px">Ante Prgić</p>
                <p class="p-2 md:p-0 md:py-px">+43(0)216266089</p>
                <p class="p-2 md:p-0 md:py-px">AT1400004210717337</p>
            </div> 
        </div>
        <hr class="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-textcol to-transparent opacity-25" />
        <div class="p-2 text-center">
            <p class="text-xs">© Prgic Tor- und Türtechnik Inh</p> 
            <p class="text-xs">created by <a href="https://github.com/valentin994" target="_blank">Valentin Vareskic</a></p>
        </div>
    </footer>
</div>
