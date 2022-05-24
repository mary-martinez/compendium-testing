import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  it('shows a loading state, then a select and a list of pokemon are rendered', async () => {
    render(<App />);
    screen.getByText(/loading/i);

    await waitForElementToBeRemoved(screen.getByText(/loading/i), {
      timeout: 1000,
    });

    const imgs = screen.getAllByRole('img');
    expect(imgs.length).toEqual(20);
    const filteredFairyOne = screen.getByRole('heading', { name: 'clefairy' });
    expect(filteredFairyOne).toBeInTheDocument();

    const selectBox = screen.getByRole('combobox');
    expect(selectBox).toBeInTheDocument();

    userEvent.selectOptions(selectBox, ['fairy']);
    await waitForElementToBeRemoved(screen.getByText(/butterfree/i), {
      timeout: 1000,
    });
    const filteredFairy = screen.getByRole('heading', { name: 'snubbull' });
    expect(filteredFairy).toBeInTheDocument();
  });
});
