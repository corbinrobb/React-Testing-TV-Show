import React from 'react';
import { render } from "@testing-library/react";
import Episodes from './Episodes';
import { appTestData } from '../AppTestData';


test("Renders episode cards", async () => {
  const { findAllByTestId } = render(<Episodes episodes={appTestData.data._embedded.episodes} />)

  const episodes = await findAllByTestId(/episode/i);
  expect(episodes).toHaveLength(8);
})