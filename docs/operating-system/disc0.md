# Discussion 0 Stuff
## C 
- Statically Typed (type known at compile time)
- Weakly Typed (can cast between types) 

### Types 
- `char, short, int, float` are **primitive types**  

### Pointers vs Arrays 
```C
char* str = "Hello World"; 
str[0] = 'A'; 
// Segfault, assignment to .rodata (text) section 

char* str = strdup("Hello World"); 
str[0] = 'A';
 // Changed the value in the allocated address in the heap (strdup is malloc and strcpy) 

char[] str = "Hello World"; 
str[0] = 'A'; 
// Changed the value stored in the stack when the array copied out the string. 
```

## x86 
### Registers 

### Calling Convention
- Refer to the [slides](https://docs.google.com/presentation/d/13hYwWx5k8vvM7YNS9CsnG3MFW_tNgjTnb0YCqH7xwA4/edit#slide=id.g10f1285bda7_2_163) for mechanical walkthrough

**Keynotes (Chronological order)** 
- Prologue (Caller's)
    - General Purpose Registers (GPRs) values are put into the stack if needed after function call. (Caller's GPRs) 
    - Padding is done **before** parameters pushing of callee's (16-byte alignment).  
    - Similar to RISC-V, we push the parameters of callee's function in the reverse order. 
    - Push return address onto stack so we that we can go back.
- Prologue (Callee's)
    - EBP of Caller's pushed onto stack. 
    - Local variables 
    - Push GPRs of Callee if used during function logic.(Callee's GPRs) 
- Epilogue (Callee's) 
    - Store return value in EAX 
    - After function logic, if GPRs of Callee required, restore. 
    - Pop out Local variables stacks 
    - Restore EBP of caller's. 
    - Jump to the return address stored on the stack. 
- Epilogue (Caller's )
    - Remove parameters 
    - Restore GPRs if needed 

**Calling Convention instructions** 








