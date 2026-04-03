import sheet from './faq.scss?shadow';

class FaqAccordion extends HTMLElement {
    connectedCallback() {
        const items = JSON.parse(this.getAttribute('items') || '[]');
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.adoptedStyleSheets = [sheet];

        shadow.innerHTML = `
            <ul>
                ${items.map(item => `
                    <li>
                        <button type="button">${item.question}</button>
                        <div class="answer">${item.answer}</div>
                    </li>
                `).join('')}
            </ul>
        `;

        shadow.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', () => {
                button.nextElementSibling.classList.toggle('answer--open');
            });
        });
    }
}

customElements.define('faq-accordion', FaqAccordion);
