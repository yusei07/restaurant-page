export const navHTML = `<!-- nav -->
      <nav class="w-full flex flex-row justify-between pb-10 pt-5 md:pb-14 lg:py-8 px-4 md:px-6 lg:px-12">
        <!-- icon -->
        <div class="border-2 border-black rounded-sm aspect-square w-14 h-14">
          <img src="./assets/nori-icon.webp" alt="" class="object-cover w-full h-full">
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
          <img src="./assets/ramen.webp" alt="" class="object-cover w-9/12 h-fit md:w-11/12 lg:w-9/12">
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
          <img src="./assets/chef.webp" alt="" class="object-cover w-full h-96 md:h-full">
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
            <img src="./assets/nori-icon.webp" alt="" class="object-cover w-full h-full">
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


export const menuHTML = `      <div class="h-full w-full px-4 md:px-6 lg:px-12">
        <main class="grid grid-cols-1 md:grid-cols-[14rem_auto] lg:grid-cols-[20rem_auto] gap-8">
          <!-- header -->
          <div class="col-span-full text-center">
            <h2 class="text-orange text-3xl font-semibold">メニューを発見</h2>
            <h1 class="text-black text-4xl font-bold">DISCOVER OUR MENU</h1>
          </div>
          <!-- sidebar -->
          <div class="md:pl-10 lg:pl-20">
            <ul class="flex flex-row md:flex-col justify-center gap-6 md:gap-8 text-black overflow-y-auto whitespace-nowrap ">
              <li class="hover:text-orange transition duration-300">All</li>
              <li class="text-orange underline">Shio Ramen</li>
              <li class="hover:text-orange transition duration-300">Tonkotsu Ramen</li>
              <li class="hover:text-orange transition duration-300">Miso Ramen</li>
              <li class="hover:text-orange transition duration-300">Shoyu Ramen</li>
              <li class="hover:text-orange transition duration-300">Other Menu</li>
            </ul>
          </div>
          <!-- content  -->
          <div class="h-fit grid grid-cols-[10rem_10rem] md:grid-cols-[12rem_12rem] lg:grid-cols-[14rem_14rem_14rem] md:grid-rows-1 gap-10">
            <!-- menu items -->
            <div class="h-fit bg-transparent hover:bg-white transition duration-300 rounded-md">
              <div class="text-center bg-orange py-2 relative before:bg-black before:content-[''] before:absolute before:w-[10.7rem] md:before:w-[12.8rem] lg:before:w-[15rem] before:h-8 before:top-2 before:left-[-3.2%] before:z-[-1]">
                <h4 class="text-white text-lg">昔ながらの塩ら</h4>
              </div>
              <img src="assets/ramen-display.webp" alt="">
              <div class="flex flex-col items-center pb-4">
                <h4 class="text-black">Traditional Ramen</h4>
                <h4 class="text-orange">¥4.700</h4>
              </div>
            </div>

            <div class="h-fit bg-transparent hover:bg-white transition duration-300 rounded-md">
              <div class="text-center bg-orange py-2 relative before:bg-black before:content-[''] before:absolute before:w-[10.7rem] md:before:w-[12.8rem] lg:before:w-[15rem] before:h-8 before:top-2 before:left-[-3.2%] before:z-[-1]">
                <h4 class="text-white text-lg">昔ながらの塩ら</h4>
              </div>
              <img src="assets/ramen-display.webp" alt="">
              <div class="flex flex-col items-center pb-4">
                <h4 class="text-black">Traditional Ramen</h4>
                <h4 class="text-orange">¥4.700</h4>
              </div>
            </div>

            <div class="h-fit bg-transparent hover:bg-white transition duration-300 rounded-md">
              <div class="text-center bg-orange py-2 relative before:bg-black before:content-[''] before:absolute before:w-[10.7rem] md:before:w-[12.8rem] lg:before:w-[15rem] before:h-8 before:top-2 before:left-[-3.2%] before:z-[-1]">
                <h4 class="text-white text-lg">昔ながらの塩ら</h4>
              </div>
              <img src="assets/ramen-display.webp" alt="">
              <div class="flex flex-col items-center pb-4">
                <h4 class="text-black">Traditional Ramen</h4>
                <h4 class="text-orange">¥4.700</h4>
              </div>
            </div>

            <div class="h-fit bg-transparent hover:bg-white transition duration-300 rounded-md">
              <div class="text-center bg-orange py-2 relative before:bg-black before:content-[''] before:absolute before:w-[10.7rem] md:before:w-[12.8rem] lg:before:w-[15rem] before:h-8 before:top-2 before:left-[-3.2%] before:z-[-1]">
                <h4 class="text-white text-lg">昔ながらの塩ら</h4>
              </div>
              <img src="assets/ramen-display.webp" alt="">
              <div class="flex flex-col items-center pb-4">
                <h4 class="text-black">Traditional Ramen</h4>
                <h4 class="text-orange">¥4.700</h4>
              </div>
            </div>

            <div class="h-fit bg-transparent hover:bg-white transition duration-300 rounded-md">
              <div class="text-center bg-orange py-2 relative before:bg-black before:content-[''] before:absolute before:w-[10.7rem] md:before:w-[12.8rem] lg:before:w-[15rem] before:h-8 before:top-2 before:left-[-3.2%] before:z-[-1]">
                <h4 class="text-white text-lg">昔ながらの塩ら</h4>
              </div>
              <img src="assets/ramen-display.webp" alt="">
              <div class="flex flex-col items-center pb-4">
                <h4 class="text-black">Traditional Ramen</h4>
                <h4 class="text-orange">¥4.700</h4>
              </div>
            </div>

            <div class="h-fit bg-transparent hover:bg-white transition duration-300 rounded-md">
              <div class="text-center bg-orange py-2 relative before:bg-black before:content-[''] before:absolute before:w-[10.7rem] md:before:w-[12.8rem] lg:before:w-[15rem] before:h-8 before:top-2 before:left-[-3.2%] before:z-[-1]">
                <h4 class="text-white text-lg">昔ながらの塩ら</h4>
              </div>
              <img src="assets/ramen-display.webp" alt="">
              <div class="flex flex-col items-center pb-4">
                <h4 class="text-black">Traditional Ramen</h4>
                <h4 class="text-orange">¥4.700</h4>
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


