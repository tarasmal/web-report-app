# ВОПРОС: КАК? :confused:
**ОТВЕТ:**
- Установить Node.js, Git
- `git clone https://github.com/tarasmal/web-report-app.git .`
- Создать файл `content.json` (в директории `src/content/`) и переместить туда содержимое файла `content-example.json`
- `npm install` в директории с проектом
- `npm start` в директории с проектом

# ВОПРОС: КАК МЕНЯТЬ? :confused:
**ОТВЕТ:**
- В директории `public/content/` хранятся все картинки для отчета (для аватара — директория `public/content/credentials/`)
- В файле `content.json` (директория `src/content/`) содержится вся информация про содержимое отчета (нужно создать и переместить туда содержимое файла `content-example.json`)
- В файле `config.json` (директория `src/`) содержатся параметры проекта (main color, ...)
