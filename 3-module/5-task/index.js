function getMinMax(str) {
  let arrNum = str
              .split(' ')    
              .map(item => +item )
              .filter(item => !(item !== item));
  return {
    min: Math.min( ...arrNum ),
    max: Math.max( ...arrNum )
  }
}
