import { UserStore } from '@/domain/entities';
import { EmailInUseError, InvalidCredentialsError, UnexpectedError } from '@/domain/errors';

export interface ICreateUserUseCase {
  perform: (data: ICreateUserUseCase.Input) => ICreateUserUseCase.Output;
}

export namespace ICreateUserUseCase {
  export type Input = UserStore;
  export type Output = Promise<{ id: string; token: string } | Error>;
}
