import React from 'react';
import ButtonComponent from './shared/Button';
import { useStepper } from '../context/StepperContext';
import { useNavigate } from 'react-router-dom';
import { steps } from '../helpers/constants';

const ButtonContainer = () => {
	const { currentStep, setStep, setProgress, completed, setCompleted } =
		useStepper();

	const navigate = useNavigate();

	const handleContinue = () => {
		if (currentStep != steps.length) {
			setProgress(Math.ceil(((currentStep + 1) / 7) * 100));
			const newCompleted = completed;
			newCompleted[currentStep] = true;
			setCompleted(newCompleted);
			const activeStep = Math.max(0, currentStep + 1);
			setStep(activeStep);
			navigate(steps[activeStep].path);
		}
	};
	return (
		<div className="flex mt-8">
			<ButtonComponent
				variant="outlined"
				text="Save And Exit"
				onClick={() => {}}
				classes=""
			/>
			<ButtonComponent
				variant="contained"
				text="Continue"
				onClick={handleContinue}
				classes="ml-3"
			/>
		</div>
	);
};

export default ButtonContainer;
