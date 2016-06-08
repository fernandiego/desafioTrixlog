# desafioTrixlog

Criar diretivas que encapsulam o comportamento do Leaflet para utilização em aplicações AngularJS.


# ng-leaflet
## Um plugin para o angular usando LeafletJS

### Objetivo principal

Criar diretivas que encapsulam o comportamento do Leaflet para utilização em aplicações AngularJS.

Exemplo:
```xhtml
    <map tile-layer='google'>
        <marker ng-model='position' ng-click='showPointInformation(position)'>
        <polyline ng-model='latLngs' color="#FF00FF"  ng-click='showRouteInformation(latLngs)'></polyline>
    </map>
```

### Arquitetura e design do plugin

- Focar na utilização dos recursos disponibilizados pelo angular
    - Utilizar factories para a construção dos mapas, markers, polylines, etc. do leaflet
    - Utilizar services para fazer a ponte para APIs como google maps, openstreetmaps, bing, etc
    - Utilizar constants e values para a formalização de valores do sistema e evitar "variáveis mágicas"

- Implementar testes nos componentes criados para o plugin

- Utilizar o gerenciador  dependências **Bower**, tanto para controlar as versões do pacote como para declarar o plugin em
si como uma lib disponível via instalação Bower. *(Não é necessário publicá-lo no repositório Bower, basta que seja
possível instalar via bower utilizando o link do github)*

- Compatibilidade com Universal Module Definition (UMD)

- Configurar build (testes e minificação do código) via **Grunt** ou **Gulp**

- Configurar integração contínua utilizando, por exemplo, TravisCI

### Observações finais

Não é necessário implementar **TUDO**, apenas o básico para que o plugin funcione como no exemplo. É claro que
implementar o que foi listado (e coisas a mais) é valioso, mas prenda-se na funcionalidade básica do plugin!
