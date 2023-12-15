import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const postDetailGuard: CanActivateFn = (route, state) => {
  const id = Number(route.paramMap.get('id'));
  const router: Router = inject(Router);
  if (isNaN(id) || id < 1) {
    router.navigate(['/posts']);
    return false;
  }
  return true;
};
