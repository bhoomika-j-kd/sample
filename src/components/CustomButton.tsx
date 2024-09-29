import PropTypes from 'prop-types';
import { CustomButtonProps } from '../types/CustomButtonProps.type';

export default function CustomButton(props: CustomButtonProps) {
  return (
    <button
      style={{
        backgroundColor: props.color,
        width: props.width,
        height: props.height,
        borderWidth: props.provideBorder ? '2px' : '0px',
        borderRadius: '20px',
      }}
      onClick={props.handleClick}
    >
      {props.text}
    </button>
  );
}

CustomButton.propTypes = {
  text: PropTypes.string,
  color: PropTypes.oneOf(['cadetblue', 'seagreen', 'mistyrose']),
  width: PropTypes.number,
  height: PropTypes.number,
  provideBorder: PropTypes.bool,
  handleClick: PropTypes.func,
};
