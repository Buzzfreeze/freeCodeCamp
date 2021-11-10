---
id: 587d78b0367417b2b2512b08
title: Create a Media Query
challengeType: 0
videoUrl: 'https://scrimba.com/p/pzrPu4/cqwKrtm'
forumTopicId: 301139
dashedName: create-a-media-query
---

# --description--

Media Queries เป็นเทคนิคใหม่ของ CSS3 ที่จะเปลี่ยนการแสดงผลของเนื้อหาตามขนาดของ viewport 
viewport คือพื้นที่ที่ผู้ใช้สามารถมองเห็นได้ด้วยตาบนเว็บเพจ และแตกต่างกันตามอุปกรณ์ที่ใช้เข้าถึงเว็บไซต์

Media Queries ประกอบด้วยประเภทของมีเดีย และถ้าประเภทของมีเดียนั้นตรงกับประเภทของอุปกรณ์ เอกสารนั้นก็จะแสดงออกมาตามสไตล์ที่เรากำหนด
คุณสามารถมี selector หลายอันและกำหนดสไตล์ของ media query ตามที่คุณต้องการ

นี่คือตัวอย่างของ media query ที่ส่งเนื้อหาออมาเมื่อความกว้างของอุปกรณ์น้อยกว่าและเท่ากับ `100px`:

```css
@media (max-width: 100px) { /* CSS Rules */ }
```

และ media query ข้างล่างจะส่งเนื้อหาออกมาเมื่อความสูงของอุปกรณ์มากกว่าหรือเท่ากับ `350px`:

```css
@media (min-height: 350px) { /* CSS Rules */ }
```

จงจำไว้ว่า CSS ข้างใน media query ถูกใช้เมื่อประเภทของ media ตรงกับอุปกรณ์เท่านั้น

# --instructions--

จงเพิ่ม media query 1 อันเพื่อที่ `p` tag จะได้มีขนาด `font-size` เท่ากับ `10px` เมื่อความสูงของอุปกรณ์น้อยกว่าหรือเท่ากับ `800px`

# --hints--

คุณควรประกาศ `@media` query สำหรับอุปกรณ์ที่มี `height` น้อยกว่าหรือเท่ากับ`800px`.

```js
const media = new __helpers.CSSHelp(document).getCSSRules('media');
assert(media.some(x => x.media?.mediaText?.includes('(max-height: 800px)')));
```

Your `p` element should have a `font-size` of `10px` when the device `height` is less than or equal to `800px`.

```js
const rules = new __helpers.CSSHelp(document).getRuleListsWithinMedia('(max-height: 800px)');
assert(rules?.find(x => x.selectorText === 'p')?.style?.fontSize === "10px");
```

Your `p` element should have an initial `font-size` of `20px` when the device `height` is more than `800px`.

```js
const ifPFirst = new __helpers.CSSHelp(document).getCSSRules()?.find(x => x?.selectorText === 'p' || x?.media);
assert(ifPFirst?.style?.fontSize === '20px');
```

# --seed--

## --seed-contents--

```html
<style>
  p {
    font-size: 20px;
  }

  /* Only change code below this line */

  /* Only change code above this line */
</style>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```

# --solutions--

```html
<style>
  p {
    font-size: 20px;
  }

  @media (max-height: 800px) {
    p {
      font-size: 10px;
    }
  }
</style>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```
