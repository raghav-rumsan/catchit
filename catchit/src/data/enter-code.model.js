import * as Yup from 'yup';

export class EnterCodeData {
  constructor(code) {}

  static empty() {
    return new EnterCodeData('');
  }
}

export const EnterCodeSchema = Yup.object().shape({
  code: Yup.string().length(6, 'Code must be 6 characters'),
});
