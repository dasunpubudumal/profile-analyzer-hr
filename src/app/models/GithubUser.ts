import {OnChanges, OnInit} from '@angular/core';
import {Repository} from './repository';

export class User implements OnInit, OnChanges {

  private _login: string;
  private _html_url: string;
  private _name: string;
  private _company: string;
  private _blog: string;
  private _location: string;
  private _email: string;
  private _hireable: boolean;
  private _bio: string;
  private _public_repos: number;
  private _public_gists: number;
  private _followers: number;
  private _following: number;
  private _created_at: string;
  private _registered_date: string;
  private _data: any;
  private _id: string;
  private _avatar_url: string;
  private _repositories: any[];

  set data(value: any) {
    this._data = value;
  }

  set repositories(value: any[]) {
    this._repositories = value;
  }

  get login(): string {
    return this._login;
  }

  get id(): string {
    return this._id;
  }

  get avatar_url(): string {
    return this._avatar_url;
  }

  get html_url(): string {
    return this._html_url;
  }

  get name(): string {
    return this._name;
  }

  get company(): string {
    return this._company;
  }

  get blog(): string {
    return this._blog;
  }

  get location(): string {
    return this._location;
  }

  get email(): string {
    return this._email;
  }

  get hireable(): boolean {
    return this._hireable;
  }

  get bio(): string {
    return this._bio;
  }

  get public_repos(): number {
    return this._public_repos;
  }

  get public_gists(): number {
    return this._public_gists;
  }

  get followers(): number {
    return this._followers;
  }

  get following(): number {
    return this._following;
  }

  get created_at(): string {
    return this._created_at;
  }

  get registered_date(): string {
    return this._registered_date;
  }

  get repositories(): any[] {
    return this._repositories;
  }

  get data(): any {
    return this._data;
  }




  ngOnInit(): void {}

  ngOnChanges(): void {}

  constructor() {
  }

}
