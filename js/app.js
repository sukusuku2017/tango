Vue.component('columns', {
  template: '#columns-template',

  props: ['word']
})

Vue.component('json-highlight', {
  template: '#json-highlight-template',

  props: ['word']
})

Vue.component('html-highlight', {
  template: '#html-highlight-template',

  props: ['word']
})

Vue.component('message', {
  template: '#message-template',

  props: ['word']
})

Vue.component('jp-ruby', {
  template: '#jp-ruby-template',

  props: ['word']
})

let app = new Vue({
  el: '#app',
  data: {
    words: [
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
      },
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
      },
      {
        "characters": [
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
        "base": "明日",
        "ruby": "あした"
      },
      {
        "base": "きっと",
        "mean": "반드시/꼭"
      },
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
        "mean": "오늘 중"
      },
      {
        "characters": [
          {
            "base": "シャワーを"
          },
          {
            "base": "浴",
            "mean": "목욕할 욕",
            "ruby": "あ"
          },
          {
            "base": "びる"
          }
        ],
        "mean": "샤워를 하다"
      },
      {
        "characters": [
          {
            "base": "朝",
            "mean": "아침 조",
            "ruby": "あさ"
          },
          {
            "base": "７"
          },
          {
            "base": "時",
            "mean": "때 시",
            "ruby": "じ"
          },
          {
            "base": "に"
          },
          {
            "base": "起",
            "mean": "일어날 기",
            "ruby": "お"
          },
          {
            "base": "きる"
          }
        ],
        "mean": "아침 7시에 일어나다"
      },
      {
        "characters": [
          {
            "base": "夜",
            "mean": "밤 야",
            "ruby": "よる"
          },
          {
            "base": "、"
          },
          {
            "base": "遅",
            "mean": "늦을 지",
            "ruby": "おそ"
          },
          {
            "base": "く"
          },
          {
            "base": "寝",
            "mean": "잠잘 침",
            "ruby": "ね"
          },
          {
            "base": "る"
          }
        ],
        "mean": "밤 늦게 자다"
      },
      {
        "characters": [
          {
            "base": "友",
            "mean": "벗 우",
            "ruby": "とも"
          },
          {
            "base": "だちと"
          },
          {
            "base": "遊",
            "mean": "놀 유",
            "ruby": "あそ"
          },
          {
            "base": "ぶ"
          }
        ],
        "mean": "친구와 놀다"
      },
      {
        "characters": [
          {
            "base": "2"
          },
          {
            "base": "日",
            "mean": "날 일",
          }
        ],
        "base": "2日",
        "ruby": "ふつか",
        "mean": "2일"
      },
    ]
  }
})
