---
id: 587d78ab367417b2b2512af1
title: Add Flex Superpowers to the Tweet Embed
challengeType: 0
videoUrl: "https://scrimba.com/p/pVaDAv/c9W7MhM"
forumTopicId: 301100
dashedName: add-flex-superpowers-to-the-tweet-embed
---

# --description--

ทางด้านขวาคือตัวอย่างของ tweet ที่เราจะนำมาใช้กัน
เราสามารถทำให้ element บางตัวในนี้ดูดีขึ้นได้ ถ้าเราเปลี่ยน layout

ในแบบทดสอบที่แล้ว คุณได้ลองใช้ property `display: flex` ไปแล้ว
ตอนนี้คุณจะได้ใช้ property นี้ใน component ตัวอื่นๆ ใน tweet เพื่อเริ่มการจัดตำแหน่งให้สวยงาม

# --instructions--

ให้เพิ่ม CSS property `display: flex` ให้กับ element ทุกตัวดังต่อไปนี้ (เราได้เขียน selector ให้แล้วใน CSS):

`header`, `.profile-name` ของ header, `.follow-btn` ของ header, `h3` และ `h4` ของ header, `footer`, และ `.stats` ของ footer

# --hints--

`.follow-btn` ต้องแสดงผลในเว็บไซต์ของคุณด้วย ถ้าไม่แสดงผล ให้ลองปิด extension ของเบราว์เซอร์ดูก่อน (เช่น ads block)

```js
assert(
  $(".follow-btn").length > 0 && $(".follow-btn").css("display") !== "none"
);
```

แท็ก `header` ต้องมีค่าของ property `display` เป็น `flex`

```js
assert($("header").css("display") == "flex");
```

แท็ก `footer` ต้องมีค่าของ property `display` เป็น `flex`

```js
assert($("footer").css("display") == "flex");
```

แท็ก `h3` ต้องมีค่าของ property `display` เป็น `flex`

```js
assert($("h3").css("display") == "flex");
```

แท็ก `h4` ต้องมีค่าของ property `display` เป็น `flex`

```js
assert($("h4").css("display") == "flex");
```

คลาส `.profile-name` ต้องมีค่าของ property `display` เป็น `flex`

```js
assert($(".profile-name").css("display") == "flex");
```

คลาส `.follow-btn` ต้องมีค่าของ property `display` เป็น `flex`

```js
assert($(".follow-btn").css("display") == "flex");
```

คลาส `.stats` คต้องมีค่าของ property `display` เป็น `flex`

```js
assert($(".stats").css("display") == "flex");
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
    I meet so many people who are in search of that one trick that will help
    them work smart. Even if you work smart, you still have to work hard.
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
    I meet so many people who are in search of that one trick that will help
    them work smart. Even if you work smart, you still have to work hard.
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
