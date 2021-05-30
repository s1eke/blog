const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"SFBlog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"fad9071832564b1639eaf8b8e91d723c",url:"./2017/05/15/Git-And-Hexo/index.html"},{revision:"33614d3f9e76273326ba452bdf4cbc27",url:"./2017/05/19/LAMP/index.html"},{revision:"72a21f5ff79a443058614252aa19bcbc",url:"./2018/02/19/Vim-Galore/index.html"},{revision:"630745bb9660d244f5cb73fd89ed404b",url:"./2018/04/03/How-To-Ask-Questions-The-Smart-Way/index.html"},{revision:"ee88969224638ab6053fedff786cb00e",url:"./2018/04/03/Linux/index.html"},{revision:"18e8c9844b8121eea1e58a5effebc322",url:"./2018/04/04/PWA-for-hexo/index.html"},{revision:"da137edadcb60f970966437f80bc42e5",url:"./2018/04/06/Operating-System/index.html"},{revision:"02a2b8370524932615f4f2aa3dd81a58",url:"./2018/04/17/Computer-Network/index.html"},{revision:"7af3013615d9200471008b169b5c45c7",url:"./2018/06/05/HTTP/index.html"},{revision:"e8e361191013217fc3aad9129cd0b480",url:"./2018/08/30/MySQL/index.html"},{revision:"f32526eec1b3e94f45755c776e046eca",url:"./2018/12/04/Docker/index.html"},{revision:"0e9c78003a8f7ff763a54d9cadbf8ba7",url:"./2019/05/31/the-art-of-command-line/index.html"},{revision:"d6329cc9c4a3f403491e654ca08e4b3a",url:"./2019/09/23/Common-Sense-About-The-Limits/index.html"},{revision:"bd0bdc1975d7e7ef2c228c92a881200b",url:"./2019/10/10/Python-Exercises/index.html"},{revision:"0ab53f27c0eacd944f65fa7e834d9f29",url:"./2020/07/03/Ceph-Deploy/index.html"},{revision:"02d8b7d3bee0bfdc6ccc414f5513f980",url:"./2020/12/10/Why-is-it-hard-for-the-big-domestic-manufacturers-to-make-a-mark-in-the-toB-field/index.html"},{revision:"922f45f79986ba3aaab9570d639569b6",url:"./404.html"},{revision:"2fcf06a019c1d5d461eb91e0b06a2f5b",url:"./About/index.html"},{revision:"80a91b45b28105e436cc100a3ebc1192",url:"./apple-touch-icon.png"},{revision:"c4af4bb01f3db06a6162e881feb8a34e",url:"./archives/2017/05/index.html"},{revision:"86bfb49aa1d3f4315283a1d8f36258cd",url:"./archives/2017/index.html"},{revision:"f2b983009d2375806992cc5fbb398f59",url:"./archives/2018/02/index.html"},{revision:"2371a6a31c6775087d906f3fea74570a",url:"./archives/2018/04/index.html"},{revision:"e65c03cbea0caa5e2abf2de7f1b3b1f9",url:"./archives/2018/06/index.html"},{revision:"be6b73d7a305879932d9ed6a25db18ca",url:"./archives/2018/08/index.html"},{revision:"0a817908d9e2cc5ee43d25636601e65f",url:"./archives/2018/12/index.html"},{revision:"9d44277c2a0a08137fbd02fa8a9d6aa3",url:"./archives/2018/index.html"},{revision:"c8cec73eb290b5f26d1a5d59406ac6a9",url:"./archives/2019/05/index.html"},{revision:"30b7d5e1694b5c79bf47723908f16bb5",url:"./archives/2019/09/index.html"},{revision:"92426fd1b403e2d8e73bd381c1e0bb11",url:"./archives/2019/10/index.html"},{revision:"2aa1fe27ff2f8886f4326568ad0694a3",url:"./archives/2019/index.html"},{revision:"a77026ce2d9d7e801032904f8ec557d2",url:"./archives/2020/07/index.html"},{revision:"16e3e0783b152ca51696ca60c24c9bd9",url:"./archives/2020/12/index.html"},{revision:"0cb31abf3b1589570e3c2d26caa3dc7c",url:"./archives/2020/index.html"},{revision:"4644424aa081e3abf2ec5d5a06ffb249",url:"./archives/index.html"},{revision:"4644424aa081e3abf2ec5d5a06ffb249",url:"./archives/page/2/index.html"},{revision:"d6a7ad8aaf4f78e89a476838480ef540",url:"./categories/index.html"},{revision:"28b48af13a8add04b587f8a412fe27a0",url:"./css/diaspora.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./discard/Java-Concurrency.html"},{revision:"11fce72daa1937303eae9749ddb6df0a",url:"./discard/Management.html"},{revision:"7a3298e4ae110f28d743e61c7c2d94ad",url:"./discard/Tourism-principles-and-practice-1.html"},{revision:"cd40083d0d2bc246ce9449cd4f946fe3",url:"./discard/Tourism-principles-and-practice-2.html"},{revision:"ef28a61d70b712564a28b03426eb294b",url:"./friend-links/index.html"},{revision:"0736e6cb52712816776838bbfdcdebea",url:"./google936a74ed81c364aa.html"},{revision:"924d49b74e46a999d08e4bb91d995f6d",url:"./images/icons/icon-128x128.png"},{revision:"3d797bac78ca7d420626214d2a7efdb4",url:"./images/icons/icon-144x144.png"},{revision:"c86f2cbd27545209ce0163eeded713e2",url:"./images/icons/icon-152x152.png"},{revision:"ce84d8be8403b9327f8c3e7328567d56",url:"./images/icons/icon-192x192.png"},{revision:"8b317b1c1e0567fe338416a958899d1b",url:"./images/icons/icon-384x384.png"},{revision:"4eceb48b4f6032ddd75d850155fffe5e",url:"./images/icons/icon-512x512.png"},{revision:"5af2cb7bb5b4e9270d159842751ff8c7",url:"./images/icons/icon-72x72.png"},{revision:"3b92b3616eb36f7246249452af0f4c60",url:"./images/icons/icon-96x96.png"},{revision:"f359aa20165c0c10b3f3ce6f2893492d",url:"./images/icons/maskable_icon.png"},{revision:"aa376fd78085a157462deb682dce1080",url:"./img/cover.jpg"},{revision:"f2ffe8aa443fa47b43e63710ef6da494",url:"./img/favicon.png"},{revision:"68b4484cfab6a30b1182cfe3e2e90a83",url:"./img/logo.png"},{revision:"acc8973bd766fc6c00b0efb159c0760d",url:"./img/welcome-cover.jpg"},{revision:"d0fc37ef07df6370bf3efeb9d71b7494",url:"./index.html"},{revision:"8b5ad3479bf4808d7486980eefcb363e",url:"./js/diaspora.js"},{revision:"25721ced154b3a99e818431446d7506d",url:"./js/jquery.min.js"},{revision:"e9173981f379cc68e0dbda160cf70f2e",url:"./js/plugin.js"},{revision:"f6356fe249b7f46366f4202688a5488b",url:"./js/typed.js"},{revision:"94d61d8d9c7a24c76add183f9a38bf99",url:"./library/index.html"},{revision:"7efe996ba564b8e61dafba751273a204",url:"./manifest.json"},{revision:"d200973fe91ca3a2eb3fba8c8fc7568d",url:"./page/2/index.html"},{revision:"1ce09d402b4c3aee84ed6299f793cd21",url:"./photoswipe/default-skin/default-skin.css"},{revision:"e3f799c6dec9af194c86decdf7392405",url:"./photoswipe/default-skin/default-skin.png"},{revision:"eb893ff571c29702e295991015bad464",url:"./photoswipe/photoswipe-ui-default.js"},{revision:"c061a13816b98ce8c8a7ffb2e62dc403",url:"./photoswipe/photoswipe-ui-default.min.js"},{revision:"a78e12d3a036307b9ef08fc063278e02",url:"./photoswipe/photoswipe.css"},{revision:"8e3c7896c2b85a31f7ec90975e66f2b5",url:"./photoswipe/photoswipe.js"},{revision:"90d5a5ff4789f25f79840f95fc089c0e",url:"./photoswipe/photoswipe.min.js"},{revision:"088355f4edad351daf9e07202bcdd148",url:"./tags/Apache/index.html"},{revision:"2da3d5b0ce84a1e2359c4f0a1306b2c4",url:"./tags/Archlinux/index.html"},{revision:"ea246fbe102b0ff9c377fd8af0a265d3",url:"./tags/Ceph/index.html"},{revision:"9707a7460dde158400cd570769d6e4fc",url:"./tags/Docker/index.html"},{revision:"1e8f405da94710a15234e5961767e052",url:"./tags/Git/index.html"},{revision:"9f89e33a0f95999be5c2964fe2b41d9f",url:"./tags/Hexo/index.html"},{revision:"972d59b4b8fe6812927184897ca0d459",url:"./tags/HTTP/index.html"},{revision:"d6a7ad8aaf4f78e89a476838480ef540",url:"./tags/index.html"},{revision:"307b8dae9788d485e4ab38005bb33d9a",url:"./tags/Limits/index.html"},{revision:"c4474b3f5b2231ce84af602ac8e890b9",url:"./tags/Linux/index.html"},{revision:"d8e4c444967607a921ee8940375f8efa",url:"./tags/Mariadb/index.html"},{revision:"f55ba0433f0f512be1f8b14fd74bf2ac",url:"./tags/MySQL/index.html"},{revision:"8cf0dda9b43a14a5ba01b6884b116c18",url:"./tags/Nginx/index.html"},{revision:"f0cc9b57ffa232492afe5ad5f42437f0",url:"./tags/Node-js/index.html"},{revision:"e76b2b440488da76fd6f92c964737419",url:"./tags/PHP/index.html"},{revision:"e9b98804160380db930773a99d11205f",url:"./tags/PWA/index.html"},{revision:"589920199bb3e1a1a6dda74cfe6876f4",url:"./tags/Python/index.html"},{revision:"e66ddd2a3999f8da7391b059aebf7fb6",url:"./tags/Shell/index.html"},{revision:"8e6b27efb434e4b028ebf1163191cfb0",url:"./tags/startups/index.html"},{revision:"eb324b0d19c42e622a6ccd1863c0ac51",url:"./tags/UNIX/index.html"},{revision:"25ef934a0de611d97606910a6417771c",url:"./tags/Vim/index.html"},{revision:"eb05751560c5e63096a061be7533857a",url:"./tags/Windows/index.html"},{revision:"317fb6c9e9ef902721590b7d9f49c456",url:"./tags/数据通信/index.html"},{revision:"5e985dfd3642d4440673b8b4664e5ae7",url:"./tags/网络协议/index.html"},{revision:"3aa2b8df651d8eca5c502f6bba214509",url:"./Timeline/index.html"},{revision:"624e5e2cc46b7b95f71dda607303c962",url:"./weibo/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,new workbox.strategies.CacheFirst({cacheName:"external-images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();