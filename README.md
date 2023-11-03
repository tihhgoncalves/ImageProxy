<p align="center">
  <img src="https://media.tenor.com/GVbLnw73qD8AAAAi/dancing-duck-karlo.gif" width="150" alt="ImageProxy">
</p>

# ImageProxy

O ImageProxy é um servidor de proxy de imagens leve que permite carregar imagens com segurança em seu site, ocultando URLs HTTP inseguras. Ele ajuda a manter a integridade e a segurança das imagens em seu site HTTPS.

[![Versão Mais Recente](https://img.shields.io/github/release/tihhgoncalves/imageproxy.svg?style=flat)]()
[![Último Commit](https://img.shields.io/github/last-commit/tihhgoncalves/imageproxy.svg?style=flat)]()
[![Downloads Totais](https://img.shields.io/github/downloads/tihhgoncalves/imageproxy/total.svg?style=flat)]()
[![Contribuidores do GitHub](https://img.shields.io/github/contributors/tihhgoncalves/imageproxy.svg?style=flat)]()
[![Licença MIT](https://img.shields.io/badge/Licença-MIT-yellow.svg)](https://opensource.org/licenses/)


## Como Usar

Para utilizar o ImageProxy, basta você adicionar um prefixo antes das suas imagens como no exemplo a seguir:

```html
<img src="https://image-proxy.rocket.srv.br?url=http://pudim.com.br/pudim.jpg">
```

⚠️ **Aviso Importante** ⚠️

Se a URL da imagem contiver caracteres especiais, como "&" ou "#", é necessário realizar a codificação de URL antes de incluí-la nas solicitações ao servidor proxy. URLs malformadas podem causar erros ou resultados inesperados.

Para codificar uma URL, você pode usar uma função JavaScript, como `encodeURIComponent()`, para garantir que a URL seja formatada corretamente. 

Exemplo em JavaScript:
```javascript
const imageUrl = "http://example.com/image.jpg?param1=value1&param2=value2";
const encodedUrl = encodeURIComponent(imageUrl);
```


Exemplo em PHP:
```php
$imageUrl = "http://example.com/image.jpg?param1=value1&param2=value2";
$encodedUrl = urlencode($imageUrl);
```

 > ⚠️ Caso a URL enviada já seja uma HTTPS, o script simplesmente irá redirecionar sem nenhum processamento. Assim, garantirá melhor desempenho na resposta, além de que você não precisará verificar antes de enviar as imagens se elas realmente são HTTP.

## Configuração

- `url`: URL da imagem a ser protegida com segurança.

> 💡 **Dica:** A configuração `url` é obrigatória, enquanto as outras são opcionais para personalizar ainda mais sua experiência.

## Mantenedor

Este projeto é orgulhosamente mantido pela **[Rocket Produtora Digital](https://www.produtorarocket.com)**.

## Contribuições

Nossa liga de super coders está sempre pronta para ação! 💥

- @tihhgoncalves 🚀 (O Mestre Jedi dos Códigos)

 > Contribuições são sempre bem-vindas! Sinta-se à vontade para contribuir com melhorias no código, documentação ou funcionalidades.

## Autor

Este projeto foi criado por **[Tihh Gonçalves](https://github.com/tihhgoncalves)**.

[![Github](https://img.shields.io/badge/GitHub-181717.svg?style=for-the-badge&logo=GitHub&logoColor=white)](https://github.com/tihhgoncalves)

[![Telegram](https://img.shields.io/badge/Telegram-26A5E4.svg?style=for-the-badge&logo=Telegram&logoColor=white)](https://t.me/seutelegram)

## Suporte

Para relatar bugs ou solicitar novas funcionalidades, por favor, abra uma [issue](https://github.com/tihhgoncalves/imageproxy/issues) no GitHub. Sua contribuição é muito apreciada!

## Versões

Acompanhe as atualizações e melhorias do ImageProxy.

> 💡 **Dica:** Para ver a lista completa de mudanças, visite a [página de versões](https://github.com/tihhgoncalves/imageproxy/releases).

### 1.0.0

#### Lançamento Inicial

- Lançamento do ImageProxy com funcionalidade básica para carregar imagens com segurança em páginas da web.