function getShiftedString(s, leftShifts, rightShifts) {
    let out = s.split('');
    const len = out.length;
    const direction = Math.abs((rightShifts - leftShifts) % len);
    
    if(direction < 0){
        for(let i = 0; i < direction; i++) {
            out = [...out ,out[0]];
            out.shift();
        }
    } 
    if(direction > 0) {
        for(let i = 0; i < direction; i++) {
            out = [out[len-1],...out];
            out.pop();
        }   
    }
    return out.join('');
}

console.log(getShiftedString('abcdef',2,0));