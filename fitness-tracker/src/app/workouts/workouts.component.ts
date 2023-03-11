import { Component, Output } from '@angular/core';

interface Workout {
   name: string;
   description: string;
   duration: number;
   sets: number;
   reps: number;
}

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent {
  @Output()  workouts: Workout[] = [
      {name: 'Pushups', description: 'A basic exercise that works your chest, triceps, and shoulders', duration: 10, sets: 3, reps: 10},
      {name: 'Squats', description: 'A compound that works with your legs, glutes and cores', duration: 15, sets: 4, reps: 6},
      {name: 'Situps', description: 'An abdominal exercise that strengthens your core', duration: 5, sets: 2, reps: 25}
    ]
}
