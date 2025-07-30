
# 🌱 Smart Garden Dashboard

## 📦 รายละเอียดโปรเจกต์
ระบบแดชบอร์ดแสดงข้อมูลพืช และความชื้นในดิน พร้อมการแจ้งเตือนผ่าน Telegram และการเลือกชนิดพืชเพื่อดูข้อมูลเฉพาะได้

---

## 🚀 วิธีใช้งาน (สำหรับใช้งานจริง)

### 1. ติดตั้ง Node.js (หากยังไม่มี)
ดาวน์โหลดจาก https://nodejs.org และติดตั้ง

### 2. ติดตั้ง dependencies
```bash
npm install
```

### 3. ตั้งค่า Telegram Token และ Chat ID
เปิดไฟล์ `server.js` แล้วแก้ไขตรงนี้:
```js
const TELEGRAM_TOKEN = "YOUR_TELEGRAM_BOT_TOKEN";
const TELEGRAM_CHAT_ID = "YOUR_TELEGRAM_CHAT_ID";
```

หากยังไม่มี Token/Chat ID:
- ไปที่ Telegram ค้นหา `@BotFather` เพื่อสร้าง Bot
- ใช้ Bot Token ที่ได้จากนั้นเปิดแชทกับ Bot และใช้ @userinfobot หา chat_id

---

### 4. รันเซิร์ฟเวอร์
```bash
node server.js
```

### 5. เปิดเบราว์เซอร์ ไปที่
```
http://localhost:3009/dashboard.html
```

---

## 📡 การเชื่อมต่อ Arduino

ให้ Arduino ส่งข้อมูลความชื้นด้วย POST ไปยัง:
```
http://<IP หรือ Hostname>:3009/api/moisture
```

โครงสร้างข้อมูล:
```json
{ "moisture": 42 }
```

---

## 📄 โฟลเดอร์และไฟล์สำคัญ
- `dashboard.html` – หน้าหลักของแดชบอร์ด
- `server.js` – เซิร์ฟเวอร์ Node.js ที่รับค่าจาก Arduino และแจ้งเตือน Telegram
- `users.json` – จำลองระบบผู้ใช้งาน
- `script.js` – สคริปต์ฝั่ง client สำหรับแสดงข้อมูล

---

## ✅ ฟีเจอร์เด่น
- กราฟและข้อมูลย้อนหลัง
- รายชื่อพืชและรายละเอียดแต่ละชนิด
- ระบบเลือกพืชแบบ dropdown
- การแจ้งเตือน Telegram เมื่อความชื้นต่ำ

---

จัดทำเพื่อการทดลองระบบ Smart Farm ขนาดย่อมในบ้าน/โรงเรียน
