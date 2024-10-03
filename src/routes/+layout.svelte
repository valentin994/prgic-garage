<script>
    import '../app.css';
    import { browser } from '$app/environment';
	import { page } from '$app/stores';
    import Navigation from '../components/Navigation.svelte';
     
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
    let href;
	$: href = $page.url.pathname;
</script>

<div class="{currentTheme} app bg-background min-h-screen flex flex-col transition-colors duration-1000">
    <Navigation />
	<main>
		<slot />
	</main>
    <footer class="text-textcol md:px-20 lg:px-52 md:text-sm">
        <div class="flex justify-center">
            <div class="flex flex-row justify-between">
                <div class="flex p-2 text-start md:flex-row text-xs">
                    <div class="px-2 content-center md:py-px">
                        <a class="hover:text-gray-500" href="/products">PRODUCTS</a>
                    </div>
                    <div class="px-2 content-center">
                        <a class="hover:text-gray-500" href="/">ABOUT</a>
                    </div>
                    <div class="px-2 content-center">
                        <a class="hover:text-gray-500" href="/">GALLERY</a>
                    </div>
                    <div class="px-2 content-center">
                        <a class="hover:text-gray-500" href="/">CONTACT</a>
                    </div>
                </div>
            </div>
        </div>
        <hr class="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-25" />
        <div class="text-center py-4">
            <p class="text-xs">© Prgic Tor- und Türtechnik Inh created by <a href="https://github.com/valentin994" target="_blank">Valentin Vareskic</a></p> 
        </div>
    </footer>
</div>
