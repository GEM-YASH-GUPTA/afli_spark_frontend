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

const steps = [
	'Occupation',
	'Lifestyle',
	'Medical History',
	'Family History',
	'Juvenile Questions',
	'Travel and Residence',
	'Summary',
];
export default function Header() {
	// const activeStep = 0
	const [activeStep, setActiveStep] = React.useState(0);
	const [progress, setProgress] = React.useState(
		Math.ceil((activeStep / 7) * 100)
	);
	// const progress =0;
	console.log(activeStep, progress);

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

	const handleComplete = () => {
		console.log(activeStep + 1);

		setProgress(Math.ceil(((activeStep + 1) / 7) * 100));
		const newCompleted = completed;
		newCompleted[activeStep] = true;
		setCompleted(newCompleted);
		handleBack();
	};
	return (
		<>
			<CssBaseline />
			<Container maxWidth={false} disableGutters>
				<Box sx={{ bgcolor: '#F5F5F5', height: '100vh' }}>
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
							className="xl:px-24"
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
				</Box>
			</Container>
		</>
	);
}
