import { EventEmitter } from "@angular/core";

export interface ICAStep
{
  type:string;
  id:string;
  current:boolean;
  disabled:boolean;
  skip:boolean;
  completed:boolean;
  loaded:boolean;

  alreadyLoaded:EventEmitter<any>;
}
