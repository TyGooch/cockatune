import { connect } from 'react-redux';
import User from './user';

import { requestUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const userId = parseInt(ownProps.params.userId);
  const user = state.users[userId] || {};
  return{
    userId,
    user
  };
};

const mapDispatchToProps = dispatch => ({
  requestUser: id => dispatch(requestUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
