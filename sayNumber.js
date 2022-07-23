
 const sayNumber = (number)=>{
  
        let units = ['', 'one ', 'two ', 'three ', 'four ', 
                    'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ',
                    'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 
                    'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
        let tens = ['','', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
        let large = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrilion', 'quintillion'];
    
        if(number === 0 ) return 'zero.';
    
        let string = number.toString()
       
    
        //split number into 3 digits array from right to left
        let start = string.length;
        let end;
        let chunks = []
        let chunk
        let done
    
        while(start > 0){
            end = start;
            chunks.push(string.slice((start = Math.max(0, start- 3 )),end));
        }
        //check if the function has enougth string elements
        let chunkSize = chunks.length
        if(chunkSize > large.length){
            return ''
        }
    
        //stringfy each number in chunk
        let words = []
        let word
        let result
        for(let i =0; i< chunkSize; i++){
            chunk = parseInt(chunks[i])
    
          //  console.log(large[i].concat(','))
    
            if(chunk){
                //split into array of individual integers
                indi = chunks[i].split('' ).reverse().map(parseFloat)
                //add 10 if individual value is 1 
                if(indi[1] === 1){
                    indi[0] += 10
                    
                }
                //if chunk not zero and element exists
                if((word = large[i])){
                    if(units[indi[0]] ){
                        words.push( word+',' )
                    }else{
                        words.push( word )
                    }
                   
                }
                
                //add unit word if array item exists
                if((word = units[indi[0]] )){
                    words.push(word)
                
                }
                
                 //add tens if array item exists
                if((word = tens[ indi[1]])){
                    words.push( word )
                   
                }
               // console.log(word.replace(/\s+/g,''))
                
                //add 'and'  string after units or tens
                if( indi[0] || indi[1]){
                    //has hundreds
                    if( indi[2] && ( (i + 1) < chunkSize )  ){
                        words.push('and')
                    }
                    
                }
               
                //add hundreds word if array item exists
                if((word = units[indi[2] ])){
                    words.push( word + 'hundred')
                   
                }
               
            }
          
        }
       
        result = words.reverse().join(' ');
        if(result.length - 1) done = result.concat(".");
        let capStr = done.charAt(0).toUpperCase()+done.slice(1)
        
       // console.log(capStr.replace(/\s/i, '-').trim())
         return capStr.trim();
    }
    
    console.log('sayNumber(7608)=',sayNumber(7608))
    

module.exports = sayNumber