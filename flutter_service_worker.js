'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ae780585f49b94ce1444eb7d28906123",
".git/config": "021ecb68fb266137a433f8a78be0cafd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bd7baba6c73c34d9679f94bd9e2e73de",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "701694dbb61e31dc17cf08a038fb38d6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "14ba5626faed6a655dcd21ac09bcb484",
".git/logs/refs/heads/main": "cadb9974169ab4efc9b1282ab684365b",
".git/logs/refs/remotes/origin/main": "2178bfdcf832cb02b585f125b49ddb77",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/9dc7e532959d5f6f5532928ba72c25dd2f3ac3": "380b75ca4e2cb09e1a0dc6d92c7a09a2",
".git/objects/04/d56401e94da7d81fe3498896ee37596e084776": "8ddff775c25589bcad3588a5c038418f",
".git/objects/0a/3ff9a416559be43e43514f93b70781f0ad9e95": "9cd853a6a9147f393257e3896a02dfdf",
".git/objects/0e/60f9f3c35978942fdd6e25750c4bd3b9aee17d": "ac1087aed95868d3b3a1f189f1145142",
".git/objects/13/0d21811466c3d7fc54277d24fe5f815e58d201": "2fda2d3b452e10ecc1d85ed4787faa80",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/21/c72b6e79fa052f14aafa36ac16cde12fa371f1": "c2dd9ccd81b609331d619fd271233bea",
".git/objects/23/7777320ebda62920bbb0987dcf3bb0849a95ac": "ff3cff8fd65443d7d13adade0b9c3cba",
".git/objects/2a/cf424988fab6fa18a111f822d2225b0ae23c2a": "d8f7e54f8d9011a0bbbf87eb496d281f",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2f/5a7d3bf5f22a99180e7ee14df25bb58d4fab4c": "1cbfef678304b8cfc0bede1e40ab7e59",
".git/objects/36/598eddbc1188556f25f43189ad334ce83fe11a": "bf33f3131e2f36a8909a04a09911d71f",
".git/objects/3d/b32701e56e1b798400f92feb82fdab8f1b3923": "4bfca97c802be8b90759f2c90e75c3f0",
".git/objects/3f/7640b0ca877a6e9afdbc76e4428b277303e00e": "dc319e0cdd93097f98c05fa1b7ba6759",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/3f/e5c21b95cd1deac68caefb11caa30c59040165": "0a419a5886848071b574220aac1445de",
".git/objects/40/ce85daff6694ec944749d11c30c936dde2e7dc": "4170d38613deb2660c3e25bc0a620ed5",
".git/objects/43/73b093c881cdf3b695b512f2374e2905254781": "01c401712c2d3c4187daf3f18046cfa7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/54/bb2e9a914a91dab6c2977fab0c53b476876625": "a84ee6089ec248cf975b171dbf3f452b",
".git/objects/57/d002f632f8f758bb14ab74423e3eb4fe8c5cf6": "686fcd1ade4988f8b3cbf26cd295aea1",
".git/objects/59/6dfaa1a0f181de7026a7eb6564fc6b5d652fe6": "40e2220553598ddc89b90aff618e3e93",
".git/objects/5b/bef18d63c21c81ab7ce2fb4b8e6fed823f0b73": "32a226f92dea257d365c3541aaf05723",
".git/objects/6a/ed611ddfd01c58eeb9a09136d940c06837f355": "0593bec31569ce69188c7baf68d5743c",
".git/objects/6d/9f94855ceb8a28a29a57501b0249fda01f4535": "1dfe30287efff480669a5ae8f955fc58",
".git/objects/6f/f74d4286ccf4408287d9a173c7e57f8089c66d": "d4c91af4a82fa60f4033d0d61cfad508",
".git/objects/74/b0fa8a6a0d2b0a8f78c0e0b5affa4042b63af2": "3c7f8e6e85f25a2d86ad0c3dda9ce183",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7f/8b27b307a8b11f8a7ee45045083cf580436074": "73d1812fd4d27dfe27645ac03161207a",
".git/objects/80/d6d9d21a55ac28a4f50d1aef2263a89efa235a": "ed2736cea4da7dbb83a71b362265b9c1",
".git/objects/82/f086238beb7ad128cb7879a856d7a56dd08e7f": "c2b9323490b3418923441c30d827a087",
".git/objects/88/4f8582f8ea6937a1c17a2e4669c2849c3ddf18": "ef511bde02578c468bfaf15f5c5fae73",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/4825ccee9758d0d57854d2aca92329e9b7ee1e": "7058aa857cd6ddd7ad9f0aead240b458",
".git/objects/8d/242a5578b7fef062f19c999cc176b8348363c0": "5816ac5e10147fde1358a36d577361c9",
".git/objects/91/0e8d3726ccc65d7a6ca8830b8323ebe5d9e7d2": "7e4631f1ee390e10bb1e2ba4d9c180f1",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/99/cfdc5fdc1251759bb46d825725ba536277df42": "8a7ebfea0abdd2e801af1c4a5a1fae23",
".git/objects/99/e2ef1242ffd4d2f567554087a5bd69e646f9d9": "42f74c67e183f47d5c306dcef65d5433",
".git/objects/a0/e46d539495c10dbe395aef51857e684942f7a4": "eab45b43c56a1fa3de53a039ece27b6f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/f28149a2e1b2715591844b1cd60ef5fd0f9f06": "483cb4b693863cc6da946143bb031638",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/76790770033cb4cc37bcf40d5a1a37456e9c18": "1d7aa331c6281ba458c090c788c77811",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/4ee964047cbe7ec468a255b0c2b614354b3f87": "1d0d48ecbacc46d177ba06b5eb009a46",
".git/objects/bd/7d2bdb87fafaceb707447f96a83670df36a8cd": "d18c9365976e04274c898db71e85fa5a",
".git/objects/c4/feb5b8f06d4f941e0600a0ab67275122495174": "810eec5b394362f2673e92c6b4328b71",
".git/objects/c6/e7e623eebd86f27bdc71eafc0b848d16c29309": "fc66c156de2f96c897b5dc11852acc55",
".git/objects/c8/8fc2ab496bdc06290bea9a94265174e7e0cb62": "54f213a599b773281eb7921d910b3a4b",
".git/objects/c8/e833c05a05a1c9aab5a37b6443823af6f60903": "4d6a824bc9bcd692473d09997fddd07e",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/fc8fe8a4c358b4cd51b75bb3ffd67be996dcaa": "8edacf14ce63911936ba207e929ef9c5",
".git/objects/cd/fdad75d3097d041847089bea33f7ca70942829": "2613bf51e119b63a7be843d2e0b02b4f",
".git/objects/cf/fa50522fd9f425f1a55a6e23577c9c7d613a80": "5c456ec5ebc7734c0ba2f9f213564772",
".git/objects/d1/4b81e9bc7fc33e4c993271e6c71c354945f646": "db04e64aee46f37740e5b12219586c44",
".git/objects/d4/b8dbf389eff952739a105fff38d23ce955278d": "407ecb074a69ec5bef350ab2c97c88e0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/4121fc59a9ce5e43d9b396b3541d8f7c62c476": "434bd235d6c5b0d86af8a3ce6ee85cae",
".git/objects/d9/813d1a425af071b283a79950bc793e32007e89": "f6e9ba641d5b1adeeffc683747ecb3d4",
".git/objects/dd/0c5848e8430f4f5a993baa3b14d87816848f7a": "b55fb3c6b57d8b344f1a87c25747636f",
".git/objects/dd/76f4d3474399512ae9c12bed36df9facd843fa": "f57417f912e73240f28e40fbe0c5ca8a",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e3/56baa9180eeac4aaa10ec72143a04544cf2c32": "5ae23d3aa4cb508b74595f4c55e95ebc",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/ecc9e015d0ab22a04c9822aa0ef17c56dfa83c": "f3e6496955250a3a054ea40b1d1babd1",
".git/objects/f6/7b1da632bd511fc00a2d69fbc835598c8ce754": "d4edf543d4f92249f3c4c595de70c29f",
".git/objects/fa/e05edf86a4ef5b89e116ea3b9ec2d772e94839": "4642f65f273222c70213bc6408da3051",
".git/ORIG_HEAD": "34dd9a7540995e486d1889521498ce3d",
".git/refs/heads/main": "380b759f33d36782e09a949284cd7cd6",
".git/refs/remotes/origin/main": "380b759f33d36782e09a949284cd7cd6",
"assets/AssetManifest.json": "7ec8ac3572ea6480859a5172450f9df0",
"assets/assets/fonts/Quicksand-Bold.ttf": "517b4a8fa3577cc7066e9bcfebe4beff",
"assets/assets/fonts/Quicksand-Light.ttf": "34d0d3091e4f3de26ff0f2c4a4f6bfb7",
"assets/assets/fonts/Quicksand-Medium.ttf": "890d9ed927bb7f0c6b9eed04f9c329e5",
"assets/assets/fonts/Quicksand-Regular.ttf": "3dfedd2b3e7b35ec3ac8a295a166a880",
"assets/assets/fonts/Quicksand-SemiBold.ttf": "60683c595c4de500713906b9ccf1e2ab",
"assets/FontManifest.json": "85935ddb3285dfde4e297a8472c8ffe0",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "98f22800b31f5e8deda3057ce13edb1a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "f8a12a0b562b45c80cb849e09ce5ea0d",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4f88b4ae464dcae1899f325ca7f1d216",
"/": "4f88b4ae464dcae1899f325ca7f1d216",
"main.dart.js": "6c7b3c434ab14270814ef8b1ca11e905",
"manifest.json": "4f8b94aa93d1c9018487f574ac67e32e",
"README.md": "6af2f154ab79f2fca7bde51db15cfd03",
"version.json": "30ace3311d414254728761cacb0273db"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
