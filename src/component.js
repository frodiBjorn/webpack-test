alert("hello i am component!")
const p1 = document.createElement('p')
p1.textContent = `I component.`
p1.classList.add('component')
const root = document.querySelector('#root')
root.append(p1)