import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

class Event {
  constructor(public eventType: string, public data: any) {
  }
}

@Injectable()
export class EventBusService {

  private _messages$ = new Subject<Event>();

  emit(eventType: string, data: any) {
    this._messages$.next(new Event(eventType, data));
  }

  observe(eventType: string) {
    return this._messages$
      .filter(event => event.eventType == eventType)
      .map(event => event.data);
  }

}
