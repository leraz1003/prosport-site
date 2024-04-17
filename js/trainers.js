const trainers = [
    {
        name: "Зубрицька Валерія Дмитрівна",
        achievements: [
            "Майстер спорту України з акробатичного рок-н-ролу",
            "Кандидат у майстри спорту по спортивній аеробіці",
            "Неоднарозова чемпіонка та призерка України",
            "Фіналістка чемпіонату Європи 2019",
            "Володарка кубку України 2018"
        ],
        education: [
            "КНУ імені Т.Г.Шевченка. Факультет радіофізики, електроніки та комп’ютерних систем.Н",
            "Національний університет фізичного виховання та спорту України.Фахівець з Тренериської діяльності."
        ],
        experience: [
            "5 років БДЮТ",
            "4 роки КНУ"
        ],
        dob: "10.03.1999",
        photo: "./images/coach-valeriia.jpg"
    },
    {
        name: "Павлова Вікторія",
        achievements: [
            "Сертифікований тренер групових програм",
            "Учасниця чисельних конвенцій та семінарів",
            "Сертифікований спеціаліст з силового, функціонального та інтервального тренінгу."
        ],
        education: [
            "Cертифікований спеціаліст у методології фітнесу." 
        ],
        experience: [
            "Досвід: 6 років"
        ],
        dob: "25.02.1989",
        photo: "./images/coach-kateryna.jpg"
    },
    {
        name: "Декерменджи Анна",
        achievements: [
            "Майстер спорту України з паверліфтингу (IPF)",
            "Дворазова Чемпіонка України з жиму штанги лежачи",
            "Чемпіонка Європи 2021 з паверліфтингу серед юніорок (IPF) Чехія"
        ],
        education: [
            "Бердянський державний педагогічний університет, факультет фізичного виховання та спорту.",
            
        ],
        experience: [
            "Стаж роботи: 4 роки"
            
        ],
        dob: "17.08.1996",
        photo: "./images/coach-olena.jpg"
    }
    // Додайте інших Тренериів якщо потрібно
];

let currentTrainerIndex = 0;

function changeTrainer() {
    const currentTrainer = trainers[currentTrainerIndex];

    // Зміна інформації для мобільної версії
    const mobileCoachContent = document.querySelector(".mobile-coach-contant");
    mobileCoachContent.querySelector(".coach-full-name").textContent = currentTrainer.name;
    mobileCoachContent.querySelector(".coach-birthday").textContent = currentTrainer.dob;
    mobileCoachContent.querySelector(".coach-photo").src = currentTrainer.photo;

    // Зміна інформації для інших версій
    const otherVersionTrainersData = document.querySelectorAll(".treiners-data");
    otherVersionTrainersData.forEach(data => {
        data.querySelector(".coach-full-name").textContent = currentTrainer.name;
        data.querySelector(".coach-birthday").textContent = currentTrainer.dob;
        data.querySelector(".coach-photo").src = currentTrainer.photo;
    });

    // Зміна досягнень
    const achievementsList = document.querySelector(".achievements");
    achievementsList.innerHTML = "";
    currentTrainer.achievements.forEach(achievement => {
        const achievementItem = document.createElement("li");
        achievementItem.textContent = achievement;
        achievementItem.classList.add("trainers-text");
        achievementsList.appendChild(achievementItem);
    });

    // Зміна освіти
    const educationList = document.querySelector(".education");
    educationList.innerHTML = "";
    currentTrainer.education.forEach(edu => {
        const eduItem = document.createElement("li");
        eduItem.textContent = edu;
        eduItem.classList.add("trainers-text");
        educationList.appendChild(eduItem);
    });

    // Зміна стажу
    const experienceList = document.querySelector(".experience");
    experienceList.innerHTML = "";
    currentTrainer.experience.forEach(exp => {
        const expItem = document.createElement("li");
        expItem.textContent = exp;
        expItem.classList.add("trainers-text");
        experienceList.appendChild(expItem);
    });
}



// Замінюємо document.getElementById на document.querySelectorAll
const switchButtons = document.querySelectorAll("#switchBtn");

// Додаємо обробник події для кожної кнопки
switchButtons.forEach(button => {
    button.addEventListener('click', function() {
        currentTrainerIndex = (currentTrainerIndex + 1) % trainers.length;
        changeTrainer();
    });
});

changeTrainer();