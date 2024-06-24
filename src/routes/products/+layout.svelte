<script>
    import WarrantyIcon from "$lib/images/warranty-svgrepo-com.svg"
</script>
<div class="flex flex-col">

    <h1 class="px-4 py-2 mt-2 text-secondary md:text-center">Products</h1>
    <div class="px-4 py-2 mb-2">
        <select id="products" class="bg-gray-50 md:hidden border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>All</option>
            <option value="US">Garage</option>
            <option value="CA">Gates</option>
        </select>
    </div>

    <div class="grid grid-cols-5 md:px-20">
        <div class="hidden md:block py-8 px-20 ">
            <ul class="text-textcol ">
                <li class="hover:text-gray-400 underline">
                    All
                </li>
                <li class="hover:text-gray-400">
                    Garage
                </li>
                <li class="hover:text-gray-400">
                    Gates
                </li>
            </ul>
        </div>
        <div class="col-span-5 md:col-span-3 mb-8">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-1">
                <div class="bg-gray-300 h-56"></div>
                <div class="bg-gray-300 h-56"></div>
                <div class="bg-gray-300 h-56"></div>
                <div class="bg-gray-300 h-56"></div>
                <div class="bg-gray-300 h-56"></div>
                <div class="bg-gray-300 h-56"></div>
                <div class="bg-gray-300 h-56"></div>
                <div class="bg-gray-300 h-56"></div>
                <div class="bg-gray-300 h-56"></div>
                <div class="bg-gray-300 h-56"></div>
                <div class="bg-gray-300 h-56"></div>
                <div class="bg-gray-300 h-56"></div>
            </div>
        </div>
    </div> 
</div>


