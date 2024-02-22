import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const CustomInput = ({
    id,
    type,
    label,
    variant,
    value,
    textcolor
}) => {
    const inputLabelProps = {
        style: {
            color: 'grey'
        }
    };

    const inputStyles = {
        '& input': {
            color: textcolor
        }
        
    };

    return (
        <TextField
            id={id}
            type={type}
            label={label}
            variant={variant}
            value={value}
            InputLabelProps={inputLabelProps}
            InputProps={{ style: { backgroundColor: 'white' } }}
            sx={inputStyles}
        />
    );
};

CustomInput.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    value: PropTypes.string,
    textcolor: PropTypes.string.isRequired,

};

export default CustomInput;
