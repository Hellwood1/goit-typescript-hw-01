type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};


// Реалізація 'params', з унеможливленням поля 'errors' з типу 'form'.
type Params = Omit<Form, "errors">;