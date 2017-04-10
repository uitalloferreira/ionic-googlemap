
# ionic-googlemap
Exemplo Google Maps IONIC-v1

### Instalação

Instale as dependências para inciar:

```sh
$ cd ionic-googlemap
$ npm install
```

### Plugins

Instalação dos plugins do Apache Cordova

```sh
$ ionic state restore
```
### Google Maps API

Insira no index.html sua  [api key](https://console.developers.google.com/apis/) do google maps

```sh
$     <script src="http://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&amp;sensor=false"></script>

```

### Desenvolvimento

start server:
```sh
$ ionic serve
```

Run :
```sh
$ ionic run <platform>
```

#### Building
Para produção:
```sh
$ cordova build --release <platform>
```
Siga todos passos de assinatura do APK em [Ionic Publish](https://ionicframework.com/docs/guide/publishing.html)
