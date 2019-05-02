/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  story: {
    id: `${scope}.story`,
    defaultMessage: 'The Story',
  },
  merch: {
    id: `${scope}.merch`,
    defaultMessage: 'Merch',
  },
  people: {
    id: `${scope}.people`,
    defaultMessage: 'P.People',
  },
  game: {
    id: `${scope}.game`,
    defaultMessage: 'P.Game',
  },
});
