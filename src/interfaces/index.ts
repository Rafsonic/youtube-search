export interface InitialiseSagaCall<T> {
  type: string;
  payload: T;
}

export interface SuccessSagaCall<T> {
  type: string;
  payload?: T;
}

export interface FailSagaCall {
  type: string;
  payload?: unknown;
}
