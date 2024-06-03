<script>
    import '../app.css';
    import { browser } from '$app/environment';
	import { page } from '$app/stores';
     
    $: getCurrentTheme;

    function getCurrentTheme() {
        if(browser){
            if (window.localStorage.theme === 'dark' || (!('theme' in window.localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
                return "dark";
            } else {
                document.documentElement.classList.remove('dark')
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
    let href;
	$: href = $page.url.pathname;
</script>

<div class="{currentTheme} app bg-background dark:bg-textcol dark:text-background min-h-screen flex flex-col">
    <nav class="px-4 py-2 border-b border-gray-200">
      <div class="flex flex-wrap items-center justify-between mx-auto w-full ">
        <a href="/" class="flex items-center px-4 text-2xl">
            Prgic Tor
        </a>
        <div class="p-4 hidden md:max-[4200px]:block text-lg">
          <ul class="flex">
            <li class="px-2 hover:text-secondary">
              <a href="/">Pocetna</a>
            </li>
            <li class="px-2 hover:text-secondary">
              <a href="/about">O nama</a>
            </li>
            <li class="px-2 hover:text-secondary">
              <a href="/gallery">Galerija</a>
            </li>
            <li class="px-2 hover:text-secondary">
              <a href="/contact">Kontakt</a>
            </li>
          </ul>
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
              class={`absolute h-0.5 bg-textcol transform transition-all duration-200 ease-in-out ${
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
        class={`fixed flex top-0 left-0 w-full z-10 mt-24 h-screen bg-background text-primary bg-opacity-100 transform delay-100 transition-all duration-500 overscroll-auto ${
          isMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-full"
        }`}
      >
        <ul class="flex flex-col items-start w-full justify-start">
          <li class="text-xl p-4 border-b w-full">
            <a on:click={() => isMenuOpen = false}
              href="/"
            >
              PRODUCTS
            </a>
          </li>
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
              href="/gallery"
              class="nav-link"
            >
              GALLERY
            </a>
          </li>
          <li class="text-xl p-4 border-b w-full">
            <a on:click={() => isMenuOpen = false}
              href="/contact"
              class="nav-link"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
      </nav>
    <nav class="text-textcol px-4 py-8">

    </nav>
    <button on:click={toggleTheme} class="p-4 m-4 bg-primary text-gray-100 dark:bg-red-950 dark:text-blue-500">Toggle Theme</button>


	<main>
		<slot />
	</main>

</div>
