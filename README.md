## 피드백

1. upload 파일 이름 한글 금지, KakaoTalk_20241212_173459936 => 이건 좀........

2. 

기존 코드
```js
const Book = new Sequelize(db.database, db.username, db.password, db)
const sequelize = ImageModel(Book, DataTypes);
```

수정 코드
```js
const sequelize = new Sequelize(db.database, db.username, db.password, db)
const Book = ImageModel(sequelize, DataTypes);
```

3. 최초로 `/` 로 이동.

해당 라우트 없음.

의견: /list로 만들었다고 말함.

4. list에 이미지 나열이 아닌, 텍스트 나열

5. 