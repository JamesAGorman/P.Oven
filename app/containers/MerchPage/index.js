/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
import Images from './Images';

export default function MerchPage() {
  return (
    <div>
      <Helmet>
        <title>The Merch Page</title>
        <meta
          name="description"
          content="The official and the unofficial p.oven merchandise."
        />
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <List>
        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.introHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.introMessage} />
          </p>
        </ListItem>
      </List>

      <Images></Images>

    </div>
  );
}
