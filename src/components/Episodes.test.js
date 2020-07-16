import React from 'react';
import { render } from "@testing-library/react";
import Episodes from './Episodes';
import { appTestData } from '../AppTestData';
import { BrowserRouter as Router } from 'react-router-dom';


test("Renders episode cards", async () => {
  const { findAllByTestId } = render(<Router><Episodes episodes={appTestData.data._embedded.episodes} /></Router>)
  
  const episodes = await findAllByTestId(/episode/i);
  expect(episodes).toHaveLength(8);
})