import { HttpStatusCode, IhttpClient } from '@/data/protocols/http-client';
import { ICreateUserUseCase } from '@/domain/use-cases/user';

import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors';

export class CreateUserUseCase implements ICreateUserUseCase {
  private readonly httpClient: IhttpClient;
  private readonly url: string;
  constructor(httpClient: IhttpClient<{ id: string; token: string }>, url: string) {
    this.httpClient = httpClient;
    this.url = url;
  }

  async perform(data: ICreateUserUseCase.Input): ICreateUserUseCase.Output {
    const response = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: data,
    });

    switch (response.statusCode) {
      case HttpStatusCode.badRequest:
        throw new UnexpectedError();

      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();

      case HttpStatusCode.ok:
        return response.body;

      case HttpStatusCode.noContent:
        throw new InvalidCredentialsError();

      default:
        throw new UnexpectedError();
    }
  }
}
