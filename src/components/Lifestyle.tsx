import React, { useState } from 'react';
import ButtonComponent from './layout/shared/Button';
import { Avatar, Box, Card, CardContent, Chip, TextField } from '@mui/material';
import ToggleButtonComponent from './layout/shared/toggleButton';
import CheckBoxComponent from './layout/shared/checkBox';
import CloseIcon from '@mui/icons-material/Close';
import AddDetail from '../assets/images/addDetails.svg';
import EditIcon from '../assets/images/PencilSimple.svg';
import DeleteIcon from '../assets/images/TrashSimple.svg';

const Lifestyle = () => {
	const [toggleChecked, setToggleChecked] = useState(false);
	const [checkBoxChecked, setcheckBoxChecked] = useState(false);

	const [personName, setPersonName] = React.useState<string[]>([]);

	const handleChange = (event: { target: { value: string } }) => {
		console.log(event);
		setPersonName([...personName, event.target.value]);
		console.log(personName);
	};
	const handleDelete = (item: string) => {
		const chipsAferDeletion: string[] = personName.filter(
			(val: string) => val !== item
		);
		setPersonName(chipsAferDeletion);
	};

	return (
		<div className="flex flex-col items-center justify-center p-8">
			<Card className="rounded-2xl shadow-none w-10/12">
				<CardContent className="p-8">
					<div className="grid grid-cols-1">
						<div className="font-Montserrat font-semibold font-medium text-xl">
							Please tell us more about your hobbies
						</div>
					</div>
					<div className="grid grid-cols-1 mt-10">
						<div className="font-Montserrat font-normal font-medium text-base">
							Do you take part or intend to take part in parachuting/ gliding/
							diving/ mountaineering/ climbing/ racing/ riding/martial
							arts/hunting/ bungee-jumping/ flying other than as a bonafide
							passenger/or any other hazardous pastimes?{' '}
						</div>
					</div>
					<div className="grid grid-cols-12 mt-10">
						<div className="col-span-11  font-Montserrat font-normal font-medium text-sm">
							Diving (e.g. Skin diving, SCUBA diving or Free diving)
						</div>
						<div className="col-span-1 flex justify-end">
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
							<div className="col-span-11  font-Montserrat font-normal font-medium text-sm">
								Motor Sports (eg. Circuit racing, Karting, Stock car racing etc)
								or Power Boat Sports
							</div>
							<div className="col-span-1 flex justify-end">
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
							<div className="col-span-3">
								<CheckBoxComponent
									label={'Motor Car Racing'}
									onChange={() => {
										setcheckBoxChecked(!checkBoxChecked);
									}}
									checked={checkBoxChecked}
									classes={''}
								></CheckBoxComponent>
							</div>
							<div className="col-span-3">
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
							<div className="col-span-11  font-Montserrat font-normal font-medium text-sm">
								Mountaineering (e.g. trekking, mountaineering etc) or Climbing
								Sports (e.g. bouldering, ice climbing, indoor climbing etc)
							</div>
							<div className="col-span-1 flex justify-end">
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
							<div className="col-span-3">
								<CheckBoxComponent
									label={'Mountain Climbing'}
									onChange={() => {
										setcheckBoxChecked(!checkBoxChecked);
									}}
									checked={checkBoxChecked}
									classes={''}
								></CheckBoxComponent>
							</div>
							<div className="col-span-3">
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
							<div className="col-span-11  font-Montserrat font-normal font-medium text-sm">
								Parachuting or Paragliding
							</div>
							<div className="col-span-1 flex justify-end">
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
							<div className="col-span-3">
								<CheckBoxComponent
									label={'Parachuting'}
									onChange={() => {
										setcheckBoxChecked(!checkBoxChecked);
									}}
									checked={checkBoxChecked}
									classes={''}
								></CheckBoxComponent>
							</div>
							<div className="col-span-3">
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
							<div className="col-span-11  font-Montserrat font-normal font-medium text-sm">
								Sailing
							</div>
							<div className="col-span-1 flex justify-end">
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
							<div className="col-span-12">
								<TextField
									onBlur={handleChange}
									id="outlined-basic"
									label="Outlined"
									variant="outlined"
									className="w-5/12"
								/>
								<div className="flex col-span-12 py-3">
									{personName.map((selected, ind) => (
										<Box key={ind} className="flex flex-wrap gap-0.5">
											<Chip
												className="bg-bashful mx-1 font-Montserrat font-medium"
												key={selected}
												label={selected}
												deleteIcon={
													<CloseIcon
														className="w-3.5"
														style={{ color: '#000' }}
													/>
												}
												onDelete={() => handleDelete(selected)}
											/>
										</Box>
									))}
								</div>
							</div>
						</div>
					</div>

					<div>
						<div className="grid grid-cols-12 mt-10">
							<div className="col-span-11  font-Montserrat font-normal font-medium text-sm">
								Others
							</div>
							<div className="col-span-1 flex justify-end">
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
							<div className="col-span-12">
								<TextField
									onBlur={handleChange}
									id="outlined-basic"
									label="Outlined"
									variant="outlined"
									className="w-5/12"
								/>
								<div className="flex col-span-12 py-3">
									{personName.map((selected, ind) => (
										<Box key={ind} className="flex flex-wrap gap-0.5">
											<Chip
												className="bg-bashful mx-1 font-Montserrat font-medium"
												key={selected}
												label={selected}
												deleteIcon={
													<CloseIcon
														className="w-3.5"
														style={{ color: '#000' }}
													/>
												}
												onDelete={() => handleDelete(selected)}
											/>
										</Box>
									))}
								</div>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card className="rounded-2xl shadow-none w-10/12 mt-5">
				<CardContent className="p-8">
					<div className="grid grid-cols-1">
						<div className="font-Montserrat font-semibold font-medium text-xl">
							Please tell us more about your lifestyle
						</div>
					</div>
					<div className="grid grid-cols-1 mt-10">
						<div className="font-Montserrat font-normal font-medium text-base">
							Do you consume or have you ever consumed or been advised to quit
							narcotics, drugs, psychotropic substances, alcohol and tobacco
							consumption in any form?
						</div>
					</div>

					<div>
						<div className="grid grid-cols-12 mt-10">
							<div className="col-span-11  font-Montserrat font-normal font-medium text-sm">
								Tobacco (e.g. Cigarette, Bidi, Cigar and/or PanMasala)
							</div>
							<div className="col-span-1 flex justify-end">
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
							<div className="col-span-12">
								<TextField
									onBlur={handleChange}
									id="outlined-basic"
									label="Outlined"
									variant="outlined"
									className="w-5/12"
								/>
								<div className="flex col-span-12 py-3">
									{personName.map((selected, ind) => (
										<Box key={ind} className="flex flex-wrap gap-0.5">
											<Chip
												className="bg-bashful mx-1 font-Montserrat font-medium"
												key={selected}
												label={selected}
												deleteIcon={
													<CloseIcon
														className="w-3.5"
														style={{ color: '#000' }}
													/>
												}
												onDelete={() => handleDelete(selected)}
											/>
										</Box>
									))}
								</div>
							</div>
						</div>
					</div>

					<div>
						<div className="grid grid-cols-12 mt-10">
							<div className="col-span-11  font-Montserrat font-normal font-medium text-sm">
								Alcohol (e.g. Beer, Wine and/or Hard Liquor)
							</div>
							<div className="col-span-1 flex justify-end">
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
							<div className="col-span-12">
								<TextField
									onBlur={handleChange}
									id="outlined-basic"
									label="Outlined"
									variant="outlined"
									className="w-5/12"
								/>
								<div className="flex col-span-12 py-3">
									{personName.map((selected, ind) => (
										<Box key={ind} className="flex flex-wrap gap-0.5">
											<Chip
												className="bg-bashful mx-1 font-Montserrat font-medium"
												key={selected}
												label={selected}
												deleteIcon={
													<CloseIcon
														className="w-3.5"
														style={{ color: '#000' }}
													/>
												}
												onDelete={() => handleDelete(selected)}
											/>
										</Box>
									))}
								</div>
							</div>
						</div>
					</div>

					<div>
						<div className="grid grid-cols-12 mt-10">
							<div className="col-span-11  font-Montserrat font-normal font-medium text-sm">
								Drugs that are not prescribed bydoctore (e.g. Tranqillsers,
								Stimulants, Narcotics etc.)
							</div>
							<div className="col-span-1 flex justify-end">
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
							<div className="col-span-3">
								<CheckBoxComponent
									label={'Tranquillsers'}
									onChange={() => {
										setcheckBoxChecked(!checkBoxChecked);
									}}
									checked={checkBoxChecked}
									classes={''}
								></CheckBoxComponent>
							</div>
							<div className="col-span-3">
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
							<div className="col-span-12 grid grid-cols-12">
								<div className="col-span-7">
									<TextField
										onBlur={handleChange}
										id="outlined-basic"
										label="Outlined"
										variant="outlined"
										className="w-full"
									/>
								</div>
								<div
									className="col-span-4 ml-5"
									style={{ display: 'flex', alignItems: 'center' }}
								>
									<Avatar
										variant="rounded"
										alt="Logo"
										src={AddDetail}
										sx={{
											width: '25px',
											height: '25px',
										}}
										className="flex"
									/>
									<span className="flex text-vivid-orange ml-3">
										Add Details
									</span>
								</div>
							</div>
						</div>

						<div className="grid grid-cols-12 mt-10">
							<div className="col-span-11  font-Montserrat font-normal font-semibold text-sm">
								I have been using it for 7/8 years
							</div>
							<div
								className="col-span-1"
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'flex-end',
								}}
							>
								<Avatar
									variant="rounded"
									alt="Logo"
									src={EditIcon}
									sx={{
										width: '25px',
										height: '25px',
									}}
									className="flex"
								/>
								<Avatar
									variant="rounded"
									alt="Logo"
									src={DeleteIcon}
									sx={{
										width: '25px',
										height: '25px',
									}}
									className="flex"
								/>
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
							<div className="col-span-12 grid grid-cols-12">
								<div className="col-span-7">
									<TextField
										onBlur={handleChange}
										id="outlined-basic"
										label="Outlined"
										variant="outlined"
										className="w-full"
									/>
								</div>
								<div
									className="col-span-4 ml-5"
									style={{ display: 'flex', alignItems: 'center' }}
								>
									<Avatar
										variant="rounded"
										alt="Logo"
										src={AddDetail}
										sx={{
											width: '25px',
											height: '25px',
										}}
										className="flex"
									/>
									<span className="flex text-vivid-orange ml-3">
										Add Details
									</span>
								</div>
							</div>
						</div>

						<div className="grid grid-cols-12 mt-10">
							<div className="col-span-11  font-Montserrat font-normal font-semibold text-sm">
								I have been using it for 7/8 years
							</div>
							<div
								className="col-span-1"
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'flex-end',
								}}
							>
								<Avatar
									variant="rounded"
									alt="Logo"
									src={EditIcon}
									sx={{
										width: '25px',
										height: '25px',
									}}
									className="flex"
								/>
								<Avatar
									variant="rounded"
									alt="Logo"
									src={DeleteIcon}
									sx={{
										width: '25px',
										height: '25px',
									}}
									className="flex"
								/>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

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
					onClick={() => {}}
					classes="ml-3"
				/>
			</div>
		</div>
	);
};

export default Lifestyle;
