
export const authEndpoint="https://accounts.spotify.com/authorize";

const redirectUri="https://spotify-clone-803f7.web.app/";
const clientId="8a8fe53bdadb4f4cb2acdd4f13fd94ef"; //spotify developers dashboard

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item) => {  //IMPORTANT HAI READ MAARO
        let parts=item.split('=');
        initial[parts[0]]=decodeURIComponent(parts[1]);
        return initial;
    }, {});
}

const scopes=[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const loginUrl=`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
//% is ascii symbol for space