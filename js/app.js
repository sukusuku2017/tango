Vue.component('columns-word', {
  template: '#columns-word-template',
  props: ['word']
})

Vue.component('columns-sentence', {
  template: '#columns-sentence-template',
  props: ['sentence']
})

Vue.component('highlight-json', {
  template: '#highlight-json-template',
  props: ['json']
})

Vue.component('highlight-word', {
  template: '#highlight-word-template',
  props: ['word']
})

Vue.component('highlight-sentence', {
  template: '#highlight-sentence-template',
  props: ['sentence']
})

Vue.component('message', {
  template: '#message-template',
  props: ['message']
})

Vue.component('ruby-word', {
  template: '#ruby-word-template',
  props: ['word']
})

Vue.component('ruby-sentence', {
  template: '#ruby-sentence-template',
  props: ['sentence']
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
            "base": "きっと",
          }
        ],
        "mean": "반드시/꼭"
      },
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
      },
      {
        "characters": [
          {
            "base": "2日",
            "ruby": "ふつか"
          }
        ],
        "items": [
          {
            "base": "日",
            "mean": "날 일"
          }
        ],
        "mean": "2일"
      },
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
    ],
    sentences: [
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
      }
    ]
  }
})
