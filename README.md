# One UI React Components

Not everything is 100% up to the spec by samsung, See the official One UI page at https://www.samsung.com/global/galaxy/apps/one-ui/

## Getting Started

## Overview

## Buttons
![OneButton ScreenShot](https://github.com/WalkerFrederick/One-UI-react-components/blob/master/src/components/ScreenShots/OneButtonshot.png)

Import OneButton from the components folder. <br>
if you using the button from another component, then just import it from the OneButton folder. 

```javascript

//importing from app.js
import OneButton from './components/OneButton/OneButton'

//importing from another component
import OneButton from './OneButton/OneButton'

```

Every 'OneButton' has 3 props you can pass it
  * name
  * color
  * action
  
Example of a red button...
```javascript
//no action
<OneButton name={'RED BUTTON'} color={'GradientRed'}/>

//with action
let exampleFunction => {console.log('red button')}
<OneButton name={'RED BUTTON'} color={'GradientRed'} action={exampleFunction}/>
```
