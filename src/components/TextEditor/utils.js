import commands from './commands'

export function createEditorButton(option) {
  if (option instanceof Array) {
    return option.map(createEditorButton)
  }
  if (typeof option == 'object') {
    return option
  }
  if (typeof option !== 'string') {
    return null
  }
  const button = commands[option]
  if (!button) {
    if (option === 'TableOfContents') {
      console.error('❌ TableOfContents command not found in commands object!')
      console.log('Available commands:', Object.keys(commands).slice(0, 20))
    }
    return null
  }
  return button
}
