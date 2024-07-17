// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Language data
    const languages = [
        {
            name: 'Yoruba',
            description: 'Yoruba is a language spoken in West Africa, primarily in Nigeria.',
            phrases: [
                { english: 'Hello', translation: 'Bawo' },
                { english: 'Thank you', translation: 'E se' }
            ],
            resourceLink: 'https://en.wikipedia.org/wiki/Yoruba_language',
            image: 'images/yoruba.jpg'
        },
        {
            name: 'Igbo',
            description: 'Igbo is a language spoken by the Igbo people of Nigeria.',
            phrases: [
                { english: 'Hello', translation: 'Ndewo' },
                { english: 'Thank you', translation: 'Daalụ' }
            ],
            resourceLink: 'https://en.wikipedia.org/wiki/Igbo_language',
            image: 'images/igbo.jpg'
        },
        {
            name: 'Ibibio',
            description: 'Ibibio is a language of the Ibibio people of Nigeria.',
            phrases: [
                { english: 'Hello', translation: 'Mbre' },
                { english: 'Thank you', translation: 'Sosongo' }
            ],
            resourceLink: 'https://en.wikipedia.org/wiki/Ibibio_language',
            image: 'images/ibibio.jpg'
        },
        {
            name: 'Swahili',
            description: 'Swahili is a Bantu language widely spoken in East Africa.',
            phrases: [
                { english: 'Hello', translation: 'Jambo' },
                { english: 'Thank you', translation: 'Asante' }
            ],
            resourceLink: 'https://en.wikipedia.org/wiki/Swahili_language',
            image: 'images/swahili.jpg'
        },
        {
            name: 'Zulu',
            description: 'Zulu is a language of the Zulu people with about 12 million native speakers.',
            phrases: [
                { english: 'Hello', translation: 'Sawubona' },
                { english: 'Thank you', translation: 'Ngiyabonga' }
            ],
            resourceLink: 'https://en.wikipedia.org/wiki/Zulu_language',
            image: 'images/zulu.jpg'
        }
    ];

    // Populate languages list
    const languagesList = document.getElementById('languages-list');
    if (languagesList) {
        languages.forEach(language => {
            const div = document.createElement('div');
            div.classList.add('language-item');
            div.innerHTML = `
                <img src="${language.image}" alt="${language.name}" loading="lazy">
                <h3>${language.name}</h3>
                <p>${language.description}</p>
                <ul>
                    ${language.phrases.map(phrase => `
                        <li>
                            <span class="dialogue">${phrase.english}</span>: ${phrase.translation}
                        </li>
                    `).join('')}
                </ul>
                <a href="${language.resourceLink}" target="_blank">Learn more</a>
            `;
            languagesList.appendChild(div);
        });
    }

    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            // Simulate form submission
            setTimeout(() => {
                formStatus.textContent = 'Thank you for your message!';
                contactForm.reset();
                // Store form data in localStorage
                const messages = JSON.parse(localStorage.getItem('messages')) || [];
                messages.push({ name, email, message });
                localStorage.setItem('messages', JSON.stringify(messages));
            }, 500);
        });
    }
});
