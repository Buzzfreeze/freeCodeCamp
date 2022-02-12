---
id: 5ea9997bbec2e9bc47e94db4
title: Developing a Port Scanner
challengeType: 11
videoId: z_qkqZS7KZ4
bilibiliIds:
  aid: 208077317
  bvid: BV1Uh411p7HS
  cid: 409036706
dashedName: developing-a-port-scanner
---

# --question--

## --text--

อะไรคือข้อแตกต่างหลักระหว่าง method `.connect()` และ `.connect_ex()`

## --answers--

method 2 ตัวนี้ไม่ต่างกัน

---

หากมีข้อผิดพลาดหรือไม่พบโฮสต์ `.connect()` จะคืนค่าเป็น error code ในขณะที่ `.connect_ex()` จะทำให้เกิด exception

---

หากมีข้อผิดพลาดหรือไม่พบโฮสต์ `.connect()` จะทำให้เกิด exception ในขณะที่ `.connect_ex()` จะคืนค่าเป็น error code

## --video-solution--

3

