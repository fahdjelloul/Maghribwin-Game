# 🤝 إرشادات المساهمة | Contributing Guidelines

شكراً لاهتمامك بالمساهمة في مشروع Maghribwin! | Thank you for your interest in contributing to Maghribwin!

---

## 📋 جدول المحتويات | Table of Contents

1. [قواعد السلوك](#قواعس-السلوك--code-of-conduct)
2. [كيفية البدء](#كيفية-البدء--getting-started)
3. [عملية المساهمة](#عملية-المساهمة--contribution-process)
4. [معايير الكود](#معايير-الكود--code-standards)
5. [الاختبارات](#الاختبارات--testing)
6. [الالتزامات](#الالتزامات--commits)

---

## 📖 قواعس السلوك | Code of Conduct

### نحن نتوقع منك:

✅ **الاحترام والتسامح**
- احترم جميع أعضاء المجتمع
- لا تمييز على أساس العرق أو الجنس أو الدين

✅ **الإيجابية**
- ركز على الأفكار البناءة
- ساهم بطريقة تضيف قيمة

✅ **الشفافية**
- كن صريحاً وواضحاً في تواصلك
- اعترف بأخطائك

---

## 🚀 كيفية البدء | Getting Started

### 1️⃣ Fork المستودع

اذهب إلى [المستودع الأصلي](https://github.com/fahdjelloul/Maghribwin-Game) واضغط على زر **Fork**

### 2️⃣ استنسخ نسختك

```bash
git clone https://github.com/YOUR-USERNAME/Maghribwin-Game.git
cd Maghribwin-Game
```

### 3️⃣ أضف المستودع الأصلي كـ Remote

```bash
git remote add upstream https://github.com/fahdjelloul/Maghribwin-Game.git
```

### 4️⃣ تثبيت المكتبات

```bash
npm install
```

### 5️⃣ تشغيل المشروع

```bash
npm start
```

---

## 🔄 عملية المساهمة | Contribution Process

### الخطوة 1: أنشئ فرع جديد

```bash
# قم بتحديث النسخة الرئيسية
git checkout main
git pull upstream main

# أنشئ فرع جديد
git checkout -b feature/اسم-الميزة
# أو
git checkout -b fix/اسم-الإصلاح
```

### الخطوة 2: قم بالتغييرات

- عدّل الملفات اللازمة
- اتبع معايير الكود (انظر أدناه)
- أضف اختبارات للميزات الجديدة

### الخطوة 3: اختبر تغييراتك

```bash
npm test
npm run lint
```

### الخطوة 4: Commit التغييرات

```bash
git add .
git commit -m "🎯 وصف واضح للتغييرات | Clear description of changes"
```

### الخطوة 5: ادفع إلى GitHub

```bash
git push origin feature/اسم-الميزة
```

### الخطوة 6: أنشئ Pull Request

1. اذهب إلى نسختك على GitHub
2. اضغط على **New Pull Request**
3. اختر الفرع الخاص بك
4. اكتب وصفاً تفصيلياً للتغييرات
5. اضغط **Create Pull Request**

---

## 💻 معايير الكود | Code Standards

### تنسيق الكود

```javascript
// ✅ صحيح
function greetUser(name) {
  return `مرحباً ${name}!`;
}

// ❌ خطأ
function greetUser(name){return `مرحباً ${name}!`;}
```

### معايير التسمية

- **الدوال والمتغيرات**: استخدم camelCase
  ```javascript
  const userName = "أحمد";
  function getUserData() { }
  ```

- **الثوابت**: استخدم UPPER_CASE
  ```javascript
  const MAX_PLAYERS = 10;
  const API_URL = "https://api.example.com";
  ```

- **الفئات**: استخدم PascalCase
  ```javascript
  class GameEngine { }
  class PlayerManager { }
  ```

### التعليقات

```javascript
// استخدم التعليقات للشرح المعقد
// ✅ جيد
// حساب النقاط مع مكافأة على السرعة
const totalPoints = basePoints * speedMultiplier;

// ❌ تجنب التعليقات الواضحة
// إضافة 1 إلى x
x = x + 1;
```

### طول السطر

- الحد الأقصى: **100 حرف** لكل سطر
- إذا تجاوز، اقسمه على عدة أسطر

---

## 🧪 الاختبارات | Testing

### كتابة الاختبارات

```javascript
// استخدم Jest للاختبارات
describe('GameEngine', () => {
  test('يجب حساب النقاط بشكل صحيح', () => {
    const game = new GameEngine();
    expect(game.calculatePoints(10)).toBe(10);
  });
});
```

### تشغيل الاختبارات

```bash
# تشغيل جميع الاختبارات
npm test

# تشغيل الاختبارات مع التغطية
npm run test:coverage

# مراقبة الاختبارات أثناء التطوير
npm run test:watch
```

### متطلبات الاختبار

- ✅ جميع الميزات الجديدة يجب أن تحتوي على اختبارات
- ✅ النسبة المئوية للتغطية يجب أن تكون **أكثر من 80%**
- ✅ جميع الاختبارات يجب أن تمر قبل الـ PR

---

## 📝 الالتزامات | Commits

### رسائل الالتزام

استخدم هذا التنسيق:

```
🎯 نوع | نص مختصر (تحت 50 حرف)

وصف تفصيلي (اختياري)
- النقطة 1
- النقطة 2
```

### أنواع الالتزامات

| الرمز | النوع | الوصف |
|------|--------|-------|
| 🎯 | feat | ميزة جديدة |
| 🐛 | fix | إصلاح خطأ |
| 📚 | docs | تحديث التوثيق |
| 🎨 | style | تنسيق الكود |
| ♻️ | refactor | إعادة هيكلة الكود |
| ✅ | test | إضافة اختبارات |
| 🚀 | perf | تحسين الأداء |
| 🔧 | chore | تحديثات التبعيات |

### أمثلة

```bash
git commit -m "🎯 إضافة لعبة جديدة - لعبة الذاكرة"

git commit -m "🐛 إصلاح مشكلة في حساب النقاط

- تم إصلاح الحسابات الخاطئة
- تم إضافة اختبارات جديدة
- يتم الآن حفظ النقاط بشكل صحيح"
```

---

## 🔍 عملية المراجعة | Review Process

### ماذا يتوقع المراجع:

✅ **الكود نظيف ومنظم**
- يتبع معايير الكود
- لا توجد تحذيرات من linter

✅ **اختبارات شاملة**
- يوجد اختبارات للميزات الجديدة
- جميع الاختبارات تمر

✅ **توثيق واضح**
- وصف تفصيلي للتغييرات
- تحديثات التوثيق إن لزم

✅ **عدم وجود مشاكل أمان**
- لا توجد ثغرات معروفة
- لا يتم تسرب البيانات الحساسة

---

## ✨ أنواع المساهمات المرحب بها

- 🐛 **إصلاح الأخطاء** - أبلغ عن المشاكل والأخطاء
- 💡 **الميزات الجديدة** - اقترح وطور ميزات جديدة
- 📚 **التوثيق** - حسّن التوثيق والأمثلة
- 🌐 **الترجمات** - ترجم إلى لغات جديدة
- 🎨 **التصميم** - حسّن واجهة المستخدم
- 🧪 **الاختبارات** - أضف اختبارات جديدة

---

## 🆘 طلب المساعدة | Need Help?

- 💬 [Discussions](https://github.com/fahdjelloul/Maghribwin-Game/discussions)
- 🐛 [Issues](https://github.com/fahdjelloul/Maghribwin-Game/issues)
- 📧 [البريد الإلكتروني](mailto:support@maghribwin.com)

---

## 🎉 الشكر

شكراً لمساهمتك في جعل Maghribwin أفضل! 🌟

**Together we build a better gaming experience!**
**معاً نبني تجربة ألعاب أفضل!**
