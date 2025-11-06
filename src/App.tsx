import './App.css'

const mockLyrics = {
  lines: [
    {
      words: [
        { text: '아리랑', reading: 'アリラン' },
        { text: '아리랑', reading: 'アリラン' },
        { text: '아라리요', reading: 'アラリヨ' }
      ]
    },
    {
      words: [
        { text: '아리랑', reading: 'アリラン' },
        { text: '고개', reading: 'コゲ', kanji: '峠' },
        { text: '로', reading: 'ロ' },
        { text: '넘어간다', reading: 'ノモガンダ' }
      ]
    },
    {
      words: [
        { text: '나를', reading: 'ナルル' },
        { text: '버리고', reading: 'ポリゴ' },
        { text: '가시는', reading: 'カシヌン' },
        { text: '님은', reading: 'ニムン' }
      ]
    },
    {
      words: [
        { text: '십리도', reading: 'シムニド', kanji: '十里' },
        { text: '못', reading: 'モッ' },
        { text: '가서', reading: 'カソ' },
        { text: '발병', reading: 'パルビョン', kanji: '發病' },
        { text: '난다', reading: 'ナンダ' }
      ]
    }
  ],
  translation: [
    'アリラン峠を越えて行く。',
    'あなたが私を捨てて行くなら、',
    '十里と進まぬ間に足を痛めて戻るでしょう。'
  ]
}

function App() {
  return (
    <div className="lyrics-screen">
      <div className="lyrics-horizontal">
        {mockLyrics.lines.map((line, index) => (
          <div className="lyrics-line" key={`line-${index}`}>
            <div className="lyrics-word-row">
              {line.words.map((word, wordIndex) => (
                <div className="word-block" key={`word-${wordIndex}`}>
                  {word.kanji ? (
                    <span className="lyrics-kanji">{word.kanji}</span>
                  ) : (
                    <span className="lyrics-kanji placeholder" aria-hidden="true" />
                  )}
                  <span className="lyrics-original-word">{word.text}</span>
                  <span className="lyrics-reading-word">{word.reading}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="lyrics-translation">
        {mockLyrics.translation.join('\n')}
      </div>
    </div>
  )
}

export default App
