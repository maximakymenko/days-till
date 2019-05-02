import { createImageLink, truncate } from './utils';
import { TEST_MESSAGE } from '../mocks';

describe('createImageLink', () => {
  it('should return proper image link', () => {
    expect(createImageLink('/Dfe323fg54re344')).toBe(
      'https://image.tmdb.org/t/p/w300_and_h450_bestv2/Dfe323fg54re344',
    );
  });

  it('should return null if no image link', () => {
    expect(createImageLink()).toBe(null);
  });
});

describe('truncate', () => {
  it('should return message with length of 11 signs and 3 dots', () => {
    expect(truncate(TEST_MESSAGE, 11)).toBe('Lorem ipsum...');
  });

  it('should return message with length of 22 signs and 3 dots', () => {
    expect(truncate(TEST_MESSAGE, 22)).toBe('Lorem ipsum dolor sit ...');
  });

  it('should return full message if max length is bigger then message', () => {
    expect(truncate(TEST_MESSAGE, 100)).toBe(
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, tenetur.',
    );
  });
});
