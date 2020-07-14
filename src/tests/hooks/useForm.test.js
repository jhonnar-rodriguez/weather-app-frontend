import { renderHook, act } from '@testing-library/react-hooks';
import useForm from '../../hooks';

describe('Testing useForm custom hook', () => {
  // const weatherResults = useFetch(fireSearch, setFireSearch, setError, { ...searchParams });
  const initialForm = {
    city: 'Bogota',
    metricSystem: 'imperial',
  };

  test('Should return the default form input', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [formValues, handleInputChange] = result.current;

    expect(formValues).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function');
  });

  test('Should change the city input form value ', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'city',
          value: 'London',
        },
      });
    });

    const [formValues] = result.current;
    expect(formValues).toEqual({ ...initialForm, city: 'London' });
  });

});
