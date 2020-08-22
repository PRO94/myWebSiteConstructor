import image from './assets/image.png'
import {TextBlock, TitleBlock, ImageBlock, TextColumnsBlock} from './classes/blocks'

const text = `
More projects with JavaScript here: <a href="https://github.com/PRO94" target="_blank">Github</a>. Follow me!
`

export const model = [
  new TitleBlock('Web site constructor with pure JavaScript!', {
    tag: 'h2',
    styles: 'background: linear-gradient(to right, #ff0099, #493240);color: #fff;padding: 1.5rem;text-align: center;'
  }),
  new ImageBlock(image, {
    styles: 'padding: 2rem 0;display: flex;justify-content: center;',
    alt: 'my image',
    imageStyles: 'width: 500px; height: auto;'
  }),
  new TextColumnsBlock([
    'Application with pure JavaScript, without libraries',
    'Here is OOP and SOLID',
    'JavaScript - is simple and interesting!'
  ], {
    styles: 'padding: 2rem 0; color: #fff;background: linear-gradient(to bottom, #8e2de2, #4a00e0);font-weight: bold;'
  }),
  new TextBlock(text, {
    styles: 'background: linear-gradient(to left, #f2994a, #f2c94c);font-weight: bold;padding: 1rem;'
  })
]