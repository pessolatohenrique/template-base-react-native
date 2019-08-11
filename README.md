# Template base para react-native

### Ideia do projeto

O propósito é criar uma template base para projetos react-native, que pode ser utilizada para diferentes cases.
A template inclui autenticação, gerenciamento de formulários, redux, tratamento de dados offline, variáveis de ambiente, entre outros.

### Conteúdo

O template quando inicializado contém as seguintes bibliotecas:

- React Native na versão 0.59.9 (e complementares, como o babel e jest);
- Axios: cliente http baseado em promises, de modo a realizar chamadas para APIs;
- Eslint: lint para boas práticas de formatação;
- Formik: pacote com facilitadores de formulários, tais como componentes e validadores;
- Native base: componentes de UI para react-native;
- React Native chart kit: biblioteca contendo diferentes tipos de gráfico;
- React Native Config: o objetivo é gerenciar as variáveis de ambiente, por exemplo para APIs de desenvolvimento, homologação e produção;
- React Navigation: com o objetivo de criar rotas / navegação para o react-native. Para este projeto, foram utilizados: **tab navigation**, **stack navigation** e **switch navigation**;
- React Native Vector Icons: pacote de icones. Inclui ícones do Font Awesome e Material Icons, por exemplo;
- Reactotron: o objetivo é inspecionar apps para react e react-native;
- Realm database: gerenciar base de dados do app, de modo a permitir o funcionamento offline;
- Redux: arquitetura para gerenciar o estado global de aplicações react;
- Redux Thunk: middleware para lógicas em redux;

### Inicializando o projeto em múltiplos ambientes

**Desenvolvimento**: `ENVFILE=.env && react-native run-android`
**Homologação**: `ENVFILE=.env && react-native run-android`
**Produção**: `ENVFILE=.env.production && react-native run-android`

Para o Windows acrescentar o _SET_ no comando, por exemplo:
`SET ENVFILE=.env.production && react-native run-android`

### Instalação

Realizar o seguinte comando no prompt de comando do seu sistema operacional.
`react-native init AwesomeExample --version="0.59.9" --template peanut-app-template`

### Exemplos

![Dashboard](examples/01dashboard.png?raw=true "Dashboard"){:width="300px"}
![Dashboard](examples/02dashboard.png?raw=true "Dashboard")
![Dashboard](examples/03dashboard.png?raw=true "Dashboard")
![Dashboard](examples/04dashboard.png?raw=true "Dashboard")
![Formulário com formik](examples/05form.png?raw=true "Formulário com formik")
![Listagem offline](examples/06realm.png?raw=true "Listagem offline")
![Listagem offline](examples/07realm.png?raw=true "Listagem offline")
![Busca por categoria offline](examples/08realm.png?raw=true "Busca por categoria offline")
![Busca por nome offline](examples/09realm.png?raw=true "Busca por nome offline")
!["Busca sem resultados](examples/10notfound.png?raw=true "Busca sem resultados")
![Logout](examples/11logout.png?raw=true "Logout")
![Login](examples/12login.png?raw=true "Login")