export const contactHTML = `<main class="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[65%_35%] gap-5 md:gap-10 px-4 md:px-6 lg:px-12">
              <!-- img & map iframe -->
              <div class="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div class="w-full h-full">
                  <img class="object-cover rounded-md w-full h-60 md:h-fit" src="assets/kris-sevinc-NVX55qVyEkE-unsplash.webp" alt="">
                </div>
                <div class="w-full h-full">
                  <iframe class="hidden lg:block rounded-md w-full h-full border-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.463607525998!2d135.49733817585033!3d34.668246984953335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e713a6175b99%3A0xf2523064f4092672!2zSmFwYW4sIOOAkjU0Mi0wMDcxIE9zYWthLCBDaHVvIFdhcmQsIETFjXRvbmJvcmksIDItY2jFjW1l4oiSMuKIkjcg5aGp576O5bGL!5e0!3m2!1sen!2sid!4v1691721252438!5m2!1sen!2sid" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>

              <!-- content -->
              <div class="w-full h-full flex flex-col justify-center gap-6 md:gap-8 lg:px-2 pb-5 md:pb-0">
                <div class="flex flex-col gap-4 text-black">
                  <h2 class="text-orange text-3xl font-semibold">今すぐ注文</h2>
                  <h1 class="text-black text-4xl font-bold">Book a Table For Dinner</h1>
                  <p>Just one phone call and we will reserve a table for you also you can choose table according you requirements family members.</p>
                </div>

                <div class="flex flex-col gap-4">
                  <div class="flex flex-row items-center gap-2">
                    <span>
                      <i data-feather="phone" class="w-4 h-4 text-black stroke-[2]"></i>
                    </span>
                    <div>noriramen@gmail.com</div>
                  </div>
                  <div class="flex flex-row items-center gap-2">
                    <span>
                      <i data-feather="mail" class="w-4 h-4 text-black stroke-[2]"></i>
                    </span>
                    <div>+8189-380-2671</div>
                  </div>
                  <div class="flex flex-row items-center gap-2">
                    <span>
                      <i data-feather="map-pin" class="w-4 h-4 text-black stroke-[2]"></i>
                    </span>
                    <div>2-2-7 Dotonbori, Chuo-ku, Osaka</div>
                  </div>
                </div>

                <div class="w-fit flex flex-row gap-2 items-center pl-8 pr-6 py-2 rounded-md bg-orange text-white hover:bg-white hover:text-orange transition duration-300">
                  Book Now <span><i data-feather="arrow-up-right" class="w-4 h-4 stroke-[3]"></i></span>
                </div>

              </div>
            </main>`;
