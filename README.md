# homework
HyperionDev Freelance Code Reviewer 

*Solutions for Section A, B and D please refer to `readme.md`*

## Instruction for section C: coding challenge
### Option 1: Say the Number
#### build in `nodejs`

	To run the program
## 	Install node modules
`npm install`
### JEST is used for running unit tests
`npm test`
this are the test suits used
```javascript
    expect(sayNumber(0)).toBe('zero.')
    expect(sayNumber(11)).toBe('Eleven .')
    expect(sayNumber(14)).toBe('Fourteen .')
    expect(sayNumber(15)).toBe('Fifteen .')
    expect(sayNumber(43)).toBe('Forty three .')
    expect(sayNumber(50)).toBe('Fifty.')
    expect(sayNumber(20000)).toBe('Twenty thousand.')
    expect(sayNumber(1033286)).toBe('One  million, thirty three  thousand, two hundred and eighty six .')
    expect(sayNumber(12000013)).toBe('Twelve  million, thirteen .')
    expect(sayNumber(90376000010012)).toBe('Ninety trillion three hundred and seventy six  billion, ten  thousand, twelve .')

```
### for a quick run
`npm run sayNumber`

### Space complexity
worst case space complexity is `O(n)`
	becuase the input split into chunks of individual values 
	` chunks.push(string.slice((start = Math.max(0, start- 3 )),end));`
	so the `chunks[]` array will take `4*n` bit of space in the computational device
