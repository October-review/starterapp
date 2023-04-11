# Onesource: DayOne Starter Application

## List of our components

Accordion 🚧

Avatar 🚧

Button

### Cards

Dash Card

Card

### Other

Snackbar

Spinner

Info-block

Progress Indicators (linear, circular)

Tags

Carousel 🚧

File upload 🚧

Tables 🚧

Tooltips 🚧

### Dialogs

Confirm Dialog (Standard)

Customized Dialog 🚧

Input dialog  🚧

Currency dialog  🚧

### Page

Header

Footer

### Navigation

Stepper

Tabs🚧

### Inputs  🚧

Autocomplete

Date picker

Multi-select

Select

Text area

Text input

Time picker

### Inputs - specific  🚧

Account number

Bank

Country

Currency

Currency picker

OTP

Phone number

### Inputs - controls  🚧

Radio buttons

Checkbox

Toggle

## View the change log here

 [Change Log](https://main--63fc7f3b844506bc228d6b28.chromatic.com/?path=/story/change-log--page)

## Requirements  

- Angular Material (v12-lts and v14-lts recommended)
- Bootstrap (v5 recommended)
- Node.js (v16 recommended)

## Installation

1. Simply install @onesource from Nexus:

 ```bash
 @onesource/angular@1.0.7-beta  
```

2. After installing the package, navigate to the package in the node_modules folder inside the project. Then copy the assets folder to the assets directory under src directory.

3. Import the colour palette into the project's angular.json file:

```json
"styles": [
    "node_modules/bootstrap/scss/bootstrap.scss",
    "src/styles.scss",
    "@onesource/angular/themes/blueprint/_index.scss"  
],  
```

After you have completed the above steps, you will now have your:
  
- Environment set up  
- OneSource / Angular package installed
- Global colour pallet and icons accessible

## Usage  

1. Within your app.module.ts, import the selected component (see the buttons component example below)

```typescript
import { ButtonModule } from '@onesource/angular/cib-stories/button';
```

2. Include the ButtonModule as an import in the imports section of the module

```typescript
   imports: [
        BrowserModule,
        CommonModule,
        ButtonModule,
    
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

```

3. To consume the button in your component, include it in the components html template  

```bash
<onesource-button
      class="Primary"
      labelText="TASK EXAMPLE"
      [withIcon]="true"
      iconPosition="Right"
      iconName="icn_chevron_right"
      buttonSize="Small"
      [onColour]="false"
      [disabled]="false"
      (onClick)="goToTaskPage()"
      ></onesource-button>
```

Access the BluePrint reference site [here](https://main--63fc7f3b844506bc228d6b28.chromatic.com)
