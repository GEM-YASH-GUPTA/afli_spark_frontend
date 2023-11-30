import React, { useState } from 'react';
import { Card, CardContent, TextField, Avatar } from '@mui/material';
import ToggleButtonComponent from './shared/toggleButton';
import AddDetail from '../assets/images/addDetails.svg';
import EditIcon from '../assets/images/PencilSimple.svg';
import DeleteIcon from '../assets/images/TrashSimple.svg';

const MedicalHistory = () => {
	const [toggleChecked, setToggleChecked] = useState(false);

	const [personName, setPersonName] = React.useState<string[]>([]);

	const handleChange = (event: { target: { value: string } }) => {
		console.log(event);
		setPersonName([...personName, event.target.value]);
		console.log(personName);
	};

	return (
		<div className="flex flex-col items-center justify-center p-8 over overflow-x-hidden">
			<Card className="rounded-2xl shadow-none w-10/12 mt-5">
				<CardContent className="p-8">
					<div className="grid grid-cols-1">
						<div className="font-Montserrat font-semibold font-medium text-xl">
							Please tell us more about your past and current health
						</div>
					</div>

					<div>
						<div className="grid grid-cols-12 mt-10">
							<div className="col-span-11  font-Montserrat font-normal font-medium text-sm">
								Have you gained or lost more than 5 kg weight in last one year
								other than weight loss program/pregnancy related?
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
		</div>
	);
};

export default MedicalHistory;
