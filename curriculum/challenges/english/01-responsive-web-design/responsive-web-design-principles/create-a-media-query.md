---
id: 587d78b0367417b2b2512b08
title: Create a Media Query
challengeType: 0
videoUrl: "https://scrimba.com/p/pzrPu4/cqwKrtm"
forumTopicId: 301139
dashedName: create-a-media-query
---

# --description--

Media Query เป็นเทคนิคใหม่ของ CSS3 ที่จะเปลี่ยนการแสดงผลของเนื้อหาตามขนาดของ viewport
ซึ่ง viewport คือพื้นที่ที่ผู้ใช้สามารถมองเห็นได้บนเว็บ และ viewport ก็จะมีขนาดต่างกัน ตามขนาดหน้าจอของอุปกรณ์ เช่น โน๊ตบุ๊ค หรือโทรศัพท์

ในการใช้ Media Query เราจะต้องระบุ media type และถ้า media type นั้นตรงกับอุปกรณ์ที่เปิดหน้าเว็บ หน้าเว็บก็จะใช้ style ที่เรากำหนด
คุณจะใช้ selector หรือ style กี่อันก็ได้ใน media query ของคุณ

นี่คือตัวอย่างของ media query ที่จะแสดงผลของเนื้อหาออมาเมื่อความกว้างของอุปกรณ์ น้อยกว่าหรือเท่ากับ `100px`:

```css
@media (max-width: 100px) {
  /* CSS Rules */
}
```

และ media query ข้างล่างจะแสดงผลของเนื้อหาออกมาเมื่อความสูงของอุปกรณ์ มากกว่าหรือเท่ากับ `350px`:

```css
@media (min-height: 350px) {
  /* CSS Rules */
}
```

และ CSS ข้างใน media query จะถูกใช้เมื่อ media type ตรงกับอุปกรณ์เท่านั้น

# --instructions--

ให้เพิ่ม media query 1 อันเพื่อที่แท็ก `p` จะได้มี `font-size` เป็น `10px` เมื่อความสูงของอุปกรณ์น้อยกว่าหรือเท่ากับ `800px`

# --hints--

ต้องประกาศ `@media` query สำหรับอุปกรณ์ที่มี `height` น้อยกว่าหรือเท่ากับ `800px`

```js
const media = new __helpers.CSSHelp(document).getCSSRules("media");
assert(media.some((x) => x.media?.mediaText?.includes("(max-height: 800px)")));
```

แท็ก `p` ต้องมี `font-size` เป็น `10px` เมื่ออุปกรณ์มี `height` น้อยกว่าหรือเท่ากับ `800px`

```js
const rules = new __helpers.CSSHelp(document).getRuleListsWithinMedia(
  "(max-height: 800px)"
);
assert(rules?.find((x) => x.selectorText === "p")?.style?.fontSize === "10px");
```

แท็ก `p` ต้องมี `font-size` เริ่มต้นเป็น `20px` เมื่ออุปกรณ์มี `height` มากกว่า `800px`

```js
const ifPFirst = new __helpers.CSSHelp(document)
  .getCSSRules()
  ?.find((x) => x?.selectorText === "p" || x?.media);
assert(ifPFirst?.style?.fontSize === "20px");
```

# --seed--

## --seed-contents--

```html
<style>
  p {
    font-size: 20px;
  }

  /* แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น */

  /* แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น */
</style>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus
  massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet
  lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac
  habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem.
  Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida
  consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.
</p>
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

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus
  massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet
  lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac
  habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem.
  Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida
  consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.
</p>
```
