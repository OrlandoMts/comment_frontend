export interface ResponseItf<T> {
  ok: boolean;
  msg: string;
  data: T;
}
