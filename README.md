# <center> Test CC  :hammer_and_pick:  </center>

In this repository, I will make a _complexity analysis_ of the code in [main.js](./main.js).

To do so we're going to analyse first, the __Time complexity__

So lets start :rocket:

> The time complexity consists of analysing the time spent during the execution of a give program

__NB: we're gonna calculate the complexity in the worst case__

### addRice() function
#### Time complexity

```javascript
    addRice() {
        this.ricePresent = true; // +1
        console.log('Rice has been added.'); // +1 
    }
``` 
- Reassign a variable (+1)
- Show a text (+!)
- 
So we have: 2, then the time complexity of this function is __O(1): constant__

#### Space complexity


### delaySync() function
#### Time complexity

```javascript
    delaySync(ms) {
    const start = Date.now();
    while (Date.now() - start < ms) {
    }
}
```
- 1 variable assignment
- 1 subtraction and 1 comparison = 2 
- 1 while loop 
- no instruction in loop

So the time complexity of this function is: __1 + n(2) = O(n)__
> Time complexity: __O(n) linear__


### CookRice() function
#### Time complexity

```javascript
    cookRice() {
    if (this.ricePresent && !this.riceCooked) {
        console.log('Cooking rice...');
        this.delaySync(1500);
        this.riceCooked = true;
        console.log('The rice has been cooked!');
    }
    if (!this.ricePresent) {
        console.log('Cannot cook. The rice cooker is empty.');
    }
    if(this.riceCooked) {
        console.log('The rice is already cooked.');
    }
}
```
- 2 comparisons
- 2 text showing
- 1 call of function 
- 1 reassignment

So the time complexity of this function is: __2 + 2 + n + 1 = O(n)__
> Time complexity: __O(n) linear__

### steam() function
#### Time complexity


```javascript
    steam() {
    if (this.ricePresent && !this.steamingInProgress) {
        console.log('Steaming in progress...');
        this.steamingInProgress = true;
        this.delaySync(1500);
        this.steamingInProgress = false;
        console.log('Steaming completed!');
    }
    if (!this.ricePresent) {
        console.log('Cannot steam. The rice cooker is empty.');
    }
    console.log('Steaming is already in progress.');
}
```

- 2 conditions
- 1 text showing
- 2 variable reassigning
- 1 call of another function 

So the time complexity of this function is: __2 + 1 + 1 + n + 1 + 1 = O(n)__
> Time complexity: __O(n) linear__

### keepWarm() function 
#### Time complexity

```javascript
    keepWarm() {
    if (this.ricePresent && this.riceCooked && !this.heatingInProgress) {
        console.log('The rice is now being kept warm.');
        this.heatingInProgress = true;
    } else if (!this.ricePresent) {
        console.log('Cannot keep warm. The rice cooker is empty.');
    } else if (!this.riceCooked) {
        console.log('Cannot keep warm. The rice is not cooked.');
    }
    console.log('Keeping warm is already in progress.');
}
```
- 3 conditions
- 1 text showing 
- 1 variable reassigning

So the time complexity of this function is: __3 = O(1)__
> Time complexity: __O(n) constant__

### RemoveRice() function
```javascript
    removeRice() {
    if (this.ricePresent && this.riceCooked) {
        this.ricePresent = false;
        this.riceCooked = false;
        this.steamingInProgress = false;
        this.heatingInProgress = false;
        console.log('The rice has been removed from the rice cooker.');
    }
    console.log('There\'s no rice to remove or it is not cooked yet.');
}
```

- 2 conditions
- 4 variable reassigning
- 2 text showing

So the time complexity of this function is: __8 = O(1)__
> Time complexity: __O(n) constant__

### simulateRiceCooker() function
```javascript
    export function simulateRiceCooker() {
    displayMenu();
    let input = +prompt('Enter your choice: ');

    switch(input){
        case 1:
            riceCooker.addRice()
        case 2:
            cookRice();
        case 3:
            steam();
        case 4:
            keepWarm();
        case 5:
            removeRice();
        case 6:
            console.log('Thank you for using the Rice Cooker Simulator. Goodbye!');
            break;
    }

    console.log("Invalid input");
    simulateRiceCooker();
```

- Let suppose the display menu has a __constant__ complexity (O(1))
- 1 variables assignment
- 1 call of function

So the time complexity of this function is: __3 + O(1) = O(1)__
> Time complexity: __O(n) constant__
