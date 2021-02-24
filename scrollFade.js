class FadeScrollTop {
  constructor() {
    this.scrollTopEl = document.getElementsByClassName('js_fade-top')
    this.scrollElements = Array.from(this.scrollTopEl)
    this.events()
  }
  
  events() {
    window.addEventListener('scroll', () => this.handleFadeOnScroll())
  }

  handleFadeOnScroll() {
    this.scrollElements.forEach((elem) => {
      let scroll = window.pageYOffset || elem.scrollTop || document.body.scrollTop || 0
      elem.style.opacity = Math.max(0, Math.min(1, -scroll / elem.getAttribute('data-fade-scroll') + 2))
    })
  }

}

export default FadeScrollTop