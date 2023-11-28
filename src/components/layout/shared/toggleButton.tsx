import { Switch } from '@mui/material';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

interface ToggleButtonProps {
	checked: boolean;
	onChange: () => void;
	classes: string;
}

const useStyles = makeStyles({
	root: {
		width: '53px',
		height: '27px',
		padding: '0px',
	},
	switchBase: {
		color: '#028E8B',
		padding: '1px',
		'&$checked': {
			'& + $track': {
				backgroundColor: '#028E8B',
			},
		},
	},
	thumb: {
		color: 'white',
		width: '22px',
		height: '21px',
		margin: '1px',
	},
	track: {
		borderRadius: '20px',
		backgroundColor: '#028E8B',
		opacity: '1 !important',
		'&:after, &:before': {
			color: 'white',
			fontSize: '11px',
			position: 'absolute',
			top: '6px',
		},
		'&:after': {
			content: "'Yes'",
			left: '5px',
		},
		'&:before': {
			content: "'No'",
			right: '6px',
		},
	},
	checked: {
		color: '#028E8B !important',
		transform: 'translateX(26px) !important',
	},
});

const ToggleButtonComponent: React.FC<ToggleButtonProps> = ({
	checked,
	onChange,
	classes,
}) => {
	const Customclasses = useStyles();

	return (
		<Switch
			classes={{
				root: Customclasses.root,
				switchBase: Customclasses.switchBase,
				thumb: Customclasses.thumb,
				track: Customclasses.track,
				checked: Customclasses.checked,
			}}
			className={`${classes}`}
			checked={checked}
			onChange={onChange}
			name="checkedA"
			inputProps={{ 'aria-label': 'secondary checkbox' }}
		/>
	);
};

export default ToggleButtonComponent;
