/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import PeoplePage from 'containers//PeoplePage/Loadable';
import StoryPage from 'containers//StoryPage/Loadable';
import MerchPage from 'containers//MerchPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import Background from './psnow.jpg';
import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(1024px + 16px * 5);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const BackgroundImage = styled.div`
  background-size: cover;
  background-image: url(${Background});
  background-color: #cccccc;
  height: 1100px;
  background-position: center;
  background-repeat: no-repeat;
`;

export default function App() {
  return (
    <BackgroundImage>
      <AppWrapper>
        <Helmet
          titleTemplate="%s - an oven story"
          defaultTitle="The p.oven Website"
        >
          <meta
            name="description"
            content="A Website for the world famous p.oven"
          />
        </Helmet>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/people" component={PeoplePage} />
          <Route path="/story" component={StoryPage} />
          <Route path="/merch" component={MerchPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <Footer />
        <GlobalStyle />
      </AppWrapper>
    </BackgroundImage>
  );
}
