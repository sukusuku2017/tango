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

- 01과 => `ch01.json`
- ...
- 20과 => `ch20.json`
- 21과 => `ch21.json`
- ...
- 40과 => `ch40.json`


## 4 Json
json 파일의 구조는 다음과 같다.
```json
{
  "chapter" : "ch13",
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
`chapter :` 챕터명. 'ch00' 4자리 문자열로 표시한다.

### 4.2 update `: String`
`update :` 마지막 업데이트 날짜. 'YYYY-MM-DD' 형태의 문자열로 표시한다.

### 4.3 author `: [ String ]`
`author :` 작성자 목록. 작성자, 수정자 이름을 문자열의 배열로 표시한다.

### 4.4 content `: [ Object ]`
`content :` 단어 목록. 단어(Object)의 배열로 표시한다. 단어의 구성은 5 Word 참고

## 5 Word
단어 Object의 구조는 다음과 같다.

참고 링크
- [&lt;ruby&gt; - mozilla](https://developer.mozilla.org/ko/docs/Web/HTML/Element/ruby)
- [후리가나 - 나무위키](https://namu.wiki/w/%ED%9B%84%EB%A6%AC%EA%B0%80%EB%82%98)

### 5.1 사례1
문자(한자)와 문자(한자)로 이루어진 경우

```json
{
  "mean": "다음 주",
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
  ]
}
```

```html
<ruby>
  来 <rp>(</rp><rt>らい</rt><rp>)</rp>
  週 <rp>(</rp><rt>しゅう</rt><rp>)</rp>
</ruby>
```

### 5.2 사례2
문자(히라카나)와 문자(한자)로 이루어진 경우
```json
{
  "mean": "술",
  "characters": [
    {
      "base": "お"
    },
    {
      "base": "酒",
      "ruby": "さけ",
      "mean": "술 주"
    }
  ]
}
```

```html
<ruby>
  お <rt></rt>
  酒 <rp>(</rp><rt>さけ</rt><rp>)</rp>
</ruby>
```

### 5.3 사례3
단어(한자)로 이루어진 경우
```json
{
  "mean": "내일",
  "base": "明日",
  "ruby": "あした",
  "characters": [
    {
      "base": "明",
      "mean": "밝을 명"
    },
    {
      "base": "日",
      "mean": "날 일"
    }
  ]
}
```

```html
<ruby>
  明日 <rp>(</rp><rt>あした<rt><rp>)</rp>
</ruby>
```

### 5.4 사례4
단어(히라카나)로 이루어진 경우
```json
{
  "mean": "반드시/꼭",
  "characters": [
    {
      "base": "きっと"
    }
  ]
}
```

```html
<ruby>
  きっと <rt></rt>
</ruby>
```
