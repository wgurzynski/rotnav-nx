import { inject, Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { catchError, EMPTY, Observable } from 'rxjs';
import { MessageService } from 'primeng/api';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  private readonly messageService: MessageService = inject(MessageService);

  intercept(request: HttpRequest<never>, next: HttpHandler): Observable<HttpEvent<HttpErrorResponse>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg: string;
        if (error.error instanceof ErrorEvent) {
          errorMsg = `Error: ${error.error.message}`;
        } else {
          errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        }
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: errorMsg,
        });

        return EMPTY;
      })
    );
  }
}
