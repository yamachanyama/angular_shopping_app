/** ユーザ */
export class User {
    //ユーザID
    userId : string;
    //パスワード
    password : string;
    //パスワード(確認用)
    passwordConf : string;
    //名前
    userNm : string;
    //フリガナ
    userFurigana : string;
    //電話番号
    tel : string;
    //メールアドレス
    mail : string;
    //郵便番号
    postalCode : string;
    //住所
    address : string;
    //登録日時
    registDate : Date;
    //更新日時
    updateDate : Date;
}