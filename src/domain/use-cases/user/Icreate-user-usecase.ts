import { UserStore } from '@/domain/entities';
import { EmailInUseError, InvalidCredentialsError, UnexpectedError } from '@/domain/errors';

export interface ICreateUserUseCase {
  perform: (data: ICreateUserUseCase.Input) => ICreateUserUseCase.Output;
}

export namespace ICreateUserUseCase {
  type OutputField = UnexpectedError | EmailInUseError | InvalidCredentialsError;
  export type Input = UserStore;
  export type Output = Promise<{ id: string } | OutputField>;
}
