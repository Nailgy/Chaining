'use strict';

const text = (s = '',i = 0, o = {
  line: (a) => (s +=  '\n' + a, o),
  //index: 0,
  [Symbol.iterator]: () => ({
    next() {  
      this.sToArray = s.split('\n');
      const res = { value: this.sToArray[i], done: this.finished }
      i++;
      if(i === this.sToArray.length){
        this.finished = true;
      }
      return res;
    }
  })
}) => o;

// Usage

const txt = text('line1')
  .line('line2')
  .line('line3')
  .line('line4');

console.log(...txt);
