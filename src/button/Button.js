import { PropTypes } from 'prop-types';

const Button = ({ onClick, title, className }) => (
  <button type="button" onClick={onClick} className={className}>{title}</button>
);

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => { },
  className: '',
  title: '',
};

export default Button;
