import { TextField, Avatar } from '@mui/material';
import React from 'react';
import ToggleButtonComponent from './toggleButton';
import AddDetail from '../../assets/images/addDetails.svg';
import EditIcon from '../../assets/images/PencilSimple.svg';
import DeleteIcon from '../../assets/images/TrashSimple.svg';

interface ButtonProps {
	toggleChecked: boolean;
	onChange: () => void;
	handleChange: (event: { target: { value: string } }) => void;
	question: string;
}

const AddDetailsInput: React.FC<ButtonProps> = ({
	toggleChecked,
	onChange,
	handleChange,
	question,
}) => {
	return (
		<>
			<div className="py-2.5">
				<div className="grid grid-cols-12 mt-10">
					<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-medium text-sm">
						{question}
					</div>
					<div className="pl-7 md:pl-2 col-span-1 flex justify-end">
						<ToggleButtonComponent
							checked={toggleChecked}
							onChange={onChange}
							classes={''}
						></ToggleButtonComponent>
					</div>
				</div>

				<div className="grid grid-cols-12 mt-2">
					<div className="col-span-12 grid grid-cols-12">
						<div className="col-span-12 md:col-span-7">
							<TextField
								onBlur={handleChange}
								id="outlined-basic"
								label="Enter the details"
								variant="outlined"
								className="w-full"
							/>
						</div>
						<div
							className="col-span-12 mt-4 md:col-span-4 md:ml-5 md:mt-0"
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
							<span className="flex text-vivid-orange ml-3">Add Details</span>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-12 mt-10">
					<div className="pr-7 md:pr-2 col-span-11  font-Montserrat font-normal font-semibold text-sm">
						I have been using it for 7/8 years
					</div>
					<div
						className="pl-7 md:pl-2 col-span-1"
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
		</>
	);
};

export default AddDetailsInput;
