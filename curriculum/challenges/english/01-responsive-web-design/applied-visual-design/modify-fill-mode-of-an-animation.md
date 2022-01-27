---
id: 58a7a6ebf9a6318348e2d5aa
title: Modify Fill Mode of an Animation
challengeType: 0
videoUrl: "https://scrimba.com/c/cVJDmcE"
forumTopicId: 301064
dashedName: modify-fill-mode-of-an-animation
---

# --description--

เยี่ยมไปเลย!
แต่ก็ยังดูไม่ค่อยถูกต้องซักเท่าไหร่นะ
จะเห็นว่า animation จะถูกรีเซ็ตหลังจากที่เวลาผ่านไป `500ms` แล้วปุ่มนั้นก็จะกลับไปเป็นสีเดิม
แต่เราอยากให้สีของปุ่มยังคงเป็นสีนี้ถ้าเรายังเอาเมาส์ชี้ไว้อยู่

เราจะแก้ปัญหานี้ได้โดยการตั้งค่า property `animation-fill-mode` ให้มีค่าเป็น `forwards`
โดย `animation-fill-mode` จะระบุสไตล์ที่จะใช้กับ element เมื่อ animation นั้นจบแล้ว
โดยวิธีการกำหนดค่าจะเป็นแบบนี้:

```css
animation-fill-mode: forwards;
```

# --instructions--

ให้กำหนด property `animation-fill-mode` ของ `button:hover` ให้มีค่าเป็น `forwards` เพื่อที่ปุ่มจะได้เปลี่ยนสี และคงสีนั้นไว้ถ้าเรายังเอาเมาส์ชี้ไว้อยู่

# --hints--

`button:hover` ต้องมีค่าของ property `animation-fill-mode` เป็น `forwards`

```js
assert(
  code.match(
    /button\s*?:\s*?hover\s*?{[\s\S]*animation-fill-mode\s*?:\s*?forwards\s*?;[\s\S]*}/gi
  ) &&
    code.match(
      /button\s*?:\s*?hover\s*?{[\s\S]*animation-name\s*?:\s*?background-color\s*?;[\s\S]*}/gi
    ) &&
    code.match(
      /button\s*?:\s*?hover\s*?{[\s\S]*animation-duration\s*?:\s*?500ms\s*?;[\s\S]*}/gi
    )
);
```

# --seed--

## --seed-contents--

```html
<style>
  button {
    border-radius: 5px;
    color: white;
    background-color: #0f5897;
    padding: 5px 10px 8px 10px;
  }
  button:hover {
    animation-name: background-color;
    animation-duration: 500ms;
    /* แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น */

    /* แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น */
  }
  @keyframes background-color {
    100% {
      background-color: #4791d0;
    }
  }
</style>
<button>Register</button>
```

# --solutions--

```html
<style>
  button {
    border-radius: 5px;
    color: white;
    background-color: #0f5897;
    padding: 5px 10px 8px 10px;
  }
  button:hover {
    animation-name: background-color;
    animation-duration: 500ms;
    animation-fill-mode: forwards;
  }
  @keyframes background-color {
    100% {
      background-color: #4791d0;
    }
  }
</style>
<button>Register</button>
```
