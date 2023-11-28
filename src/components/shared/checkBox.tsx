import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import React from 'react';

interface ToggleButtonProps {
	label: string;
	onChange: () => void;
	checked: boolean;
	classes: string;
}

const CheckBoxComponent: React.FC<ToggleButtonProps> = ({
	label,
	onChange,
	checked,
	classes,
}) => {
	return (
		<FormControlLabel
			className={`${classes}`}
			control={
				<Checkbox
					checked={checked}
					onChange={onChange}
					sx={{
						color: '#028E8B',
						'&.Mui-checked': {
							color: '#028E8B',
						},
					}}
				/>
			}
			label={
				<Typography className="font-Montserrat font-semibold font-medium text-sm">{`${label}`}</Typography>
			}
		/>
	);
};

export default CheckBoxComponent;
