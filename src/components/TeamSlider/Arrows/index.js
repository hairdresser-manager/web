import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export const NextArrow = ({ ...props }) => {
  const { onClick } = props;
  return <StyledArrowForwardIosIcon className="slick-next" onClick={onClick} />;
};

export const PrevArrow = ({ ...props }) => {
  const { onClick } = props;
  return <StyledArrowBackIosIcon className="slick-prev" onClick={onClick} />;
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

NextArrow.propTypes = {
  onClick: PropTypes.func,
};

PrevArrow.propTypes = {
  onClick: PropTypes.func,
};
