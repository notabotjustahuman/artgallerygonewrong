class Classic {
  constructor(myImage) {
    this.frame = 'black-border'
    this.art_url = myImage
  }

  render() {
    let el = document.createElement('img')
    el.src = this.art_url
    el.className = this.frame
    el.style.width = '100px'
    el.style.height = '100px'
    el.style.backgroundColor = 'black'
    document.body.appendChild(el)
  }
}

let hehe = new Classic('https://leitesculinaria.com/wp-content/uploads/fly-images/96169/best-hot-dog-recipe-fi-400x225-c.jpg')

hehe.render()

class Meme extends Classic {
  constructor(temp) {
    super(temp)
    this.frame = 'red-border'
  }
}

let hehe2 = new Meme('https://eatingrichly.com/wp-content/uploads/2017/07/hot-dog-race-cars-9724-800x533.jpg')

hehe2.render()

let createImage = (theClass, picture) => {
  let newImage = new theClass(picture)
  newImage.render()
}
