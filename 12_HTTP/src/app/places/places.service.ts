import { inject, Injectable, signal } from '@angular/core';
import { catchError, map, tap, throwError } from 'rxjs';

import { Place } from './place.model';
import { HttpClient } from '@angular/common/http';

const SERVER_ADDRESS = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private httpClient = inject(HttpClient);
  private userPlaces = signal<Place[]>([]);

  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.fetchPlaces(
      '/places',
      'Something went wrong fetching the places. Please try again later!',
    );
  }

  loadUserPlaces() {
    return this.fetchPlaces(
      '/user-places',
      'Something went wrong fetching your favorite places. Please try again later!',
    ).pipe(
      tap({
        next: (userPlaces) => this.userPlaces.set(userPlaces),
      }),
    );
  }

  addPlaceToUserPlaces(place: Place) {
    const prevPlaces = this.userPlaces();

    if (!prevPlaces.some((currPlace) => currPlace.id === place.id)) {
      this.userPlaces.set([...prevPlaces, place]);
    }

    return this.httpClient
      .put(`${SERVER_ADDRESS}/user-places`, {
        placeId: place.id,
      })
      .pipe(
        catchError((error) => {
          this.userPlaces.set(prevPlaces);
          return throwError(() => new Error('Failed to store selected place'));
        }),
      );
  }

  removeUserPlace(place: Place) {}

  private fetchPlaces(url: string, errorMessage: string) {
    return this.httpClient
      .get<{ places: Place[] }>(`${SERVER_ADDRESS}${url}`)
      .pipe(
        map((resData) => resData.places),
        catchError((error) => {
          console.log(error);
          return throwError(() => new Error(errorMessage));
        }),
      );
  }
}
