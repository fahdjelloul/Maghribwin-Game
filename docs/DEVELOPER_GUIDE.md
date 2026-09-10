# 👨‍💻 دليل المطور | Developer Guide

## 🎯 مقدمة | Introduction

هذا الدليل يساعدك على فهم بنية المشروع والبدء في التطوير.

This guide helps you understand the project structure and get started with development.

---

## 📁 بنية المشروع | Project Structure

```
src/
├── games/              # ملفات الألعاب
│   ├── memory/         # لعبة الذاكرة
│   ├── cards/          # لعبة الورق
│   ├── puzzle/         # لعبة الألغاز
│   └── quiz/           # لعبة المسابقات
├── components/         # المكونات المشتركة
├── styles/             # أنماط CSS
├── utils/              # الدوال المساعدة
├── server.js           # الخادم الرئيسي
└── index.js            # نقطة الدخول
```

---

## 🚀 البدء السريع | Quick Start

### التثبيت

```bash
git clone https://github.com/fahdjelloul/Maghribwin-Game.git
cd Maghribwin-Game
npm install
```

### التطوير

```bash
npm run dev
```

### الاختبار

```bash
npm test
```

---

## 📚 معمارية المشروع | Architecture

### Server-Client Model

- **Server**: Node.js + Express
- **Client**: HTML5 + CSS3 + JavaScript
- **Database**: MongoDB (اختياري)

---

## 🎮 كيفية إضافة لعبة جديدة | Adding a New Game

### 1. أنشئ مجلد جديد

```bash
mkdir src/games/myGame
```

### 2. أنشئ الملفات الأساسية

```
src/games/myGame/
├── index.js          # منطق اللعبة
├── style.css         # الأنماط
└── template.html     # القالب
```

### 3. صيغة أساسية للعبة

```javascript
class MyGame {
  constructor() {
    this.score = 0;
    this.level = 1;
  }

  start() {
    console.log('🎮 اللعبة بدأت');
  }

  getScore() {
    return this.score;
  }
}

module.exports = MyGame;
```

---

## 🧪 الاختبارات | Testing

### مثال على اختبار

```javascript
const MyGame = require('../src/games/myGame');

describe('MyGame', () => {
  let game;

  beforeEach(() => {
    game = new MyGame();
  });

  test('يجب أن تبدأ اللعبة بدون أخطاء', () => {
    expect(() => game.start()).not.toThrow();
  });

  test('الدرجة الابتدائية يجب أن تكون 0', () => {
    expect(game.getScore()).toBe(0);
  });
});
```

---

## 🔧 الأدوات المتاحة | Available Tools

### إعادة تصميم الكود

```bash
npm run lint:fix
```

### تشغيل الاختبارات مع المراقبة

```bash
npm run test:watch
```

### إنشاء تقرير التغطية

```bash
npm run test:coverage
```

---

## 💡 نصائح مهمة | Important Tips

✅ اكتب اختبارات للميزات الجديدة
✅ اتبع معايير الكود
✅ وثّق كودك
✅ اطلب مساعدة عند الحاجة

---

## 🆘 استكشاف الأخطاء | Troubleshooting

### المشكلة: npm install فشل

```bash
rm -rf node_modules
npm install
```

### المشكلة: الاختبارات لا تعمل

```bash
npm run test -- --clearCache
```

---

## 📖 المراجع | References

- [Node.js Docs](https://nodejs.org/docs/)
- [Express.js Guide](https://expressjs.com/)
- [Jest Testing](https://jestjs.io/)

---

**لديك أسئلة؟ تواصل معنا!**
