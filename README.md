# tango

### 1 목적
sukusuku 프로젝트에서 단어(単語, たんご, tango)의 데이터를 저장한다.

### 2 구성
New 스쿠스쿠 일본어 기본완성은 上, 下으로 구성되었다.
교재와 과(챕터)의 구성은 다음과 같다.

- New 스쿠스쿠 일본어 기본완성 上
  - 01과 ~ 10과 기초일본어 1코스
  - 11과 ~ 20과 기초일본어 2코스
- New 스쿠스쿠 일본어 기본완성 下
  - 21과 ~ 30과 기초일본어 3코스
  - 31과 ~ 40과 기초일본어 4코스

### 3 데이터
data 디렉토리에 챕터 별로 .json 확장자 파일로 저장한다.

- 01과 => `ch01.json`
- ...
- 20과 => `ch20.json`
- 21과 => `ch21.json`
- ...
- 40과 => `ch40.json`


### 4 JSON
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

#### 4.1 chapter `: String`
`chapter :` 챕터명. 'ch00' 4자리 문자열로 표시한다.

#### 4.2 update `: String`
`update :` 마지막 업데이트 날짜. 'YYYY-MM-DD' 형태의 문자열로 표시한다.

#### 4.3 author `: [ String ]`
`author :` 작성자 목록. 작성자, 수정자 이름을 문자열의 배열로 표시한다.

#### 4.4 content `: [ Object ]`
`content :` 단어 목록. 단어(Object)의 배열로 표시한다. 단어의 구성은 5

### 5 CONTENT
단어 Object의 구조는 다음과 같다.
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
