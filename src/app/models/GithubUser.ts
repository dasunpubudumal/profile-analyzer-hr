import {OnChanges, OnInit} from '@angular/core';

export class User implements OnInit, OnChanges {

  login: string;
  id: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: boolean;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  registered_date: string;


  ngOnInit(): void {}

  ngOnChanges(): void {}

  constructor() {}

}
