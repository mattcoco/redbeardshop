// en next es la siguiente función de middleware, esto nos permite pasar errores a nuestro middleware de errores en lugar de llamar a next(err) directamente o usar try/catch
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;
