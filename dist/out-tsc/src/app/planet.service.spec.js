import { TestBed, inject } from '@angular/core/testing';
import { PlanetService } from './planet.service';
describe('PlanetService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [PlanetService]
        });
    });
    it('should be created', inject([PlanetService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=planet.service.spec.js.map