import { TestBed } from '@angular/core/testing';
import { EmissionsPageRestService } from './emissions-page-rest.service';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';

describe('EmissionsPageRestService', () => {
  let service: EmissionsPageRestService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(EmissionsPageRestService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should invoke getChartData HTTP call', () => {
    service.getEmissionsData().subscribe();

    const http: TestRequest = httpMock.expectOne('https://frontendteamfiles.blob.core.windows.net/exercises/emissions.json');

    expect(http.request.method).toBe('GET');
  });
});
