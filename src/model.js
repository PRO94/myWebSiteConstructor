import image from './assets/image.png'
import { TextBlock, TitleBlock, ImageBlock, TextColumnsBlock } from './classes/blocks'
import { css } from './utils'

const text = `
More projects with JavaScript here: <a href="https://github.com/PRO94" target="_blank">Github</a>. Follow me!
`

export const model = [
  new TitleBlock('Web site constructor with pure JavaScript!', {
    tag: 'h2',
    styles: css({
      background: 'linear-gradient(to right, #22a605, #493240)',
      color: '#fff',
      padding: '1.5rem',
      'text-align': 'center'
    })
  }),
  new ImageBlock(image, {
    styles: css({
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center'
    }),
    alt: 'my image',
    imageStyles: 'width: 500px; height: auto;'
  }),
  new TextColumnsBlock([
    'Application with pure JavaScript, without libraries',
    'Here is OOP and SOLID',
    'JavaScript - is simple and interesting!'
  ], {
    styles: css({
      padding: '2rem 0',
      color: '#fff',
      background: 'linear-gradient(to bottom, #4a2e01, #23006b);font-weight: bold'
    })
  }),
  new TextBlock(text, {
    styles: css({
      padding: '1rem',
      color: '#fff',
      background: 'linear-gradient(to bottom, #23006b, #dcf2f1);font-weight: bold'
    })
  })
]