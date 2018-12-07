// @flow
import styled from '@emotion/styled';
import withFallback from './withFallback';
import textStyles from './textStyles';

const App = styled.div`
  color: ${withFallback(props => props.theme.primary)};
  ${textStyles('foo')};
`;

export default App;
