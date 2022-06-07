import { connect } from 'react-redux';
import CounterComponent from './component';

const mapStateToProps = (state:any) => {
  return {
    count: state
  };
};
const mapDispatchToProps = (dispatch:any) => {
  return {
    handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
    handleDecrementClick: () => dispatch({ type: 'DECREMENT' })
  }
};
export const Container = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);