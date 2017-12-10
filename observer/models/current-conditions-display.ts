import { Subject } from './subject';
import { Observer } from './observer';
import { DisplayElement } from './display-element';

export class CurrentConditionsDisplay implements Observer, DisplayElement {

  private weatherData: Subject;
  private data: any;

  constructor(private _weatherData: Subject) {
    this.weatherData = _weatherData;
    this.weatherData.registerObserver(this);
  }

  public update(data): void {
    this.data = data;
    this.display();
  }

  public display(): void {
    document.getElementById('display').innerText = this.data;

  }
}
