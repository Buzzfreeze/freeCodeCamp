---
id: 5a23c84252665b21eecc7eb0
title: I before E except after C
challengeType: 5
forumTopicId: 302288
dashedName: i-before-e-except-after-c
---

# --description--

คำพูดที่ว่า ["I before E, except after C"](<https://en.wikipedia.org/wiki/I before E except after C>) (I มาก่อน E ยกเว้นว่าจะตามหลัง C) เป็นตัวช่วยจำซึ่งช่วยในการสะกดคำภาษาอังกฤษ

ใช้คำที่ให้มา เพื่อตรวจสอบว่าเป็นไปตามคำพูดนี้หรือไม่:

<ol>
  <li>
    <i>"I before E when not preceded by C"</i>
  </li>
  <li>
    <i>"E before I when preceded by C"</i>
  </li>
</ol>

ถ้าเป็นจริง แปลว่าคำพูดที่ว่า "I before E, except after C" เป็นจริง

# --instructions--

ให้เขียนฟังก์ชันที่รับสตริง และตรวจสอบว่าคำนั้นเป็นไปตามกฎนี้หรือไม่ 

ฟังก์ชันนี้ต้องคืนค่าเป็น true ถ้าคำนั้นเป็นไปตามกฎ ถ้าไม่เป็นไปตามกฏ ให้คืนค่าเป็น false

# --hints--

`IBeforeExceptC` ต้องเป็นฟังก์ชัน

```js
assert(typeof IBeforeExceptC == 'function');
```

`IBeforeExceptC("receive")` ต้องคืนค่าเป็น boolean

```js
assert(typeof IBeforeExceptC('receive') == 'boolean');
```

`IBeforeExceptC("receive")` ต้องคืนค่าเป็น `true`

```js
assert.equal(IBeforeExceptC('receive'), true);
```

`IBeforeExceptC("science")` ต้องคืนค่าเป็น `false`

```js
assert.equal(IBeforeExceptC('science'), false);
```

`IBeforeExceptC("imperceivable")` ต้องคืนค่าเป็น `true`

```js
assert.equal(IBeforeExceptC('imperceivable'), true);
```

`IBeforeExceptC("inconceivable")` ต้องคืนค่าเป็น `true`

```js
assert.equal(IBeforeExceptC('inconceivable'), true);
```

`IBeforeExceptC("insufficient")` ต้องคืนค่าเป็น `false`

```js
assert.equal(IBeforeExceptC('insufficient'), false);
```

`IBeforeExceptC("omniscient")` ต้องคืนค่าเป็น `false`

```js
assert.equal(IBeforeExceptC('omniscient'), false);
```

# --seed--

## --seed-contents--

```js
function IBeforeExceptC(word) {

}
```

# --solutions--

```js
function IBeforeExceptC(word)
{
    if(word.indexOf("c")==-1 && word.indexOf("ie")!=-1)
        return true;
    else if(word.indexOf("cei")!=-1)
        return true;
    return false;
}
```
