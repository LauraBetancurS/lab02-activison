class NewsCards extends HTMLElement {
    static get observedAttributes() {
        return ['image', 'date', 'title', 'description', 'more'];
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[propName] = newValue;
            this.render();
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
<link rel="stylesheet" href="./src/components/newsCards/newsCards.css">
<div class="card">
  <section class="container">
    <div class="img-container">
      <img src="${this.image}" alt="News image"/>
    </div>
    <div class="text-container">
      <p class="date">${this.date}</p>
      <h2>${this.title}</h2>
      <div class="blog-divider-wrapper"><div class="blog-divider"></div></div>
      <button class="read-more"> Leer Más  ▶ </button>
    </div>
  </section>
</div>
        `;
    }
}

customElements.define('news-cards', NewsCards);
export default NewsCards;