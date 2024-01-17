'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9927073776b73c9842d00ee010064890",
"assets/AssetManifest.bin.json": "77e896d1ed3235ce51a95eb304ef52b6",
"assets/AssetManifest.json": "bd5b07099fd5c7ad866744358bd2bc1c",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/iconpack.ttf": "0de5ced701aa4e3f8ae3c725341067cf",
"assets/assets/fonts/Montserrat-Regular.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"assets/assets/fonts/Nunito-Regular.ttf": "0c890be2af0d241a2387ad2c4c16af2c",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/images/app_launcher_icon.png": "9896ff34c7713d39e4855792bafe1eee",
"assets/assets/images/darkshow.jpg": "5fd0fb8054c22728202d05379c6c3636",
"assets/assets/images/dev.jpeg": "d605908a82b0002ece764b91925c2e3d",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/image.png": "988d508df59d3797a12b01db5ae1123b",
"assets/assets/images/lightshow.jpg": "f57c4b8211382f40b0b9191fd8afd694",
"assets/assets/images/LOGO.png": "8e3fd2998575fcf3cb73e330398e9d13",
"assets/assets/images/nct.jpg": "647ab84f5791d268e4c9c68252ebfe1c",
"assets/assets/images/nit-logo.png": "2b4da8be40c98fd404e3512aa2196de6",
"assets/assets/images/nit_app_icon.png": "9896ff34c7713d39e4855792bafe1eee",
"assets/assets/images/No_data.svg": "d140a5560e5b568ef0f39a35b4e3e375",
"assets/assets/images/onboarding.svg": "7c49334dab249c16ca3de172eb366794",
"assets/assets/images/pattern.png": "4fecbda38f70709e7a71085e70824c38",
"assets/assets/images/patterndark.png": "c0bd3ec346ee2ad65b68a1f9e8f16d83",
"assets/assets/images/privacy.png": "1be2aac2a39719c8dfac76da64f50cea",
"assets/assets/images/splash.png": "94e8c72bf44fd1b67dbd0bc412198f2b",
"assets/assets/images/support.svg": "775a77b65303e31d51685a565bab86a8",
"assets/assets/lottie_animations/27011-sungrass-emoji.json": "903767b98646464ef856d4f1d6fa0067",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/lottie_animations/no_exam.json": "179bc88521f7b6f436fe656fee746486",
"assets/assets/lottie_animations/winking-lottie.json": "a4a7824117a31b73dcae3d41490c2df8",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "30506f4cb2beade25a603a61e581998a",
"assets/fonts/MaterialIcons-Regular.otf": "070c8a816fe83d71b4a7f429003c1258",
"assets/NOTICES": "b5cbd9726ef644bc36c8a6ef9f87736c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "2374968705d118e57d1918d541a3274f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4589f26e2bd533d8423af9abb80ebc8c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1e38ab692017bdc214ed30cab847fef2",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "03e9053a2051fe5cddad0fd488b3651a",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/app_launcher_icon.png": "9896ff34c7713d39e4855792bafe1eee",
"icons/Icon-192.png": "d1836fbbd84ecdb9bdbeb4809895e9d1",
"icons/Icon-512.png": "e4a129ffc67ace2e17858c3bc1a49b39",
"icons/Icon-maskable-192.png": "d1836fbbd84ecdb9bdbeb4809895e9d1",
"icons/Icon-maskable-512.png": "e4a129ffc67ace2e17858c3bc1a49b39",
"index.html": "f5a89f0e8e922a878881e6f643eea23e",
"/": "f5a89f0e8e922a878881e6f643eea23e",
"main.dart.js": "d39870b979028a1a6717b9620277d49d",
"manifest.json": "5af16a8203f9d72217c301a87b9a14ff",
"nit_app_icon.png": "9896ff34c7713d39e4855792bafe1eee",
"version.json": "058ebd8356f630eea78292de9ff9fcfc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
