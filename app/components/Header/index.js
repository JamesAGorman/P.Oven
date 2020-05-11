import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

function Header() {
  return (
    <div>
      <A href="https://www.instagram.com/p.oven/">
        <Img src={Banner} alt="p.oven-logo" />
      </A>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/story">
          <FormattedMessage {...messages.story} />
        </HeaderLink>
        <HeaderLink to="/merch">
          <FormattedMessage {...messages.merch} />
        </HeaderLink>
        <HeaderLink to="/people">
          <FormattedMessage {...messages.people} />
        </HeaderLink>
        <HeaderLink to="/features">
          <FormattedMessage {...messages.game} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
