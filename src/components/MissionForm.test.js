import { fireEvent, render, screen } from "@testing-library/react"
import MissionForm from "./MissionForm"
import React from 'react'

test('MissionForm renders correctly', () => {
  render(<MissionForm />)
})

test('renders the message when isFetchingData is true', () => {
  render(<MissionForm isFetchingData={true} />) 
  const value = screen.queryByText(/we are fetching data/i)
  expect(value).not.toBeNull()
})

test('renders button when isFetchingData is false', () => {
  render(<MissionForm isFetchingData={false} />)
  const value = screen.queryByRole('button')
  expect(value).not.toBeNull()
})

test('calls getData when button is presses', () => {
  const mockGetData = jest.fn(() => {return('Houston, полёт идёт в штатном режиме!')})
  render(<MissionForm getData={mockGetData} />)
  const button = screen.getByRole('button')
  fireEvent.click(button)
  console.log(mockGetData.mock);
  expect(mockGetData.mock.calls).toHaveLength(1)
})
