

# GaugeMeter para Jitsi:

## Autor
   - [Ricardo Rodriguez] (mailto: ricardo.rodriguez@uniriotec.br)

## Modulos adicionados:

### React Gauge Chart 
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

### React Progress Bar

Para instalar e usar o react-progress-bar em um projeto React com TypeScript, siga estes passos:

Instale o react-progress-bar: No terminal, navegue até o diretório do seu projeto e execute:

~~~
npm install @ramonak/react-progress-bar
~~~

Crie um componente de barra de progresso ou edite um existente para incluir a barra de progresso. Aqui está um exemplo simples:

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

### Alterar os arquivos no GINI

- a. types.ts: Local=> react\features\base\participants\types.ts

~~~TypeScript

export interface IGiniParticipant extends IParticipant {
    entradaNaSala?: number;
    tempoDeFala?: number;
    fatorRiquezaAbsoluta?: number;
    tempoPresenca?: number;
    fatorTempoPresenca?: number;
    fatorAcumuladoPresenca?: number;
    populacaoAcumulada?: number;
    percentualAcumuloFala?: number;
    proporcaoAcumuladaPopulacao?: number;
    fatorAcumuladoCurvaLorenz?: number;
}

~~~

- b. Criar o diretorio gaugemeter em react\features\base\gaugemeter inserindo os arquivos abaixo:
      1. AvatarProgress.css
      2. AvatarProgress.tsx
      3. DataBaseForGauge.ts
      4. LiveGaugeChart.tsx
      5. Participante.ts

