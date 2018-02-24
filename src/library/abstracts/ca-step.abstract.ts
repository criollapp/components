import { ICAStep } from "../interfaces/i-ca-step.interface";
import { EventEmitter, Output } from "@angular/core";

export abstract class CAStepAbstract implements ICAStep
{
  public static readonly TYPE_FORM = 'form';

  public type:string;
  public subType:string;
  public id:string;
  public current:boolean;
  public disabled:boolean;
  public skip:boolean;
  public completed:boolean;
  public loaded:boolean;

  @Output() alreadyLoaded:EventEmitter<any> = new EventEmitter();

  constructor( subtype:string, current:boolean = false, disabled:boolean = true, skip:boolean = false, completed:boolean = false )
  {
    this.type = this.getTypeFrom();
    this.id = this.getIdFrom();
    this.current = current;
    this.disabled = disabled;
    this.skip = skip;
    this.completed = completed;
    this.subType = subtype;
    this.loaded = false;
  }

  protected abstract getIdFrom():string;
  protected abstract getTypeFrom():string;
  protected abstract load():void;

  public loadCompleted()
  {
    this.loaded = true;
  }
}
