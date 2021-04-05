import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export const Arrow = ({ onClick, direction }) => {
  return direction === 'next' ? (
    <StyledArrowForwardIosIcon className="slick-next" onClick={onClick} />
  ) : (
    <StyledArrowBackIosIcon className="slick-prev" onClick={onClick} />
  );
};

export const StyledArrowForwardIosIcon = withStyles({
  root: {
    fill: '#E10050',
    fontSize: '3rem',
  },
})(ArrowForwardIosIcon);

export const StyledArrowBackIosIcon = withStyles({
  root: {
    fill: '#E10050',
    fontSize: '3rem',
  },
})(ArrowBackIosIcon);

Arrow.propTypes = {
  onClick: PropTypes.func,
  direction: PropTypes.string,
};
