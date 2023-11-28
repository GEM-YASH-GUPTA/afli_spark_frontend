import Button from '@mui/material/Button';
import React from 'react';

interface ButtonProps {
	variant: 'text' | 'contained' | 'outlined';
	text: string;
	onClick: () => void;
	classes: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({
	variant,
	text,
	onClick,
	classes,
}) => {
	return (
		<Button
			variant={variant}
			className={`${
				variant === 'contained'
					? 'bg-vivid-orange hover:bg-vivid-orange'
					: 'bg-slate-50 text-black border-vivid-orange'
			} ${classes}`}
			onClick={onClick}
			color={variant === 'outlined' ? 'inherit' : 'info'}
		>
			{text}
		</Button>
	);
};

export default ButtonComponent;
