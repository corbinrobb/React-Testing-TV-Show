import React from 'react';
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { fetchShow as mockFetchShow } from './api/fetchShow';
import App from './App';
import { appTestData } from './AppTestData';

jest.mock("./api/fetchShow");

test("Renders episode cards from API when clicked", async () => {
  await mockFetchShow.mockResolvedValueOnce(appTestData);

  const { getAllByTestId, findByText, getAllByRole } = render(<App />);

  const dropdown = await findByText(/select a season/i);
  userEvent.click(dropdown);

  const seasons = getAllByRole(/option/i);
  expect(seasons).toHaveLength(1);
  expect(seasons[0]).toHaveTextContent(/season 3/i);
  
  userEvent.click(seasons[0]);

  const episodes = await getAllByTestId(/episode/i);

  expect(episodes).toHaveLength(8);
})