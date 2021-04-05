import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a user', () => {
    const user = service.authentUser('aLogin', 'aPassword');
    expect(user).not.toBeNull();
    expect(user.login).toBe('aLogin');
  });
});
