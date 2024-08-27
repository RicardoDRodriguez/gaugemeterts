# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Modulos adicionados:

## React Gauge Chart 
Para instalar e usar o React Gauge Chart em seu projeto React com TypeScript, siga estes passos:

1. Instale o React Gauge Chart: No terminal, navegue até o diretório do seu projeto e execute:
~~~
npm install react-gauge-chart
~~~
2. Instale os tipos para TypeScript: Para garantir que você tenha suporte completo ao TypeScript, instale também os tipos:
~~~
npm install --save @types/react-gauge-chart
~~~
3. Importe e use o componente: Agora você pode importar e usar o componente GaugeChart em seu projeto. Aqui está um exemplo simples:

~~~TypeScript
import React from 'react';
import GaugeChart from 'react-gauge-chart';

const App: React.FC = () => {
  return (
    <div>
      <h1>Meu Gauge Chart</h1>
      <GaugeChart id="gauge-chart1" percent={0.65} />
    </div>
  );
};

export default App;
~~~

## React Progress Bar

Para instalar e usar o react-progress-bar em um projeto React com TypeScript, siga estes passos:

Instale o react-progress-bar: No terminal, navegue até o diretório do seu projeto e execute:

~~~
npm install @ramonak/react-progress-bar
~~~

Crie um componente de barra de progresso: Crie um novo componente ou edite um existente para incluir a barra de progresso. Aqui está um exemplo simples:

~~~TypeScript
import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

const MyProgressBar: React.FC = () => {
  return (
    <div>
      <h1>Teste para Minha Barra de Progresso</h1>
      <ProgressBar completed={60} />
    </div>
  );
};

export default MyProgressBar
~~~


