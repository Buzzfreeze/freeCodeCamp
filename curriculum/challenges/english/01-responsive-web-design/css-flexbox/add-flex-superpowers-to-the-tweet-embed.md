---
id: 587d78ab367417b2b2512af1
title: Add Flex Superpowers to the Tweet Embed
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c9W7MhM'
forumTopicId: 301100
dashedName: add-flex-superpowers-to-the-tweet-embed
---

# --description--

ทางด้านขวาคือ tweet embed ที่จะถูกใช้เป็นตัวอย่างการใช้งาน
บาง element สามารถดูดีขึ้นได้ด้วย layout ที่แตกต่างกัน
challenge ที่แล้วคุณได้แสดงตัวอย่างของการใช้ `display: flex`.
ตอนนี้คุณจะได้ใช้ component หลาย ๆ ตัวใน tweet embed เพื่อเริ่มการจัดตำแหน่งให้พวกมัน

# --instructions--

จงเพิ่ม CSS property `display: flex` ให้กับ item ทุกตัวดังต่อไปนี้ - จงไว้ว่า selector ได้ถูกกำหนดไว้แล้วใน CSS:

`header`, the header's `.profile-name`, the header's `.follow-btn`, the header's `h3` and `h4`, the `footer`, and the footer's `.stats`.

# --hints--

`.follow-btn` ของคุณควรจะถูกแสดงผลในหน้าเว็บไซต์ จงมั่นใจว่าคุณได้ปิด extension ต่าง ๆ เช่น ตัวปิดกั้นโฆษณา ไปหมดแล้ว

```js
assert($('.follow-btn').length > 0 && $('.follow-btn').css('display') !== 'none');
```

tag `header` ควรมี `display` property เป็น `flex`.

```js
assert($('header').css('display') == 'flex');
```

tag `footer` ควรมี `display` property เป็น `flex`.

```js
assert($('footer').css('display') == 'flex');
```

tag `h3` ควรมี `display` property เป็น `flex`.

```js
assert($('h3').css('display') == 'flex');
```

tag `h4` ควรมี `display` property เป็น `flex`.

```js
assert($('h4').css('display') == 'flex');
```

Class `.profile-name` ควรมี `display` property เป็น `flex`.

```js
assert($('.profile-name').css('display') == 'flex');
```

Class `.follow-btn` ควรมี `display` property เป็น `flex`.

```js
assert($('.follow-btn').css('display') == 'flex');
```

Class `.stats` ควรมี `display` property เป็น `flex`.

```js
assert($('.stats').css('display') == 'flex');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    font-family: Arial, sans-serif;
  }
  header {
  }
  header .profile-thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  header .profile-name {
    margin-left: 10px;
  }
  header .follow-btn {
    margin: 0 0 0 auto;
  }
  header .follow-btn button {
    border: 0;
    border-radius: 3px;
    padding: 5px;
  }
  header h3,
  header h4 {
    margin: 0;
  }
  #inner p {
    margin-bottom: 10px;
    font-size: 20px;
  }
  #inner hr {
    margin: 20px 0;
    border-style: solid;
    opacity: 0.1;
  }
  footer {
  }
  footer .stats {
    font-size: 15px;
  }
  footer .stats strong {
    font-size: 18px;
  }
  footer .stats .likes {
    margin-left: 10px;
  }
  footer .cta {
    margin-left: auto;
  }
  footer .cta button {
    border: 0;
    background: transparent;
  }
</style>
<header>
  <img
    src="https://freecodecamp.s3.amazonaws.com/quincy-twitter-photo.jpg"
    alt="Quincy Larson's profile picture"
    class="profile-thumbnail"
  />
  <div class="profile-name">
    <h3>Quincy Larson</h3>
    <h4>@ossia</h4>
  </div>
  <div class="follow-btn">
    <button>Follow</button>
  </div>
</header>
<div id="inner">
  <p>
    I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart,
    you still have to work hard.
  </p>
  <span class="date">1:32 PM - 12 Jan 2018</span>
  <hr />
</div>
<footer>
  <div class="stats">
    <div class="Retweets"><strong>107</strong> Retweets</div>
    <div class="likes"><strong>431</strong> Likes</div>
  </div>
  <div class="cta">
    <button class="share-btn">Share</button>
    <button class="retweet-btn">Retweet</button>
    <button class="like-btn">Like</button>
  </div>
</footer>
```

# --solutions--

```html
<style>
  body {
    font-family: Arial, sans-serif;
  }
  header {
    display: flex;
  }
  header .profile-thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  header .profile-name {
    display: flex;
    margin-left: 10px;
  }
  header .follow-btn {
    display: flex;
    margin: 0 0 0 auto;
  }
  header .follow-btn button {
    border: 0;
    border-radius: 3px;
    padding: 5px;
  }
  header h3,
  header h4 {
    display: flex;
    margin: 0;
  }
  #inner p {
    margin-bottom: 10px;
    font-size: 20px;
  }
  #inner hr {
    margin: 20px 0;
    border-style: solid;
    opacity: 0.1;
  }
  footer {
    display: flex;
  }
  footer .stats {
    display: flex;
    font-size: 15px;
  }
  footer .stats strong {
    font-size: 18px;
  }
  footer .stats .likes {
    margin-left: 10px;
  }
  footer .cta {
    margin-left: auto;
  }
  footer .cta button {
    border: 0;
    background: transparent;
  }
</style>
<header>
  <img
    src="https://freecodecamp.s3.amazonaws.com/quincy-twitter-photo.jpg"
    alt="Quincy Larson's profile picture"
    class="profile-thumbnail"
  />
  <div class="profile-name">
    <h3>Quincy Larson</h3>
    <h4>@ossia</h4>
  </div>
  <div class="follow-btn">
    <button>Follow</button>
  </div>
</header>
<div id="inner">
  <p>
    I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart,
    you still have to work hard.
  </p>
  <span class="date">1:32 PM - 12 Jan 2018</span>
  <hr />
</div>
<footer>
  <div class="stats">
    <div class="Retweets"><strong>107</strong> Retweets</div>
    <div class="likes"><strong>431</strong> Likes</div>
  </div>
  <div class="cta">
    <button class="share-btn">Share</button>
    <button class="retweet-btn">Retweet</button>
    <button class="like-btn">Like</button>
  </div>
</footer>
```
