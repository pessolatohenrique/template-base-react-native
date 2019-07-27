# Template base para react-native

### Ideia do projeto
O propósito é criar uma template base para projetos react-native, que pode ser utilizada para diferentes cases.

### Conteúdo
O template quando inicializado contém as seguintes bibliotecas:

- React Native na versão 0.59.9 (e complementares, como o babel e jest);
- Axios: cliente http baseado em promises, de modo a realizar chamadas para APIs;
- Eslint: lint para boas práticas de formatação;
- Formik: pacote com facilitadores de formulários, tais como componentes e validadores;
- Native base: componentes de UI para react-native;
- React Native Config: o objetivo é gerenciar as variáveis de ambiente, por exemplo para APIs de desenvolvimento, homologação e produção;
- React Navigation: com o objetivo de criar rotas / navegação para o react-native. Para este projeto, foi utilizado o **tab navigation**;
- React Native Vector Icons: pacote de icones. Inclui ícones do Font Awesome e Material Icons, por exemplo;
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
`react-native init AwesomeExample --template templatebase`
