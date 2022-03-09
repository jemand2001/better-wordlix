
const s = document.createElement('script')
s.src = chrome.runtime.getURL('emojiSetter.js')
s.onload = () => {s.remove()}
document.head.append(s)
