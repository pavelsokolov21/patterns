export function log(fn, ctx = this) {
  return (...args) => console.log(fn.apply(ctx, args));
}
