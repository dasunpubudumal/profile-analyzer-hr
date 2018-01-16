export class StackOverflowUser {
  private _data: any;
  private _account_id: string;
  private _badge_counts: any;
  private _display_name: string;
  private _link: string;
  private _profile_image: string;
  private _reputation: string;
  private _reputation_change_day: string;
  private _reputation_change_month: string;
  private _reputation_change_quarter: string;
  private _reputation_change_week: string;
  private _reputation_change_year: string;
  private _user_id: string;
  private _user_type: string;


  get data(): any {
    return this._data;
  }

  get account_id(): string {
    return this._account_id;
  }

  get badge_counts(): any {
    return this._badge_counts;
  }

  get display_name(): string {
    return this._display_name;
  }

  get link(): string {
    return this._link;
  }

  get profile_image(): string {
    return this._profile_image;
  }

  get reputation(): string {
    return this._reputation;
  }

  get reputation_change_day(): string {
    return this._reputation_change_day;
  }

  get reputation_change_month(): string {
    return this._reputation_change_month;
  }

  get reputation_change_quarter(): string {
    return this._reputation_change_quarter;
  }

  get reputation_change_week(): string {
    return this._reputation_change_week;
  }

  get reputation_change_year(): string {
    return this._reputation_change_year;
  }

  get user_id(): string {
    return this._user_id;
  }

  get user_type(): string {
    return this._user_type;
  }

  set data(value: any) {
    this._data = value;
  }

  set user_id(value: string) {
    this._user_id = value;
  }
}
