# Tango

## 1 목적
sukusuku 프로젝트에서 단어(単語, たんご) 데이터를 저장한다.

## 2 구성
New 스쿠스쿠 일본어 기본완성은 上, 下으로 구성되었다.
챕터의 구성은 다음과 같다.

- New 스쿠스쿠 일본어 기본완성 上
  - 01과 ~ 10과 기초일본어 1코스
  - 11과 ~ 20과 기초일본어 2코스
- New 스쿠스쿠 일본어 기본완성 下
  - 21과 ~ 30과 기초일본어 3코스
  - 31과 ~ 40과 기초일본어 4코스

## 3 데이터
data 디렉토리에 챕터 별로 .json 확장자 파일로 저장한다.

- 01과 => `wd01.json`
- ...
- 20과 => `wd20.json`
- 21과 => `wd21.json`
- ...
- 40과 => `wd40.json`


## 4 Json
json 파일의 구조는 다음과 같다.
```json
{
  "chapter" : "13",
  "update" : "2017-01-19",
  "author" : [
    "Phil"
  ],
  "content" : [
    { }, { }, { }
  ]
}
```

### 4.1 chapter `: String`
`chapter :` 챕터명. '00' 2자리 문자열로 표시한다.

### 4.2 update `: String`
`update :` 마지막 업데이트 날짜. 'YYYY-MM-DD' 형태의 문자열로 표시한다.

### 4.3 author `: [ String ]`
`author :` 작성자 목록. 작성자, 수정자 이름을 문자열의 배열로 표시한다.

### 4.4 content `: [ Object ]`
`content :` 단어 목록. 단어(Object)의 배열로 표시한다. 단어의 구성은 5 Word 참고

## 5 Word
단어 Object의 구조는 다음과 같다.


### 5.1 mean `: String`
`mean :` 단어 의미. 문자열로 표시한다. 필수 항목.

### 5.2 characters `: [ Object ]`
`characters :` 문자 단위의 배열.

#### 5.2.1 characters[index].base `: String`
`base :` 단어의 최소 단위 문자. 한자, or 히라카나, or 카타가나.

#### 5.2.2 characters[index].ruby `: String`
`ruby :` (한자인 경우) 주석 문자. 히라카나. 선택적.

#### 5.2.3 characters[index].mean `: String`
`mean :` (한자인 경우) 한자의 훈음. 한글. 선택적.

### 5.3 items `: [ Object ]`
`items :` 한자를 따로 표현할 때.

### 5.3.1 items[index].base `: String`
`base :` 한자

### 5.3.2 items[index].mean `: String`
`mean :` 한자의 뜻

- 챕터마다 중복되는 단어도 포함한다. 단, 동일 챕터에서 중복은 허용 안한다.
19과
```json
{
  "characters": [
    {
      "base": "捨",
      "mean": "버릴 사",
      "ruby": "す"
    },
    {
      "base": "てる"
    }
  ],
  "mean": "버리다"
},
```
- 단어의 의미가 두 개 이상인 경우 모두 표기한다.
  - 'xxx/yyy'
- 중복되는 단어라도 단어의 의미가 챕터마다 다른 경우에도 의미를 다르게 표기한다.
  - 30과 '나가다/나오다'
- 한자의 훈음은 네이버 일본어 사전을 이용한다.
- 한자의 훈음은 띄어쓰기를 한다.
- 한자의 훈음이 두 개 이상인 경우 단어의 음(의미), 훈(소리) 순으로 유사한 것을 선택한다.
- 동일 한자라도 단어에 따라 선택되는 훈음이 달라질 수 있다.
- 일본 한자 약자를 그대로 사용한다.
- 일본 한자인 경우 '일본식 한자'라고 표기한다.
23과 働
```json
{
  "characters": [
    {
      "base": "働",
      "mean": "일본식 한자"
    },
    {
      "base": "く"
    }
  ],
  "mean": "일하다"
}
```

34과 掏, 噛


