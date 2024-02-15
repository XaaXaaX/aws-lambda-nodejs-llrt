import { ValidationErrors } from "domain/exceptions/validation-errors";

export class Entity<T> {
  public readonly validations = new ValidationErrors();

  constructor(
    public readonly id: T) { }
}