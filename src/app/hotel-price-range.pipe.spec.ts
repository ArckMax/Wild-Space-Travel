import { HotelPriceRangePipe } from './hotel-price-range.pipe';

describe('HotelPriceRangePipe', () => {
  it('create an instance', () => {
    const pipe = new HotelPriceRangePipe();
    expect(pipe).toBeTruthy();
  });
});
