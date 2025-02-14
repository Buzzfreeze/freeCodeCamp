---
id: 587d78ab367417b2b2512af3
title: Apply the flex-direction Property to Create Rows in the Tweet Embed
challengeType: 0
videoUrl: "https://scrimba.com/p/pVaDAv/cJb8yuq"
forumTopicId: 301104
dashedName: apply-the-flex-direction-property-to-create-rows-in-the-tweet-embed
---

# --description--

`header` และ `footer` ในตัวอย่างของ tweet นั้นมี child element ที่สามารถถูกจัดให้เป็น row ได้โดยใช้ property `flex-direction`
ซึ่งจะทำให้ child element เรียงกันในแนวนอน

# --instructions--

ให้เพิ่ม CSS property `flex-direction` ให้กับทั้ง `header` และ `footer`
และกำหนดให้มีค่าเป็น `row`

# --hints--

`.follow-btn` ต้องแสดงผลในเว็บไซต์ของคุณด้วย ถ้าไม่แสดงผล ให้ลองปิด extension ของเบราว์เซอร์ดูก่อน (เช่น ads block)

```js
assert(
  $(".follow-btn").length > 0 && $(".follow-btn").css("display") !== "none"
);
```

`header` ต้องมีค่าของ property `flex-direction` เป็น `row`

```js
assert(code.match(/header\s*?{[^}]*?flex-direction:\s*?row;/g));
```

`footer` ต้องมีค่าของ property `flex-direction` เป็น `row`

```js
assert(code.match(/footer\s*?{[^}]*?flex-direction:\s*?row;/g));
```

# --seed--

## --seed-contents--

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

# --solutions--

```html
<style>
  body {
    font-family: Arial, sans-serif;
  }
  header {
    display: flex;
    flex-direction: row;
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
    flex-direction: row;
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
