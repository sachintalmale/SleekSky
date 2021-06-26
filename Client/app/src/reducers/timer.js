const initialState = '';
const changeTime = (state = initialState, action)=>{
    switch(action.type){
    case 'INCOUNT' : return state +'  You Clicked at '+ new Date().toLocaleTimeString('en-US',{hour12:false});
    default: return state;
    }
}
export default changeTime;