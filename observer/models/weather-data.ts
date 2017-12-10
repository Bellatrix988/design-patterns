import { Subject } from './subject';
import { Observer } from './observer';

export class WeatherData implements Subject {

  public observers: Observer[];
  private data: any;

  constructor() { }

  public registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  public removeObserver(o: Observer): void {
    let ind = this.observers.indexOf(o);
    if (ind != -1) {
      this.observers.slice(ind);
    }
  }

  public notifyObservers(): void {
    this.observers.forEach(item => item.update(this.data));
  }

  public setData(data): void {
    this.data = data;
  }
}
