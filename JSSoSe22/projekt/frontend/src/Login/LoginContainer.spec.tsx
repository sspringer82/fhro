import 'whatwg-fetch';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { fireEvent, render, screen } from '@testing-library/react';
import LoginContainer from './LoginContainer';

const server = setupServer(
  rest.post('http://localhost:3000/auth', (request, response, context) => {
    return response(context.json('xxx'));
  })
);

describe.skip('LoginContainer', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('should login correctly', () => {
    const onLoginSuccess = jest.fn();
    render(<LoginContainer onLoginSuccess={onLoginSuccess} />);

    fireEvent.change(screen.getByTestId('username'), {
      target: { value: 'admin' },
    });
    fireEvent.change(screen.getByTestId('password'), {
      target: { value: 'test' },
    });
    fireEvent.click(screen.getByTestId('submit-btn'));

    expect(onLoginSuccess).toHaveBeenCalled();
  });

  it('should fail to login', () => {});
});
