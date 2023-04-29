import { useState } from 'react';
import PropsType from 'prop-types';

const Result = ({ total, next }) => {
  const [result, setResult] = useState('0');
  function updateResult() {
    if (next) {
      return next;
    }
    if (total) {
      return total;
    }
    return '0';
  }
  setResult(updateResult(total, next));
  return (
    <div className="result">{result}</div>
  );
};
export default Result;

Result.propTypes = {
  total: PropsType.string.isRequired,
  next: PropsType.string.isRequired,
};
