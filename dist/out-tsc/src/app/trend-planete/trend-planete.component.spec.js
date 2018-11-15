import { async, TestBed } from '@angular/core/testing';
import { TrendPlaneteComponent } from './trend-planete.component';
describe('TrendPlaneteComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TrendPlaneteComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TrendPlaneteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=trend-planete.component.spec.js.map