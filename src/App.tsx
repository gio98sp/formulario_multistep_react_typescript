import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';

import { useForm } from './hooks/useForm';
import { UseForm } from './components/UseForm';
import { ReviewForm } from './components/ReviewForm';
import { Thanks } from './components/Thanks';
import { Steps } from './components/Steps';

import './App.css';

export const App = () => {
  const formComponents = [<UseForm />, <ReviewForm />, <Thanks />];

  const { currentStep, currentComponent, changeSteps } = useForm(formComponents);

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto
        </p>
      </div>

      <div className="form-container">
        <Steps currentStep={currentStep} />

        <form onSubmit={(e) => changeSteps(currentStep + 1, e)}>
          <div className="inputs-container">
            {currentComponent}
          </div>

          <div className="actions">
            <button type='button' onClick={() => changeSteps(currentStep - 1)}>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>

            <button type='submit'>
              <span>Avançar</span>
              <GrFormNext />
            </button>

          </div>
        </form>
      </div>

    </div>
  );
};
