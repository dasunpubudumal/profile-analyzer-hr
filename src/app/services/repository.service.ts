import { Injectable } from '@angular/core';
import {Repository} from '../models/repository';

@Injectable()
export class RepositoryService {

  protected repository: Repository;

  constructor() { }

  public getPercentages(repository: Repository) {
    // Take the % of repos according to languages
  }



}
