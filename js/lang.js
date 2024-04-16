let langSelect = document.getElementById("select");
let elementsWithLanguageKey = document.querySelectorAll("[data-language-key]");

let data = {
    ukrainian: {
        main: "Головна",
        program_page: "Програми",
        trainers_page: "Тренерии",
        abonement_page: "Абонементи",
        registration_page: "Запис",
        contacts_page: "Контакти",
        personal_data: "Особисті дані",
        setting: "Налаштування",
        confidentiality: "Конфіденційність",
        abonement: "Абонементи та послуги",
        schedule: "Розклад тренувань",
        history: "Історія тренувань",
        support: "Підтримка та зв'язок",
        exit: "Вихід",

        profile:"Профіль",
        name_surname: "Ім'я та Прізвище",
        email: "Email:",
        birth_date: "Дата народження:",
        points: "Кількість балів:",
        experience_points: "Очки досвіду та бали",
        points_explanation_1: "У клубі PROSport ми прагнемо забезпечити мотивацію наших членів не лише ефективним тренуванням, але й цікавими бонусами.",
        points_explanation_2: "Для цього ми впровадили очки досвіду та бали, які є вимірювачами вашого прогресу, отриманого в процесі тренувань.",
        points_explanation_3: "Ми нараховуємо очки досвіду лише за дії, пов'язані з вашими тренуваннями.",
        setting_language: "Налаштування мови",
        change_lang: "Оберіть мову",
        confidentiality: "Конфіденційність",
        terms_of_use_policy:"Умови використання і політика конфіденційності",
        terms_of_use: "Умови використання",
        privacy_policy: "Політика конфіденційності",
        manage_account: "Управління аккаунтом",
        delete: "Видалити"
        
    },
    english: {
        main: "Main",
        program_page: "Programs",
        trainers_page: "Trainers",
        abonement_page: "Subscription",
        registration_page: "Registration",
        contacts_page: "Contacts",
        personal_data: "Personal data",
        setting: "Settings",
        confidentiality: "Confidentiality",
        abonement: "Subscription and services",
        schedule: "Training schedule",
        history: "Training history",
        support: "Support and contact",
        exit: "Exit",
        profile:"Profile",
        name_surname: "Name and Surname",
        email: "Email:",
        birth_date: "Date of Birth:",
        points: "Points:",
        experience_points: "Experience Points",
        points_explanation_1: "At PROSport club, we strive to motivate our members not only with effective workouts but also with interesting bonuses.",
        points_explanation_2: "For this purpose, we have introduced experience points and scores, which are metrics of your progress obtained during training.",
        points_explanation_3: "We only award experience points for actions related to your workouts.",
        setting_language: "Language settings",
        change_lang: "Choose a language",
        confidentiality: "Confidentiality",
        terms_of_use_policy:"Terms of Use and Privacy Policy ",
        terms_of_use: "Terms of Use",
        privacy_policy: "Privacy Policy",
        manage_account: "Manage Account",
        delete: "Delete"
    }
};


function updateTextContent(language) {
    let languageData = data[language];
    elementsWithLanguageKey.forEach(element => {
        let attr = element.getAttribute("data-language-key");
        if (languageData[attr]) {
            element.textContent = languageData[attr];
        }
    });
}

langSelect.addEventListener("change", function() {
    let selectedLanguage = langSelect.value;
    updateTextContent(selectedLanguage);
});

updateTextContent(langSelect.value);