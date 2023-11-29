import React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// import Container from '@mui/material/Container';
import './Header.css';
import {
	AppBar,
	Avatar,
	Box,
	Container,
	CssBaseline,
	IconButton,
	Step,
	StepConnector,
	StepLabel,
	Stepper,
	Toolbar,
	stepConnectorClasses,
	styled,
} from '@mui/material';
import AFLILogo from '../../assets/images/AFLI Logo.svg';
import BackArrow from '../../assets/images/backArrowHeader.svg';
import TopBar from '../../assets/images/topBar.svg';
import transitions from '@material-ui/core/styles/transitions';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Outlet, useNavigate } from 'react-router-dom';
import { useStepper } from '../../context/StepperContext';
import { steps } from '../../helpers/constants';

interface CustomStepIconProps {
	active: boolean;
	completed: boolean;
	step: number;
}

const CustomStepIcon: React.FC<CustomStepIconProps> = ({
	active,
	completed,
	step,
}) => {
	return (
		<div
			style={{
				width: 30,
				height: 30,
				borderRadius: '50%',
				backgroundColor: active ? '#ff6002' : completed ? '#028e8b' : '#fffff',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				color: active ? '#ffffff' : completed ? '#ffffff' : 'black',
				border: active ? '' : completed ? '' : '2px solid #E5E5E5',
				fontStyle: 'Montserrat',
				fontWeight: '700',
			}}
		>
			{step}
		</div>
	);
};

export default function Header() {
	const navigate = useNavigate();
	const {
		currentStep,
		setStep,
		progress,
		setProgress,
		completed,
		setCompleted,
	} = useStepper();

	const QontoConnector = styled(StepConnector)(() => ({
		[`&.${transitions.create('left')}`]: {
			left: 'calc(-50% + 12px)',
		},
		[`&.${transitions.create('right')}`]: {
			right: 'calc(-50% + 12px)',
		},
		[`&.${transitions.create('top')}`]: {
			top: 'calc(-50% + 12px)',
		},
		[`&.${transitions.create('bottom')}`]: {
			bottom: 'calc(-50% + 12px)',
		},
		[`& .${stepConnectorClasses.line}`]: {
			display: 'none',
		},
	}));

	const handleBack = () => {
		// setStep(Math.max(0, currentStep - 1));
		setProgress(Math.ceil(((currentStep - 1) / 7) * 100));
		console.log(currentStep);

		const newCompleted = completed;
		newCompleted[currentStep - 1] = false;
		setCompleted(newCompleted);
		const activeStep = Math.max(0, currentStep - 1);
		setStep(activeStep);
		console.log(activeStep);

		navigate(steps[activeStep].path);
	};

	return (
		<>
			<CssBaseline />
			<Container maxWidth={false} disableGutters>
				<Box>
					<AppBar position="static" sx={{ backgroundColor: '#FFFFFF' }}>
						<Avatar
							variant="square"
							alt="Logo"
							src={TopBar}
							className="top-bar"
						/>
						<Toolbar>
							{/* Title of the application */}
							<Avatar
								variant="square"
								alt="Logo"
								src={AFLILogo}
								className="Afli-logo"
							/>
						</Toolbar>
					</AppBar>
					<AppBar
						position="static"
						sx={{
							backgroundColor: '#FFFFFF',
							width: '100%',
							overflowX: 'auto',
						}}
					>
						<Stepper
							activeStep={currentStep}
							connector={<QontoConnector />}
							className="xl:px-24 mt-3 mb-3"
							nonLinear
						>
							{steps.map((label, index) => {
								const stepProps: { completed?: boolean } = {};
								return (
									<Step
										key={label.name}
										{...stepProps}
										completed={completed[index]}
									>
										{index == 0 ? (
											<Box sx={{ display: 'flex', flexDirection: 'row' }}>
												<IconButton
													onClick={() => {
														console.log('clickedd');

														handleBack();
													}}
													color="secondary"
												>
													<Avatar
														variant="rounded"
														alt="Logo"
														src={BackArrow}
														sx={{
															width: '25px',
															height: '25px',
															marginRight: '10px',
														}}
													/>
												</IconButton>
												<StepLabel
													className="text-ellipsis"
													icon={null}
													sx={{
														color: index === currentStep ? 'red' : 'inherit', // Change the active tab color
													}}
													StepIconComponent={(props) => (
														<CustomStepIcon {...props} step={index + 1} />
													)}
												>
													{label.name}
												</StepLabel>
											</Box>
										) : (
											<Box className="buttonContainer">
												<StepLabel
													className="text-ellipsis"
													icon={null}
													sx={{
														color: index === currentStep ? 'red' : 'inherit', // Change the active tab color
													}}
													StepIconComponent={(props) => (
														<CustomStepIcon {...props} step={index + 1} />
													)}
												>
													{label.name}
												</StepLabel>
											</Box>
										)}
									</Step>
								);
							})}
						</Stepper>
					</AppBar>
					<div className="min-w-full">
						<LinearProgress variant="determinate" value={progress} />
					</div>
					<Outlet />
				</Box>
			</Container>
		</>
	);
}
