function shuffleMusicas(musicasTocadas) {
    const mudarPosicao = (arr =>{
      const go = ((arr , result) =>{
      if(arr.length === 0){
        return result
      }else{
        const min = Math.min(...arr)
        const max = Math.max(...arr)
        const minMax = min !== max ? [max,min]:[max]
        return go(arr.filter(x => x !== min && x !== max), [...result, ...minMax])
      }})
      return go(arr,[])
    })
 
   
   
   
   return mudarPosicao(musicasTocadas)
   
   
   
   
   /*  function mudarPosicao(arr,from,to){
      if(arr.length !=0 ){
      arr.splice(to,0, arr.splice(from, 1)[0])
      return arr
      }else if(arr.length > 4){
        return 1
      }else{
        return []
      }
      
    } 

  return  mudarPosicao(musicasTocadas,0,1)//musicas*/
     
}

console.log(shuffleMusicas( [2, 10, 5, 3]))