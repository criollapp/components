import { ICAStep } from "../interfaces/i-ca-step.interface";
import { CAComponentAbstract } from "./ca-component.abstract";

export abstract class CAStepByStepAbstract extends CAComponentAbstract {

  public static readonly STATUS_FINISHED = 'finished';
  public static readonly STATUS_DISABLED = 'disabled';
  public static readonly STATUS_ENABLED = 'enabled';

  protected _steps: ICAStep[];
  protected _status:string;

  constructor()
  {
    super();

    this.steps = [];
    this.disable();
    this.build();
  }

  protected abstract build():void;

  get status():string
  {
    return this._status;
  }

  get steps():ICAStep[]
  {
    return this._steps;
  }

  set steps( newSteps: ICAStep[] )
  {
    this._steps = newSteps;
  }

  get currentStepNumber():number
  {
    let currentNumber = 0;
    this.steps.forEach(( step:ICAStep, index)=>{
      if(step.current)
      {
        currentNumber = index + 1;
      }
    });
    return currentNumber;
  }

  set currentStepNumber( currentStepNumber: number )
  {
    if( typeof this.getStepByNumber(currentStepNumber) != 'undefined' && !this.getStepByNumber(currentStepNumber).skip )
    {
      this.steps.forEach( ( step: ICAStep, index )=> {
        step.current = index == currentStepNumber - 1;
      });
    }
  }

  public nextStep():void
  {
    if( this.currentStep.completed ) {
      let selected:number = -1;
      this.steps.forEach(( step:ICAStep, index)=>{
        if(!step.skip && index >= this.currentStepNumber && selected < 0)
        {
          selected = index;
          this.currentStepNumber = index + 1;
        }
      });

      if( selected < 0 || (selected+1) == this.currentStepNumber) {
        this.finish();
      }
      else {
        this.currentStepNumber = selected + 1;
      }
    }
  }

  public previousStep():void
  {
    if( this.currentStepNumber != 1 ) {
      let initialCurrentStepNumber:number = this.currentStepNumber;
      this.steps.forEach(( step:ICAStep, index)=>{
        if(!step.skip && ( index + 1 ) < initialCurrentStepNumber)
        {
          this.currentStepNumber = index + 1;
        }
      });
    }
  }

  public getStepByNumber( number:number ):ICAStep
  {
    return this.steps[number-1];
  }

  public enable():void
  {
    this._status = CAStepByStepAbstract.STATUS_ENABLED;
  }

  public disable():void
  {
    this._status = CAStepByStepAbstract.STATUS_DISABLED;
  }

  public finish():void
  {
    this._status = CAStepByStepAbstract.STATUS_FINISHED;
  }

  get currentStep():ICAStep
  {
    return this.getStepByNumber(this.currentStepNumber);
  }

  public addStep( step:ICAStep ):void
  {
    this._steps.push( step );
  }

  public nonSkippedStepCount():number
  {
    let count:number = 0;
    this.steps.forEach((step:ICAStep)=>{
      if(!step.skip)
      {
        count++;
      }
    });
    return count;
  }

  public isCurrentStepTheLast():boolean
  {
    let isTheLast:boolean = true;
    let currentIndex:number = -1;
    this.steps.forEach(( step:ICAStep, index)=>{
      if( step.id == this.currentStep.id )
      {
        currentIndex = index;
      } else if( currentIndex > 0 && !step.skip  ) {
        isTheLast = false;
      }
    });
    return isTheLast;
  }

  public isCurrentStepTheFirst():boolean
  {
    let isTheFirst:boolean = false;
    let stepsBefore:number = 0;
    this.steps.forEach((step:ICAStep)=>{
      if( step.id == this.currentStep.id && stepsBefore == 0 )
      {
        isTheFirst = true;
      }
      if(!step.skip)
      {
        stepsBefore++;
      }
    });
    return isTheFirst;
  }
}
