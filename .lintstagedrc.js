module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --cache --fix', 'prettier --write'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['prettier --write--parser json'],
  'package.json': ['prettier --write'],
  '*.vue': ['eslint --cache --fix', 'prettier --write', 'stylelint --fix'],
  '*.{scss,less,styl,css,html}': ['stylelint --fix', 'prettier --write'],
  '*.md': ['prettier --write']
}
