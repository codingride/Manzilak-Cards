'use strict';

// Twitter JS include
window.twttr = (function (d, s, id) {
  var js
  var fjs = d.getElementsByTagName(s)[0]
  var t = window.twttr || {}
  if (d.getElementById(id)) return t
  js = d.createElement(s)
  js.id = id
  js.src = 'https://platform.twitter.com/widgets.js'
  fjs.parentNode.insertBefore(js, fjs)

  t._e = []
  t.ready = function (f) {
    t._e.push(f)
  }
  return t
}(document, 'script', 'twitter-wjs'));

// Facebook JS include
(function (d, s, id) {
  var js
  var fjs = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) return
  js = d.createElement(s); js.id = id
  js.src = 'https://connect.facebook.net/ar_AR/sdk.js#xfbml=1&version=v2.12'
  fjs.parentNode.insertBefore(js, fjs)
}(document, 'script', 'facebook-jssdk'));
