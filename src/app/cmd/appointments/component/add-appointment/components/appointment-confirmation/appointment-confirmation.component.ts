import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from 'src/app/cmd/appointments/Service/appointments.service';
@Component({
  selector: 'app-appointment-confirmation',
  templateUrl: './appointment-confirmation.component.html',
  styleUrls: ['./appointment-confirmation.component.scss']
})
export class AppointmentConfirmationComponent implements OnInit {
  type = 'Appointment';
  PreviousPrescription = 'Click here to open';
  path = 'https://superdr.in/';
  alttext: string = 'first image';
  path1 = 'https://www.pngmart.com/image/317848';
  alttext1: string = 'second image';
  alttext2: string = 'calender';
  nameofthedr = 'JohnDoe';
  specialist = 'Leg Specialist';

  confirmationData: any;
  constructor(private service: AppointmentsService) {}

  ngOnInit(): void {
    this.confirmationData = this.service.GetAppointmentConfirmationData();
    console.log('Confirmation Component', this.confirmationData);
  }
  formatTime(time: string) {
    return time.slice(0, 5);
  }
  setActivePage(pageName: string) {
    localStorage.setItem('activePageName', pageName);
  }
  activePageName: any;
}
