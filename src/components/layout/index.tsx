import * as React from 'react';
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
import Occupation from '../../pages/occupation';
import LifestyleComponent from '../Lifestyle';

const steps = [
	'Occupation',
	'Lifestyle',
	'Medical History',
	'Family History',
	'Juvenile Questions',
	'Travel and Residence',
	'Summary',
];

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
	const [activeStep, setActiveStep] = React.useState(0);
	const [progress, setProgress] = React.useState(
		Math.ceil((activeStep / 7) * 100)
	);
	const [completed, setCompleted] = React.useState<{
		[k: number]: boolean;
	}>({});
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
		setActiveStep((prevActiveStep) => Math.max(0, prevActiveStep + 1));
	};

	console.log(activeStep, steps[activeStep]);

	const handleComplete = () => {
		if (activeStep != steps.length) {
			console.log(steps[activeStep]);

			setProgress(Math.ceil(((activeStep + 1) / 7) * 100));
			const newCompleted = completed;
			newCompleted[activeStep] = true;
			setCompleted(newCompleted);
			handleBack();
		}
	};
	return (
		<>
			<CssBaseline />
			<Container maxWidth={false} disableGutters>
				<Box sx={{ bgcolor: '#F5F5F5', height: 'max-content' }}>
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
							activeStep={activeStep}
							connector={<QontoConnector />}
							className="xl:px-24 mt-3 mb-3"
							nonLinear
						>
							{steps.map((label, index) => {
								const stepProps: { completed?: boolean } = {};
								return (
									<Step key={label} {...stepProps} completed={completed[index]}>
										{index == 0 ? (
											<Box sx={{ display: 'flex', flexDirection: 'row' }}>
												<IconButton
													onClick={() => handleComplete()}
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
														color: index === activeStep ? 'red' : 'inherit', // Change the active tab color
													}}
													StepIconComponent={(props) => (
														<CustomStepIcon {...props} step={index + 1} />
													)}
												>
													{label}
												</StepLabel>
											</Box>
										) : (
											<Box className="buttonContainer">
												<StepLabel
													className="text-ellipsis"
													icon={null}
													sx={{
														color: index === activeStep ? 'red' : 'inherit', // Change the active tab color
													}}
													StepIconComponent={(props) => (
														<CustomStepIcon {...props} step={index + 1} />
													)}
												>
													{label}
												</StepLabel>
											</Box>
										)}
									</Step>
								);
							})}
						</Stepper>
						<Box sx={{ width: '100%' }}>
							<LinearProgress variant="determinate" value={progress} />
						</Box>
					</AppBar>
					{steps[activeStep] == 'Occupation' ? (
						<Occupation></Occupation>
					) : (
						<LifestyleComponent />
					)}
				</Box>
			</Container>
		</>
	);
}
