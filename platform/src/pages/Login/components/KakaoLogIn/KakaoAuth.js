import React, {useEffect} from 'react';
import axios from "axios";
import qs from "qs";

const KaKaoAuth = () => {
    const REST_API_KEY = "91c5c80785e99f0e051063693df83082";
    const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
    const CLIENT_SECRET = "dfbmtT4kmkpQnxRpSarVVx0yecq40p3i";

    const code = new URL(window.location.href).searchParams.get("code");

    const getToken = async () => {
        const payload = qs.stringify({
          grant_type: "authorization_code",
          client_id: REST_API_KEY,
          redirect_uri: REDIRECT_URI,
          code: code,
          client_secret: CLIENT_SECRET,
        });
        
        try {
          // access token 가져오기
          const res = await axios.post(
            "https://kauth.kakao.com/oauth/token",
            payload
          )
            console.log(res.data.access_token)
        }
        catch(err) {
            console.log(err)
        }
    };

    useEffect(() => {
        getToken();
      }, []);
    
    return (
        <div>
            { code }
        </div>
    );
};
export default KaKaoAuth;