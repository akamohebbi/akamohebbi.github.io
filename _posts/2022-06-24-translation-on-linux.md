---
layout: single
type: post
date: 2022-06-24 21:33:01 +0330
title: راه حل ساده برای ترجمه انگلیسی به فارسی در لینوکس
thumbnail: /img/linux-fu-akamohebbi-ir.jpg
categories:
    - لینوکس
tags:
    - لینوکس
    - آموزش
---

خیلی وقته که دنبال یه ترنسلیت تو خود لینوکس بودم تا بتونم هرجایی با انتخاب کردن متن موردنظرم و زدن شورتکاتی که براش ایجاد کردم متن ترجمه اون رو به صورت یه پیام بگیرم. توی خود لینوکس چندین ابزار ترنسلیت مثل translate-cli یا translate-shell هستن که شما تو ترمینال متن خودتونو به هر زبانی میدین و زبان مقصد رو مشخص میکنین تا اون رو به متن دلخواه ترجمه کنه.

اینکه ادم هرچی شد متن رو سلکت کنه بره کپی کنه ترمینال تا ترجمه رو بگیره چیز جالبی نیست واسه همین یه اسکریپت ساده نیاز داریم تا اینکار رو خودش برامون انجام بده. این بخش اول نیاز داره به یکی از ابزارهای ترنسلیت که توی این بخش از translate-shell استفاده شده.


<div id="read-more"></div>


پس اول کار کافیه ابزار مورد نظر رو نصب کنین که توی دبین بیس ها به این شکله:

```
sudo apt install translate-shell
```

اگه help خود ابزار رو ببینین تا حد زیادی متوجه کارش میشین. حالا بیاین یه تست بزنیم تو خود ترمینال:

```
trans :fa Hello
```

خب بعد تستش میبینین که یه عالمه توضیحاتم در مورد کلمه داده اما ما صرفا فقط چکیده شو میخوایم پس دیگه نیازی به چیزای دیگه نداریم فقط میخوایم بفهمیم میشه “سلام”. پس با اضافه کردن b- به دستورمون این کار رو انجام میدیم:

```
trans -b :fa Hello
```

خب بعد تستش میبینین که فقط در یک کلمه معنیشو به ما داد که ماهم همینو میخوایم (: اما یه مشکل دیگه هم داریم /: اونم نحوه نشون دادن ترجمه فارسی ما توی ترمیناله که کاملا برعکسه و ما اینو نمیخوایم. خب باز هم اگه به توضیحات خود ابزار برگردیم در بخش no-bidi- جوابمونو پیدا میکنیم و با اضافه کردنش کار خودمونو انجام میدیم:

```
trans -no-bidi -b :fa Hello
```

اووپس (: با موفقیت اینم درست شد.

حالا که نتیجه دلخواه مونو گرفتیم وقتشه با یه اسکریپت ساده اینو شخصی سازی کنیم تا به شکلی که میخوایم نمایش داده بشه.

برای نشون دادن یه پیام توی لینوکس میتونیم از خود نوتیفیکیشن لینوکس در اسکریپت مون استفاده کنیم اما برای من یکی جالب نبود، چون بعضی اوقات کامل هم نشون نمیداد و این اذیتم میکرد. پس با یه سرچ یه ابزار خیلی خوب به نام zenity رو توی اینترنت پیدا کردم که اصولا توی سیستم های نصب هست اما اگه نبود خودتون واردترین چجوری نصبش کنید 🙃

برای دیدن نتیجه کافیه دستور ساده زیر رو بزنین:

```
zenity --info --text='Hello World'
```

خب حالا که یه تستم از این دیدین بریم تا یه کاری کنیم تا بشه با انتخاب کردن متن مورد نظرمون ترجمشو به صورت یه پیام جمع و جور و تمیز نشون بدیم.

برای گرفتن مقادیر سلکت شده توی بش ما از xclip -out -selection primary در فایلمون استفاده میکنیم و این رو به عنوان یه پارامتر پاس میدیم به فانکشنی که قراره برای ترنسلیت درست کنیم و جوابش رو به صورت یه پیام نشون میدیم.

قبلش اگه یه خورده بگردیم تو اینترنت میبینیم میشه جلوه های جالب تری رو به zenity بدیم تا پیام مون رو نشون بده پس دیگه زیادی شلوغش نمی کنم و کل اسکریپت بش رو اینجا میزارم تا خیلی طولانی نشه یکم دقت کنین همه چی شو خودتونم درک می کنید.

```
#!/usr/bin/env bash
translate() {
    zenity --info --title='Translate' --width=300 --text="<span foreground=\"green\" font=\"13\">متن موردنظر:  \n<span foreground=\"black\" font=\"15\">$1</span></span>\n<span foreground=\"green\" font=\"13\">ترجمه:  \n<span foreground=\"black\" font=\"15\">$(trans -no-bidi -b :@fa "$1"|head -5)</span></span>"
}
select_and_translate() {
       translate "$(xclip -out -selection primary)"
}
select_and_translate
```

خب این اسکریپت ماست که متن رو به همراه ترجمش به ما نشون میده.

برای اینکه بتونیم ازش استفاده کنیم اول این اسکریپت رو در فایل با فرمت sh. میریزیم. حالا اول فایل رو به ادرس پایین میبریم:

```
mv FileName.sh ~/.local/bin
```

خب حالا بهش پرمیشن اجرایی رو میدیم:

```
sudo chmod +x ~/.local/bin/FileName.sh
```

حالا کافیه یه شورتکات واسش توی سیستم مشخص کنیم. از بخش تنظیمات سیستم تون بخش شورتکات های یه شورتکات جدید اضافه کنین و کامندشو بزارین FileName.sh و شورتکات خودتونم بزارین مثلا من به خاطر اسم ترنسلیت گذاشتم ctrl+t حالا شما هرچی دوست دارین میتونین بزارین.

و بعد از اون موقع تست میرسه. کافیه توی تکست ادیتورتون یه جمله مثل It Is Black Word 😅 بزارین و اون رو سلکت کنین و حالا شورتکات رو بزنین.

اوووپپسسس دوم (:

به همین راحتی یه ترنسلیت تو خود سیستم برای خودتون ایجاد کردید که حتی توی صفحات وب تلگرام هم میتونین متنتونو سلکت کنین و ترجمشو بدست بیارین.

این پست توسط یکی از ممبر های [گروه تلگرام لینوکس 98](https://t.me/linux98ir) به اسم امیر نوشته شده. واقعا پست جالبی بود و البته خیلی زیاد کاربردی. ممنون از امیر بابت زحمتی که برای نوشتن این پست کشیده.
