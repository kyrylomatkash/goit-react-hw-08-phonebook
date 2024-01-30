import PropTypes from 'prop-types';
import { StyledFilter } from './filterstyles';

export const Filter = ({ onChangeFilter }) => {
  return (
    <StyledFilter
      label="Search contacts"
      variant="standard"
      onChange={e => onChangeFilter(e)}
      type="text"
      name="filter"
      fullWidth
      margin="normal"
    />
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};
