// @flow
import { css } from '@emotion/core';
import withFallback from './withFallback';

const styles = {
  foo: withFallback(
    props => css`
      color: ${props.theme.primary};
    `
  ),
};
const textStyles = () =>
  css`
    ${styles.foo};
  `;

export default textStyles;
