import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

class MockAuthService {
  isAuthenticated() {
    return true;
  }
}

class MockRouter {
  createUrlTree() {
    return {};
  }
}

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthService, useClass: MockAuthService },
        { provide: Router, useClass: MockRouter }
      ]
    });

    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow activation if authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    const result = guard.canActivate({} as any, {} as any);
    expect(result).toBe(true);
  });

  it('should redirect to login if not authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(false);
    const urlTree = router.createUrlTree(['/login']);
    spyOn(router, 'createUrlTree').and.returnValue(urlTree);

    const result = guard.canActivate({} as any, {} as any);
    expect(result).toEqual(urlTree);
  });
});
