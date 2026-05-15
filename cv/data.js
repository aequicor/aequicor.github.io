const cvData = {
    title: "Резюме | Ямшанов Константин | Senior Android Developer",
    photoUrl: "photo_of_me.jpg",
    contactsTitle: "Контакты",
    contacts: [
        { label: "Дата рождения", value: "06.09.2001", href: null },
        { label: "Формат работы", value: "Удаленно / Готов к переезду / г. Ижевск", href: null },
        { label: "Email", value: "kyamshanov@vk.com", href: "mailto:kyamshanov@vk.com" },
        { label: "Telegram", value: "t.me/kyamshanov", href: "https://t.me/kyamshanov" },
        { label: "GitHub", value: "github.com/aequicor", href: "http://github.com/aequicor" }
    ],
    educationTitle: "Образование",
    education: [
        {
            years: "2023 — 2025",
            institution: "ИжГТУ имени М. Т. Калашникова",
            level: "Магистратура",
            specialty: "Менеджмент (Стратегическое управление)"
        },
        {
            years: "2019 — 2023",
            institution: "ИжГТУ имени М. Т. Калашникова",
            level: "Бакалавриат",
            specialty: "Информатика и вычислительная техника"
        }
    ],
    coursesTitle: "Курсы",
    courses: [
        { year: "2026", name: "Управление командой — Podlodka Teamlead Crew" },
        { year: "2026", name: "Безопасность Android — Podlodka Android Crew" },
        { year: "2025", name: "Мобильный System Design — Podlodka Crew" },
        { year: "2025", name: "Compose: 3 года в продакшене — Podlodka Crew" },
        { year: "2024", name: "Автоматизация разработки — Podlodka Crew" }
    ],
    skillsTitle: "Hard Skills",
    skills: [
        { category: "Языки программирования", items: "Kotlin, Java" },
        { category: "Android", items: "Android SDK, Jetpack Compose, Coroutines, Flow, CameraX, ML Kit, Material Design 3, Navigation, WorkManager" },
        { category: "Architecture", items: "Clean Architecture, MVI/MVVM, Multi-module, SOLID, Decompose" },
        { category: "UI", items: "Jetpack Compose, View, Canvas, Material Design 3" },
        { category: "DI", items: "Dagger 2, Hilt, Koin" },
        { category: "Сеть & Безопасность", items: "REST API, gRPC, WebSocket, Retrofit, OkHttp, Ktor, SSL/TLS Pinning, SQLCipher" },
        { category: "Хранение данных", items: "Room, SQLDelight, kotlinx.serialization" },
        { category: "Cross-Platform & Native", items: "Kotlin/Native, Kotlin Multiplatform, LLVM, JNI, C/C++ интеграция" },
        { category: "Backend", items: "Spring, Spring Boot, OAuth 2.0, JWT, Docker, docker-compose, микросервисы" },
        { category: "AI Tooling", items: "Claude Code, OpenCode, Cursor, Codex, on-device OCR (Smart Engines)" },
        { category: "Тестирование и Инфраструктура", items: "JUnit, MockK, Espresso, Gradle, GitHub Actions, CI/CD, GitFlow" }
    ],
    name: "Ямшанов Константин Алексеевич",
    role: "Senior Android Developer / Kotlin Multiplatform",
    aboutTitle: "Обо мне",
    about: [
        "Senior Android-разработчик с 7-летним опытом в IT, из которых 5+ лет специализируюсь на сложных Android-приложениях в сфере финтеха. Веду фичи на всём жизненном цикле продукта: от проектирования архитектуры до релиза и пост-релизной поддержки. Эксперт в написании производительного, безопасного и масштабируемого кода на Kotlin и Java.",
        "Сильный продуктовый майндсет, активно участвую в проработке фич на стыке бизнес-требований, пользовательского опыта и технических ограничений. Обладаю опытом работы в сложных многомодульных проектах и кросс-функциональных командах. Умею брать на себя ответственность за архитектурные решения и доставку критичного функционала в срок.",
        "Помимо Android, имею опыт кросс-платформенной разработки на Kotlin/Native и Kotlin Multiplatform (опен-сорс CLI ai-kit-v2 компилируется в нативные бинарники для Linux, macOS и Windows через LLVM), а также микросервисного бэкенда на Kotlin/Java со Spring OAuth 2.0 и Docker. Знаком с интеграцией нативных C/C++ библиотек в Android через JNI.",
        "Активно использую AI-инструменты в ежедневной разработке: Claude Code, OpenCode, Cursor — для рефакторинга, генерации тестов и ускорения код-ревью. Делюсь подходами с командой.",
        "Ценю здоровую инженерную культуру, выстраиваю прозрачную и уважительную коммуникацию. Делюсь экспертизой через онбординг, код-ревью и менторство."
    ],
    experienceTitle: "Опыт работы",
    experience: [
        {
            company: "БСЦ Мск. Проект — ВТБ Онлайн",
            period: "Август 2021 — Февраль 2026 (4 года 7 мес.)",
            role: "Senior Android Developer",
            stack: ["Kotlin", "Android SDK", "Jetpack Compose", "Coroutines", "Flow", "Clean Architecture", "Multi-module", "Dagger 2", "MlKit", "ZXing", "Smart Engines", "CameraX", "Canvas", "Material Design 3", "OkHttp", "JNI", "Gradle"],
            description: "Мобильное приложение банка ВТБ Онлайн на Android. По публичным данным: ~27 млн MAU и 8 млрд заходов за 2025 год, 2-е место в Mobile Banking Rank 2024 от Markswebb с оценкой 89,6 из 100 в номинации «Цифровой офис».",
            sections: [
                {
                    title: "Технические результаты:",
                    items: [
                        "Спроектировал с нуля архитектуру модулей оплаты сотовой связи и автоплатежей на Kotlin/Coroutines с применением Clean Architecture. Платежи и переводы — самый частый сценарий в приложении с 27+ млн MAU.",
                        "Разработал архитектуру модулей on-device AI/ML распознавания: QR, Aztec, DataMatrix, штрихкоды, номера телефонов, банковские карты, реквизиты по фото. Сценариями QR-сканирования пользуются ~2 млн клиентов в месяц.",
                        "Реализовал клиентскую часть продукта «Умная камера»: кастомные UI-оверлеи на Canvas, обработка кадров в реальном времени, корректная работа на бюджетных устройствах с камерой низкого разрешения.",
                        "Разрабатывал UI на Jetpack Compose и Material Design 3 совместно с дизайнерами, прорабатывая UX-флоу платежей, сканирования и подтверждений.",
                        "Интегрировал нативные C/C++ библиотеки распознавания: Smart Engines SDK (on-device OCR и баркоды без отправки данных на сервер банка) и опенсорс-библиотеки. Распознавание реквизитов по фото — около 1 секунды у клиента.",
                        "Интегрировал оплату по QR через СБП в 5+ сценариях C2B: покупки в магазинах, ЖКУ, налоги, штрафы, госплатежи. Флоу собирал по требованиям регулятора и НСПК.",
                        "Вёл разработку и рефакторинг в многомодульном проекте из 100+ Gradle-модулей. Кодовая база обслуживает 8 млрд заходов в год при средней сессии 3–4 минуты.",
                        "Разделил код на слои и поднял покрытие unit-тестами, сократив онбординг соседних команд с недель до дней."
                    ]
                },
                {
                    title: "Бизнес-результаты:",
                    items: [
                        "За время моей работы приложение поднялось с 4-го на 2-е место в Mobile Banking Rank 2024 — аналитики Markswebb отдельно выделили сценарии распознавания платёжных документов.",
                        "Вёл фичи платежей и распознавания на всём жизненном цикле продукта: проектирование, реализация, интеграция с вендорами (в т.ч. Smart Engines), согласование с регулятором, релиз и пост-релизная поддержка.",
                        "Закрывал 100% релизов в срок: дедлайны регулятора (СБП, ФНС) и продуктовые даты.",
                        "Внедрил стандарты модульности, практики код-ревью и гайдлайны по подключению внешних SDK в командах. Координировал кросс-функциональное взаимодействие, занимался менторством и онбордингом коллег.",
                        "Использую AI-агентов (Claude Code, Cursor) в ежедневной работе для рефакторинга, генерации тестов и ускорения код-ревью. Делюсь подходами с командой."
                    ]
                }
            ]
        },
        {
            company: "Игровая платформа",
            period: "Июнь 2019 — Август 2021 (2 года 3 мес.)",
            role: "Backend-разработчик (Java)",
            stack: ["Java", "Netty", "CompletableFuture", "MongoDB", "PostgreSQL", "Google Sheets API", "Linux", "OpenVPN"],
            description: "Разработка игровых режимов на Java на игровой платформе с дневным онлайном 3 000+ игроков.",
            sections: [
                {
                    title: "Технические результаты:",
                    items: [
                        "Проектировал и оптимизировал высоконагруженные Java-системы для бесперебойной работы платформы при пиковых нагрузках.",
                        "Разработал уникальную систему динамической настройки игровых параметров в реальном времени через конфигурацию в Google Таблицах — сократил цикл итерации игровых дизайнеров с дней до минут.",
                        "Создал собственный язык программирования (DSL) для управления комплексными параметрами настроек.",
                        "Настраивал удалённые серверы, маршрутизацию и туннели (OpenVPN, SSH)."
                    ]
                },
                {
                    title: "Бизнес-результаты:",
                    items: [
                        "Отвечал за поиск каналов привлечения игроков, выявление их потребностей и повышение монетизации проекта.",
                        "С нуля организовал работу команды поддержки (найм, процессы, инструменты), активно участвовал в бизнес-планировании платформы."
                    ]
                }
            ]
        }
    ],
    projectsTitle: "Опен-сорс и пет-проекты",
    projects: [
        {
            title: "AI-Kit v2 — Кросс-платформенный CLI для конфигурации AI-агентов",
            tags: ["Kotlin/Native", "Kotlin Multiplatform", "LLVM", "GitHub Actions", "Apache 2.0", "12 релизов"],
            description: "Опен-сорс CLI на Kotlin/Native с использованием Kotlin Multiplatform; компилируется через LLVM в нативные бинарники для Linux x64, macOS arm64 и Windows (mingw). Спроектировал систему bundle/манифестов для переиспользуемых пресетов AI-агентов (Claude Code, OpenCode, Cursor, Codex, Qwen Code), реализовал валидацию манифестов, рендеринг шаблонов, работу с секретами через переменные окружения, флоу update/remove/rollback. Выпустил 12 релизов с GitHub Actions CI/CD, unit- и E2E-тестами на реальных нативных бинарниках. github.com/aequicor/ai-kit-v2"
        },
        {
            title: "Mission Backend — Микросервисный бэкенд платформы задач",
            tags: ["Kotlin", "Java", "Spring", "OAuth 2.0", "JWT", "Docker", "docker-compose", "GitHub Actions", "16 релизов"],
            description: "Спроектировал микросервисный бэкенд на Kotlin и Java из 4 независимых сервисов: Gateway, Points (таск-менеджер), Database и Mission-ID. Реализовал аутентификацию и авторизацию через Spring OAuth 2.0 Resource Server с JWT — централизованно на Gateway. Упаковал сервисы в Docker и оркестрировал стек через docker-compose для воспроизводимых локальных и продакшен-деплоев. Настроил пайплайны CI/CD на GitHub Actions, выпустил 16 версий с тегами для независимо деплоящихся сервисов. github.com/aequicor/Mission-backend"
        },
        {
            title: "MissionChat — KMP-клиент для LLM",
            tags: ["Kotlin Multiplatform", "Compose Multiplatform", "OpenAI API", "Koin", "Ktor", "Decompose", "FlowMVI", "Room", "Clean Architecture"],
            description: "Разработка с нуля open-source клиента для взаимодействия с LLM. Проект построен на передовом стеке KMP для Desktop, Android и iOS с использованием современных подходов к UI (Compose Multiplatform)."
        }
    ],
    downloads: [
        { text: "Скачать в формате PDF", url: "Резюме_Константин_Ямшанов.pdf" }
    ]
};
