import React, { useState, useEffect, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import GlobalTheme from './globals';
import styled from 'styled-components';
import App from './App';
import { ResetCSS } from './global/resetCSS';
import GithubProvider from './providers/github-provider';

const Providers = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <main>
      <GithubProvider>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <Fragment>
            <GlobalTheme />
            <Container>
              <Title>Github API</Title>
              <ButtonChange onClick={toggleTheme}>
                {theme === 'light' ? 'Apagar' : 'Acender'} 💡
              </ButtonChange>
            </Container>
          </Fragment>
        </ThemeProvider>
        <ResetCSS />
        <App />
      </GithubProvider>
    </main>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 30px;
  margin-left: 15px;
`;

const ButtonChange = styled.button`
  width: 100px;
  height: 40px;
  margin-right: 20px;
  border-radius: 10px;
  font-weight: bold;
`;

export default Providers;
