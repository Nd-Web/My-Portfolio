import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

// Mock next-themes
jest.mock('next-themes', () => ({
  ThemeProvider: ({ children }: any) => <>{children}</>,
  useTheme: () => ({ theme: 'dark', setTheme: jest.fn() }),
}));

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}));

describe('Home Page', () => {
  it('renders the skip to content link', () => {
    render(<Home />);
    expect(screen.getByText(/skip to content/i)).toBeInTheDocument();
  });

  it('renders the main content area', () => {
    render(<Home />);
    // ClientLayout renders the main content
    expect(document.querySelector('#main-content')).toBeInTheDocument();
  });
});