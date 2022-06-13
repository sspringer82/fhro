import { fireEvent, render, screen } from '@testing-library/react';
import Login from './Login';

describe('Login', () => {
  it('should render correctly', () => {
    render(<Login onLogin={jest.fn()} error={false} />);

    expect(screen.getByTestId('username')).toBeInTheDocument();
    expect(screen.getByTestId('password')).toBeInTheDocument();
    expect(screen.getByTestId('submit-btn')).toBeInTheDocument();
  });

  it('should submit the form correctly', () => {
    const onLogin = jest.fn();
    render(<Login onLogin={onLogin} error={false} />);

    fireEvent.change(screen.getByTestId('username'), {
      target: { value: 'admin' },
    });
    fireEvent.change(screen.getByTestId('password'), {
      target: { value: 'test' },
    });
    fireEvent.click(screen.getByTestId('submit-btn'));

    expect(onLogin).toHaveBeenCalled();
  });

  it('should render the error info', () => {
    render(<Login onLogin={jest.fn()} error={true} />);

    const eb = screen.getByTestId('error-banner');
    expect(eb).toBeInTheDocument();
    expect(eb).toHaveTextContent('☝️🧐🤌 you failed!');
  });
});