참고 링크
- [루비 문자](https://ko.wikipedia.org/wiki/%EB%A3%A8%EB%B9%84_%EB%AC%B8%EC%9E%90)
- [&lt;ruby&gt; - mozilla](https://developer.mozilla.org/ko/docs/Web/HTML/Element/ruby)
- [&lt;ruby&gt;](https://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element)
- [후리가나 - 나무위키](https://namu.wiki/w/%ED%9B%84%EB%A6%AC%EA%B0%80%EB%82%98)

## 6 `<ruby>` Element

- `<ruby>` 요소는 주석 문자를 나타냄. 루비 주석은 동아시아 문자들의 발음을 표기하기 위해 사용한다.
- `<rt>` 요소는 `<ruby>` 요소 내부에서 사용되며, 루비 주석에서 발음을 포함한다.
- `<rp>` 요소는 `<ruby>` 요소 내부에서 사용되며, 루비 주석을 지원하지 않는 브라우저에서 사용한다.

### 6.1 사례1
문자(한자)와 문자(한자)로 이루어진 경우

```json
{
  "characters": [
    {
      "base": "来",
      "ruby": "らい",
      "mean": "올 래"
    },
    {
      "base": "週",
      "ruby": "しゅう",
      "mean": "주일 주"
    }
  ],
  "mean": "다음 주"
}
```

```html
<ruby>
  来 <rp>(</rp><rt>らい</rt><rp>)</rp>
  週 <rp>(</rp><rt>しゅう</rt><rp>)</rp>
</ruby>
```

### 6.2 사례2
문자(히라카나)와 문자(한자)로 이루어진 경우.
후리가나가 없는 경우에도 `<rt></rt>`를 추가해야 정렬됨.

```json
{
  "characters": [
    {
      "base": "お"
    },
    {
      "base": "酒",
      "ruby": "さけ",
      "mean": "술 주"
    }
  ],
  "mean": "술"
}
```

```html
<ruby>
  お <rt></rt>
  酒 <rp>(</rp><rt>さけ</rt><rp>)</rp>
</ruby>
```

### 6.3 사례3
단어(히라카나)로 이루어진 경우.
```json
{
  "characters": [
    {
      "base": "きっと",
    }
  ],
  "mean": "반드시/꼭"
}
```

```html
<ruby>
  きっと <rt></rt>
</ruby>
```

### 6.4 사례4
한자와 한자가 하나로 합쳐지는 경우(아테지?)
```json
{
  "characters": [
    {
      "base": "明日",
      "ruby": "あした"
    }
  ],
  "items": [
    {
      "base": "明",
      "mean": "밝을 명"
    },
    {
      "base": "日",
      "mean": "날 일"
    }
  ],
  "mean": "내일",
}
```

```html
<ruby>
  明日 <rp>(</rp><rt>あした<rt><rp>)</rp>
</ruby>
```

### 6.5 사례5
한자와 문자가 하나로 합쳐지는 경우(아테지?)
```json
{
  "characters": [
    {
      "base": "2日",
      "ruby": "ふつか",
    }
  ],
  "items": [
    {
      "base": "日",
      "mean": "날 일",
    }
  ],
  "mean": "2일"
}
```

```html
<ruby>
  2日 <rp>(</rp><rt>ふつか<rt><rp>)</rp>
</ruby>
```

### 6.6 사례6
아테지와 문자가 합쳐지는 경우
```json
{
  "characters": [
    {
      "base": "一人",
      "ruby": "ひとり"
    },
    {
      "base": "で"
    }
  ],
  "items": [
    {
      "base": "一",
      "mean": "날 일",
    },
    {
      "base": "人",
      "mean": "사람 인",
    }
  ],
  "mean": "혼자서"
}
```

```html
<ruby>
  一人 <rp>(</rp><rt>ひとり<rt><rp>)</rp>
  で <rt><rt>
</ruby>
```

### 6.7 사례7
아테지와 한자가 합쳐지는 경우
```json
{
  "characters": [
    {
      "base": "今日",
      "ruby": "きょう"
    },
    {
      "base": "中",
      "ruby": "じゅう",
      "mean": "가운데 중"
    }
  ],
  "items": [
    {
      "base": "今",
      "mean": "이제 금"
    },
    {
      "base": "日",
      "mean": "날 일"
    },
    {
      "base": "中",
      "mean": "가운데 중"
    }
  ],
  "mean": "오늘 중"
}
```

```html
<ruby>
  今日 <rp>(</rp><rt>きょう<rt><rp>)</rp>
  中 <rp>(</rp><rt>じゅう<rt><rp>)</rp>
</ruby>
```

## 7 JSON 파일 생성 방법

1. 구글 드라이브 스프레드 시트
2. .csv 파일 생성
3. .json 파일 생성
4. 수정 (사례3)
