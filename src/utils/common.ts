type Element<In, Out> = (arg: In) => Out;
type ElementInput<T> = T extends Element<infer In, unknown> ? In : never;
type ElementOutput<T> = T extends Element<unknown, infer Out> ? Out : never;

type PipeElements<
  Elements extends Element<unknown, unknown>[],
  In
> = Elements extends [infer FirstItem, ...infer Rest]
  ? Rest extends Element<unknown, unknown>[]
    ? [
        Element<In, ElementOutput<FirstItem>>,
        ...PipeElements<Rest, ElementOutput<FirstItem>>
      ]
    : never
  : Elements;
type LastElement<T> = T extends [...unknown[], infer LastItem]
  ? LastItem
  : never;
type PipeReturn<Elements extends unknown[]> = ElementOutput<
  LastElement<Elements>
>;

export const pipe =
  <In, Elements extends Element<unknown, unknown>[]>(
    functions: PipeElements<Elements, In>
  ) =>
  (value: In): PipeReturn<Elements> =>
    functions.reduce<unknown>(
      (currentValue, currentFunction) => currentFunction(currentValue),
      value
    ) as never;
