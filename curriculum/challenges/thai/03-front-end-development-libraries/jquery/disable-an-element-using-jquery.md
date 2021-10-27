---
id: bad87fee1348bd9aed808826
title: Disable an Element Using jQuery
challengeType: 6
forumTopicId: 17563
dashedName: disable-an-element-using-jquery
---

# --description--

คุณสามารถเปลี่ยนคุณสมบัติของ HTML ส่วนที่ไม่ได้เกี่ยวข้องกับ CSS ด้วย jQuery อย่างเช่น คุณสามารถยกเลิกการใช้งานของปุ่มได้

เมื่อคุณยกเลิกการใช้งานปุ่มใดๆ ปุ่มนั้นจะเปลี่ยนเป็นสีเทาและคลิกไม่ได้อีก

jQuery มีฟังก์ชันที่เรียกว่า `.prop()` ที่จะทำให้คุณปรับแต่งคุณสมบัติของ element ต่างๆ ได้

มาดูวิธีการยกเลิกการใช้งานของปุ่มกัน:

```js
$("button").prop("disabled", true);
```

ให้ลองยกเลิกการใช้งานของปุ่ม `target1`

# --hints--

ปุ่ม `target1` ของคุณไม่ควรจะใช้งานได้

```js
assert(
  $('#target1') &&
    $('#target1').prop('disabled') &&
    code.match(/["']disabled["'],( true|true)/g)
);
```

ปุ่มอื่นควรใช้งานได้ตามปกติ

```js
assert($('#target2') && !$('#target2').prop('disabled'));
```

คุณจะต้องใช้ jQuery เท่านั้นในการเพิ่ม class ดังกล่าวให้แก่ element ที่ต้องการ

```js
assert(!code.match(/disabled[^<]*>/g));
```

# --seed--

## --seed-contents--

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");

  });
</script>

<!-- Only change code above this line -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```

# --solutions--

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);

  });
</script>

<!-- Only change code above this line -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```
