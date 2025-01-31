import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Header from '../Header';

// Mock the lazy-loaded components
jest.mock('./Header/Logo', () => () => <div>Logo</div>);
jest.mock(
  './Header/HamburgerMenu',
  () =>
    ({ onClick }: { onClick: () => void }) => (
      <button onClick={onClick}>Hamburger Menu</button>
    ),
);
jest.mock(
  './Header/UserAvatar',
  () =>
    ({ userName, onClick }: { userName: string; onClick: () => void }) => (
      <div onClick={onClick}>{userName}'s Avatar</div>
    ),
);
jest.mock('./Header/UserDropdown', () => () => <div>User Dropdown</div>);

describe('Header Component', () => {
  test('renders the logo', async () => {
    render(<Header />);

    // Verify the lazy-loaded Logo component is rendered
    await waitFor(() => expect(screen.getByText('Logo')).toBeInTheDocument());
  });

  test('renders navigation links and toggles active state', async () => {
    render(<Header />);

    // Check if the navigation links are rendered
    const homeLink = screen.getByText('Home');
    const faqLink = screen.getByText('FAQ');
    const helpLink = screen.getByText('Help');

    expect(homeLink).toBeInTheDocument();
    expect(faqLink).toBeInTheDocument();
    expect(helpLink).toBeInTheDocument();

    // Click on the Home link
    fireEvent.click(homeLink);

    // Verify that the active link class is applied to Home
    expect(homeLink).toHaveClass('active');

    // Click on FAQ link and verify that the active state changes
    fireEvent.click(faqLink);
    expect(faqLink).toHaveClass('active');
    expect(homeLink).not.toHaveClass('active');
  });

  test('toggles navigation menu visibility on mobile', async () => {
    render(<Header />);

    // Verify that the hamburger menu button is rendered
    const hamburgerButton = screen.getByText('Hamburger Menu');
    expect(hamburgerButton).toBeInTheDocument();

    // Initially, the navigation menu should be closed
    let nav = screen.getByRole('navigation');
    expect(nav).not.toHaveClass('header__nav--open');

    // Click on the hamburger menu to toggle the navigation
    fireEvent.click(hamburgerButton);

    // Verify that the navigation menu opens
    nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('header__nav--open');
  });

  test('toggles user dropdown visibility on avatar click', async () => {
    render(<Header />);

    // Verify that the user avatar is rendered
    const avatar = screen.getByText("John's Avatar");
    expect(avatar).toBeInTheDocument();

    // Initially, the user dropdown should not be visible
    expect(screen.queryByText('User Dropdown')).not.toBeInTheDocument();

    // Click the user avatar to toggle the dropdown
    fireEvent.click(avatar);

    // Verify that the dropdown appears
    expect(screen.getByText('User Dropdown')).toBeInTheDocument();

    // Click the user avatar again to hide the dropdown
    fireEvent.click(avatar);

    // Verify that the dropdown is hidden
    expect(screen.queryByText('User Dropdown')).not.toBeInTheDocument();
  });

  test('does not show user dropdown when not clicked', async () => {
    render(<Header />);

    // Initially, the user dropdown should not be visible
    expect(screen.queryByText('User Dropdown')).not.toBeInTheDocument();
  });

  test('lazy loads components', async () => {
    render(<Header />);

    // Verify that each lazy-loaded component renders
    await waitFor(() => {
      expect(screen.getByText('Logo')).toBeInTheDocument();
      expect(screen.getByText('Hamburger Menu')).toBeInTheDocument();
      expect(screen.getByText("John's Avatar")).toBeInTheDocument();
    });
  });
});
