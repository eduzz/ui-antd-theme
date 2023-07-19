import { useEffect } from 'react';
import './reset.css';

const CssReset = () => {
  useEffect(() => {
    const elems = document.querySelectorAll('html,body');
    elems.forEach(el => el.classList.add('--eduzz-ui-antd-theme-reset'));

    return () => {
      elems.forEach(el => el.classList.remove('--eduzz-ui-antd-theme-reset'));
    };
  }, []);

  return null;
};

export default CssReset;
