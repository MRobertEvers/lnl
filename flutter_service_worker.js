'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1ca19e27b3799c06026b4741c45d753c",
"assets/assets/audio/1.Dohm.mp3": "58ab80433b3491e4668cf29e6c582d57",
"assets/assets/audio/10.Music%2520Box.mp3": "891ad89fc2eec7eac03fd5d8c4c63316",
"assets/assets/audio/11.Loving.mp3": "79ba155e9f1febd03f825058f8ed79a8",
"assets/assets/audio/12.Wonderland.mp3": "e44ecfcff354199feb95eba7aaa7806d",
"assets/assets/audio/13.Happy%2520Baby.mp3": "f73fcd8dfc1c0cea0b393ed6da2285b3",
"assets/assets/audio/14.Waves.mp3": "5a31cde3405b3d1f65b03142d206dfa5",
"assets/assets/audio/15.Stream.mp3": "2324a65315bb32d4b9668a29d4973a61",
"assets/assets/audio/16.Rain.mp3": "67f6b1cd6bd89ce8c52c8347a86e0be5",
"assets/assets/audio/17.Calm.mp3": "aa73d99523d1d4489dcfbcdafbb3d990",
"assets/assets/audio/18.Healing.mp3": "08733f8a06e3d16b69313f19136ddc4d",
"assets/assets/audio/19.Landscape.mp3": "1ef38e52d33c2af7bdf067cc4a404967",
"assets/assets/audio/2.Deep%2520Fan.mp3": "59105226a543d03b7f93b2b513cf6dc8",
"assets/assets/audio/20.Nature.mp3": "5c18ee115b28bcd8bb6daee136e400fd",
"assets/assets/audio/3.Fan.mp3": "109ae491ff0a999548491e3875806ee6",
"assets/assets/audio/4.White%2520Noise.mp3": "77aabbc7c16f9b4878bb06d9e4998d90",
"assets/assets/audio/5.Heart%2520Beat.mp3": "cf8b716e3e672a4df24ab7c94a66b682",
"assets/assets/audio/6.Shusher.mp3": "1c7f020a4adb98a92231fa4b70a63abb",
"assets/assets/audio/7.Brahms.mp3": "bdf120da7731dd5f6cacbf2a6e9c084f",
"assets/assets/audio/8.Clair-De-Lune.mp3": "432da4b4779a830c7a465543f7e2c9ac",
"assets/assets/audio/9.Twinkle.mp3": "dbbc0fc2174c0b6ce65bcc628dc39109",
"assets/assets/baby-icon.svg": "73a8981ec170aaf50bb29e262c409f50",
"assets/assets/bell.svg": "f99e768f184a972de639f08e7273180c",
"assets/assets/bg-dark-1000x2048.jpg": "65edec368f1582f1684106438a1c5751",
"assets/assets/black%2520(1).png": "a58ac92e3b82065b8eafda0c168f1c3d",
"assets/assets/calendar.svg": "a0ccd3511d4f57a9f4cec2dc2511b186",
"assets/assets/clock_start.svg": "4f616593628ee7e7a97802e4fc660a24",
"assets/assets/clock_stop.svg": "2cb3f9a95ef9291e7a6df6baaaa8db81",
"assets/assets/color-wheel@2x.png": "4a4ae510d61270196445339a35aac36a",
"assets/assets/Crimson_Pro.zip": "1a4a48d1a341646fd831d5d63a820f35",
"assets/assets/device-setup-2.jpg": "f32765c1a5766a24fef64e152c0aa922",
"assets/assets/device-setup-3.jpg": "dc82bcdbdcbeefcbc95ec083eb086a67",
"assets/assets/dohm.svg": "9f87dd044631879c154cb5cb08dc34ea",
"assets/assets/facts.svg": "7f0db788f8a310bbf7d90cc108fbf939",
"assets/assets/gear.svg": "5a66173f9095b74cc1ec19d98d6a9e0a",
"assets/assets/hold_graphic.png": "315e351382db190079a678d3cf042e70",
"assets/assets/home-icons/lights.svg": "0f115725404bb4a5fc28591b27e80e86",
"assets/assets/home-icons/plus.svg": "7302abf6fcb98161b1a75d101be4deb3",
"assets/assets/home-icons/settings.svg": "0bf64e884f1fb2370e19e0f5391f5e2e",
"assets/assets/home-icons/videocam.svg": "b70ba1fa91a29eea9af86d7de2d7595e",
"assets/assets/home.svg": "60e3eb181eef794d9448ae3e272bdf19",
"assets/assets/icon/YSLogo_Icon.png": "4b3c08e98dd170e36ab418fa1414731c",
"assets/assets/icon/YS_Compact.png": "c60c062cc16512f26811e71159e2ad5a",
"assets/assets/Icon%2520awesome-baby-carriage.svg": "2b3ee82283bedd4c3a9030721bea50b6",
"assets/assets/Icon%2520awesome-fan.svg": "ef9f037b6ed3a8ad0fbeac50ced37898",
"assets/assets/Icon%2520awesome-leaf.svg": "58993e173a21131a854e140826ac5595",
"assets/assets/Icon%2520awesome-power-gradient.svg": "2612103203ec3eeb8c85f8c4dff0237d",
"assets/assets/Icon%2520awesome-power-img.png": "ecd9844c85db5fe38c3e72ba249919bb",
"assets/assets/Icon%2520awesome-power-off.svg": "35ed3b629ec89d56b47505c82ebf92ea",
"assets/assets/info.svg": "d7b1abb034589af70106c2dfb1a2050b",
"assets/assets/invite.svg": "f30e1fd4c33b875bb0e3acc7ce8aba22",
"assets/assets/lightbulb.svg": "d69a031dbdd0ebd3c314155e0432aad6",
"assets/assets/lights.svg": "0f115725404bb4a5fc28591b27e80e86",
"assets/assets/logout.svg": "fbfb013216cc370e01cab26f4da6e1e5",
"assets/assets/media.svg": "d31a586d2b5890ac8a875034d69bc409",
"assets/assets/menu-icons/bell.svg": "f99e768f184a972de639f08e7273180c",
"assets/assets/menu-icons/calendar.svg": "a0ccd3511d4f57a9f4cec2dc2511b186",
"assets/assets/menu-icons/facts.svg": "7f0db788f8a310bbf7d90cc108fbf939",
"assets/assets/menu-icons/gear.svg": "5a66173f9095b74cc1ec19d98d6a9e0a",
"assets/assets/menu-icons/home.svg": "60e3eb181eef794d9448ae3e272bdf19",
"assets/assets/menu-icons/info.svg": "d7b1abb034589af70106c2dfb1a2050b",
"assets/assets/menu-icons/invite.svg": "f30e1fd4c33b875bb0e3acc7ce8aba22",
"assets/assets/menu-icons/lightbulb.svg": "d69a031dbdd0ebd3c314155e0432aad6",
"assets/assets/menu-icons/logout.svg": "fbfb013216cc370e01cab26f4da6e1e5",
"assets/assets/menu-icons/media.svg": "d31a586d2b5890ac8a875034d69bc409",
"assets/assets/menu-icons/moon.svg": "41396e36b9ba1293bfcd381a23f5e67c",
"assets/assets/menu-icons/sound.svg": "519f185866f9245735f18dff0dffabe0",
"assets/assets/menu-icons/video.svg": "4e9b99db0310908df37368514ad941ee",
"assets/assets/midnight_cloudUploadIcon_fogcircle.png": "3eb3ed5ee11dd1c2222c7062b01b5dae",
"assets/assets/midnight_LightIcon1_fogcircle.png": "cfd9248fae84451118fd487258d71b51",
"assets/assets/moon.svg": "41396e36b9ba1293bfcd381a23f5e67c",
"assets/assets/photo_camera_black_24dp.svg": "3c938cd5f5e5c9933e4a8ec0aaf0cc1f",
"assets/assets/plus.svg": "7302abf6fcb98161b1a75d101be4deb3",
"assets/assets/settings.svg": "0bf64e884f1fb2370e19e0f5391f5e2e",
"assets/assets/sound.svg": "519f185866f9245735f18dff0dffabe0",
"assets/assets/video.svg": "4e9b99db0310908df37368514ad941ee",
"assets/assets/videocam.svg": "b70ba1fa91a29eea9af86d7de2d7595e",
"assets/assets/Yogasleep_logo_rgb__fordarkbg_360x.png": "549a571c24f674b1ba4de972443126f4",
"assets/assets/ys-dohm-graphic.jpg": "624d65776832748b2bf054a2e74851cd",
"assets/assets/YS-dohm.svg": "ecb92c7f5dd2911858a030cf65afbf59",
"assets/assets/YSApp_MainBk-dark2.png": "5484de83940940e702ec3b3ecd9ca9c1",
"assets/assets/YSApp_StarryNight.png": "6c2efe49935ddf6fa5dbb14b090ce1e9",
"assets/assets/YSBaby_CloudStars.png": "bf376fb9428015778774614c2a4d97ca",
"assets/assets/YSBaby_CloudStars.svg": "a97137ba40016c4a12fd4f1b63308c2c",
"assets/assets/YSBaby_Logotype.png": "3b30dfbfd1654bacdd29332c9fd23038",
"assets/assets/YSBaby_Logotype.svg": "e428bad4ae74474d9d885ef1ca383395",
"assets/assets/YSBaby_logo_COB.png": "f15a31c4e2e4910141134e6c7f0bcc9c",
"assets/assets/YSIcon_add.svg": "a8996cf6449a10653a8e6b4a24a29b8c",
"assets/assets/YSIcon_babySleep.svg": "d4cd208fe04d02436a5a108b13d2330e",
"assets/assets/YSIcon_calendar.svg": "dc1e9b382ed70a6a375fe5ec7c9e06be",
"assets/assets/YSIcon_camera.svg": "6e594a4b2b73b7300742ee79593c6ce9",
"assets/assets/YSIcon_cameraVid.svg": "b92e3e4fb8e6658a10670c381b35b412",
"assets/assets/YSIcon_cameraVid_add.svg": "607a764cba089f43509b650d09b2947f",
"assets/assets/YSIcon_check_circle.svg": "92feafcedc3df3afa4c05c499bf52186",
"assets/assets/YSIcon_close.svg": "ce81ae9ef1ba2cf45982003e892294e4",
"assets/assets/YSIcon_DOHM.svg": "abc73b394fdf030817e05654797899de",
"assets/assets/YSIcon_fan.svg": "ff219f0a494d63b991a0a5e58e6379c9",
"assets/assets/YSIcon_heart.svg": "3e6948e6307509377d6fd0589f67ef43",
"assets/assets/YSIcon_leaf.svg": "a6724149c7cba7693daa346ab1d2f37d",
"assets/assets/YSIcon_lightbulb.svg": "6d922856f6251f71c59779206079cf3c",
"assets/assets/YSIcon_lightbulb_02.svg": "3f487eb974441e9e2676cd0830be3dd3",
"assets/assets/YSIcon_media_back.svg": "c138e62eeb862546969386fde43eceab",
"assets/assets/YSIcon_media_index.svg": "222ebda4f9f5277f92445f56a90e3f2b",
"assets/assets/YSIcon_media_next.svg": "0c74949390a4fdf99d960a4f7738d8fe",
"assets/assets/YSIcon_media_pause.svg": "095cd0cb9b7cec9bee36122aa6ec3bbb",
"assets/assets/YSIcon_media_play.svg": "36db590dd381a73713bc5476d568b8f1",
"assets/assets/YSIcon_media_shuffle.svg": "ecb0c6be4d944e39f078065f6e85bf62",
"assets/assets/YSIcon_media_stop.svg": "bf55692f588a23759e76620d28ffc18a",
"assets/assets/YSIcon_mic01.svg": "1e183647ddb808cc8a0adfe243fffae9",
"assets/assets/YSIcon_mic02.svg": "e234e432950025c7c1099cfcc03dd356",
"assets/assets/YSIcon_moonStars.svg": "6e0db5fc1b2434dc394cca3ef00d735e",
"assets/assets/YSIcon_music01.svg": "91f24c33ed730c509ba08c31da0c1458",
"assets/assets/YSIcon_play_index.svg": "246f1c2fde6d3bbafec619ef614e3e3d",
"assets/assets/YSIcon_spkr00.svg": "bf352de750b4887009d29561d1888a9b",
"assets/assets/YSIcon_spkr02.svg": "d0d509a54370c428b14eaf677d0d946f",
"assets/assets/YSIcon_SttngsSliders.svg": "494dc115632ccc094c5cf250ae61dc3a",
"assets/assets/YSIcon_sunrise.svg": "1992ef694429a2b22ef871f7a74ecd1a",
"assets/assets/YSIcon_wifi.svg": "433d76ddbe81ac92f117900ba8943092",
"assets/assets/YSLogo_Icon.png": "4b3c08e98dd170e36ab418fa1414731c",
"assets/assets/YS_Compact.png": "c60c062cc16512f26811e71159e2ad5a",
"assets/FontManifest.json": "9577ac1167d5bbeba19bb4bf7ed6ba45",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Montserrat-Black.ttf": "27e3649bab7c62fa21b8837c4842e40e",
"assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/fonts/Montserrat-ExtraBold.ttf": "19ba7aa52a78c3896558ac1c0a5fb4c7",
"assets/fonts/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/Montserrat-SemiBold.ttf": "c641dbee1d75892e4d88bdc31560c91b",
"assets/fonts/OpenSans-Bold.ttf": "5bc6b8360236a197d59e55f72b02d4bf",
"assets/fonts/OpenSans-ExtraBold.ttf": "907d99fe588e4649680159671dfe74f4",
"assets/fonts/OpenSans-Medium.ttf": "0cbcac22e73cab1d6dbf2cfcc269b942",
"assets/fonts/OpenSans-Regular.ttf": "3eb5459d91a5743e0deaf2c7d7896b08",
"assets/fonts/OpenSans-SemiBold.ttf": "af0b2118d34dcaf6e671ee67cf4d5be2",
"assets/NOTICES": "336da7108ce545b054c3b70314652b87",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_sound_web/js/flutter_sound/flutter_sound.js": "aecd83c80bf4faace0bcea4cd47ab307",
"assets/packages/flutter_sound_web/js/flutter_sound/flutter_sound_player.js": "ab009562c726b262f996cb55447ef32a",
"assets/packages/flutter_sound_web/js/flutter_sound/flutter_sound_recorder.js": "f7ac74c4e0fd5cd472d86c3fe93883fc",
"assets/packages/flutter_sound_web/js/howler/howler.core.min.js": "55e0af0319483be8a7371a2cceacf921",
"assets/packages/flutter_sound_web/js/howler/howler.js": "2bba823e6b4d71ea019d81d384672823",
"assets/packages/flutter_sound_web/js/howler/howler.min.js": "0245b64fba989b9e3fd5b253f683d0e4",
"assets/packages/flutter_sound_web/js/howler/howler.spatial.min.js": "28305f7b4898c9b49d523b2e80293ec8",
"favicon.png": "4b3c08e98dd170e36ab418fa1414731c",
"icons/Icon-192.png": "cd4a1f7d1e42c376e9d7f3d1852901e7",
"icons/Icon-512.png": "4b3c08e98dd170e36ab418fa1414731c",
"index.html": "8fda897ae504b53581e44885ac85a9fa",
"/": "8fda897ae504b53581e44885ac85a9fa",
"main.dart.js": "09ad929721aca4e00266561a401e54ee",
"manifest.json": "a7cbca047813aeb6c9ecb3af10d0edf4",
"version.json": "21198698208d90efe0c24aae0680ef1c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
