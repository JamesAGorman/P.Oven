import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import PeoplePage from '../index';

describe('<PeoplePage />', () => {
  it('should render its heading', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <PeoplePage />
      </IntlProvider>,
    );

    expect(firstChild).toMatchSnapshot();
  });
});
