# Управление проектом

1. [Структура папки Content](#content-structure)
2. [Создание и редактирование страниц проекта](#page-creating)
3. [Добавление новой языковой версии](#lang-version-creating)
4. [Добавление перевода строкам и кнопкам для разных языковых версий](#translation-creating)
5. [Добавление новых пунктов меню](#menu)
6. [Добавление блока с двумя баннерами](#banner-input)
7. [Добавление блока с четырьмя блоками, что ведут на слив](#drain-column-input)
8. [Добавление элементов блока с бегающей строкой](#running-line-input)

## 1. Структура папки Content <a name="content-structure"></a>

Вся работа с контентом проекта происходит с помощью папки <ins>***Content***</ins>. Именно в неё будут добавляться или удаляться все файлы ответственные за корректное отображение новых страниц сайта.

При просмотре всех файлов, что находятся в папке <ins>***Content***</ins>, можно обнаружить папку с языковым ключом, а именно <ins>***es***</ins>. Эта папка отвечает за соответствующую языковую версию сайта. О том, как создавать новую языковую версию проекта рассказано [в пункте №3](#lang-version-creating) файла readme.

Если перейти в вышеперечисленную папку можно обнаружить ряд файлов с расширением .md. Именно в этом расширении нам необходимо будет дальше создавать все последущие новые страницы проекта. О том, как добавлять новые страницы для проекта рассказано [в пункте №2](#page-creating).

При открытии корневой папки языковой версии можно найти файл <ins>***_index.md***</ins> - в этом файле размещен весь контент главной страницы проекта.

Также важной частью работы с Hugo является возможность работы с переводами некоторых кнопок, а также строк текста контента. Все эти переводы находятся в папке <ins>***i18n***</ins>. После её открытия мы можем увидеть, что там расположен файл <ins>***es.yaml***</ins>. Этот файл отвечает за перевод строк соответствующей языковой версий. О том как работать с этим файлом рассказано [в пункте №4](#translation-creating).

## 2. Создание и редактирование страниц проекта <a name="page-creating"></a>

На данный момент проект имеет одну основную языковую версию - испанскую. Вне зависимости от языковой версии сам процесс создания новой страницы для всех будет идентичным.

### 2.1. Изменение главной страницы проекта

В случае, если необходимо изменить контент главной страницы мы делаем следующие шаги:

- открываем необходимую нам папку языковой версии в каталоге <ins>***Content***</ins>;
- в открытой корневой папке языковой версии находим файл <ins>***_index.md***</ins>;
- в найденном файле мы увидим параметры которые помещаются между двумя рядами символов <ins>***"---"***</ins> (пример взят со страницы _index.md португальской языковой версии):

```go
---
h1: "Pin-Up – entretenimiento de juego de todos los gustos para mexicanos"
title: "Pin-Up México | Plataforma de juegos de azar en línea: apuestas y juegos de casino" 
description: "Sitio oficial de casino online y apuestas deportivas Pin Up México ☝️ Disfrute de juegos de casino, apuestas deportivas, póquer y otros entretenimientos de juego ⭐️ ¡Juegue y gane!"
modified_time: "2024-06-05 21:33:48"
noindex: false 
priority: 1
---
```

Где:

- ***h1*** - параметр указывающий значение заголовка первого уровня на странице, который будет размещен в самом баннере;
- ***title*** - параметр хранящий значение тайтла, который будет отображаться в мета данных страницы;
- ***description*** - параметр хранящий значение описание, которое будет отображаться в мета данных страницы;
- ***modified_time*** - параметр хранящий значение даты модификации проекта, который будет использоваться в случае, если эта данная не будет подтягиваться автоматически;
- ***priority*** - параметр в который прописывается число и который отвечает за то, какой приоритет получит созданная страница при её отображении в списке файла ***sitemap.xml***.
- ***noindex*** - параметр определяющий находится ли данная страница в индексе. Параметр принимает только два значения: ***"true"*** или ***"false"***. Если значение установлено как ***"true"*** - в хеддер страницы будет помещен атрибут ***content*** со значением ***"noindex, nofollow"***, а также эта страница не будет отображаться в файле ***sitemap.xml***. Если же значение установлено как ***"false"*** - страница получит значение ***"index, follow"***, а также отобразится в файле ***sitemap.xml***;

### 2.2. Изменение других страниц проекта

В случае, если необходимо изменить другие страницы отличные от главной мы делаем следующие шаги:

- открываем необходимую нам папку языковой версии в каталоге <ins>***Content***</ins>;
- в открытой корневой папке языковой версии находим необходимый нам файл с расширением <ins>***.md***</ins>;
- в найденном файле мы увидим параметры которые помещаются между двумя рядами символов <ins>***"---"***</ins> (пример взят со страницы _index.md португальской языковой версии):

```go
---
h1: "promociones h1"
title: "promociones title" 
description: "promociones description"
modified_time: "2024-06-05 21:33:48"
noindex: false 
priority: 0.9
---
```

Где:

- ***h1*** - параметр указывающий значение заголовка первого уровня на странице, который будет размещен в самом баннере;
- ***title*** - параметр хранящий значение тайтла, который будет отображаться в мета данных страницы;
- ***description*** - параметр хранящий значение описание, которое будет отображаться в мета данных страницы;
- ***modified_time*** - параметр хранящий значение даты модификации проекта, который будет использоваться в случае, если эта данная не будет подтягиваться автоматически;
- ***priority*** - параметр в который прописывается число и который отвечает за то, какой приоритет получит созданная страница при её отображении в списке файла ***sitemap.xml***.
- ***noindex*** - параметр определяющий находится ли данная страница в индексе. Параметр принимает только два значения: ***"true"*** или ***"false"***. Если значение установлено как ***"true"*** - в хеддер страницы будет помещен атрибут ***content*** со значением ***"noindex, nofollow"***, а также эта страница не будет отображаться в файле ***sitemap.xml***. Если же значение установлено как ***"false"*** - страница получит значение ***"index, follow"***, а также отобразится в файле ***sitemap.xml***;

## 3. Добавление новой языковой версии <a name="lang-version-creating"></a>

Для добавления новой языковой версии необходимо изменить файл конфигураций <ins>***config.toml***</ins>, а именно:

1. находим блок кода с заголовком <ins>***[languages]***</ins>;
2. прописываем следующий блок кода:

```yaml
[languages.langCode]
contentDir = "content/langCode"
languageName = "langCode"
languageCode = 'langCode-LANGCODE'
[languages.langCode.params]
languageLocale = "langCode-LANGCODE"
meta_twitter_label = "Estimated reading time"
meta_twitter_data = "1 minute"
```

Где:

- ***langCode*** - это ключевое слово, которое отвечает за идентификатор нашей новой языковой версии. Например, <ins>***ru***</ins>, <ins>***en***</ins> или <ins>***pt***</ins>;
- ***contentDir*** - это расположение корневой папки, где будет находится весь контент языковой версии сайта. Все файлы контента сайтов должны находиться внутри папки с именем <ins>***langCode***</ins>, которая в свою очередь находится в папке <ins>***content***</ins>;
- ***languageName*** - идентификатор нашей новой языковой версии, который будет также отображаться в мета разметке страницы. Данный параметр желательно писать в нижнем регистре;
- ***languageCode*** - короткое имя языковой версии. Например, ***"pt-BR"***. Данное имя будет отображаться в мета разметке страницы.
- ***languageLocale*** - имя языковой версии, которое будет проставляться в мета поле og:locale;
- ***meta_twitter_label*** и ***meta_twitter_data*** - соответствующие примеру строки, которые также будут располагаться в ***"twitter:label1"*** и ***"twitter:data1"*** соответственно.

После проведения всех вышеперечисленных действий необходимо перейти в папку <ins>***Сontent***</ins>, где создаем папку с идентификатором нашей новой языковой версии <ins>***langCode***</ins>. Внутри ее помещаем все необходимые страницы проекта.

Также необходимо будет перейти в папку <ins>***i18n***</ins> и создать там файл с расширением ***.yaml***, который будет отвечать за перевод определенных строк контента страницы. Файл должен иметь следующее имя <ins>***langCode.yaml***</ins>, после чего генератор Hugo поймет, что это файл перевода. Для его наполнения нам необходимо перейти в файл перевода уже существующей версии, например, испанской, скопировать все данные и перенести их в новосозданный файл. Все испанские слова нам нужно будет заменить на соответствующий язык. Подробнее, что такое файл перевода и как он работает рассказано [в пункте №4](#translation-creating).

## 4. Добавление перевода строкам и кнопкам для разных языковых версий<a name="translation-creating"></a>

В генераторе статических сайтов ***Hugo*** есть возможность создать и редактировать свой перевод строк контента. Для этого нам нужно перейти в папку ***i18n***, где нам станет доступен файл <ins>***pt.yaml***</ins>. Этот файл отвечает за перевод строк на странице.

### Как работает перевод в файле .yaml

Если мы откроем файл <ins>***es.yaml***</ins>, мы можем обнаружить следующие строки кода:

```yaml
- id: "registrate_string"
  translation: "Registrate"
```

Где:
- ***id*** - идентификатор нашей переведенной строчки, который используется в коде разметки страницы. Идентификатором может быть любое имя переменной, которое мы захотим, главное, чтобы он был уникальным;
- ***translation*** - параметр, который отвечает за то, как строка должна быть переведена.

## 5. Добавление новых пунктов меню <a name="menu"></a>

Все работы по изменению структуры меню ведутся в файле ***config.toml***. Для добавления или удаления элементов необходимо найти блок кода с заголовком ***languages.es.menu***.  

### 5.1. Добавление новых пунктов в меню хедера

Для того, чтобы добавить новый элемент в меню, которое находится в шапке страницы, необходимо перейти в файл ***config.toml*** и в нем найти блок кода с заголовком ***menu.header_category***. Ключевое слово ***header_category*** говорит о том, что это меню будет находиться в шапке страницы. Все изменения внесенные в этих блоках будут отображаться только лишь в хеддере страницы.

Пример кода добавления нового пункта меню в хеддере страницы представлен ниже:

```yaml
[[languages.es.menu.header_category]]
identifier = "eurofest"
title = "eurofest"
name = "Eurofest"
url = "#"
weight = 3
```

Где: 

- ***identifier*** - парметр который отвечает за идентификатор нового пункта меню. Это значение должно быть уникальным для каждого пункта меню. Идентификатор должен быть уникальным, иначе добавленный пункт меню банально не будет отображаться на странице;
- ***title*** - значение имени пункта меню, которое будет отображаться в атрибуте ***"title"*** ссылки;
- ***name*** - строка имени пункта меню, то как пункт будет отображаться для пользователей страницы;
- ***url*** - строка URL-адреса, на который указывает пункт меню;
- ***weight*** - целочисленное значение. Все записи в меню сортируются по возрастанию их веса, то есть элемент меню со значением переменной ***weight*** в "1" будет идти первее, нежели пункт меню со значением "2".

### 5.2. Добавление новых пунктов в меню футера
Добавление новых элементов в меню футера производится аналогично процессу добавления новых элементов в хеддер страницы за исключением некоторых моментов. Для того, чтобы добавить новый элемент в меню, которое находится в подвале страницы, необходимо перейти в файл ***config.toml***. В нем можно найти блоки кода с заголовками ***menu.footer_terms***, ***menu.footer_information*** и ***menu.footer_casino***. Названия блоков соответствуют местам тех блоков, где будут выводиться пункты меню футтера: ***footer_terms*** - блок слева, ***footer_casino*** - блок справа и ***footer_information*** - блок по центру.

Пример кода добавления нового пункта меню в блок футера страницы представлен ниже:

```yaml
[[languages.es.menu.footer_information]]
identifier = "eurofest5"
title = "eurofest"
name = "Eurofest"
url = "#"
weight = 3
```

Где: 

- ***identifier*** - парметр который отвечает за идентификатор нового пункта меню. Это значение должно быть уникальным для каждого пункта меню. Идентификатор должен быть уникальным, иначе добавленный пункт меню банально не будет отображаться на странице;
- ***title*** - значение имени пункта меню, которое будет отображаться в атрибуте ***"title"*** ссылки;
- ***name*** - строка имени пункта меню, то как пункт будет отображаться для пользователей страницы;
- ***url*** - строка URL-адреса, на который указывает пункт меню;
- ***weight*** - целочисленное значение. Все записи в меню сортируются по возрастанию их веса, то есть элемент меню со значением переменной ***weight*** в "1" будет идти первее, нежели пункт меню со значением "2".

## 6. Добавление блока с двумя баннерами <a name="banner-input"></a>

На обычных страницах проекта есть возможность добавить блоки с двумя баннерами в одной строке. Для этого нам необходимо:

- перейти в сам файл .md, который мы редактируем; 
- прописываем контейнер ```{{<banners-wrapper>}}{{</banners-wrapper>}}``` *(если он уже есть и нам необходимо лишь добавить новый элемент в уже существующий контейнер его прописывать заново не нужно, если же его в файле нет - смело прописываем)*;
- внутри этого контейнера пишем следующий код:

```html
{{<left-banner title-first-line="TITLE" title-second-line="subtitle" prize-first-line="prize line" prize-second-line="125%" button-text="button text">}}
{{<right-banner title-first-line="TITLE" title-second-line="subtitle" prize-first-line="prize line" prize-second-line="+ 250 FS" button-text="button text">}}
```

Где:

- ***title-first-line*** - атрибут, значение которого отвечает за контент заголовка;
- ***title-second-line*** - атрибут, значение которого отвечает за контент подзаголовка;
- ***prize-first-line*** - атрибут, что хранит значение текста, что предшествует числовому бонусу;
- ***prize-second-line*** - атрибут, что хранит значение числового бонуса;
- ***button-text*** - текст самой кнопки слива.

Таким образом приведем пример как в итоге может выглядеть один из блоков баннеров на странице:

```html
{{<banners-wrapper>}}
{{<left-banner title-first-line="DEPORTES" title-second-line="BONO" prize-first-line="hasta" prize-second-line="125%" button-text="RECIBELO Y APUESTA">}}
{{<right-banner title-first-line="CASINO" title-second-line="BONO" prize-first-line="120%" prize-second-line=" + 250 FS" button-text="RECIBELO Y JUEGA">}}
{{</banners-wrapper>}}
```

## 7. Добавление блока с четырьмя блоками, что ведут на слив <a name="drain-column-input"></a>

На обычных страницах проекта есть возможность добавить четыре блока, которые будут хранить в себе ссылку слива. Для этого нам необходимо:

- перейти в сам файл .md, который мы редактируем; 
- прописываем контейнер ```{{<tematic-section>}}{{</tematic-section>}}``` *(если он уже есть и нам необходимо лишь добавить новый элемент в уже существующий контейнер его прописывать заново не нужно, если же его в файле нет - смело прописываем)*;
- внутри этого контейнера пишем следующий код:

```html
{{<section-header h2="h2 title" subtitle="subtitle">}}
{{<tematic-wrapper>}}
{{<tematic-item image-source="/img/path/img.jpg" text="jpg alt">}}
{{<tematic-item image-source="/img/path/img.jpg" text="jpg alt">}}
{{<tematic-item image-source="/img/path/img.jpg" text="jpg alt">}}
{{<tematic-item image-source="/img/path/img.jpg" text="jpg alt">}}
{{</tematic-wrapper>}}
```

Где:

- ***section-header*** - блок с хеддером новой секции;
- ***h2*** - заголовок второго уровня новой секции;
- ***subtitle*** - подзаголовок новой секции;
- ***tematic-wrapper*** - контейнер, который будет хранить последующие четыре блока с ссылкой слива;
- ***tematic-item*** - один блок, который хранит в себе ссылку слива;
- ***image-source*** - атрибут, что хранит значение пути к картинке, что отображается в блоке;
- ***text*** - атрибут, что хранит значение текста блока с ссылкой слива.

Таким образом приведем пример как в итоге может выглядеть один из выше описанных блоков:

```html
{{<tematic-section>}}
{{<section-header h2="APARTADOS TEMÁTICOS" subtitle="Los más populares">}}
{{<tematic-wrapper>}}
{{<tematic-item image-source="/img/tematic-images/live-poster-desk.webp" text="CASINO EN VIVO">}}
{{<tematic-item image-source="/img/tematic-images/crash-poster-desk.webp" text="JUEGOS RÁPIDOS">}}
{{<tematic-item image-source="/img/tematic-images/virtual-poster-desk.webp" text="DEPORTES VIRTUALES">}}
{{<tematic-item image-source="/img/tematic-images/cyber-poster-desk.webp" text="ESPORTS">}}
{{</tematic-wrapper>}}
{{</tematic-section>}}
```

## 8. Добавление элементов блока с бегающей строкой <a name="running-line-input"></a>

Для проекта был создан блок с бегающей строкой, которая отображает слоты, внутри которых указывается имя пользователя, а также сумма его выиграша. Для того, чтобы указать новый блок с новым пользователем необходимо:

- перейти в директорию проекта под названием <ins>***"data"***</ins>; 
- в открытой папке мы находим файл <ins>***casino_running_line_items.json***</ins>, который открываем;
- в данном файле можно увидеть множество массивов с уже существующими блоками-слотами. Для того, чтобы добавить один из них прописываем следующий код:

```json
{
	"item_img": "/path/to/img/img.webp",
	"item_name": "+77477***",
	"item_value": "€ 9.11"
},
```

Где:

- ***item_img*** - атрибут хранящий путь к изображению слота, что будет отображаться;
- ***item_name*** - атрибут, который указывает имя пользователя играющего в слот;
- ***item_value*** - атрибут, что отображает сумму.

Таким образом приведем пример как в итоге может выглядеть один из выше описанных блоков-слотов:

```json
{
		"item_img": "/img/casino-running-line-images/4ak83ryp-b5s4ss6j2-t2vaub8j3a.webp",
		"item_name": "+77758***",
		"item_value": "€ 1.14"
},
```
