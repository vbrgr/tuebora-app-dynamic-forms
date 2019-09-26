import { TestBed } from '@angular/core/testing';

import { MenuService } from './menu.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it('should be created', () => {
    const service: MenuService = TestBed.get(MenuService);
    expect(service).toBeTruthy();
  });
});
