# module exports POC

app이 아닌 각 패키지에 다음과 같은 exports 설정

```json
{
  "exports": {
    "development": "./src/index.ts",
    "production": "./dist/index.js"
  },
}
```
## 실험순서

```shell
yarn

# 모든 패키지 빌드후 app-1도 빌드
turbo run build --filter=app-1

# 각 패키지의 dist를 전부 삭제
rmdir packages/calculator/dist packages/date-formatter/dist packages/domain-date-formatter/dist
yarn dev # 했는데도 dev가 된다!
```

## 추후

이런것도 되나?

```json
{
  "exports": {
    "development": {
      "default": "./src/index.ts",
      "./some-path": "./src/some-path/index.ts",
    },
    "production": {
      "default": "./dist/index.js",
      "./some-path": "./src/some-path/index.js",
    },
  },
}
```
