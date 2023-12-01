import {
	Accordion,
	AccordionSummary,
	Typography,
	AccordionDetails,
	Avatar,
	Box,
	Chip,
	Card,
	CardContent,
} from '@mui/material';
import React, { useState } from 'react';
import EditDetails from '../assets/images/Edit Details.svg';
import { makeStyles } from '@material-ui/core/styles';
import Expand from '../assets/images/PlusCircle.svg';
import Collapse from '../assets/images/MinusCircle.svg';
import CloseIcon from '@mui/icons-material/Close';
import CheckBoxComponent from './shared/checkBox';
import ToggleButtonComponent from './shared/toggleButton';
import MaxHeightTextarea from './shared/TextArea';

const useStyles = makeStyles({
	MuiAccordionroot: {
		'&.MuiAccordion-root:before': {
			display: 'none',
		},
	},
});

const Summary = () => {
	const classes = useStyles();
	const [toggleChecked, setToggleChecked] = useState(false);
	const [checkBoxChecked, setcheckBoxChecked] = useState(false);

	const [expanded, setExpanded] = React.useState({
		panel1: false,
		panel2: false,
		panel3: false,
		panel4: false,
		panel5: false,
		panel6: false,
		panel7: false,
	});

	const handleExpand =
		(panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
			if (panel == 'panel1') {
				setExpanded(
					isExpanded
						? { ...expanded, panel1: true }
						: { ...expanded, panel1: false }
				);
			} else if (panel == 'panel2') {
				setExpanded(
					isExpanded
						? { ...expanded, panel2: true }
						: { ...expanded, panel2: false }
				);
			} else if (panel == 'panel3') {
				setExpanded(
					isExpanded
						? { ...expanded, panel3: true }
						: { ...expanded, panel3: false }
				);
			} else if (panel == 'panel4') {
				setExpanded(
					isExpanded
						? { ...expanded, panel4: true }
						: { ...expanded, panel4: false }
				);
			} else if (panel == 'panel5') {
				setExpanded(
					isExpanded
						? { ...expanded, panel5: true }
						: { ...expanded, panel5: false }
				);
			} else if (panel == 'panel6') {
				setExpanded(
					isExpanded
						? { ...expanded, panel6: true }
						: { ...expanded, panel6: false }
				);
			} else if (panel == 'panel7') {
				setExpanded(
					isExpanded
						? { ...expanded, panel7: true }
						: { ...expanded, panel7: false }
				);
			}
		};

	const personName = ['test1', 'test2'];
	return (
		<div className="flex flex-col items-center justify-center p-8">
			<div className="w-10/12 py-4 px-1">
				<Typography className="font-Montserrat font-semibold text-xl">
					Summary
				</Typography>
			</div>

			{/* Accordian 1 */}
			<Accordion
				expanded={expanded?.panel1 === true}
				onChange={handleExpand('panel1')}
				square={true}
				classes={{ root: classes.MuiAccordionroot }}
				className="rounded-2xl shadow-none w-10/12 mt-5 p-4"
			>
				<AccordionSummary
					expandIcon={
						expanded?.panel1 === true ? (
							<div className="pr-24 md:pr-0 flex">
								<Avatar
									variant="rounded"
									alt="Logo"
									src={EditDetails}
									sx={{
										width: 'auto',
										height: '30px',
									}}
									className="flex"
								/>
								<Avatar
									variant="rounded"
									alt="Logo"
									src={Collapse}
									sx={{
										width: 'auto',
										height: '30px',
									}}
									className="flex"
								/>
							</div>
						) : (
							<div className="pr-24 md:pr-0 flex">
								<Avatar
									variant="rounded"
									alt="Logo"
									src={EditDetails}
									sx={{
										width: 'auto',
										height: '30px',
									}}
									className="flex"
								/>
								<Avatar
									variant="rounded"
									alt="Logo"
									src={Expand}
									sx={{
										width: 'auto',
										height: '30px',
									}}
									className="flex"
								/>
							</div>
						)
					}
					aria-controls="panel1a-content"
					id="panel1a-header"
					sx={{
						'& .MuiAccordionSummary-expandIconWrapper': {
							transition: 'none',
							'&.Mui-expanded': {
								transform: 'none',
							},
						},
					}}
				>
					<Typography className="font-Montserrat font-semibold font-medium text-xl">
						Please tell us more about your occupation
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography
						className="font-Montserrat font-medium text-sm  "
						gutterBottom
					>
						What is your profession?
					</Typography>

					<div className="flex flex-wrap w-full gap-y-2 py-3">
						{personName.map((selected, ind) => (
							<Box key={ind} className="flex flex-wrap gap-0.5">
								<Chip
									className="bg-bashful mx-1 font-Montserrat font-medium"
									key={selected}
									label={selected}
									deleteIcon={
										<CloseIcon className="w-3.5" style={{ color: '#000' }} />
									}
									onDelete={() => {
										return null;
									}}
								/>
							</Box>
						))}
					</div>
				</AccordionDetails>
			</Accordion>

			{/* Accordian 2 */}
			<Accordion
				expanded={expanded?.panel2 === true}
				onChange={handleExpand('panel2')}
				square={true}
				classes={{ root: classes.MuiAccordionroot }}
				className="rounded-2xl shadow-none w-10/12 mt-5 p-4"
			>
				<AccordionSummary
					expandIcon={
						expanded?.panel2 === true ? (
							<div className="pr-24 md:pr-0 flex">
								<Avatar
									variant="rounded"
									alt="Logo"
									src={EditDetails}
									sx={{
										width: 'auto',
										height: '30px',
									}}
									className="flex"
								/>
								<Avatar
									variant="rounded"
									alt="Logo"
									src={Collapse}
									sx={{
										width: 'auto',
										height: '30px',
									}}
									className="flex"
								/>
							</div>
						) : (
							<div className="pr-24 md:pr-0 flex">
								<Avatar
									variant="rounded"
									alt="Logo"
									src={EditDetails}
									sx={{
										width: 'auto',
										height: '30px',
									}}
									className="flex"
								/>
								<Avatar
									variant="rounded"
									alt="Logo"
									src={Expand}
									sx={{
										width: 'auto',
										height: '30px',
									}}
									className="flex"
								/>
							</div>
						)
					}
					aria-controls="panel1a-content"
					id="panel1a-header"
					sx={{
						'& .MuiAccordionSummary-expandIconWrapper': {
							transition: 'none',
							'&.Mui-expanded': {
								transform: 'none',
							},
						},
					}}
				>
					<Typography className="font-Montserrat font-semibold font-medium text-xl">
						Please tell us more about your hobbies
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<div className="grid grid-cols-1 mt-10">
						<div className="font-Montserrat font-normal font-medium text-base">
							Do you take part or intend to take part in parachuting/ gliding/
							diving/ mountaineering/ climbing/ racing/ riding/martial
							arts/hunting/ bungee-jumping/ flying other than as a bonafide
							passenger/or any other hazardous pastimes?{' '}
						</div>
					</div>
					<div className="grid grid-cols-12 mt-10">
						<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-medium text-sm">
							Diving (e.g. Skin diving, SCUBA diving or Free diving)
						</div>
						<div className="pl-7 md:pl-2 col-span-1 flex justify-end">
							<ToggleButtonComponent
								checked={toggleChecked}
								onChange={() => {
									setToggleChecked(!toggleChecked);
								}}
								classes={''}
							></ToggleButtonComponent>
						</div>
					</div>

					<div>
						<div className="grid grid-cols-12 mt-10">
							<div className=" pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-medium text-sm">
								Motor Sports (eg. Circuit racing, Karting, Stock car racing etc)
								or Power Boat Sports
							</div>
							<div className=" pl-7 md:pl-2 col-span-1 flex justify-end">
								<ToggleButtonComponent
									checked={toggleChecked}
									onChange={() => {
										setToggleChecked(!toggleChecked);
									}}
									classes={''}
								></ToggleButtonComponent>
							</div>
						</div>
						<div className="grid grid-cols-12 mt-2">
							<div className="col-span-12 md:col-span-3">
								<CheckBoxComponent
									label={'Motor Car Racing'}
									onChange={() => {
										setcheckBoxChecked(!checkBoxChecked);
									}}
									checked={checkBoxChecked}
									classes={''}
								></CheckBoxComponent>
							</div>
							<div className="col-span-12 md:col-span-3">
								<CheckBoxComponent
									label={'Motorcycle Racing'}
									onChange={() => {
										setcheckBoxChecked(!checkBoxChecked);
									}}
									checked={checkBoxChecked}
									classes={''}
								></CheckBoxComponent>
							</div>
						</div>
					</div>

					<div>
						<div className="grid grid-cols-12 mt-10">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-medium text-sm">
								Mountaineering (e.g. trekking, mountaineering etc) or Climbing
								Sports (e.g. bouldering, ice climbing, indoor climbing etc)
							</div>
							<div className="pl-7 md:pl-2 col-span-1 flex justify-end">
								<ToggleButtonComponent
									checked={toggleChecked}
									onChange={() => {
										setToggleChecked(!toggleChecked);
									}}
									classes={''}
								></ToggleButtonComponent>
							</div>
						</div>
						<div className="grid grid-cols-12 mt-2">
							<div className="col-span-12 md:col-span-3">
								<CheckBoxComponent
									label={'Mountain Climbing'}
									onChange={() => {
										setcheckBoxChecked(!checkBoxChecked);
									}}
									checked={checkBoxChecked}
									classes={''}
								></CheckBoxComponent>
							</div>
							<div className="col-span-12 md:col-span-3">
								<CheckBoxComponent
									label={'Rock Climbing (Indoor)'}
									onChange={() => {
										setcheckBoxChecked(!checkBoxChecked);
									}}
									checked={checkBoxChecked}
									classes={''}
								></CheckBoxComponent>
							</div>
						</div>
					</div>

					<div>
						<div className="grid grid-cols-12 mt-10">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-medium text-sm">
								Parachuting or Paragliding
							</div>
							<div className="pl-7 md:pl-2 col-span-1 flex justify-end">
								<ToggleButtonComponent
									checked={toggleChecked}
									onChange={() => {
										setToggleChecked(!toggleChecked);
									}}
									classes={''}
								></ToggleButtonComponent>
							</div>
						</div>
						<div className="grid grid-cols-12 mt-2">
							<div className="col-span-12 md:col-span-3">
								<CheckBoxComponent
									label={'Parachuting'}
									onChange={() => {
										setcheckBoxChecked(!checkBoxChecked);
									}}
									checked={checkBoxChecked}
									classes={''}
								></CheckBoxComponent>
							</div>
							<div className="col-span-12 md:col-span-3">
								<CheckBoxComponent
									label={'Parachuting'}
									onChange={() => {
										setcheckBoxChecked(!checkBoxChecked);
									}}
									checked={checkBoxChecked}
									classes={''}
								></CheckBoxComponent>
							</div>
						</div>
					</div>

					<div>
						<div className="grid grid-cols-12 mt-10">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-medium text-sm">
								Sailing
							</div>
							<div className="pl-7 md:pl-2 col-span-1 flex justify-end">
								<ToggleButtonComponent
									checked={toggleChecked}
									onChange={() => {
										setToggleChecked(!toggleChecked);
									}}
									classes={''}
								></ToggleButtonComponent>
							</div>
						</div>
						<div className="flex flex-wrap w-full gap-y-2 py-3">
							{personName.map((selected, ind) => (
								<Box key={ind} className="flex flex-wrap gap-0.5">
									<Chip
										className="bg-bashful mx-1 font-Montserrat font-medium"
										key={selected}
										label={selected}
										deleteIcon={
											<CloseIcon className="w-3.5" style={{ color: '#000' }} />
										}
										onDelete={() => {
											return null;
										}}
									/>
								</Box>
							))}
						</div>
					</div>

					<div>
						<div className="grid grid-cols-12 mt-10">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-medium text-sm">
								Others
							</div>
							<div className="pl-7 md:pl-2 col-span-1 flex justify-end">
								<ToggleButtonComponent
									checked={toggleChecked}
									onChange={() => {
										setToggleChecked(!toggleChecked);
									}}
									classes={''}
								></ToggleButtonComponent>
							</div>
						</div>
						<div className="flex flex-wrap w-full gap-y-2 py-3">
							{personName.map((selected, ind) => (
								<Box key={ind} className="flex flex-wrap gap-0.5">
									<Chip
										className="bg-bashful mx-1 font-Montserrat font-medium"
										key={selected}
										label={selected}
										deleteIcon={
											<CloseIcon className="w-3.5" style={{ color: '#000' }} />
										}
										onDelete={() => {
											return null;
										}}
									/>
								</Box>
							))}
						</div>
					</div>
				</AccordionDetails>
			</Accordion>

			{/* Accordian 3 */}

			<Accordion
				expanded={expanded?.panel3 === true}
				onChange={handleExpand('panel3')}
				square={true}
				classes={{ root: classes.MuiAccordionroot }}
				className="rounded-2xl shadow-none w-10/12 mt-5 p-4"
			>
				<AccordionSummary
					expandIcon={
						expanded?.panel3 === true ? (
							<div className="pr-24 md:pr-0 flex">
								<Avatar
									variant="rounded"
									alt="Logo"
									src={EditDetails}
									sx={{
										width: 'auto',
										height: '30px',
									}}
									className="flex"
								/>
								<Avatar
									variant="rounded"
									alt="Logo"
									src={Collapse}
									sx={{
										width: 'auto',
										height: '30px',
									}}
									className="flex"
								/>
							</div>
						) : (
							<div className="pr-24 md:pr-0 flex">
								<Avatar
									variant="rounded"
									alt="Logo"
									src={EditDetails}
									sx={{
										width: 'auto',
										height: '30px',
									}}
									className="flex"
								/>
								<Avatar
									variant="rounded"
									alt="Logo"
									src={Expand}
									sx={{
										width: 'auto',
										height: '30px',
									}}
									className="flex"
								/>
							</div>
						)
					}
					aria-controls="panel1a-content"
					id="panel1a-header"
					sx={{
						'& .MuiAccordionSummary-expandIconWrapper': {
							transition: 'none',
							'&.Mui-expanded': {
								transform: 'none',
							},
						},
					}}
				>
					<Typography className="font-Montserrat font-semibold font-medium text-xl">
						Please tell us more about your lifestyle
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<div className="grid grid-cols-1 mt-10">
						<div className="font-Montserrat font-normal font-medium text-base">
							Do you consume or have you ever consumed or been advised to quit
							narcotics, drugs, psychotropic substances, alcohol and tobacco
							consumption in any form?
						</div>
					</div>
					<div>
						<div className="grid grid-cols-12 mt-10">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-medium text-sm">
								Tobacco (e.g. Cigarette, Bidi, Cigar and/or PanMasala)
							</div>
							<div className="pl-7 md:pl-2 col-span-1 flex justify-end">
								<ToggleButtonComponent
									checked={toggleChecked}
									onChange={() => {
										setToggleChecked(!toggleChecked);
									}}
									classes={''}
								></ToggleButtonComponent>
							</div>
						</div>

						<div className="flex flex-wrap w-full gap-y-2 py-3">
							{personName.map((selected, ind) => (
								<Box key={ind} className="flex flex-wrap gap-0.5">
									<Chip
										className="bg-bashful mx-1 font-Montserrat font-medium"
										key={selected}
										label={selected}
										deleteIcon={
											<CloseIcon className="w-3.5" style={{ color: '#000' }} />
										}
										onDelete={() => {
											return null;
										}}
									/>
								</Box>
							))}
						</div>
					</div>

					<div>
						<div className="grid grid-cols-12 mt-10">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-medium text-sm">
								Alcohol (e.g. Beer, Wine and/or Hard Liquor)
							</div>
							<div className="pl-7 md:pl-2 col-span-1 flex justify-end">
								<ToggleButtonComponent
									checked={toggleChecked}
									onChange={() => {
										setToggleChecked(!toggleChecked);
									}}
									classes={''}
								></ToggleButtonComponent>
							</div>
						</div>

						<div className="flex flex-wrap w-full gap-y-2 py-3">
							{personName.map((selected, ind) => (
								<Box key={ind} className="flex flex-wrap gap-0.5">
									<Chip
										className="bg-bashful mx-1 font-Montserrat font-medium"
										key={selected}
										label={selected}
										deleteIcon={
											<CloseIcon className="w-3.5" style={{ color: '#000' }} />
										}
										onDelete={() => {
											return null;
										}}
									/>
								</Box>
							))}
						</div>
					</div>

					<div>
						<div className="grid grid-cols-12 mt-10">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-medium text-sm">
								Drugs that are not prescribed bydoctore (e.g. Tranqillsers,
								Stimulants, Narcotics etc.)
							</div>
							<div className="pl-7 md:pl-2 col-span-1 flex justify-end">
								<ToggleButtonComponent
									checked={toggleChecked}
									onChange={() => {
										setToggleChecked(!toggleChecked);
									}}
									classes={''}
								></ToggleButtonComponent>
							</div>
						</div>
						<div className="grid grid-cols-12 mt-2">
							<div className="col-span-12 md:col-span-3">
								<CheckBoxComponent
									label={'Tranquillsers'}
									onChange={() => {
										setcheckBoxChecked(!checkBoxChecked);
									}}
									checked={checkBoxChecked}
									classes={''}
								></CheckBoxComponent>
							</div>
							<div className="col-span-12 md:col-span-3">
								<CheckBoxComponent
									label={'None of the Above'}
									onChange={() => {
										setcheckBoxChecked(!checkBoxChecked);
									}}
									checked={checkBoxChecked}
									classes={''}
								></CheckBoxComponent>
							</div>
						</div>
					</div>

					<div>
						<div className="grid grid-cols-12 mt-10">
							<div className="col-span-12  font-Montserrat font-normal font-semibold text-sm">
								Tranquilers
							</div>
						</div>
						<div className="grid grid-cols-12 mt-2">
							<div className="col-span-12 mt-4 mb-4 font-Montserrat font-normal font-medium text-sm">
								Please indicate the duration (in years) that the drug has been
								consumed
							</div>

							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-semibold text-sm">
								I have been using it for 7/8 years
							</div>
						</div>
					</div>

					<div>
						<div className="grid grid-cols-12 mt-10">
							<div className="col-span-12  font-Montserrat font-normal font-semibold text-sm">
								Others
							</div>
						</div>
						<div className="grid grid-cols-12 mt-2">
							<div className="col-span-12 mt-4 mb-4 font-Montserrat font-normal font-medium text-sm">
								Please indicate the duration (in years) that the drug has been
								consumed
							</div>
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-semibold text-sm">
								I have been using it for 7/8 years
							</div>
						</div>
					</div>
				</AccordionDetails>
			</Accordion>

			{/* Accordian 4 */}

			<Accordion
				expanded={expanded?.panel4 === true}
				onChange={handleExpand('panel4')}
				square={true}
				classes={{ root: classes.MuiAccordionroot }}
				className="rounded-2xl shadow-none w-10/12 mt-5 p-4"
			>
				<AccordionSummary
					expandIcon={
						expanded?.panel4 === true ? (
							<div className="pr-24 md:pr-0 flex">
								<Avatar
									variant="rounded"
									alt="Logo"
									src={EditDetails}
									sx={{
										width: 'auto',
										height: '30px',
									}}
									className="flex"
								/>
								<Avatar
									variant="rounded"
									alt="Logo"
									src={Collapse}
									sx={{
										width: 'auto',
										height: '30px',
									}}
									className="flex"
								/>
							</div>
						) : (
							<div className="pr-24 md:pr-0 flex">
								<Avatar
									variant="rounded"
									alt="Logo"
									src={EditDetails}
									sx={{
										width: 'auto',
										height: '30px',
									}}
									className="flex"
								/>
								<Avatar
									variant="rounded"
									alt="Logo"
									src={Expand}
									sx={{
										width: 'auto',
										height: '30px',
									}}
									className="flex"
								/>
							</div>
						)
					}
					aria-controls="panel1a-content"
					id="panel1a-header"
					sx={{
						'& .MuiAccordionSummary-expandIconWrapper': {
							transition: 'none',
							'&.Mui-expanded': {
								transform: 'none',
							},
						},
					}}
				>
					<Typography className="font-Montserrat font-semibold font-medium text-xl">
						Please tell us more about your past and current health
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<div>
						<div className="grid grid-cols-12 mt-10">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-medium text-sm">
								Have you gained or lost more than 5 kg weight in last one year
								other than weight loss program/pregnancy related?
							</div>
							<div className="pl-7 md:pl-2 col-span-1 flex justify-end">
								<ToggleButtonComponent
									checked={toggleChecked}
									onChange={() => {
										setToggleChecked(!toggleChecked);
									}}
									classes={''}
								></ToggleButtonComponent>
							</div>
						</div>
						<div className="grid grid-cols-12 mt-2">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-semibold text-sm">
								I have been using it for 7/8 years
							</div>
						</div>
					</div>

					<div>
						<div className="grid grid-cols-12 mt-10">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-medium text-sm">
								Apart from minor ailments such as colds and flu have you
								received any treatment or have sign and symptom for which
								consulted with any doctor or specialist or undergone surgery or
								been hospitalized in the last 5 years?
							</div>
							<div className="pl-7 md:pl-2 col-span-1 flex justify-end">
								<ToggleButtonComponent
									checked={toggleChecked}
									onChange={() => {
										setToggleChecked(!toggleChecked);
									}}
									classes={''}
								></ToggleButtonComponent>
							</div>
						</div>
						<div className="grid grid-cols-12 mt-2">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-semibold text-sm">
								I have been using it for 7/8 years
							</div>
						</div>
					</div>

					<div className="grid grid-cols-1 mt-10">
						<div className="font-Montserrat font-normal font-medium text-base">
							Have you suffered from or are suffering from any of the following
							signs and symptoms or taken consultation or been advised to
							undergo regular medical consultation/investigations or treatment
							including hospitalization, surgery or advised regular treatment or
							awaiting medical for:
						</div>
					</div>

					<div>
						<div className="grid grid-cols-12 mt-10">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-medium text-sm">
								Diabetes/ Elevated Blood Sugar
							</div>
							<div className="pl-7 md:pl-2 col-span-1 flex justify-end">
								<ToggleButtonComponent
									checked={toggleChecked}
									onChange={() => {
										setToggleChecked(!toggleChecked);
									}}
									classes={''}
								></ToggleButtonComponent>
							</div>
						</div>
						<div className="grid grid-cols-12 mt-2">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-semibold text-sm">
								I have been using it for 7/8 years
							</div>
						</div>
					</div>
					<div>
						<div className="grid grid-cols-12 mt-10">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-medium text-sm">
								Hogh Blood Pressure?
							</div>
							<div className="pl-7 md:pl-2 col-span-1 flex justify-end">
								<ToggleButtonComponent
									checked={toggleChecked}
									onChange={() => {
										setToggleChecked(!toggleChecked);
									}}
									classes={''}
								></ToggleButtonComponent>
							</div>
						</div>
						<div className="grid grid-cols-12 mt-2">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-semibold text-sm">
								I have been using it for 7/8 years
							</div>
						</div>
					</div>

					<div>
						<div className="grid grid-cols-12 mt-10">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-medium text-sm">
								Stroke, Chest Pain, Heart Attack, or any Heart Disease
							</div>
							<div className="pl-7 md:pl-2 col-span-1 flex justify-end">
								<ToggleButtonComponent
									checked={toggleChecked}
									onChange={() => {
										setToggleChecked(!toggleChecked);
									}}
									classes={''}
								></ToggleButtonComponent>
							</div>
						</div>
						<div className="grid grid-cols-12 mt-2">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-semibold text-sm">
								I have been using it for 7/8 years
							</div>
						</div>
					</div>

					<div>
						<div className="grid grid-cols-12 mt-10">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-medium text-sm">
								Asthma or any other respiratory disorder?
							</div>
							<div className="pl-7 md:pl-2 col-span-1 flex justify-end">
								<ToggleButtonComponent
									checked={toggleChecked}
									onChange={() => {
										setToggleChecked(!toggleChecked);
									}}
									classes={''}
								></ToggleButtonComponent>
							</div>
						</div>
						<div className="grid grid-cols-12 mt-2">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-semibold text-sm">
								I have been using it for 7/8 years
							</div>
						</div>
					</div>

					<div>
						<div className="grid grid-cols-12 mt-10">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-medium text-sm">
								{
									"Epilepsy, paralysis, parkinson's disease, multiple sclerosis or any other Nervous Disorder?"
								}
							</div>
							<div className="pl-7 md:pl-2 col-span-1 flex justify-end">
								<ToggleButtonComponent
									checked={toggleChecked}
									onChange={() => {
										setToggleChecked(!toggleChecked);
									}}
									classes={''}
								></ToggleButtonComponent>
							</div>
						</div>
						<div className="grid grid-cols-12 mt-2">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-semibold text-sm">
								I have been using it for 7/8 years
							</div>
						</div>
					</div>

					<div>
						<div className="grid grid-cols-12 mt-10">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-medium text-sm">
								Liver disease, gall bladder disease or any other digestive ?{' '}
							</div>
							<div className="pl-7 md:pl-2 col-span-1 flex justify-end">
								<ToggleButtonComponent
									checked={toggleChecked}
									onChange={() => {
										setToggleChecked(!toggleChecked);
									}}
									classes={''}
								></ToggleButtonComponent>
							</div>
						</div>
						<div className="grid grid-cols-12 mt-2">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-semibold text-sm">
								I have been using it for 7/8 years
							</div>
						</div>
					</div>

					<div>
						<div className="grid grid-cols-12 mt-10">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-medium text-sm">
								Kidney/Bladder disease?
							</div>
							<div className="pl-7 md:pl-2 col-span-1 flex justify-end">
								<ToggleButtonComponent
									checked={toggleChecked}
									onChange={() => {
										setToggleChecked(!toggleChecked);
									}}
									classes={''}
								></ToggleButtonComponent>
							</div>
						</div>
						<div className="grid grid-cols-12 mt-2">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-semibold text-sm">
								I have been using it for 7/8 years
							</div>
						</div>
					</div>

					<div>
						<div className="grid grid-cols-12 mt-10">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-medium text-sm">
								Anaemia, Thalassemia or any other Blood Disorder?
							</div>
							<div className="pl-7 md:pl-2 col-span-1 flex justify-end">
								<ToggleButtonComponent
									checked={toggleChecked}
									onChange={() => {
										setToggleChecked(!toggleChecked);
									}}
									classes={''}
								></ToggleButtonComponent>
							</div>
						</div>
						<div className="grid grid-cols-12 mt-2">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-semibold text-sm">
								I have been using it for 7/8 years
							</div>
						</div>
					</div>

					<div>
						<div className="grid grid-cols-12 mt-10">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-medium text-sm">
								Thyroid or any other Endocrine disorder?
							</div>
							<div className="pl-7 md:pl-2 col-span-1 flex justify-end">
								<ToggleButtonComponent
									checked={toggleChecked}
									onChange={() => {
										setToggleChecked(!toggleChecked);
									}}
									classes={''}
								></ToggleButtonComponent>
							</div>
						</div>
						<div className="grid grid-cols-12 mt-2">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-semibold text-sm">
								I have been using it for 7/8 years
							</div>
						</div>
					</div>

					<div>
						<div className="grid grid-cols-12 mt-10">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-medium text-sm">
								Anxiety, Depression or any other Mental Disorder requiring
								treatment with antidepressant?
							</div>
							<div className="pl-7 md:pl-2 col-span-1 flex justify-end">
								<ToggleButtonComponent
									checked={toggleChecked}
									onChange={() => {
										setToggleChecked(!toggleChecked);
									}}
									classes={''}
								></ToggleButtonComponent>
							</div>
						</div>
						<div className="grid grid-cols-12 mt-2">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-semibold text-sm">
								I have been using it for 7/8 years
							</div>
						</div>
					</div>

					<div>
						<div className="grid grid-cols-12 mt-10">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-medium text-sm">
								You or your spouse ever been tested positive or received medical
								advice or treatment or considering to undergo test or awaiting
								test sults for HIV/AIDS, Hepatitis (Other than Hepatitis A and
								E), Alcoholic Liver Disease or any Sexually Transmitted
								Diseases?{' '}
							</div>
							<div className="pl-7 md:pl-2 col-span-1 flex justify-end">
								<ToggleButtonComponent
									checked={toggleChecked}
									onChange={() => {
										setToggleChecked(!toggleChecked);
									}}
									classes={''}
								></ToggleButtonComponent>
							</div>
						</div>
						<div className="grid grid-cols-12 mt-2">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-semibold text-sm">
								I have been using it for 7/8 years
							</div>
						</div>
					</div>

					<div>
						<div className="grid grid-cols-12 mt-10">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-medium text-sm">
								Are there any other health conditions not mentioned above which
								you would like to inform us?
							</div>
							<div className="pl-7 md:pl-2 col-span-1 flex justify-end">
								<ToggleButtonComponent
									checked={toggleChecked}
									onChange={() => {
										setToggleChecked(!toggleChecked);
									}}
									classes={''}
								></ToggleButtonComponent>
							</div>
						</div>
						<div className="grid grid-cols-12 mt-2">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-semibold text-sm">
								I have been using it for 7/8 years
							</div>
						</div>
					</div>

					<div>
						<div className="grid grid-cols-12 mt-10">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-medium text-sm">
								Have you undergone or been advised to or considering to undergo
								any medical treatment/ surgical procedure/investigations/
								awaiting test results for cancer, tumour, abnormal growth or
								heart disease like Blood tests, Ultrasound (USG), Colour
								Doppler, Cytology, Echocardiography, ECG, Treadmill/Stress
								Thallium/ Echo, CT Angio, MRI/ CT/PET-Scan, Holter test, Tumour
								markers, Endoscopy, PAP smear, Mammography, Colonoscopy, Biopsy/
								FNAC, Angiography, Angioplasty, Bypass/ any Heart Surgery or
								X-ray etc. other than pre-employment/executive/routine health
								check up?
							</div>
							<div className="pl-7 md:pl-2 col-span-1 flex justify-end">
								<ToggleButtonComponent
									checked={toggleChecked}
									onChange={() => {
										setToggleChecked(!toggleChecked);
									}}
									classes={''}
								></ToggleButtonComponent>
							</div>
						</div>
						<div className="grid grid-cols-12 mt-2">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-semibold text-sm">
								I have been using it for 7/8 years
							</div>
						</div>
					</div>
				</AccordionDetails>
			</Accordion>

			{/* Accordian 5 */}
			<Accordion
				expanded={expanded?.panel5 === true}
				onChange={handleExpand('panel5')}
				square={true}
				classes={{ root: classes.MuiAccordionroot }}
				className="rounded-2xl shadow-none w-10/12 mt-5 p-4"
			>
				<AccordionSummary
					expandIcon={
						expanded?.panel5 === true ? (
							<div className="pr-24 md:pr-0 flex">
								<Avatar
									variant="rounded"
									alt="Logo"
									src={EditDetails}
									sx={{
										width: 'auto',
										height: '30px',
									}}
									className="flex"
								/>
								<Avatar
									variant="rounded"
									alt="Logo"
									src={Collapse}
									sx={{
										width: 'auto',
										height: '30px',
									}}
									className="flex"
								/>
							</div>
						) : (
							<div className="pr-24 md:pr-0 flex">
								<Avatar
									variant="rounded"
									alt="Logo"
									src={EditDetails}
									sx={{
										width: 'auto',
										height: '30px',
									}}
									className="flex"
								/>
								<Avatar
									variant="rounded"
									alt="Logo"
									src={Expand}
									sx={{
										width: 'auto',
										height: '30px',
									}}
									className="flex"
								/>
							</div>
						)
					}
					aria-controls="panel1a-content"
					id="panel1a-header"
					sx={{
						'& .MuiAccordionSummary-expandIconWrapper': {
							transition: 'none',
							'&.Mui-expanded': {
								transform: 'none',
							},
						},
					}}
				>
					<Typography className="font-Montserrat font-semibold font-medium text-xl">
						Please tell us more about your immediate family’s health
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<div>
						<div className="grid grid-cols-12 mt-10">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-medium text-sm">
								Have any of your parents or siblings suffered from or diagnosed
								with any form of tumour, abnormal growth, cyst, cancer, sarcoma,
								CIS (Carcinoma in Situ), diabetes or heart conditions like
								hypertension, coronary artery disease, heart valve disease,
								stroke, Cardiomyopathy, arrhythmia, sudden death, etc prior to
								age of 60 years?
							</div>
							<div className="pl-7 md:pl-2 col-span-1 flex justify-end">
								<ToggleButtonComponent
									checked={toggleChecked}
									onChange={() => {
										setToggleChecked(!toggleChecked);
									}}
									classes={''}
								></ToggleButtonComponent>
							</div>
						</div>
						<div className="grid grid-cols-12 mt-2">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-semibold text-sm">
								I have been using it for 7/8 years
							</div>
						</div>
					</div>
				</AccordionDetails>
			</Accordion>

			{/* Accordian 6 */}

			<Accordion
				expanded={expanded?.panel6 === true}
				onChange={handleExpand('panel6')}
				square={true}
				classes={{ root: classes.MuiAccordionroot }}
				className="rounded-2xl shadow-none w-10/12 mt-5 p-4"
			>
				<AccordionSummary
					expandIcon={
						expanded?.panel6 === true ? (
							<div className="pr-24 md:pr-0 flex">
								<Avatar
									variant="rounded"
									alt="Logo"
									src={EditDetails}
									sx={{
										width: 'auto',
										height: '30px',
									}}
									className="flex"
								/>
								<Avatar
									variant="rounded"
									alt="Logo"
									src={Collapse}
									sx={{
										width: 'auto',
										height: '30px',
									}}
									className="flex"
								/>
							</div>
						) : (
							<div className="pr-24 md:pr-0 flex">
								<Avatar
									variant="rounded"
									alt="Logo"
									src={EditDetails}
									sx={{
										width: 'auto',
										height: '30px',
									}}
									className="flex"
								/>
								<Avatar
									variant="rounded"
									alt="Logo"
									src={Expand}
									sx={{
										width: 'auto',
										height: '30px',
									}}
									className="flex"
								/>
							</div>
						)
					}
					aria-controls="panel1a-content"
					id="panel1a-header"
					sx={{
						'& .MuiAccordionSummary-expandIconWrapper': {
							transition: 'none',
							'&.Mui-expanded': {
								transform: 'none',
							},
						},
					}}
				>
					<Typography className="font-Montserrat font-semibold font-medium text-xl">
						Please indicate the insurance coverage on your parents
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<div>
						<div className="grid grid-cols-12 mt-10">
							<div className="pr-7 md:pr-2 col-span-12  font-Montserrat font-normal font-medium text-sm">
								{
									"Please indicate your Father's total life insurance coverage with statuses inforce, applied applying for and/or lapsed."
								}
							</div>
						</div>
						<div className="grid grid-cols-12 mt-2">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-semibold text-sm">
								I have been using it for 7/8 years
							</div>
						</div>
					</div>
					<div>
						<div className="grid grid-cols-12 mt-10">
							<div className="pr-7 md:pr-2 col-span-12  font-Montserrat font-normal font-medium text-sm">
								{
									"Please indicate your Mother's total life insurance coverage with statuses inforce, applied applying for and/or lapsed."
								}
							</div>
						</div>
						<div className="grid grid-cols-12 mt-2">
							<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-semibold text-sm">
								I have been using it for 7/8 years
							</div>
						</div>
					</div>
				</AccordionDetails>
			</Accordion>

			{/* Accordian 7 */}
			<Accordion
				expanded={expanded?.panel7 === true}
				onChange={handleExpand('panel7')}
				square={true}
				classes={{ root: classes.MuiAccordionroot }}
				className="rounded-2xl shadow-none w-10/12 mt-5 p-4"
			>
				<AccordionSummary
					expandIcon={
						expanded?.panel7 === true ? (
							<div className="pr-24 md:pr-0 flex">
								<Avatar
									variant="rounded"
									alt="Logo"
									src={EditDetails}
									sx={{
										width: 'auto',
										height: '30px',
									}}
									className="flex"
								/>
								<Avatar
									variant="rounded"
									alt="Logo"
									src={Collapse}
									sx={{
										width: 'auto',
										height: '30px',
									}}
									className="flex"
								/>
							</div>
						) : (
							<div className="pr-24 md:pr-0 flex">
								<Avatar
									variant="rounded"
									alt="Logo"
									src={EditDetails}
									sx={{
										width: 'auto',
										height: '30px',
									}}
									className="flex"
								/>
								<Avatar
									variant="rounded"
									alt="Logo"
									src={Expand}
									sx={{
										width: 'auto',
										height: '30px',
									}}
									className="flex"
								/>
							</div>
						)
					}
					aria-controls="panel1a-content"
					id="panel1a-header"
					sx={{
						'& .MuiAccordionSummary-expandIconWrapper': {
							transition: 'none',
							'&.Mui-expanded': {
								transform: 'none',
							},
						},
					}}
				>
					<Typography className="font-Montserrat font-semibold font-medium text-xl">
						Please tell us about travel and residence
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<div className="grid grid-cols-12 mt-10">
						<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-medium text-sm">
							Are you planning to travel in the next one year or reside abroad
							other than on holiday?{' '}
						</div>
						<div className="pl-7 md:pl-2 col-span-1 flex justify-end">
							<ToggleButtonComponent
								checked={toggleChecked}
								onChange={() => {
									setToggleChecked(!toggleChecked);
								}}
								classes={''}
							></ToggleButtonComponent>
						</div>
					</div>
				</AccordionDetails>
			</Accordion>

			<Card className="rounded-2xl shadow-none w-10/12 mt-6">
				<CardContent className="p-8">
					<Typography className="font-Montserrat font-semibold font-medium text-xl">
						Additional Information
					</Typography>

					<div className="w-full mt-10 mb-10">
						<MaxHeightTextarea></MaxHeightTextarea>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default Summary;
