---
layout: single
type: post
slug: how-to-make-android-studio-run-faster-on-windows
date: 2022-12-06 16:33:01 +0330
title: چگونه اجرای اندروید استودیو در ویندوز را سریع تر کنیم؟
thumbnail: /img/android-studio-meme-akamohebbi-ir.jpg
thumbnail_caption: این عکس اشمل دو ما میم است که از این لینک برداشتم
thumbnail_link: '#!'
categories:
    - راه حل
tags:
    - ویندوز
    - راه حل
    - اندروید استودیو
---

اگر میکرو-وبلاگ من در توییتر رو دنبال کرده باشید حتمن اونجا دیدید که من اشاره‌ای به سرعت اجرای خیلی خیلی پایین اندروید استودیو در ویندوز داشتم و این سرعت به حدی پایین بود که وقتی می‌خواستی از یه پروژه خالی Build بگیری یه چیزی بیشتر از 5 دقیقه ازم زمان می‌گرفت.

اندروید استودیو کلاً نرم‌افزار سنگینی بوده و ویندوز هم که وقتی باهاش ترکیب میشه دیگه تمومه. فینیش! انقدر وضعیتش داغون میشه که حتی Meme های خیلی زیادی هم در موردش ساخته میشه و مردم بهش می خندن. حالا من دنبال راه حلی بودم که این سرعت اجرا رو تا حد خیلی زیادی بهترش کنم که خوشبختانه تونستم بهش برسم.

<div id="read-more"></div>



## مرحله اول: تنظیمات آنتی ویروس خودتون رو تغیر بدید!

اصولاً آنتی ویروس ها دائماً درحال بررسی سیستم هستن که این به نوبه خودش باعث میشه سیستم کندتر از حد معمول کار کنه. راه حل این می تونه باشه که شما تعدادی از دایرکتوری های مورد استفاده اندروید استودیو رو از اسکن مداوم آنتی ویروس مستثنی کنید و اینطوری دیگه آنتی ویروس با اون ها کاری نداره و این موضوع تا حدی در سرعت اجرای اندروید استودیو تأثیر مثبت خواهد داشت. در مورد من چون از آنتی ویروس پیشفرض در ویندوز 10 استفاده می‌کنم آموزش کوتاه نحوه اضافه کردن تعدادی از دایکتوری های موجود را بهتون نشون میدم.

مثل تصویر پایین وقتی Windows Security رو اجرا کردید روی گزینه Virus and threat protection کلیک کنید.

![تنظیمات Windows Security](/img/windows-security-screenshot-virus-and-threat-protection-highlighted-akamohebbi-ir.jpg)

حالا وقتی وارد صفحه جدید شدید بازهم مثل تصویر زیر روی لینک Manage settings در بخش Virus and threat protection settings کلیک کنید تا وارد تنظیمات این بخش بشید.

![تنظیمات Windows Security](/img/windows-security-screenshot-virus-and-threat-protection-settings-highlighted-akamohebbi-ir.jpg)

در ادامه کمی پایین تر روی لینک Add or remove exclusions در بخش Exclutions کلیک کنید.

![تنظیمات Windows Security](/img/windows-security-screenshot-exlusions-highlighted-akamohebbi-ir.jpg)

حالا اگر مراحل بالا رو درست دنبال کرده باشید با صفحه ای مثل تصویر پایین رو به رو خواهید شد.

![تنظیمات Windows Security](/img/windows-security-screenshot-add-remove-exlusions-akamohebbi-ir.jpg)

حالا تنها کاری که باید بکنید اینه که روی دکمه ای که در عکس بالا می بینید مشخص شده کلیک کنید و آدرس های زیر رو بهش بدید.

```
%USERPROFILE%\.android
%USERPROFILE%\.gradle
%USERPROFILE%\Android Studio Projects
%USERPROFILE%\AppData\Local\Android Sdk
C:\Program Files\Android\Android Studio
```



## مرحله دوم: تنظیمات اندروید استودیو

مهمترین تنظیمی که باید بهش توجه داشته باشید که خیلی خیلی زیاد در سرعت Build پروژه هاتون تأثیر مثبت خواهد داشت غیر فعال کردن گزینه Download external  annotations for dependencies خواهد بود. باور کنید یا نه این مورد خیلی خیلی زیاد تاثیر داره مخصوصا توی سرعت کامپایل شدن پروژه ها.

![تنظیمات اندروید استودیو](/img/android-studio-setting-gradle-build-highlighted-akamohebbi-ir.jpg)



## مرحله سوم: غیرفعال کردن پلاگین هایی که نیاز ندارید

به عنوان مثال من اصلاً از Git در محیط اندروید استودیو استفاده نمی‌کنم پس فعلاً فقط به عنوان مثال همون رو غیرفعال می‌کنم اما شما می تونید بسته به نیاز خودتون تعدادی از پلاگین هایی که استفاده نمی‌کنید رو غیرفعال کنید و اینطوری سرعت اجرای اندروید استودیو رو تا حدی بهترش کنید.

![غیرفعال کردن پلاگین هایی اندروید استودیو](/img/android-studio-setting-plugins-highlighted-akamohebbi-ir.jpg)



خب تموم شد دیگه همین ها بودن. یادتون باشه نهایتا سرعت اجرا اندروید استودیو خیلی زیاد به قدرت سیستم شما داره ولی این مراحلی که تو این نوشته ازشون اسم برده شد می تونه خیلی زیاد به اجرا کمی روان تر اندروید استودیو روی سیستم تون کمک کنه. امیدوارم این پست به درد هر کسی که اون رو خونده باشه بخوره و نهایتا اگر به نظرتون روش دیگه ای هم هست اون رو برام بفرستید یا خودتون واسه بروزرسانی این پست تو گیت هاب اقدام کنید.