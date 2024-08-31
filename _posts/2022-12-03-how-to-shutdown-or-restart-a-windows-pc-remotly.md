---
layout: single
type: post
date: 2022-12-03 08:33:01 +0330
title: نحوه خاموش کردن یک سیستم ویندوزی از راه دور با CMD
thumbnail: /img/shutdown-remote-computer-cmd-akamohebbi-ir.jpg
categories:
    - ویندوز
    - راه حل
tags:
    - ویندوز
    - راه حل
    - آموزش
---

من اخیراً دارم از یک کامپیوتر دسکتاپ استفاده می‌کنم که فقط بهش یه کابل برق و همینطور یه کابل شبکه وصله. حالا من از این کیس (همون کامپیوتر دسکتاپ) خیلی زیاد به عنوان یه سیستم فایل شیرینگ در داخل ورک اسپیس خودم استفاده می‌کنم و خیلی کم گاهی اوقات با کمک نرم‌افزار های کنترلی بهش وصل می شم و اگر کاری داشته باشم، سیستم رو روشن می زارم تا کارش رو انجام بده.

پس وقتی من وارد میشم هم کیس رو روشن می‌کنم و هم لپ تاپ رو ولی وقتی می خوام محیط کار رو ترک کنم کمی به مشکل بر می‌خورم چون مجبورم اول با کمک ابزار های کنترلی ریموت به کیس وصل بشم، اون رو خاموشش کنم و بعد لپ تاپ رو خاموش کنم. یه لحظه با خودم گفتم آیا راهی هست که بشه یه سیستم رو از راه دور خاموش کرد؟ مثل اینکه هست و خیلی هم آسونه! با من همراه باشید.

<div id="read-more"></div>

## قدم اول: شبکه بودن سیستم ها

قبل از همه اینا لازمه کامپیوتری که قصد خاموش کردنش رو دارید با کامپیوتر یا ابزاری که قصد دارید با استفاده از اون سیستم مقصد رو خاموش کنید در یک شبکه باشند.

برای من لپ تاپ به صورت وایرلس و کیس هم با کابل به مودم من وصل هستن پس از این لحاظ مشکلی ندارم. علاوه بر اینها بهتره اسم کامپیوتر مقصد رو هم بدونید که در مورد من اسمش هست funlife.

## قدم دوم: تغیر کلید های رجیستری

برای اینکه بخوایم این کار رو انجام بدیم باید اول یه تغییر خیلی کوچولو در کلید های رجیستری ویندوز کامپیوتری که قصد خاموش کردنش رو داریم انجام بدیم.

### نکته مهم

حواستون باشه که این کار خیلی ساده است ولی اگر احیاناً کلید های رجیستری ویندوز رو به اشتباه تغیر بدید ممکنه عمل‌کرد سیستم عامل شما با مشکل جدی مواجه باشه. ولی اگر عیناً مراحل رو تکرار کنید مشکلی نخواهید داشت.

حالا مطابق تصویر پایین با زدن کلید های ترکیبی `WinKey+R` برنامه Run رو اجرا کنید و وقتی اجرا شد عبارت `regedit` رو در اون تایپ کرده و کلید Enter کیبرد رو بزنید.

![اجرا کردن regedit با Run](/img/run-regedit-akamohebbi-ir.jpg)

وقتی برنامه بازشد مسیر رو مطابق عکس پایین پیدا کنید.

```
Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System
```

![برنامه regedit](/img/regedit-akamohebbi-ir.jpg)

روی دایرکتوری System راست کلیک کنید و از منو New گزینه DWORD (32-bit) Value رو روش کلیک کنید.

![ایجاد یک مقدار جدید در regedit](/img/regedit_create_a_new_key_akamohebbi_ir.jpg)

اسمش `LocalAccountTokenFilterPolicy` بزارید. حالا روش دابل-کلیک کرده و اون رو بازکنید و مطابق عکس پایین مقدارش رو 1 قرار بدید.

![تغییر یک مقدار در regedit](/img/regedit_change_keys_value_akamohebbi_ir.jpg)

## گام سوم: خاموش کردن کامپیوتر مقصد

برای خاموش کردن کامپیوتر مقصد کافیه با کمک یکی از کامپیوتر هایی که به شبکه وصل هستن عبارت پایین رو در CMD وارد کنید و دکمه Enter کیبرد رو بزنید:

``` BATCH
shutdown /m \\funlife /s /t 1
```

یادتون باشه برای اینکه کامپیوتر رو انتخاب کنید لازمه اسمش رو بدونید. در مورد سیستم من اسمش رو همونطور که بالا هم بهش اشاره کردم funlife بود پس حالا با استفاده از سوئیچ `/m` اون رو وارد می کنم.

در مورد ری-استارت کردن سیستم هم خیلی ساده است. یاتون باشه که سیستم با سوئیچ `/s` خاموش میشه پس اگر به جای سوئیچ قبلی از `/r` استفاده کنید در حقیقت سیستم رو ری-استارت کردید.

در آخر سوئیچ `/f` اطمینان حاصل می کنه عملیات حتمن کامل بشه و سوئیچ `/t` هم یه زمان به ثانیه رو مشخص می کنه که بعد از این مدت زمان عملیات اجرایی بشه و سیستم بسته به دستور خاموش یا ری-استارت میشه.

واسه مسخره بازی و تفریح می تونید نگاهی به سوئیچ `/i` هم بندازید. اون رو به صورت خالی و با دستور `shutdown` اجرا کنید و کمی باهاش بازی کنید. خیلی می تونه جالب باشه :-)