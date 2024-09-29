import PropTypes from 'prop-types';
import { CustomButtonProps2 } from '../types/CustomButtonProps2.type';

export default function CustomButton(props: CustomButtonProps2) {
  return <button style={props.style}>{props.text}</button>;
}

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
};
