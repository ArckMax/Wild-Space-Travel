import { TestBed, inject } from '@angular/core/testing';
import { ShipsService } from './ships.service';
describe('ShipsService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [ShipsService]
        });
    });
    it('should be created', inject([ShipsService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=ships.service.spec.js.map