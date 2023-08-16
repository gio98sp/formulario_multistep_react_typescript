import { FormEvent, ReactElement, useState } from "react";

export const useForm = (steps: ReactElement[]) => {
  const [currentStep, setCurrentStep] = useState(0)

  const changeSteps = (i: number, e?: FormEvent) => {
    if(e) e.preventDefault()

    if(i < 0 || i >= steps.length) return

    setCurrentStep(i)
  }

  const isLastStep = currentStep + 1 === steps.length

  return {
    changeSteps,
    currentComponent: steps[currentStep],
    currentStep,
    isLastStep
  }
}