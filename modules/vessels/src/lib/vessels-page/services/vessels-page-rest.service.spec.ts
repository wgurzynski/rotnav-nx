import { TestBed } from '@angular/core/testing';
import { VesselsPageRestService } from './vessels-page-rest.service';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';

describe('VesselsPageRestService', () => {
  let service: VesselsPageRestService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(VesselsPageRestService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should invoke getChartData HTTP call', () => {
    service.getRowData().subscribe();

    const http: TestRequest = httpMock.expectOne('https://frontendteamfiles.blob.core.windows.net/exercises/vessels.json');

    expect(http.request.method).toBe('GET');
  });
});
