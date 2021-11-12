---
id: 59e09e6d412c5939baa02d16
title: Execute a Markov algorithm
challengeType: 5
forumTopicId: 302260
dashedName: execute-a-markov-algorithm
---

# --description--

สร้างการแปลสำหรับ [Markov Algorithm](<https://en.wikipedia.org/wiki/Markov algorithm> "wp: Markov algorithm").

Rules have the syntax:

<pre>[ruleset] ::= (([comment] | [rule]) [newline]+)*
[comment] ::= # {[any character]}
[rule] ::= [pattern] [whitespace] -> [whitespace] [.] [replacement]
[whitespace] ::= ([tab] | [space]) [[whitespace]]
</pre>

มีหนึ่งกฎต่อบรรทัด

หากมี `.` (จุด) อยู่ก่อน \"การแทนที่] นี่เป็นกฎการยุติซึ่งในกรณีนี้ ล่ามจะต้องหยุดการดำเนินการ

ชุดกฎประกอบด้วยลำดับของกฎ พร้อมความคิดเห็นเพิ่มเติม

Rulesets

ใช้การทดสอบต่อไปนี้กับรายการ:

**Ruleset 1:**

<pre># This rules file is extracted from Wikipedia:
# <code>http://en.wikipedia.org/wiki/Markov_Algorithm</code>
A -> apple
B -> bag
S -> shop
T -> the
the shop -> my brother
a never used -> .terminating rule
</pre>

ตัวอย่างประโยค `I bought a B of As from T S.` ควรได้ output `I bought a bag of apples from my brother.`

**Ruleset 2:**

ทดสอบ terminating rule

<pre># Slightly modified from the rules on Wikipedia
A -> apple
B -> bag
S -> .shop
T -> the
the shop -> my brother
a never used -> .terminating rule
</pre>

ตัวอย่างประโยค `I bought a B of As from T S.` ควรได้`I bought a bag of apples from T shop.`

**Ruleset 3:**

การทดสอบนี้สำหรับลำดับการแทนที่ที่ถูกต้อง และอาจดักจับรูทีนการแทนที่ตาม regexp อย่างง่าย ถ้าอักขระ regexp พิเศษไม่มี

<pre># BNF Syntax testing rules
A -> apple
WWWW -> with
Bgage -> ->.*
B -> bag
->.* -> money
W -> WW
S -> .shop
T -> the
the shop -> my brother
a never used -> .terminating rule
</pre>

ตัวอย่างประโยค `I bought a B of As W my Bgage from T S.` ควรได้ `I bought a bag of apples with my money from T shop.`

**Ruleset 4:**

การทดสอบนี้จะทดสอบลำดับการสแกนกฎที่ถูกต้อง และอาจดักจับขั้นตอนการเปลี่ยนที่สแกนในลำดับที่ไม่ถูกต้อง มันใช้เอ็นจิ้นการคูณเอกนารีทั่วไป (โปรดทราบว่านิพจน์อินพุตต้องอยู่ภายในขีดล่างในการใช้งานนี้)

<pre>### Unary Multiplication Engine, for testing Markov Algorithm implementations
### By Donal Fellows.
# Unary addition engine
_+1 -> _1+
1+1 -> 11+
# Pass for converting from the splitting of multiplication into ordinary
# addition
1! -> !1
,! -> !+
_! -> _
# Unary multiplication by duplicating left side, right side times
1*1 -> x,@y
1x -> xX
X, -> 1,1
X1 -> 1X
_x -> _X
,x -> ,X
y1 -> 1y
y_ -> _
# Next phase of applying
1@1 -> x,@y
1@_ -> @_
,@_ -> !_
++ -> +
# Termination cleanup for addition
_1 -> 1
1+_ -> 1
_+_ ->
</pre>

ตัวอย่างประโยค `_1111*11111_` ควรได้ output `11111111111111111111`

**Ruleset 5:**

A simple [Turing machine](http://en.wikipedia.org/wiki/Turing_machine "link: http&#x3A;//en.wikipedia.org/wiki/Turing_machine"), implementing a three-state [busy beaver](http://en.wikipedia.org/wiki/Busy_beaver "link: http&#x3A;//en.wikipedia.org/wiki/Busy_beaver").

เทปประกอบด้วย `0` และ `1` สถานะคือ `A`, `B`, `C` และ `H` (สำหรับ `H`alt) และตำแหน่งส่วนหัวจะถูกระบุโดยการเขียนสถานะ ตัวอักษรข้างหน้าตัวอักษรที่หัวอยู่ ต้องระบุทุกส่วนของเทปเริ่มต้นที่เครื่องใช้งานอยู่ในอินพุต

นอกจากการแสดงให้เห็นว่าalgorithmของ Markov นั้นสมบูรณ์ด้วยทัวริงแล้ว ยังทำให้ฉันพบจุดบกพร่องในการใช้งาน C++ ซึ่งไม่ถูกจับโดยชุดกฎสี่ชุดแรก

<pre># Turing machine: three-state busy beaver
#
# state A, symbol 0 => write 1, move right, new state B
A0 -> 1B
# state A, symbol 1 => write 1, move left, new state C
0A1 -> C01
1A1 -> C11
# state B, symbol 0 => write 1, move left, new state A
0B0 -> A01
1B0 -> A11
# state B, symbol 1 => write 1, move right, new state B
B1 -> 1B
# state C, symbol 0 => write 1, move left, new state B
0C0 -> B01
1C0 -> B11
# state C, symbol 1 => write 1, move left, halt
0C1 -> H01
1C1 -> H11
</pre>

ruleset ควรเปลี่ยน `000000A000000` ไปเป็น `00011H1111000`

# --hints--

`markov` ควรเป็น function.

```js
assert(typeof markov === 'function');
```

`markov(["A -> apple","B -> bag","S -> shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As from T S.")` ควร return "I bought a bag of apples from my brother.".

```js
assert.deepEqual(markov(rules[0], tests[0]), outputs[0]);
```

`markov(["A -> apple","B -> bag","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As from T S.")` ควร return "I bought a bag of apples from T shop.".

```js
assert.deepEqual(markov(rules[1], tests[1]), outputs[1]);
```

`markov(["A -> apple","WWWW -> with","Bgage -> ->.*","B -> bag","->.* -> money","W -> WW","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As W my Bgage from T S.")` ควร return "I bought a bag of apples with my money from T shop.".

```js
assert.deepEqual(markov(rules[2], tests[2]), outputs[2]);
```

`markov(["_+1 -> _1+","1+1 -> 11+","1! -> !1",",! -> !+","_! -> _","1*1 -> x,@y","1x -> xX","X, -> 1,1","X1 -> 1X","_x -> _X",",x -> ,X","y1 -> 1y","y_ -> _","1@1 -> x,@y","1@_ -> @_",",@_ -> !_","++ -> +","_1 -> 1","1+_ -> 1","_+_ -> "],"_1111*11111_")` ควร return "11111111111111111111".

```js
assert.deepEqual(markov(rules[3], tests[3]), outputs[3]);
```

`markov(["A0 -> 1B","0A1 -> C01","1A1 -> C11","0B0 -> A01","1B0 -> A11","B1 -> 1B","0C0 -> B01","1C0 -> B11","0C1 -> H01","1C1 -> H11"],"")` ควร return "00011H1111000".

```js
assert.deepEqual(markov(rules[4], tests[4]), outputs[4]);
```

# --seed--

## --after-user-code--

```js

let rules=[["A -> apple","B -> bag","S -> shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],
            ["A -> apple","B -> bag","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],
            ["A -> apple","WWWW -> with","Bgage -> ->.*","B -> bag","->.* -> money","W -> WW","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],
            ["_+1 -> _1+","1+1 -> 11+","1! -> !1",",! -> !+","_! -> _","1*1 -> x,@y","1x -> xX","X, -> 1,1","X1 -> 1X","_x -> _X",",x -> ,X","y1 -> 1y","y_ -> _","1@1 -> x,@y","1@_ -> @_",",@_ -> !_","++ -> +","_1 -> 1","1+_ -> 1","_+_ -> "],
            ["A0 -> 1B","0A1 -> C01","1A1 -> C11","0B0 -> A01","1B0 -> A11","B1 -> 1B","0C0 -> B01","1C0 -> B11","0C1 -> H01","1C1 -> H11"]];
let tests=["I bought a B of As from T S.",
            "I bought a B of As from T S.",
            "I bought a B of As W my Bgage from T S.",
            "_1111*11111_",
            "000000A000000"];
let outputs=["I bought a bag of apples from my brother.",
            "I bought a bag of apples from T shop.",
            "I bought a bag of apples with my money from T shop.",
            "11111111111111111111",
            "00011H1111000"]

```


## --seed-contents--

```js
function markov(rules,test) {

}
```

# --solutions--

```js
function markov(rules,test) {
    let pattern = new RegExp("^([^#]*?)\\s+->\\s+(\\.?)(.*)");
    let origTest = test;

    let captures = [];

    rules.forEach(function(rule){
        let m = pattern.exec(rule);
        for (let j = 0; j < m.length; j++)
            m[j] = m[j + 1];
        captures.push(m);
    });

    test = origTest;
    let copy = test;
    for (let j = 0; j < captures.length; j++) {
        let c = captures[j];
        test = test.replace(c[0], c[2]);
        if (c[1]==".")
            break;
        if (test!=copy) {
            j = -1;
            copy = test;
        }
    }
    return test;
}
```
