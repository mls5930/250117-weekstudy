const express = require("express")
const app = express()
const nunjucks = require("nunjucks");
const { Book, sequelize } = require('./model');
const multerUpload = require('./file.middleware')

app.use(express.urlencoded({extended: true}));
app.use(express.static('uploads'));

app.set('view engine', 'html');

nunjucks.configure("views", {
    express: app
})


app.get('/list', async (req, res) => {
    const fileall = await sequelize.findAll()
    res.render('./index.html',{
        fileall
    });
    // 데이터 베이스에서 전체 목록 가져오기
    // index.html 페이지 응답 내보내고 전체 목록 값 같이 보내기
});

app.get('/uploads/:filename', async (req, res) => {
    const filename = req.params.filename
    const viewimage = await sequelize.findOne({where:{filename :`${filename}`}})
    console.log(viewimage);
    res.render('./view.html',{
        viewimage
    })
    // view.html 응답 보내세요.
});

app.post('/upload', multerUpload.single('file'), async (req, res) => {
    const {filename ,path} = req.file
    await sequelize.create({filename:filename, path:path})
    res.redirect(`/uploads/${filename}`)
    // req.file로 filename, path 꺼냄.
    // 파일 정보를 데이터베이스에 저장.
    // 루트로 리다이텍트
});


app.listen(3000, async() =>{
    await Book.sync({force :true})
    console.log("서버확인");

})