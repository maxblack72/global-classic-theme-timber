class FaqAccordion extends HTMLElement {
    connectedCallback() {
        const items = JSON.parse(this.getAttribute('items') || '[]');
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <style>
                :host { display: block; }
                ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }
                li {
                    border-bottom: 1px solid #e0e0e0;
                }
                li:first-child {
                    border-top: 1px solid #e0e0e0;
                }
                button {
                    all: unset;
                    box-sizing: border-box;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    padding: 1rem 0;
                    cursor: pointer;
                    font-weight: bold;
                }
                .answer {
                    display: none;
                    padding: 0 0 1rem;
                }
                .answer--open {
                    display: block;
                }
            </style>
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
