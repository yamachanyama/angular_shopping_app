/** 定数一覧(定数は必ずここに追加！！！！) */
export class CONST {
    /** Rest API関係の定数 */
    public static REST_API  = {
        /** APIのベースURL */
        BASE_URL : 'https://shopping-app-spring-boot.herokuapp.com/api/',
        //BASE_URL : 'http://localhost:8080/api/',
        
        /** Goodle Drive上の画像参照URL */
        GOOGLE_DRIVE_PICTURE_URL : 'https://docs.google.com/uc?export=view&id=',
        /** goodsAPI */
        GOODS_URL : 'goods/',
        /** userAPI */
        USER_URL : 'user/',
        /** reviewAPI */
        REVIEW_URL : 'review/',
        /** JSONPコールバック関数名 */
        JSONP_CALLBACK_NAME : 'JSONP_CALLBACK',
        /** Http Method(GET) */
        HTTP_GET : 'get',
        /** Http Method(POST) */
        HTTP_POST : 'post',
        /** Http Method(PUT) */
        HTTP_PUT : 'put',
        /** Http Method(DELETE) */
        HTTP_DELETE : 'delete',
    }

    /** 正規表現 */
    public static REGEX = {
        /** パスワード */
        PASSWORD : /^[a-z\d]{6,12}$/i,
        /** フリガナ */
        FURIGANA : /[ァ-ヴ]/,
        /** メールアドレス */
        EMAIL : /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        /** 電話番号 */
        TEL : /^[0-9]{11}$/,
    }
}

