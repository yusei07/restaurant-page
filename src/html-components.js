export const navHTML = `<!-- nav -->
      <nav class="w-full flex flex-row justify-between pb-10 pt-5 md:pb-14 lg:py-8 px-4 md:px-6 lg:px-12">
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
          <li id="home" class="cursor-pointer hover:text-orange transition duration-300">
            Home
          </li>
          <li id="menu" class="cursor-pointer hover:text-orange transition duration-300">
            Menu
          </li>
          <li id="story" class="cursor-pointer hover:text-orange transition duration-300">
            Our Story
          </li>
          <li id="contact" class="cursor-pointer hover:text-orange transition duration-300">
            Contact Us
          </li>
        </ul>
      </nav>`;

export const landingHTML = `<!-- main content -->
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

// our story page notes:
// 1. you have to add `overflow-y-visible md:overflow-y-hidden` class to the body tag
// 2. no need for nav, it already has its own custom nav

export const storyHTML = `<main class="h-full w-full grid grid-cols-1 md:grid-cols-2 relative"> <!-- add gap here? -->
        <!-- img -->
        <div class="grid place-items-center pt-20 md:pt-0">
          <img src="./assets/chef.png" alt="" class="object-cover w-full h-96 md:h-full">
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
              <li id="home" class="cursor-pointer hover:text-orange transition duration-300">
                Home
              </li>
              <li id="menu" class="cursor-pointer hover:text-orange transition duration-300">
                Menu
              </li>
              <li id="story" class="cursor-pointer hover:text-orange transition duration-300">
                Our Story
              </li>
              <li id="contact" class="cursor-pointer hover:text-orange transition duration-300">
                Contact Us
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


export const menuHTML = `<div class="h-full w-full px-4 md:px-6 lg:px-12">
        <main class="grid grid-cols-1 md:grid-cols-[20rem_auto] gap-8">
          <!-- header -->
          <div class="col-span-full text-center">
            <h2 class="text-orange text-3xl font-semibold">メニューを発見</h2>
            <h1 class="text-black text-4xl font-bold">DISCOVER OUR MENU</h1>
          </div>
          <!-- sidebar -->
          <div class="md:pl-20">
            <ul class="flex flex-row md:flex-col justify-center gap-6 md:gap-8 text-black overflow-y-auto whitespace-nowrap">
              <li>All</li>
              <li class="text-orange underline">Shio Ramen</li>
              <li>Tonkotsu Ramen</li>
              <li>Miso Ramen</li>
              <li>Shoyu Ramen</li>
              <li>Other Menu</li>
            </ul>
          </div>
          <!-- content  -->
          <div class="h-fit grid grid-cols-[10rem_10rem] md:grid-cols-[14rem_14rem_14rem] md:grid-rows-1 gap-10">
            <!-- menu items -->
            <div class="h-fit bg-transparent hover:bg-white transition duration-300 rounded-md">
              <div class="text-center bg-orange py-2 relative before:bg-black before:content-[''] before:absolute before:w-[10.7rem] md:before:w-[15rem] before:h-8 before:top-2 before:left-[-3.2%] before:z-[-1]">
                <h4 class="text-white text-lg">昔ながらの塩ら</h4>
              </div>
              <img src="assets/ramen-display.png" alt="">
              <div class="flex flex-col items-center pb-4">
                <h4 class="text-black">Traditional Ramen</h4>
                <h4 class="text-orange">¥4.700</h4>
              </div>
            </div>

            <div class="h-fit bg-transparent hover:bg-white transition duration-300 rounded-md">
              <div class="text-center bg-orange py-2 relative before:bg-black before:content-[''] before:absolute before:w-[10.7rem] md:before:w-[15rem] before:h-8 before:top-2 before:left-[-3.2%] before:z-[-1]">
                <h4 class="text-white text-lg">海風塩ら</h4>
              </div>
              <img src="assets/ramen-display.png" alt="">
              <div class="flex flex-col items-center pb-4">
                <h4 class="text-black">Sea Breeze Ramen</h4>
                <h4 class="text-orange">¥4.200</h4>
              </div>
            </div>

            <div class="h-fit bg-transparent hover:bg-white transition duration-300 rounded-md">
              <div class="text-center bg-orange py-2 relative before:bg-black before:content-[''] before:absolute before:w-[10.7rem] md:before:w-[15rem] before:h-8 before:top-2 before:left-[-3.2%] before:z-[-1]">
                <h4 class="text-white text-lg">禅塩ら</h4>
              </div>
              <img src="assets/ramen-display.png" alt="">
              <div class="flex flex-col items-center pb-4">
                <h4 class="text-black">Zen Ramen</h4>
                <h4 class="text-orange">¥3.900</h4>
              </div>
            </div>

            <div class="h-fit bg-transparent hover:bg-white transition duration-300 rounded-md">
              <div class="text-center bg-orange py-2 relative before:bg-black before:content-[''] before:absolute before:w-[10.7rem] md:before:w-[15rem] before:h-8 before:top-2 before:left-[-3.2%] before:z-[-1]">
                <h4 class="text-white text-lg">朝塩ら</h4>
              </div>
              <img src="assets/ramen-display.png" alt="">
              <div class="flex flex-col items-center pb-4">
                <h4 class="text-black">Morning Ramen</h4>
                <h4 class="text-orange">¥3.800</h4>
              </div>
            </div>

            <div class="h-fit bg-transparent hover:bg-white transition duration-300 rounded-md">
              <div class="text-center bg-orange py-2 relative before:bg-black before:content-[''] before:absolute before:w-[10.7rem] md:before:w-[15rem] before:h-8 before:top-2 before:left-[-3.2%] before:z-[-1]">
                <h4 class="text-white text-lg">旨辛塩ら</h4>
              </div>
              <img src="assets/ramen-display.png" alt="">
              <div class="flex flex-col items-center pb-4">
                <h4 class="text-black">Umami Spice Ramen</h4>
                <h4 class="text-orange">¥4.200</h4>
              </div>
            </div>

            <div class="h-fit bg-transparent hover:bg-white transition duration-300 rounded-md">
              <div class="text-center bg-orange py-2 relative before:bg-black before:content-[''] before:absolute before:w-[10.7rem] md:before:w-[15rem] before:h-8 before:top-2 before:left-[-3.2%] before:z-[-1]">
                <h4 class="text-white text-lg">究極塩ら</h4>
              </div>
              <img src="assets/ramen-display.png" alt="">
              <div class="flex flex-col items-center pb-4">
                <h4 class="text-black">Ultimate Ramen</h4>
                <h4 class="text-orange">¥5.200</h4>
              </div>
            </div>

          </div>

          <div class="col-span-full w-full flex flex-row items-center justify-center pb-10 pt-5 md:pb-14 lg:py-8">
            <div class="text-center w-fit px-8 py-3 border-2 border-orange rounded-md hover:bg-orange text-orange hover:text-white transition duration-300">
              <h4 class="">See more</h4>
            </div>
          </div>
        </main>

      </div>`;
