const navHTML = `<!-- nav -->
      <nav class="w-full flex flex-row justify-between pb-10 pt-5 md:pb-14 lg:py-8">
        <!-- icon -->
        <div class="border-2 border-black rounded-sm aspect-square w-14 h-14">
          <img src="./assets/nori-icon.png" alt="" class="object-cover w-full h-full">
        </div>
        <!-- links -->
        <div class="md:hidden my-4 flex flex-row justify-center h-full px-3 cursor-pointer">
          <span id="open-btn" class="flex flex-row items-center z-10">
            <i data-feather="menu" class="w-6 h-6 text-black stroke-[2]"></i>
          </span>
          <span id="close-btn" class="hidden flex flex-row items-center z-10">
            <i data-feather="x" class="w-6 h-6 text-black stroke-[2]"></i></span>
        </div>

        <!-- i want to show another part of the menu div (below this) -->
        <ul id="menu-item" class="hidden md:flex flex-col absolute top-0 left-0 md:static items-center justify-center pt-32 pb-16 md:pt-0 md:pb-0 md:justify-normal md:flex-row gap-6 md:gap-14 bg-[#ffffff] bg-opacity-90 md:bg-transparent w-full md:w-fit z-0">
          <li>
            <a href="#" class="text-orange">Home</a>
          </li>
          <li class="hover:text-orange transition duration-300">
            <a href="#">Menu</a>
          </li>
          <li class="hover:text-orange transition duration-300">
            <a href="#">Our Story</a>
          </li>
          <li class="hover:text-orange transition duration-300">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>`;

const landingHTML = `<!-- main content -->
    <div class="h-full w-full px-4 md:px-6 lg:px-12">
      <main class="h-fit w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
        <div class="flex flex-col justify-center gap-4">
          <h1 class="text-4xl md:text-5xl text-orange font-semibold">ラーメン</h1>
          <p class="text-black text-4xl md:text-5xl font-light">〰️〰️〰️</p>
          <h1 class="text-black text-4xl md:text-5xl font-bold">A BOWL OF LOVE FROM <span class="text-orange">JAPANESE CUISINE</span> FOR YOU</h1>
          <p class="mb-6">Ramen is a traditional Japanese noodle soup. It consists of Chinese wheat noodles served in meat or fish-based broth & uses toppings such as sliced pork, nori menma, and scallions.</p>
          <div class="border-2 border-black rounded-md relative w-fit px-10 py-3 before:bg-orange before:text-white before:content-['Order_Now'] before:absolute before:w-full before:h-full before:top-[-14%] before:left-[7%] before:flex before:items-center before:justify-center before:rounded-md">Order Now</div>
        </div>
        <div class="grid place-items-center">
          <img src="./assets/ramen.png" alt="" class="object-cover w-9/12 h-fit md:w-11/12 lg:w-9/12">
        </div>
      </main>

      <!-- social footer -->
      <footer class="flex flex-row gap-14 items-center justify-center md:justify-normal w-full pt-10 pb-5 md:pt-14 md:pb-0 lg:py-8">
        <div class="flex flex-row gap-4 md:gap-14 text-orange">
          <a href="">Instagram</a>
          <a href="">Facebook</a>
          <a href="">Twitter</a>
        </div>
        <div class="hidden md:flex flex-grow h-[2.5px] bg-orange"></div>
      </footer>
    </div>`;

const aboutHTML = `<main class="h-full w-full grid grid-cols-1 md:grid-cols-2 relative"> <!-- add gap here? -->
        <!-- img -->
        <div class="grid place-items-center pt-20 md:pt-0">
          <img src="./assets/image 2.png" alt="" class="object-cover w-full h-96 md:h-full">
        </div>

        <!-- right content -->
        <div class="w-full h-full flex flex-col px-4 md:px-6 lg:px-12 gap-0 md:gap-52">

          <!-- nav -->
          <nav class="absolute top-2 right-2 md:static md:w-full md:pt-5 md:pb-14 lg:py-8 ">
            <!-- nav links -->
            <div class="md:hidden my-4 flex flex-row justify-center h-full px-3 cursor-pointer">
              <span id="open-btn" class="flex flex-row items-center z-10">
                <i data-feather="menu" class="w-6 h-6 text-black stroke-[2]"></i>
              </span>
              <span id="close-btn" class="hidden flex flex-row items-center z-10">
                <i data-feather="x" class="w-6 h-6 text-black stroke-[2]"></i></span>
            </div>

            <ul id="menu-item" class="ml-auto hidden md:flex flex-col absolute top-0 left-0 md:static items-center justify-center pt-32 pb-16 md:pt-0 md:pb-0 md:justify-normal md:flex-row gap-6 md:gap-14 bg-[#ffffff] bg-opacity-90 md:bg-transparent w-full md:w-fit z-0">
              <li>
                <a href="#" class="text-orange">Home</a>
              </li>
              <li class="hover:text-orange transition duration-300">
                <a href="#">Menu</a>
              </li>
              <li class="hover:text-orange transition duration-300">
                <a href="#">Our Story</a>
              </li>
              <li class="hover:text-orange transition duration-300">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </nav>

          <!-- icon -->
          <div class="absolute top-3 left-4 block md:hidden border-2 border-black rounded-sm aspect-square w-14 h-14">
            <img src="./assets/nori-icon.png" alt="" class="object-cover w-full h-full">
          </div>


          <div class="hidden md:block absolute top-1/4 right-16 tracking-wider z-[-1] [writing-mode:vertical-lr]">
            <h1 class="text-6xl text-black text-opacity-10">のりラーメン</h1>
          </div>


          <!-- main content -->
          <div class="flex flex-col justify-center gap-4 z-10 pt-9 md:pt-0">
            <h2 class="text-orange text-3xl font-semibold">私たちに関しては</h2>
            <h1 class="text-black text-4xl font-bold">NORI RAMEN SHOP</h1>
            <p class="">"Nori", where tradition meets innovation in the heart of the city. Chef Kenji Nakamura's ramen shop, established in 2015, offers authentic flavors with fresh, locally sourced ingredients. A culinary oasis loved by ramen enthusiasts and casual diners alike.</p>
          </div>


        </div>
      </main>`;

// for menu page you'd have to add `overflow-y-visible md:overflow-y-hidden` class to the body tag


export { landingHTML, navHTML, aboutHTML }
