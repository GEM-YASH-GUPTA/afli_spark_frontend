import {
	Box,
	Card,
	CardContent,
	Chip,
	FormControl,
	InputLabel,
	MenuItem,
	OutlinedInput,
	Select,
	SelectChangeEvent,
	Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

const names = [
	'Oliver Hansen',
	'Van Henry',
	'April Tucker',
	'Ralph Hubbard',
	'Omar Alexander',
	'Carlos Abbott',
	'Miriam Wagner',
	'Bradley Wilkerson',
	'Virginia Andrews',
	'Kelly Snyder',
];

const Occupation = () => {
	const [personName, setPersonName] = React.useState<string[]>([]);

	const handleChange = (event: SelectChangeEvent<typeof personName>) => {
		const {
			target: { value },
		} = event;
		setPersonName(typeof value === 'string' ? value.split(',') : value);
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
					<Typography
						className="font-Montserrat font-medium text-sm  "
						gutterBottom
					>
						What is your profession?
					</Typography>
					<FormControl sx={{ m: 1, width: 300 }} size="small">
						<InputLabel
							className="font-Montserrat text-sm font-medium"
							id="demo-multiple-chip-label"
						>
							Enter the profession
						</InputLabel>
						<Select
							className="rounded-lg p-1"
							labelId="demo-multiple-chip-label"
							id="demo-multiple-chip"
							multiple
							value={personName}
							onChange={handleChange}
							input={
								<OutlinedInput
									id="select-multiple-chip"
									label="Enter the profession"
								/>
							}
						>
							{names.map((name) => (
								<MenuItem
									className="font-Montserrat text-sm"
									key={name}
									value={name}
								>
									{name}
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<div className="flex flex-wrap w-full gap-y-2    py-3">
						{personName.map((selected, ind) => (
							<Box key={ind} className="flex flex-wrap gap-0.5">
								<Chip
									className="bg-bashful mx-1 font-Montserrat font-medium"
									key={selected}
									label={selected}
									deleteIcon={
										<CloseIcon className="w-3.5" style={{ color: '#000' }} />
									}
									onDelete={() => handleDelete(selected)}
								/>
							</Box>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default Occupation;
