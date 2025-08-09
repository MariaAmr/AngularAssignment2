import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimationOptions, LottieComponent } from "ngx-lottie";

@Component({
  selector: "app-error",
  imports: [LottieComponent, RouterLink, CommonModule],
  templateUrl: "./error.html",
  styleUrl: "./error.css",
})
export class Error {
  lottieOptions: AnimationOptions = {
    path: "https://assets9.lottiefiles.com/packages/lf20_kcsr6fcp.json",
    autoplay: true,
    loop: true,
  };
}
