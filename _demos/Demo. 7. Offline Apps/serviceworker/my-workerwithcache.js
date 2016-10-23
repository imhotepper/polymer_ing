self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open('john-v1')
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(['/']);
      })
  );
});

this.addEventListener('activate', function(event) {
  console.log('activated stage');
});

this.addEventListener('fetch', function(event) {
  self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          console.log(`returning from cache ` + event.request.url);
          return response;
        }
        console.log(`retrieving from web..` + event.request.url);
        return fetch(event.request);
      }
    )
  );
})
});