const cacheName = "v1";

/**
 * Fetches all assets for the current version and caches them.
 */
async function cacheAssetsForCurrentVersion() {
  const cache = await caches.open(cacheName);
  const assets = await fetchAssets();
  // await _.forEachAsync(assets, 0, async (asset) => {
  Object.values(assets).map(async (asset) => {
    const request = new Request(asset);
    const response = await fetch(request);
    await cache.put(request, response);
    console.log("here's the requesttttttttttttt: " + response);
  });
}

/**
 * Fetches all assets for the current version, returns an array of asset URLs.
 */
async function fetchAssets() {
  const response = await fetch(`http://localhost:3000/asset-manifest.json`);
  const json = await response.json();
  return json.files;
}

self.addEventListener("install", (event, response) => {
  //install steps
  event.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log("Opened Cache");
        // cache.addAll("localhost:3000/asset-manifest.json");
        // cache.addAll(response.json().files);
        cacheAssetsForCurrentVersion();
      })
      .then(() => self.skipWaiting())
  );
});

//activate event
self.addEventListener("activate", (event) => {
  //remove the unwanted cached assets
  event.waitUntil(
    caches.keys().then((cacheName) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

//fetch event
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
