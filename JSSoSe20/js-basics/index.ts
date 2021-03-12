// import UserAlias from './module';

// const klaus = new UserAlias();

import { User as UserAlias } from './module';

const klaus = new UserAlias();

if (true) {
  // import User from './module'; - geht nicht!

  const User = import('./module');
}
