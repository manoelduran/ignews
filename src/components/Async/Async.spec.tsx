import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import React from "react";
import { Async } from ".";

test(' it renders correctly', async () => {
  render(<Async />)
  expect(screen.getByText('Hello World')).toBeInTheDocument()
  await waitForElementToBeRemoved(screen.queryByText('Button'))
})