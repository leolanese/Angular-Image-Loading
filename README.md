# Angular Image Optimisation

> Speed +LCP, Lazy Loads images be default + Automaticly generats Responsive srcsets when sizes is defined

> To activate `NgOptimizedImage`, simply import `NgOptimizedImage` and replace the src attribute of your <img> tag with `ngSrc`

## What NgOptimizedImage does?

`Prioritizing Important Images`: NgOptimizedImage allows you to prioritize the loading of important images, ensuring that the most critical images are rendered first, providing a better perceived loading experience for users.

`Lazy Loading`: NgOptimizedImage employs lazy loading, which means that images are only loaded when they are needed, such as when the user scrolls to the part of the page where the image is located. This can significantly improve the initial page load time.

`Preconnect Link`: NgOptimizedImage can generate `<link rel="preconnect">` tags, which instruct the browser to establish early connections to the image server(s). This can reduce latency and speed up the loading of images.

`Responsive Images`: Correct. NgOptimizedImage automatically generates responsive image variants based on the device's screen size and resolution. This ensures that users receive optimized images tailored to their devices, preventing the delivery of unnecessarily large images, which can slow down the website's performance.


## Ideas

> Default Angular 17+ NgOptimizedImage playground tests
> Configuring an image loader for NgOptimizedImage using Medium
> Configuring an image loader for NgOptimizedImage using unsplash
> @Defer Angular 17+ playground tests

> The image loaders provider pattern is designed to be as simple as possible for the common use case of having only a single image CDN used within a component. However, it's still very possible to manage multiple image CDNs using a single provider.

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---

### :100: <i>Thanks!</i>
#### Now, don't be an stranger. Let's stay in touch!

<a href="https://github.com/leolanese" target="_blank" rel="noopener noreferrer">
  <img src="https://scastiel.dev/api/image/leolanese?dark&removeLink" alt="leolanese’s GitHub image" width="600" height="314" />
</a>

##### :radio_button: Linkedin: <a href="https://www.linkedin.com/in/leolanese/" target="_blank">LeoLanese</a>
##### :radio_button: Twitter: <a href="https://twitter.com/LeoLanese" target="_blank">@LeoLanese</a>
##### :radio_button: Portfolio: <a href="https://www.leolanese.com" target="_blank">www.leolanese.com</a>
##### :radio_button: DEV.to: <a href="https://www.dev.to/leolanese" target="_blank">dev.to/leolanese</a>
##### :radio_button: Blog: <a href="https://www.leolanese.com/blog" target="_blank">leolanese.com/blog</a>
##### :radio_button: Questions / Suggestion / Recommendation: developer@leolanese.com

