## 初回起動時の対応

1. Nestプロジェクトをdockerコンテナ内のカレントディレクトリに作成。
```bash
$ docker compose exec api nest new .
```

2. 以下のコマンドを入力して、サーバーを起動。
```bash
$ docker compose exec api yarn run start:dev
```

3. 下記URLにアクセス   
[localhost:13000](http://localhost:13000/)   
Hello World!と表示されたら、起動成功！

4. ORMのインストール
TypeORMをインストールして、NestJS内でTypeORMを有効化する
```bash
$ docker compose exec api npm install --save @nestjs/typeorm typeorm mysql2
```



### 参考
[Dockerを利用してNestJS＋TypeORM+MySQLの環境構築する](https://zenn.dev/senri/articles/331162304a78e0)

[NestJSを触りながら学ぶ(TodoAPI作成)](https://zenn.dev/kobayashiyabako/articles/nestjs-first)

[NestJS】TODOリストでCRUDの処理を実装](https://zenn.dev/chida/articles/bba2b5346414ed)
---