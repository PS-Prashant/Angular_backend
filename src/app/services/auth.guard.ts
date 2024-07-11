import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = ( route, state ) => {

  return true;

  const router = inject(Router)

  if ( typeof localStorage !== 'undefined' ) {
    
    const refreshToken  = localStorage.getItem( 'refreshToken' )
  
    if ( !refreshToken ) {
      router.navigate(['/login']);
      return false;
    }
    
  } else {
    return false;
  }
  
  return true;
};
