import { IBlog, NewBlog } from './blog.model';

export const sampleWithRequiredData: IBlog = {
  id: 53708,
  name: 'THX compressing no-volátil',
  handle: 'intranet Balboa',
};

export const sampleWithPartialData: IBlog = {
  id: 82182,
  name: 'Ergonómico',
  handle: 'Rojo Samoa Borders',
};

export const sampleWithFullData: IBlog = {
  id: 6686,
  name: 'Navarra Camiseta end-to-end',
  handle: 'payment Account',
};

export const sampleWithNewData: NewBlog = {
  name: 'Centralizado bluetooth',
  handle: 'Rojo withdrawal Cambridgeshire',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
