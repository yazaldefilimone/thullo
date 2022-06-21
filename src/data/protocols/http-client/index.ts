export interface IHttpClient {
  post<I = any, O = any>(data: O): Promise<I>;
  get<I = any, O = any>(data: O): Promise<I>;
  delete<I = any, O = any>(data: O): Promise<I>;
  update<I = any, O = any>(data: O): Promise<I>;
}
