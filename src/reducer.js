export const initialState = {
    user: null,
    playlists: [],
    spotify:null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item:null,
    // token:'BQDHQXxv4vjwa4CkWGttnepDUt4k4G8ThWcIsohU6zW-1UkmbIPCSZTb8hisXOanS_UrvxbznMChm8qsd7kjsvCL1boEdNh5OcrQCV_s0lfN-2KmLoOrDqVmtEdQmzkn7E_Y6gCnT554wC9qx67JR7tNAsLSjyO6Ci6ywFEj8AL6tfie9C8kjSaNvoKeoU5OntemZxCezU0UXaM0vlRN',
};
const reducer = (state,action) =>{
    //VERY VERY USEFUL FOR DEBUGGING, USE IT
    // console.log(action); 

    //Action has type and [payload]
    switch(action.type){
        case 'SET_USER':
        return {
            ...state, //IMPORTANT HAI YE 
            user: action.user,
        };
        case "SET_PLAYING":
        return {
            ...state,
            playing: action.playing,
        };
        case "SET_ITEM":
        return {
            ...state,
            item: action.item,
        };
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists,
            };
        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            };
        default:
            return state;
    }
};              

export default reducer;
