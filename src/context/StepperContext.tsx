import React, { createContext, useState, ReactNode, useContext } from 'react';

interface StepperContextProps {
	currentStep: number;
	setStep: (step: number) => void;
	progress: number;
	completed: { [k: number]: boolean };
	setProgress: (step: number) => void;
	setCompleted: (step: { [k: number]: boolean }) => void;
}

export const StepperContext = createContext<StepperContextProps | undefined>(
	undefined
);

export const StepperProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [currentStep, setCurrentStep] = useState<number>(0);
	const [progress, setProgress] = useState(Math.ceil((currentStep / 7) * 100));
	const [completed, setCompleted] = useState<{
		[k: number]: boolean;
	}>({});

	const setStep = (step: number) => {
		setCurrentStep(step);
	};

	return (
		<StepperContext.Provider
			value={{
				currentStep,
				setStep,
				progress,
				setProgress,
				completed,
				setCompleted,
			}}
		>
			{children}
		</StepperContext.Provider>
	);
};

export const useStepper = () => {
	const context = useContext(StepperContext);
	if (!context) {
		throw new Error('useStepper must be used within a StepperProvider');
	}
	return context;
};
StepperProvider;
