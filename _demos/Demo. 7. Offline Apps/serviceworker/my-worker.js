this.addEventListener('install', function(event) {
  console.log('installing stage');
});

this.addEventListener('activate', function(event) {
  console.log('activated stage');
});

this.addEventListener('message', function(event) {
  console.log('message events');
});

this.addEventListener('fetch', function(event) {
  console.log('fetch event');
});

this.addEventListener('sync', function(event) {
  console.log('sync event');
});

this.addEventListener('push', function(event) {
  console.log('push event');
});


// demo the fake response when data is requested!
this.addEventListener('fetch', function(event) {
  console.log("someone asked for resource", event.request.url);
  if (event.request.url.indexOf('data') > 0){
      console.log('data is requested!');
      event.respondWith(new Response('[{"a","b","c"}]'));
  } else  {
  }
});
